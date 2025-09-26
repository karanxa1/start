import { Calendar, Target, Users, DollarSign } from 'lucide-react'

const ImplementationRoadmap = () => {
  const phases = [
    {
      phase: 'Phase 1: MVP Development & Revenue Generation',
      timeline: 'Weeks 1-8',
      target: '₹25,000/month',
      color: 'bg-blue-500',
      tasks: [
        'Foundation Setup & Team Formation',
        'Core Architecture & Authentication',
        'AI Integration & Chat Interface',
        'Basic Utility Services',
        'MVP Launch & First Users',
        'Revenue Generation Setup',
        'User Feedback & Iteration',
        'Phase 1 Completion & Metrics'
      ]
    },
    {
      phase: 'Phase 2: Feature Expansion & Scaling',
      timeline: 'Weeks 9-16',
      target: '₹1,00,000/month',
      color: 'bg-green-500',
      tasks: [
        'Mobile App Development',
        'Advanced AI Features',
        'Enhanced Utility Services',
        'User Dashboard & Analytics',
        'Payment Integration',
        'Marketing & User Acquisition',
        'Performance Optimization',
        'Scale to 1000+ Users'
      ]
    },
    {
      phase: 'Phase 3: Enterprise & Growth',
      timeline: 'Weeks 17-24',
      target: '₹5,00,000+/month',
      color: 'bg-purple-500',
      tasks: [
        'Enterprise Features',
        'API Marketplace',
        'Advanced Analytics',
        'Team Management',
        'White-label Solutions',
        'Strategic Partnerships',
        'International Expansion',
        'Funding & Investment'
      ]
    }
  ]

  const teamStructure = [
    {
      role: 'Core Technical Team',
      count: 5,
      description: 'CTO, Frontend Lead, Mobile Lead, Backend Developers with equity participation'
    },
    {
      role: 'Technical Interns',
      count: 4,
      description: 'AI/ML, Full Stack, DevOps, QA/Testing interns with learning opportunities'
    },
    {
      role: 'Non-Technical Interns',
      count: 5,
      description: 'Business Development, Marketing, Design, Customer Success, Analytics'
    },
    {
      role: 'Resource Team',
      count: 5,
      description: 'Specialized team for acquiring ₹5,00,000+ in free resources'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
          <Calendar className="w-4 h-4" />
          <span>Implementation Roadmap</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">24-Week Implementation Plan</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Detailed roadmap from MVP development to ₹5,00,000+ monthly revenue, designed for a student team 
          with zero budget leveraging educational resources.
        </p>
      </div>

      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Executive Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24 Weeks</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Implementation Timeline</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">₹5,00,000+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Revenue Target</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">Zero Budget</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Startup Approach</div>
          </div>
        </div>
      </div>

      {/* Team Structure */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Team Structure & Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamStructure.map((team, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="w-6 h-6 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{team.role}</h3>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-sm font-medium">
                  {team.count} members
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{team.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Phases */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Implementation Phases</h2>
        
        {phases.map((phase, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className={`${phase.color} px-8 py-6 text-white`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                  <div className="flex items-center space-x-4">
                    <span className="inline-flex items-center space-x-1 text-sm opacity-90">
                      <Calendar className="w-4 h-4" />
                      <span>{phase.timeline}</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 text-sm font-medium">
                      <DollarSign className="w-4 h-4" />
                      <span>{phase.target}</span>
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Target className="w-12 h-12 opacity-75" />
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Milestones & Tasks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Breakdown Example */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sample Weekly Breakdown</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Week 1: Foundation Setup</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Core Team Tasks</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Set up GitHub organization and repositories</li>
                <li>• Apply for cloud service credits (AWS, GCP, Azure)</li>
                <li>• Initialize FastAPI project structure</li>
                <li>• Set up Next.js project with TypeScript</li>
                <li>• Configure development environment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Recruitment Tasks</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Post intern positions on university job boards</li>
                <li>• Create application forms and screening process</li>
                <li>• Schedule interviews for Business Development Intern</li>
                <li>• Prepare onboarding materials</li>
                <li>• Set up team communication channels</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6">Success Metrics & KPIs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Phase 1 Targets</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 100+ registered users</li>
              <li>• ₹25,000 monthly revenue</li>
              <li>• 5 core team members</li>
              <li>• 3 intern positions filled</li>
              <li>• MVP fully functional</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-4">Phase 2 Targets</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 1,000+ active users</li>
              <li>• ₹1,00,000 monthly revenue</li>
              <li>• Mobile app launched</li>
              <li>• 8 intern positions filled</li>
              <li>• Advanced features live</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Phase 3 Targets</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 10,000+ active users</li>
              <li>• ₹5,00,000+ monthly revenue</li>
              <li>• Enterprise clients</li>
              <li>• Full team of 19 members</li>
              <li>• Funding secured</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImplementationRoadmap