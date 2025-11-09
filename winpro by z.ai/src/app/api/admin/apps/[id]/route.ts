import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const data = await request.json()

    const app = await db.app.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date()
      }
    })

    return NextResponse.json({
      success: true,
      app,
      message: 'App updated successfully'
    })
  } catch (error) {
    console.error('App update error:', error)
    return NextResponse.json({ error: 'Failed to update app' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    await db.app.delete({
      where: { id }
    })

    return NextResponse.json({
      success: true,
      message: 'App deleted successfully'
    })
  } catch (error) {
    console.error('App delete error:', error)
    return NextResponse.json({ error: 'Failed to delete app' }, { status: 500 })
  }
}