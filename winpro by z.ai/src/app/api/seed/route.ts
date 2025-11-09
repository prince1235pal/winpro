import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'

export async function POST() {
  try {
    // Create admin user with provided credentials
    const hashedPassword = await bcrypt.hash('winproownerrittik@0.1', 10)
    
    const admin = await db.admin.upsert({
      where: { username: 'winprorittik' },
      update: {
        password: hashedPassword,
        name: 'WinPro Admin',
        email: 'admin@winproofficial.com'
      },
      create: {
        username: 'winprorittik',
        password: hashedPassword,
        name: 'WinPro Admin',
        email: 'admin@winproofficial.com'
      }
    })

    // Create sample social links
    await db.socialLink.upsert({
      where: { platform: 'youtube' },
      update: {
        url: 'https://youtube.com/@winprotournaments',
        isActive: true,
        order: 1
      },
      create: {
        platform: 'youtube',
        url: 'https://youtube.com/@winprotournaments',
        isActive: true,
        order: 1
      }
    })

    await db.socialLink.upsert({
      where: { platform: 'instagram' },
      update: {
        url: 'https://instagram.com/winprotournaments',
        isActive: true,
        order: 2
      },
      create: {
        platform: 'instagram',
        url: 'https://instagram.com/winprotournaments',
        isActive: true,
        order: 2
      }
    })

    await db.socialLink.upsert({
      where: { platform: 'discord' },
      update: {
        url: 'https://discord.gg/winprotournaments',
        isActive: true,
        order: 3
      },
      create: {
        platform: 'discord',
        url: 'https://discord.gg/winprotournaments',
        isActive: true,
        order: 3
      }
    })

    // Create sample tournaments
    await db.tournament.upsert({
      where: { id: 'weekend-championship' },
      update: {},
      create: {
        id: 'weekend-championship',
        title: 'Weekend Championship',
        description: 'The biggest weekend Free Fire tournament with amazing prizes!',
        game: 'Free Fire',
        prize: '₹50,000',
        maxPlayers: 100,
        currentPlayers: 67,
        startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
        endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        status: 'upcoming',
        rules: 'Standard Free Fire tournament rules. No cheating allowed. Squad format.',
        isActive: true
      }
    })

    await db.tournament.upsert({
      where: { id: 'solo-masters' },
      update: {},
      create: {
        id: 'solo-masters',
        title: 'Solo Masters Tournament',
        description: 'Test your solo skills in this intense 1v1 tournament.',
        game: 'Free Fire',
        prize: '₹25,000',
        maxPlayers: 50,
        currentPlayers: 23,
        startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        endDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // 6 days from now
        status: 'upcoming',
        rules: 'Solo mode only. No teaming allowed. Last standing wins.',
        isActive: true
      }
    })

    await db.tournament.upsert({
      where: { id: 'squad-showdown' },
      update: {},
      create: {
        id: 'squad-showdown',
        title: 'Squad Showdown',
        description: 'Gather your best squad and compete for the ultimate prize!',
        game: 'Free Fire',
        prize: '₹75,000',
        maxPlayers: 80,
        currentPlayers: 45,
        startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        endDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000), // 8 days from now
        status: 'upcoming',
        rules: '4-player squads. Team coordination is key to victory.',
        isActive: true
      }
    })

    // Create sample tournament app
    await db.app.upsert({
      where: { id: 'winpro-tournament-app' },
      update: {},
      create: {
        id: 'winpro-tournament-app',
        name: 'WinPro Tournament App',
        version: '2.1.0',
        size: '25.4MB',
        description: 'The official Free Fire tournament app for registering, managing teams, and tracking rankings.',
        category: 'Tournament',
        filePath: '/uploads/winpro-tournament-app.apk',
        fileName: 'winpro-tournament-app-v2.1.0.apk',
        featured: true,
        isActive: true
      }
    })

    return Response.json({
      success: true,
      message: 'Database seeded successfully with tournament data',
      admin: {
        username: admin.username,
        name: admin.name,
        email: admin.email
      },
      tournaments: 3,
      apps: 1,
      socialLinks: 3
    })
  } catch (error) {
    console.error('Seeding error:', error)
    return Response.json({ error: 'Failed to seed database' }, { status: 500 })
  }
}