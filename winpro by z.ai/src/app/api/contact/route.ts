import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, message, name } = await request.json()
    
    // Validate input
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      )
    }
    
    // In a real implementation, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Create support ticket
    
    console.log(`Contact form submission from ${name} (${email}): ${message}`)
    
    // Mock response
    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will respond within 24 hours.',
      ticketId: `WP-${Date.now()}`
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}