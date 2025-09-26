import { DollarSign } from 'lucide-react'

const StartupStrategy = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-medium">
          <DollarSign className="w-4 h-4" />
          <span>Startup Strategy & Funding Guide</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Zero-Budget Startup Strategy</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive funding strategy leveraging government grants, angel investors, and student resources 
          to achieve ₹5,00,000+ monthly revenue.
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-green-50 dark:from-yellow-900/20 dark:to-green-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Funding Pipeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">₹25+ Lakhs</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Government Grants</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">₹5,00,000+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Free Resources</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">₹50+ Lakhs</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Angel Investment</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-2">₹2+ Crores</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">VC Funding</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Government Funding</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li>• Startup India Scheme: ₹20 lakhs</li>
            <li>• MSME Schemes: ₹25 lakhs</li>
            <li>• DST NIDHI: ₹10 lakhs</li>
            <li>• State Government Grants: ₹15 lakhs</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Student Resources</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li>• GitHub Student Pack: ₹25,000+ per student</li>
            <li>• AWS Educate Credits: ₹50,000+</li>
            <li>• Google Cloud Credits: ₹75,000+</li>
            <li>• Microsoft Azure: ₹1,00,000+</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StartupStrategy