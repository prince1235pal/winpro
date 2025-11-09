import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('admin_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'No session found' }, { status: 401 })
    }

    // Simple token validation (in production, use JWT)
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    const [adminId] = decoded.split(':')

    if (!adminId) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const admin = await db.admin.findUnique({
      where: { id: adminId },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        role: true,
        createdAt: true
      }
    })

    if (!admin) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 401 })
    }

    return NextResponse.json({
      success: true,
      admin
    })
  } catch (error) {
    console.error('Auth check error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}