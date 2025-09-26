import { Users, Target, Zap, Shield, TrendingUp, Clock, DollarSign, BarChart3 } from 'lucide-react'

const ProductRequirements = () => {
  const userRoles = [
    {
      role: 'Free User',
      registration: 'Email registration',
      permissions: 'Basic AI chat, limited context memory, basic utilities'
    },
    {
      role: 'Pro User',
      registration: 'Subscription upgrade (₹99/month)',
      permissions: 'Unlimited AI access, full context memory, premium features'
    },
    {
      role: 'Enterprise User',
      registration: 'Custom pricing',
      permissions: 'API access, team management, priority support'
    }
  ]

  const coreFeatures = [
    {
      page: 'Home Page',
      features: ['Hero section showcasing unlimited free tier', 'Feature highlights and pricing comparison', 'User testimonials']
    },
    {
      page: 'Chat Interface',
      features: ['AI conversation interface', 'Context memory indicators', 'Model selection and conversation history']
    },
    {
      page: 'Dashboard',
      features: ['Usage analytics', 'Subscription management', 'API key management and billing']
    },
    {
      page: 'Utility Services',
      features: ['Weather information', 'Currency conversion', 'Image processing tools', 'Code assistance']
    },
    {
      page: 'Mobile App',
      features: ['Cross-platform interface', 'Offline context sync', 'Push notifications']
    },
    {
      page: 'Admin Panel',
      features: ['User management', 'Analytics dashboard', 'System monitoring', 'Revenue tracking']
    }
  ]

  const designPrinciples = [
    {
      aspect: 'Primary Colors',
      description: 'Deep blue (#1e40af) for trust and technology, bright green (#10b981) for success and growth'
    },
    {
      aspect: 'Typography',
      description: 'Inter font family, 16px base size, clear hierarchy with 24px/32px/48px headings'
    },
    {
      aspect: 'Layout Style',
      description: 'Card-based design with clean spacing, top navigation with sidebar for dashboard'
    },
    {
      aspect: 'Responsiveness',
      description: 'Mobile-first design with breakpoints at 640px, 768px, and 1024px'
    }
  ]

  const performanceRequirements = [
    { metric: 'Page Load Time', target: '< 2 seconds on 3G connection' },
    { metric: 'API Response Time', target: '< 500ms for chat responses' },
    { metric: 'Uptime', target: '99.9% availability target' },
    { metric: 'Concurrent Users', target: 'Support 1000+ simultaneous users' }
  ]

  const successMetrics = [
    {
      category: 'User Metrics',
      icon: Users,
      metrics: [
        'Monthly Active Users (MAU): Target 10,000+ by month 6',
        'User Retention: 40% monthly retention rate',
        'Conversion Rate: 5% free to paid conversion',
        'Daily Active Users: 30% of MAU'
      ]
    },
    {
      category: 'Business Metrics',
      icon: DollarSign,
      metrics: [
        'Monthly Recurring Revenue: ₹5,00,000+ by month 6',
        'Customer Acquisition Cost: < ₹500 per user',
        'Lifetime Value: > ₹2,000 per paid user',
        'Churn Rate: < 5% monthly for paid users'
      ]
    },
    {
      category: 'Technical Metrics',
      icon: BarChart3,
      metrics: [
        'API Success Rate: > 99.5%',
        'Average Response Time: < 500ms',
        'Error Rate: < 0.1%',
        'System Uptime: > 99.9%'
      ]
    }
  ]

  const launchPhases = [
    {
      phase: 'Phase 1: MVP Launch',
      timeline: 'Weeks 1-8',
      target: '₹25,000 monthly revenue',
      features: ['Basic AI chat with 2-3 model integrations', 'Simple subscription system', 'Core utility services']
    },
    {
      phase: 'Phase 2: Feature Expansion',
      timeline: 'Weeks 9-16',
      target: '₹1,00,000 monthly revenue',
      features: ['Mobile app launch', 'Advanced AI features', 'Enhanced utility services']
    },
    {
      phase: 'Phase 3: Scale & Enterprise',
      timeline: 'Weeks 17-24',
      target: '₹5,00,000+ monthly revenue',
      features: ['Enterprise features', 'API marketplace', 'Advanced analytics']
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
          <Target className="w-4 h-4" />
          <span>Product Requirements Document</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">freetochat</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive AI-powered service providing unlimited free tier access to multiple AI models, 
          context memory, and utility services targeting students, developers, and small businesses.
        </p>
      </div>

      {/* Product Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">₹5,00,000+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Monthly revenue target within 6 months</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Target users through freemium model</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">₹99/month</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Premium subscription starting price</div>
          </div>
        </div>
      </div>

      {/* User Roles */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">User Roles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {userRoles.map((user, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{user.role}</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Registration Method</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{user.registration}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Core Permissions</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{user.permissions}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Features */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{feature.page}</h3>
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* User Flow Diagram */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Core User Flows</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Free User Flow</h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">Email Registration</span>
              <span className="text-gray-400 dark:text-gray-500">→</span>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">Basic AI Chat</span>
              <span className="text-gray-400 dark:text-gray-500">→</span>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">Utility Services</span>
              <span className="text-gray-400 dark:text-gray-500">→</span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full">Upgrade to Pro</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">Pro User Flow</h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full">Subscription Upgrade</span>
              <span className="text-gray-400 dark:text-gray-500">→</span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full">Unlimited AI Access</span>
              <span className="text-gray-400 dark:text-gray-500">→</span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full">Premium Features</span>
              <span className="text-gray-400 dark:text-gray-500">→</span>
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full">Enterprise Inquiry</span>
            </div>
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">User Interface Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designPrinciples.map((principle, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{principle.aspect}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Requirements */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technical Requirements</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Requirements</h3>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-600">
            {performanceRequirements.map((req, index) => (
              <div key={index} className="px-6 py-4 flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-white">{req.metric}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">{req.target}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Security</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• JWT-based authentication</li>
              <li>• API rate limiting per user tier</li>
              <li>• Data encryption in transit and at rest</li>
              <li>• GDPR compliance</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="w-6 h-6 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Integrations</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Multiple AI API integrations</li>
              <li>• Payment gateway (Razorpay)</li>
              <li>• Email service integration</li>
              <li>• Analytics integration</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-6 h-6 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Scalability</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Cloud-native architecture</li>
              <li>• Auto-scaling capabilities</li>
              <li>• Multiple fallback providers</li>
              <li>• Load balancing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Success Metrics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {successMetrics.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className="w-6 h-6 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="text-sm text-gray-600 dark:text-gray-400">
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* Launch Strategy */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Launch Strategy</h2>
        <div className="space-y-6">
          {launchPhases.map((phase, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{phase.phase}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="inline-flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{phase.timeline}</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 text-sm text-green-600 dark:text-green-400 font-medium">
                      <DollarSign className="w-4 h-4" />
                      <span>{phase.target}</span>
                    </span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {phase.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Mitigation */}
      <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6">Risk Mitigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-3">Technical Risks</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• API Dependency: Multiple fallback providers</li>
              <li>• Scaling Issues: Cloud-native architecture</li>
              <li>• Security: Regular audits and testing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">Business Risks</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Competition: Unique value proposition</li>
              <li>• User Acquisition: Student networks</li>
              <li>• Revenue Goals: Conservative projections</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-3">Team Risks</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Academic Conflicts: Flexible scheduling</li>
              <li>• Skill Gaps: Mentorship programs</li>
              <li>• Retention: Equity participation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductRequirements