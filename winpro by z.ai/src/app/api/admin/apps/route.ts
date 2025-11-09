import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const apps = await db.app.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { downloadRecords: true }
        }
      }
    })

    return NextResponse.json({
      success: true,
      apps: apps.map(app => ({
        ...app,
        downloadCount: app._count.downloadRecords
      }))
    })
  } catch (error) {
    console.error('Apps fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch apps' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const version = formData.get('version') as string
    const size = formData.get('size') as string
    const description = formData.get('description') as string
    const category = formData.get('category') as string
    const file = formData.get('file') as File
    const featured = formData.get('featured') === 'true'

    if (!name || !version || !description || !category || !file) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Save file to uploads directory
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const fileName = `${Date.now()}-${file.name}`
    const filePath = `/uploads/${fileName}`
    
    // Save to public/uploads directory
    const uploadsDir = join(process.cwd(), 'public', 'uploads')
    
    try {
      await mkdir(uploadsDir, { recursive: true })
    } catch (error) {
      // Directory might already exist
    }
    
    await writeFile(join(uploadsDir, fileName), buffer)

    const app = await db.app.create({
      data: {
        name,
        version,
        size: size || `${(file.size / (1024 * 1024)).toFixed(1)}MB`,
        description,
        category,
        filePath,
        fileName,
        featured
      }
    })

    return NextResponse.json({
      success: true,
      app,
      message: 'App uploaded successfully'
    })
  } catch (error) {
    console.error('App upload error:', error)
    return NextResponse.json({ error: 'Failed to upload app' }, { status: 500 })
  }
}