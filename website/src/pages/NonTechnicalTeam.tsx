import { Briefcase } from 'lucide-react'

const NonTechnicalTeam = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
          <Briefcase className="w-4 h-4" />
          <span>Non-Technical Team Guide</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Business Development Team</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive guide for 5 business-focused team members specializing in funding, partnerships, 
          and growth strategies with detailed funding opportunities.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Funding Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">₹55+ Lakhs</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Government Funding</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">₹50+ Lakhs</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Angel Investment</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">₹5,00,000+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Student Resources</div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Team Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Business Development Lead</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Lead partnerships, client acquisition, and business strategy</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• 20 hours/week commitment</li>
              <li>• Equity participation based on contribution</li>
              <li>• Leadership and strategy experience</li>
              <li>• Future business development role</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Marketing & Growth Specialist</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Digital marketing, content creation, and user acquisition</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• 15 hours/week commitment</li>
              <li>• Equity participation based on contribution</li>
              <li>• Marketing and growth experience</li>
              <li>• Portfolio building opportunities</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Government Funding Sources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Startup India Scheme</h3>
            <div className="text-2xl font-bold text-blue-600 mb-2">₹20 Lakhs</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Government funding for innovative startups</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Tax benefits for 3 years</li>
              <li>• Fast-track patent registration</li>
              <li>• Easy compliance and regulations</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">MSME Schemes</h3>
            <div className="text-2xl font-bold text-green-600 mb-2">₹25 Lakhs</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Micro, Small & Medium Enterprise support</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Credit guarantee schemes</li>
              <li>• Technology upgradation</li>
              <li>• Market development assistance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6">Angel Investor Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Indian Angel Network</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• ₹25-50 lakhs typical investment</li>
              <li>• 200+ active angel investors</li>
              <li>• Sector-agnostic approach</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-4">Mumbai Angels</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• ₹50 lakhs - 2 crores range</li>
              <li>• Technology focus</li>
              <li>• Mentorship support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Chennai Angels</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• ₹25-75 lakhs investment</li>
              <li>• South India focus</li>
              <li>• Student-friendly approach</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NonTechnicalTeam