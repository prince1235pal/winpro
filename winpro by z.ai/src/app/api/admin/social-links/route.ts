import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const socialLinks = await db.socialLink.findMany({
      orderBy: { order: 'asc' }
    })

    return NextResponse.json({
      success: true,
      socialLinks
    })
  } catch (error) {
    console.error('Social links fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch social links' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const socialLink = await db.socialLink.create({
      data
    })

    return NextResponse.json({
      success: true,
      socialLink,
      message: 'Social link added successfully'
    })
  } catch (error) {
    console.error('Social link creation error:', error)
    return NextResponse.json({ error: 'Failed to add social link' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data

    const socialLink = await db.socialLink.update({
      where: { id },
      data: updateData
    })

    return NextResponse.json({
      success: true,
      socialLink,
      message: 'Social link updated successfully'
    })
  } catch (error) {
    console.error('Social link update error:', error)
    return NextResponse.json({ error: 'Failed to update social link' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Social link ID is required' }, { status: 400 })
    }

    await db.socialLink.delete({
      where: { id }
    })

    return NextResponse.json({
      success: true,
      message: 'Social link deleted successfully'
    })
  } catch (error) {
    console.error('Social link delete error:', error)
    return NextResponse.json({ error: 'Failed to delete social link' }, { status: 500 })
  }
}