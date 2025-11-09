import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return Response.json({ error: 'Username and password are required' }, { status: 400 })
    }

    // Find admin user
    const admin = await db.admin.findUnique({
      where: { username }
    })

    if (!admin) {
      return Response.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, admin.password)
    if (!isValidPassword) {
      return Response.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Create session token (simple implementation)
    const token = Buffer.from(`${admin.id}:${Date.now()}`).toString('base64')

    // Set session cookie
    const response = Response.json({
      success: true,
      admin: {
        id: admin.id,
        username: admin.username,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    })

    response.headers.set('Set-Cookie', `admin_token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`)

    return response
  } catch (error) {
    console.error('Login error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}