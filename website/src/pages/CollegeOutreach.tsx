import { Users, GraduationCap, Briefcase, Code } from 'lucide-react'

const CollegeOutreach = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium">
          <GraduationCap className="w-4 h-4" />
          <span>College Outreach Program</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Join Our Student Team</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Professional recruitment program targeting college students and faculty for intern positions 
          with equity participation and learning opportunities.
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Available Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Code className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technical Intern Positions</div>
          </div>
          <div className="text-center">
            <Briefcase className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-green-600 mb-2">5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Non-Technical Intern Positions</div>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Resource Team Positions</div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technical Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">AI/ML Intern</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Work on AI model integrations and machine learning features</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• 15 hours/week commitment</li>
              <li>• Equity participation based on contribution</li>
              <li>• Learning opportunities with mentorship</li>
              <li>• Future salary potential after revenue milestones</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Full Stack Intern</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Develop frontend and backend features for the platform</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• 15 hours/week commitment</li>
              <li>• Equity participation based on contribution</li>
              <li>• Real-world development experience</li>
              <li>• Portfolio building opportunities</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6">Why Join Our Team?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Learning & Growth</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Real-world startup experience</li>
              <li>• Mentorship from industry professionals</li>
              <li>• Skill development in cutting-edge technologies</li>
              <li>• Portfolio building with live projects</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-4">Future Benefits</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Equity participation in successful startup</li>
              <li>• Future employment opportunities</li>
              <li>• Network building with entrepreneurs</li>
              <li>• Academic credit possibilities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollegeOutreach