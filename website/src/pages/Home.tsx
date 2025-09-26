import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Target, 
  Users, 
  DollarSign, 
  Code, 
  Calendar, 
  FileText, 
  Database, 
  Sparkles,
  Rocket,
  TrendingUp,
  GraduationCap,
  Building2,
  Zap,
  Star,
  Award,
  Globe,
  Heart,
  CheckCircle,
  BarChart3,
  Clock,
  IndianRupee
} from 'lucide-react'

const Home = () => {
  const documentationSections = [
    {
      title: 'Product Requirements Document',
      description: 'Complete feature specifications, user flows, and technical requirements for freetochat.',
      href: '/prd',
      icon: FileText,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20',
      iconBg: 'bg-blue-500',
      category: 'Planning',
    },
    {
      title: 'Technical Architecture',
      description: 'Full system architecture with React/FastAPI stack, database schemas, and deployment strategy.',
      href: '/technical-architecture',
      icon: Code,
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20',
      iconBg: 'bg-green-500',
      category: 'Technical',
    },
    {
      title: 'Implementation Roadmap',
      description: '24-week detailed roadmap from MVP to ₹5,00,000/month revenue with phase-wise targets.',
      href: '/implementation-roadmap',
      icon: Calendar,
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-100 dark:from-purple-950/20 dark:to-violet-900/20',
      iconBg: 'bg-purple-500',
      category: 'Timeline',
    },
    {
      title: 'Startup Strategy & Funding',
      description: 'Zero-budget development strategy, funding sources, and revenue generation plans.',
      href: '/startup-strategy',
      icon: TrendingUp,
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-100 dark:from-yellow-950/20 dark:to-orange-900/20',
      iconBg: 'bg-yellow-500',
      category: 'Business',
    },
    {
      title: 'College Outreach',
      description: 'Professional README targeting college HODs and faculty for intern recruitment.',
      href: '/college-outreach',
      icon: GraduationCap,
      gradient: 'from-indigo-500 to-blue-600',
      bgGradient: 'from-indigo-50 to-blue-100 dark:from-indigo-950/20 dark:to-blue-900/20',
      iconBg: 'bg-indigo-500',
      category: 'Recruitment',
    },
    {
      title: 'Resource Gathering Team',
      description: 'Specialized team structure for acquiring ₹5,00,000+ in free resources and partnerships.',
      href: '/resource-team',
      icon: Target,
      gradient: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-100 dark:from-pink-950/20 dark:to-rose-900/20',
      iconBg: 'bg-pink-500',
      category: 'Resources',
    },
    {
      title: 'Non-Technical Team Guide',
      description: 'Comprehensive guide for business-focused team members and funding opportunities.',
      href: '/non-technical-team',
      icon: Building2,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-100 dark:from-orange-950/20 dark:to-red-900/20',
      iconBg: 'bg-orange-500',
      category: 'Business',
    },
    {
      title: 'Backend Architecture with Firestore',
      description: 'Updated backend architecture recommendation with Firestore for student-friendly development.',
      href: '/backend-architecture',
      icon: Database,
      gradient: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-100 dark:from-teal-950/20 dark:to-cyan-900/20',
      iconBg: 'bg-teal-500',
      category: 'Technical',
    },
  ]

  const keyHighlights = [
    {
      title: 'Financial Projections',
      icon: BarChart3,
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20',
      items: [
        { text: 'Week 8: ₹25,000/month revenue target', icon: Clock },
        { text: 'Week 16: ₹1,00,000/month revenue target', icon: TrendingUp },
        { text: 'Week 24: ₹5,00,000+/month revenue target', icon: Rocket },
        { text: 'Total Funding Pipeline: ₹25+ lakhs', icon: IndianRupee },
      ],
    },
    {
      title: 'Team Structure',
      icon: Users,
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20',
      items: [
        { text: '5 Core Technical Members with equity participation', icon: Code },
        { text: '11 Intern Positions (technical and non-technical)', icon: GraduationCap },
        { text: '5 Resource Team Members for funding', icon: Target },
        { text: '5 Non-Technical Team Members for business development', icon: Building2 },
      ],
    },
    {
      title: 'Zero-Budget Resources',
      icon: Zap,
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-100 dark:from-purple-950/20 dark:to-pink-900/20',
      items: [
        { text: '₹3,30,000+ in free cloud credits', icon: Globe },
        { text: 'GitHub Student Pack benefits worth ₹25,000+ per student', icon: Award },
        { text: 'Free development tools and educational resources', icon: Sparkles },
        { text: 'Government grants and student-specific funding', icon: Star },
      ],
    },
  ]

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent-50/50 dark:from-primary-950/20 dark:via-transparent dark:to-accent-950/20 -z-10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-accent-200/30 dark:from-primary-800/20 dark:to-accent-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-200/30 to-primary-200/30 dark:from-accent-800/20 dark:to-primary-800/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="text-center space-y-8 py-12 lg:py-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-soft animate-bounce-subtle max-w-full">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="text-center leading-tight">Revolutionary Student-Led AI Startup</span>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse flex-shrink-0"></div>
          </div>
          
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight animate-slide-up">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 dark:from-primary-400 dark:via-accent-400 dark:to-primary-500 bg-clip-text text-transparent">
                freetochat
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="text-lg font-medium text-gray-600 dark:text-gray-400">Built by Students, For Students</span>
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Complete project documentation for a revolutionary student-led startup providing 
            <span className="font-semibold text-primary-600 dark:text-primary-400"> unlimited free-tier access</span> to 
            multiple AI models, context memory, and utility services.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="group bg-white dark:bg-secondary-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <IndianRupee className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">5L+</div>
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Revenue Target</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Week 24 Goal</div>
            </div>
            
            <div className="group bg-white dark:bg-secondary-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">24</div>
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Week Implementation</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Detailed Timeline</div>
            </div>
            
            <div className="group bg-white dark:bg-secondary-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">₹0</div>
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Initial Budget Required</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Zero-Budget Approach</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 via-accent-50 to-primary-50 dark:from-primary-950/30 dark:via-accent-950/30 dark:to-primary-950/30 rounded-3xl"></div>
        <div className="relative bg-white/60 dark:bg-secondary-900/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 text-center shadow-soft border border-gray-200/50 dark:border-gray-700/50">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-medium">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary-700 to-accent-600 dark:from-gray-100 dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
                "Making AI accessible to every student in India, 
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent"> regardless of their financial background</span>"
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Free AI Access</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Student-Focused</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Zero Budget Start</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Innovation Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-medium">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary-700 to-accent-600 dark:from-gray-100 dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
              Complete Documentation
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Explore our comprehensive project documentation covering every aspect of building and scaling 
            freetochat with detailed guides and implementation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {documentationSections.map((section, index) => {
            const Icon = section.icon
            return (
              <Link
                key={section.href}
                to={section.href}
                className="group relative overflow-hidden bg-white dark:bg-secondary-900/50 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-strong border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${section.gradient} rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                          {section.category}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 leading-tight">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {section.description}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300">
                      <span>Explore Documentation</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors duration-300">
                      <Sparkles className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400" />
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Key Highlights */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-medium">
              <Star className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary-700 to-accent-600 dark:from-gray-100 dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
              Key Project Highlights
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Discover the ambitious goals, comprehensive team structure, and innovative zero-budget approach 
            that makes this project a game-changer in the student startup ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {keyHighlights.map((highlight, index) => {
            const HeaderIcon = highlight.icon
            return (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white dark:bg-secondary-900/50 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-strong border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${highlight.gradient} rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                      <HeaderIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                  </div>
                  
                  {/* Items */}
                  <ul className="space-y-4">
                    {highlight.items.map((item, itemIndex) => {
                      const ItemIcon = item.icon
                      return (
                        <li key={itemIndex} className="flex items-start space-x-4 group/item">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors duration-300">
                            <ItemIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                            {item.text}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Modern, scalable technology stack designed for rapid development and zero-budget constraints.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-lg font-semibold text-blue-400">Frontend</div>
            <div className="text-sm text-gray-300">React + Next.js + Tailwind CSS + TypeScript</div>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-semibold text-green-400">Backend</div>
            <div className="text-sm text-gray-300">FastAPI + Python (or Firestore)</div>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-semibold text-purple-400">Mobile</div>
            <div className="text-sm text-gray-300">React Native + Expo</div>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-semibold text-yellow-400">Database</div>
            <div className="text-sm text-gray-300">Firestore (recommended) or PostgreSQL</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Join the Revolution</h2>
        <p className="text-lg mb-6 opacity-90">
          Be part of building India's next AI unicorn with a zero-budget, student-first approach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/college-outreach"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Users className="w-5 h-5 mr-2" />
            Join Our Team
          </Link>
          <Link
            to="/startup-strategy"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            <DollarSign className="w-5 h-5 mr-2" />
            View Funding Strategy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home