import { Target } from 'lucide-react'

const ResourceTeam = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-4 py-2 rounded-full text-sm font-medium">
          <Target className="w-4 h-4" />
          <span>Resource Gathering Team</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Resource Acquisition Strategy</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Specialized 5-member team structure for acquiring ₹5,00,000+ in free resources and partnerships 
          by Month 6 through strategic resource gathering.
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-orange-50 dark:from-pink-900/20 dark:to-orange-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Target Resource Value</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">₹2,00,000</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cloud Credits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">₹1,50,000</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Software Licenses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">₹1,00,000</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">API Credits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-2">₹50,000</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tools & Services</div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Team Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Resource Acquisition Lead</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Lead resource identification and acquisition strategies</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• 20 hours/week commitment</li>
              <li>• Equity participation based on contribution</li>
              <li>• Leadership experience</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Funding Specialist</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Focus on grants, competitions, and funding opportunities</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• 15 hours/week commitment</li>
              <li>• Equity participation based on contribution</li>
              <li>• Grant writing experience</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Student Benefits Coordinator</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Maximize student discounts and educational benefits</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• 12 hours/week commitment</li>
              <li>• Equity participation based on contribution</li>
              <li>• Research and coordination skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceTeam