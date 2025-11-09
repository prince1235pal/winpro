import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const tournaments = await db.tournament.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { participants: true }
        }
      }
    })

    return NextResponse.json({
      success: true,
      tournaments: tournaments.map(tournament => ({
        ...tournament,
        participantCount: tournament._count.participants
      }))
    })
  } catch (error) {
    console.error('Tournaments fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch tournaments' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const tournament = await db.tournament.create({
      data: {
        ...data,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate)
      }
    })

    return NextResponse.json({
      success: true,
      tournament,
      message: 'Tournament created successfully'
    })
  } catch (error) {
    console.error('Tournament creation error:', error)
    return NextResponse.json({ error: 'Failed to create tournament' }, { status: 500 })
  }
}