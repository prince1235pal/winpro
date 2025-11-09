'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { 
  Download, 
  Shield, 
  Smartphone, 
  Trophy, 
  Star, 
  Zap, 
  Users, 
  BarChart3, 
  Flame, 
  Target, 
  Sword,
  Crown,
  Gamepad2,
  Medal,
  TrendingUp,
  Play,
  ChevronRight,
  Sparkles,
  Gift,
  Timer,
  Award,
  ExternalLink,
  Calendar,
  MapPin,
  Users2,
  List,
  Video,
  Settings,
  Globe
} from 'lucide-react'

export default function FreeFireLanding() {
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const [featuredApp, setFeaturedApp] = useState<any>(null)
  const [tournaments, setTournaments] = useState<any[]>([])
  const [socialLinks, setSocialLinks] = useState<any[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [appsRes, tournamentsRes, socialRes] = await Promise.all([
        fetch('/api/admin/apps'),
        fetch('/api/admin/tournaments'),
        fetch('/api/admin/social-links')
      ])

      const appsData = await appsRes.json()
      const tournamentsData = await tournamentsRes.json()
      const socialData = await socialRes.json()

      if (appsData.success) {
        const featured = appsData.apps.find((app: any) => app.featured)
        setFeaturedApp(featured || appsData.apps[0])
      }
      if (tournamentsData.success) setTournaments(tournamentsData.tournaments)
      if (socialData.success) setSocialLinks(socialData.socialLinks)
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }

  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-orange-500" />,
      title: "Tournament Registration",
      description: "Easy registration for upcoming Free Fire tournaments",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Team Management",
      description: "Create and manage your tournament teams",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <List className="w-8 h-8 text-yellow-500" />,
      title: "Live Leaderboard",
      description: "Real-time rankings and tournament standings",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-500" />,
      title: "Match Scheduling",
      description: "Never miss a match with smart notifications",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Gift className="w-8 h-8 text-blue-500" />,
      title: "Prize Tracking",
      description: "Track your winnings and tournament rewards",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Video className="w-8 h-8 text-red-500" />,
      title: "Live Streaming",
      description: "Watch live tournament matches and highlights",
      gradient: "from-red-500 to-orange-500"
    }
  ]

  const screenshots = [
    { id: 1, title: "Tournament Hub", description: "Browse and join tournaments" },
    { id: 2, title: "Team Formation", description: "Create your tournament team" },
    { id: 3, title: "Live Matches", description: "Follow ongoing tournaments" },
    { id: 4, title: "Leaderboard", description: "View rankings and standings" },
    { id: 5, title: "Prize Dashboard", description: "Track your winnings" }
  ]

  const stats = [
    { number: "500K+", label: "Active Players", icon: <Users className="w-5 h-5" /> },
    { number: "4.9", label: "App Rating", icon: <Star className="w-5 h-5" /> },
    { number: "100+", label: "Monthly Tournaments", icon: <Trophy className="w-5 h-5" /> },
    { number: "₹50L+", label: "Prize Pool", icon: <Gift className="w-5 h-5" /> }
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Tournament Champion",
      content: "Best tournament app! Won 3 tournaments this month. The registration process is so smooth!",
      rating: 5,
      avatar: "👨‍🎮"
    },
    {
      name: "Priya Sharma",
      role: "Team Captain",
      content: "Team management features are amazing. Coordinating with my squad has never been easier!",
      rating: 5,
      avatar: "👩‍🎮"
    },
    {
      name: "Amit Verma",
      role: "Content Creator",
      content: "I use this app to track all Free Fire tournaments. The live leaderboard feature is incredible!",
      rating: 5,
      avatar: "👨‍💻"
    }
  ]

  const handleDownload = async () => {
    if (!featuredApp) {
      alert('No app available for download')
      return
    }

    setIsDownloading(true)
    setDownloadProgress(0)
    
    // Track download
    try {
      await fetch('/api/download', { method: 'POST' })
    } catch (error) {
      console.error('Download tracking failed:', error)
    }

    // Simulate download progress
    const progressInterval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setIsDownloading(false)
            // Trigger actual download
            window.open(`/uploads/${featuredApp.fileName}`, '_blank')
          }, 500)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className="w-1 h-1 bg-orange-400 rounded-full opacity-50"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 px-4 py-2 rounded-full mb-8 animate-bounce">
            <Flame className="w-4 h-4" />
            <span className="text-sm font-semibold">🔥 #1 FREE FIRE TOURNAMENT APP</span>
            <Flame className="w-4 h-4" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
            WINPRO
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-300">
            Ultimate <span className="text-orange-400">Free Fire</span> Tournament Platform
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join exciting tournaments, create teams, track rankings, and win amazing prizes. 
            The complete tournament management platform for Free Fire players.
          </p>

          {/* Download Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              onClick={handleDownload}
              disabled={isDownloading || !featuredApp}
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50"
            >
              {isDownloading ? (
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Downloading... {downloadProgress}%</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Download className="w-6 h-6" />
                  <span>Download {featuredApp?.name || 'WinPro'}</span>
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </Button>
            
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-2">Version {featuredApp?.version || '2.1.0'}</div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{featuredApp?.size || '25.4MB'}</span>
                <span>•</span>
                <span>Android 7.0+</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Official App</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          {isDownloading && (
            <div className="max-w-md mx-auto mb-8">
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${downloadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-orange-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Phone Mockup */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <div className="w-80 h-96 bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-2 transform rotate-6 hover:rotate-3 transition-transform duration-300">
              <div className="bg-black rounded-2xl h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">WinPro</h3>
                  <p className="text-gray-400 text-sm">Tournament Platform</p>
                  <div className="mt-6 space-y-2">
                    <div className="bg-orange-900/50 rounded-lg p-2 text-xs text-orange-300">✓ Tournaments</div>
                    <div className="bg-green-900/50 rounded-lg p-2 text-xs text-green-300">✓ Teams</div>
                    <div className="bg-purple-900/50 rounded-lg p-2 text-xs text-purple-300">✓ Prizes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              TOURNAMENT FEATURES
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to dominate the tournament scene
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                <CardContent className="p-8">
                  <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} inline-block group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              UPCOMING TOURNAMENTS
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join exciting tournaments and win amazing prizes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((tournament) => (
              <Card key={tournament.id} className="bg-gray-900/50 border-orange-500/30 hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                    <Badge className={tournament.status === 'live' ? 'bg-red-600' : 'bg-orange-600'}>
                      {tournament.status}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tournament.title}</h3>
                  <p className="text-gray-400 mb-4">{tournament.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Prize Pool:</span>
                      <span className="text-yellow-400 font-bold">{tournament.prize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Players:</span>
                      <span className="text-orange-400">{tournament.currentPlayers}/{tournament.maxPlayers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Start Date:</span>
                      <span className="text-white">{new Date(tournament.startDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              APP PREVIEW
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See the tournament features in action
            </p>
          </div>
          
          <div className="relative">
            <div className="flex justify-center items-center gap-8">
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => setActiveScreenshot(Math.max(0, activeScreenshot - 1))}
                className="text-gray-400 hover:text-white"
              >
                <ChevronRight className="w-6 h-6 rotate-180" />
              </Button>
              
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-4 border border-gray-700 shadow-2xl">
                  <div className="bg-black rounded-2xl h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <Smartphone className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {screenshots[activeScreenshot].title}
                      </h3>
                      <p className="text-gray-400">
                        {screenshots[activeScreenshot].description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur-3xl opacity-20"></div>
              </div>
              
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => setActiveScreenshot(Math.min(screenshots.length - 1, activeScreenshot + 1))}
                className="text-gray-400 hover:text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="flex justify-center gap-2 mt-8">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreenshot(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeScreenshot ? 'bg-orange-500 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              PLAYER REVIEWS
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See what tournament players are saying about WinPro
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              CONNECT WITH US
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our community for tournament updates and support
            </p>
          </div>
          
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border-gray-800 hover:border-orange-500/50 transition-all duration-300 p-6 rounded-2xl hover:scale-110"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-orange-500" />
                  <span className="text-lg font-bold text-white capitalize">{link.platform}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              READY TO COMPETE?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 500K+ players who are already winning tournaments with WinPro
            </p>
            <Button 
              onClick={handleDownload}
              disabled={isDownloading || !featuredApp}
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 px-12 py-6 text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50"
            >
              {isDownloading ? (
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-3 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
                  <span>Downloading...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Download className="w-6 h-6" />
                  <span>Download Now</span>
                  <Trophy className="w-5 h-5" />
                </div>
              )}
            </Button>
            <div className="mt-6 text-sm text-orange-200">
              Version {featuredApp?.version || '2.1.0'} | {featuredApp?.size || '25.4MB'} | Official Tournament App
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black text-white">WinPro</span>
              </div>
              <p className="text-gray-400">
                The #1 Free Fire tournament platform for competitive gaming.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Tournaments</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Team Management</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Live Leaderboard</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Prize Tracking</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Tournament Rules</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Tournament Guidelines</a></li>
                <li><a href="/admin/login" className="hover:text-orange-400 transition-colors">Admin</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 WinProOfficial. All Rights Reserved.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Official Platform</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">500K+ Players</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}