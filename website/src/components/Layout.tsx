import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  FileText, 
  Code, 
  Calendar, 
  Target, 
  Database, 
  Sun,
  Moon,
  Home,
  GraduationCap,
  TrendingUp,
  Building2,
  UserPlus,
  MessageCircle
} from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const navigation = [
    { name: 'Home', href: '/', icon: Home, shortName: 'Home' },
    { name: 'Product Requirements', href: '/prd', icon: FileText, shortName: 'PRD' },
    { name: 'Technical Architecture', href: '/technical-architecture', icon: Code, shortName: 'Tech' },
    { name: 'Implementation Roadmap', href: '/implementation-roadmap', icon: Calendar, shortName: 'Roadmap' },
    { name: 'Startup Strategy', href: '/startup-strategy', icon: TrendingUp, shortName: 'Strategy' },
    { name: 'College Outreach', href: '/college-outreach', icon: GraduationCap, shortName: 'Outreach' },
    { name: 'Resource Team', href: '/resource-team', icon: Target, shortName: 'Resources' },
    { name: 'Non-Technical Team', href: '/non-technical-team', icon: Building2, shortName: 'Non-Tech' },
    { name: 'Backend Architecture', href: '/backend-architecture', icon: Database, shortName: 'Backend' },
    { name: 'Join Team', href: '/join-team', icon: UserPlus, shortName: 'Join' },
    { name: 'Contact Me', href: '/contact', icon: MessageCircle, shortName: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-secondary-950 transition-colors duration-300 overflow-x-hidden">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-secondary-900/80 backdrop-blur-lg shadow-soft dark:shadow-strong border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'bg-white dark:bg-secondary-900 shadow-sm border-b border-gray-200 dark:border-gray-700'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/logo.jpg" 
                  alt="freetochat logo" 
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-xl object-cover shadow-medium group-hover:shadow-strong transition-all duration-300 group-hover:scale-105 block"
                  style={{ display: 'block !important' }}
                />
              </div>
              <div>
                <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-gray-900 via-primary-700 to-accent-600 dark:from-gray-100 dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                  freetochat
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 justify-end max-w-none">
              <div className="flex items-center space-x-2 max-w-full overflow-hidden bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl px-3 py-2 border border-gray-200/50 dark:border-gray-700/50">
                <nav className="flex space-x-1 flex-shrink min-w-0">
                  {navigation.map((item) => {
                    const Icon = item.icon
                    const active = isActive(item.href)
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`group relative flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex-shrink-0 ${
                          active
                            ? 'bg-gradient-to-r from-primary-500/10 to-accent-500/10 dark:from-primary-400/20 dark:to-accent-400/20 text-primary-600 dark:text-primary-400 shadow-sm border border-primary-200/50 dark:border-primary-700/50'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-gray-800/60 hover:shadow-sm'
                        }`}
                      >
                        <Icon className={`w-4 h-4 transition-all duration-300 ${
                          active ? 'scale-110 text-primary-600 dark:text-primary-400' : 'group-hover:scale-105 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                        }`} />
                        <span className="whitespace-nowrap text-sm hidden xl:inline font-medium">{item.shortName}</span>
                        {active && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                        )}
                      </Link>
                    )
                  })}
                </nav>
                
                {/* Theme Toggle */}
                <div className="ml-3 pl-3 border-l border-gray-200/60 dark:border-gray-700/60 flex-shrink-0">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-gray-800/60 hover:shadow-sm transition-all duration-300 group"
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    ) : (
                      <Moon className="w-5 h-5 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 animate-fade-in"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <div className="lg:hidden fixed top-16 left-0 right-0 bg-white dark:bg-secondary-900 border-t border-gray-200 dark:border-gray-700 shadow-strong z-50 animate-slide-down">
              <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {navigation.map((item, index) => {
                  const Icon = item.icon
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group flex items-center space-x-4 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 animate-slide-up ${
                        active
                          ? 'bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 shadow-soft'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className={`p-2 rounded-lg ${
                        active 
                          ? 'bg-primary-200 dark:bg-primary-800/50' 
                          : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700'
                      } transition-colors duration-200`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {item.href === '/' ? 'Project Overview' :
                           item.href === '/prd' ? 'Features & Requirements' :
                           item.href === '/technical-architecture' ? 'System Design' :
                           item.href === '/implementation-roadmap' ? '24-Week Plan' :
                           item.href === '/startup-strategy' ? 'Business Strategy' :
                           item.href === '/college-outreach' ? 'Recruitment Materials' :
                           item.href === '/resource-team' ? 'Resource Acquisition' :
                           item.href === '/non-technical-team' ? 'Business Development' :
                           item.href === '/backend-architecture' ? 'Database Architecture' :
                           item.href === '/join-team' ? 'Join Our Team' :
                           item.href === '/contact' ? 'Get In Touch' :
                           'Navigation'}
                        </div>
                      </div>
                      {active && (
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </header>

      {/* Main Content */}
      <main className="relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 w-full">
          <div className="animate-fade-in">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-white dark:bg-secondary-900 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 via-transparent to-accent-50/50 dark:from-primary-950/20 dark:via-transparent dark:to-accent-950/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-6">
            {/* Logo and Title */}
            <div className="flex items-center justify-center space-x-3">
              <img 
                src="/logo.jpg" 
                alt="freetochat logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                freetochat
              </span>
            </div>
            
            {/* Mission Statement */}
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                Built with <span className="text-red-500 animate-pulse">❤️</span> by students, for students
              </p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
                Making AI accessible to every student in India, regardless of their financial background.
                Empowering the next generation of innovators with cutting-edge technology.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">₹5L+</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">Monthly Target</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">24</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">Week Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">₹0</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">Initial Budget</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">25+</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">Team Members</div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-500">
                &copy; 2025 freetochat. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout