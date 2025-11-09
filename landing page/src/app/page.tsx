'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Download, Trophy, Shield, Clock, Headphones, Smartphone, Gamepad2, Wallet, Star, MessageCircle, Send, Menu, X, Check, Zap, Users, TrendingUp } from 'lucide-react';

export default function WinProLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "How to register on WinPro?",
      answer: "Download the APK, install the app, open it and click on Register. Fill in your details, verify your email/phone, and you're ready to join tournaments!"
    },
    {
      question: "Is WinPro safe to use?",
      answer: "Yes! WinPro uses industry-standard encryption and security measures. All transactions and user data are protected with advanced security protocols."
    },
    {
      question: "How to withdraw earnings?",
      answer: "Go to Wallet section, enter the amount you want to withdraw, select your payment method (UPI, Paytm, Bank Transfer), and confirm. Withdrawals are processed instantly!"
    },
    {
      question: "What devices support WinPro?",
      answer: "WinPro supports all Android devices running Android 5.0 and above with minimum 2GB RAM for optimal gaming experience."
    },
    {
      question: "Are the tournaments real?",
      answer: "Absolutely! All tournaments on WinPro are real with real players and real cash prizes. We host thousands of tournaments daily."
    }
  ];

  const features = [
    {
      icon: Trophy,
      title: "Daily Free Fire Tournaments",
      description: "Join multiple tournaments every day with varying entry fees and prize pools"
    },
    {
      icon: Zap,
      title: "Instant Withdrawals",
      description: "Get your winnings transferred instantly to your preferred payment method"
    },
    {
      icon: Shield,
      title: "Secure & Trusted Platform",
      description: "100% secure transactions and fair gameplay guaranteed"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries"
    }
  ];

  const steps = [
    {
      icon: Download,
      title: "Download the App",
      description: "Click the download button and install the WinPro APK"
    },
    {
      icon: Users,
      title: "Register & Join",
      description: "Create your account and join your first tournament"
    },
    {
      icon: Gamepad2,
      title: "Play & Earn",
      description: "Compete in Free Fire matches and win real cash prizes"
    },
    {
      icon: Wallet,
      title: "Withdraw Instantly",
      description: "Transfer your winnings to your bank account or UPI"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      rating: 5,
      text: "WinPro is amazing! I've earned over ₹50,000 in just 2 months. The tournaments are fair and payments are instant.",
      avatar: "RS"
    },
    {
      name: "Priya Patel",
      rating: 5,
      text: "Best tournament app for Free Fire! Customer support is very helpful and the interface is super easy to use.",
      avatar: "PP"
    },
    {
      name: "Amit Kumar",
      rating: 5,
      text: "I've tried many tournament apps but WinPro is the most trustworthy. No issues with payments ever!",
      avatar: "AK"
    },
    {
      name: "Sneha Reddy",
      rating: 5,
      text: "The variety of tournaments is impressive. From beginners to pros, there's something for everyone!",
      avatar: "SR"
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-blue-500 border-b-transparent rounded-full animate-spin animation-delay-150"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-green-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">WinPro</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="hover:text-green-500 transition-colors">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="hover:text-green-500 transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-green-500 transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-green-500 transition-colors">FAQ</button>
              <a 
                href="https://ga-fs.primexop.com/11758/androidBuilds/winproV1.apk"
                className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all"
              >
                Download Now
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <button onClick={() => { scrollToSection('features'); setIsMenuOpen(false); }} className="block hover:text-green-500 transition-colors">Features</button>
              <button onClick={() => { scrollToSection('how-it-works'); setIsMenuOpen(false); }} className="block hover:text-green-500 transition-colors">How It Works</button>
              <button onClick={() => { scrollToSection('testimonials'); setIsMenuOpen(false); }} className="block hover:text-green-500 transition-colors">Reviews</button>
              <button onClick={() => { scrollToSection('faq'); setIsMenuOpen(false); }} className="block hover:text-green-500 transition-colors">FAQ</button>
              <a 
                href="https://ga-fs.primexop.com/11758/androidBuilds/winproV1.apk"
                className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all inline-block"
              >
                Download Now
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black to-blue-500/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="mb-8">
            <img 
              src="https://abundant-rose-viw5kjqoru.edgeone.app/WhatsApp%20Image%202025-11-09%20at%2011.11.51_e369c1df.jpg"
              alt="WinPro Logo" 
              className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-2xl shadow-green-500/50 object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 bg-clip-text text-transparent animate-gradient">
            Win Big with WinPro
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-green-400">
            India's #1 Free Fire Tournament App
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Join, Compete & Earn Real Rewards Instantly
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="https://ga-fs.primexop.com/11758/androidBuilds/winproV1.apk"
              className="group bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              🔽 Download Now (APK)
            </a>
            <button 
              onClick={() => scrollToSection('features')}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Trophy className="w-6 h-6 group-hover:animate-bounce" />
              🎮 Join Tournament
            </button>
          </div>

          <div className="animate-bounce mt-8">
            <ChevronDown className="w-8 h-8 mx-auto text-green-500" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Why Choose WinPro?
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Experience the best tournament platform</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Start earning in 4 simple steps</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-blue-500 transform -translate-y-1/2"></div>
                  )}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-400">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            App Preview
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Experience the smooth interface</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
              <div className="relative bg-gray-900 rounded-3xl p-4 border border-green-500/30">
                <div className="bg-black rounded-2xl p-8 h-96 flex items-center justify-center">
                  <Smartphone className="w-24 h-24 text-green-500" />
                </div>
                <p className="text-center mt-4 text-green-400 font-semibold">Easy Interface</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
              <div className="relative bg-gray-900 rounded-3xl p-4 border border-blue-500/30">
                <div className="bg-black rounded-2xl p-8 h-96 flex items-center justify-center">
                  <Gamepad2 className="w-24 h-24 text-blue-500" />
                </div>
                <p className="text-center mt-4 text-blue-400 font-semibold">Smooth Gameplay</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
              <div className="relative bg-gray-900 rounded-3xl p-4 border border-green-500/30">
                <div className="bg-black rounded-2xl p-8 h-96 flex items-center justify-center">
                  <Wallet className="w-24 h-24 text-green-500" />
                </div>
                <p className="text-center mt-4 text-green-400 font-semibold">Instant Withdrawals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            What Players Say
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Join thousands of satisfied gamers</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Got questions? We've got answers</p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-green-500/20 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-green-500/10 transition-colors"
                >
                  <span className="font-semibold text-green-400">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-green-500 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="px-6 py-4 border-t border-green-500/20">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Social Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Stay updated with latest tournaments and rewards</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="#" className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-110">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="bg-gradient-to-r from-pink-500 to-pink-600 p-4 rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-110">
              <Send className="w-6 h-6" />
            </a>
            <a href="#" className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-110">
              <TrendingUp className="w-6 h-6" />
            </a>
            <a href="#" className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-110">
              <Users className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-gray-400 mb-8">Need help? Contact our support team</p>
          <a 
            href="https://ga-fs.primexop.com/11758/androidBuilds/winproV1.apk"
            className="inline-block bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105"
          >
            Download WinPro Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-green-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">WinPro</span>
          </div>
          <p className="text-gray-400 mb-2">© 2025 WinPro. All rights reserved.</p>
          <p className="text-green-400 text-sm">Made for gamers, by gamers 🎮</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-150 {
          animation-delay: 0.15s;
        }
      `}</style>
    </div>
  );
}