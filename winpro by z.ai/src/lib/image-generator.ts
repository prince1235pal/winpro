import ZAI from 'z-ai-web-dev-sdk'
import { writeFileSync } from 'fs'
import { join } from 'path'

export async function generateAppImages() {
  try {
    const zai = await ZAI.create()
    
    // Generate phone mockup
    const mockupResponse = await zai.images.generations.create({
      prompt: 'A professional smartphone mockup displaying a modern productivity app interface with clean design, blue and white color scheme, showing dashboard with analytics and features',
      size: '1024x1024'
    })
    
    if (mockupResponse.data && mockupResponse.data[0]?.base64) {
      const mockupBuffer = Buffer.from(mockupResponse.data[0].base64, 'base64')
      writeFileSync(join(process.cwd(), 'public', 'images', 'phone-mockup.png'), mockupBuffer)
      console.log('Phone mockup generated successfully')
    }
    
    // Generate app icon
    const iconResponse = await zai.images.generations.create({
      prompt: 'Modern app icon for productivity app called WinPro, blue gradient, minimalist design, suitable for Android app store',
      size: '512x512'
    })
    
    if (iconResponse.data && iconResponse.data[0]?.base64) {
      const iconBuffer = Buffer.from(iconResponse.data[0].base64, 'base64')
      writeFileSync(join(process.cwd(), 'public', 'images', 'app-icon.png'), iconBuffer)
      console.log('App icon generated successfully')
    }
    
  } catch (error) {
    console.error('Image generation failed:', error)
  }
}