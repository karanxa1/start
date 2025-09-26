import { Database, Cloud, Zap, Shield } from 'lucide-react'

const BackendArchitecture = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium">
          <Database className="w-4 h-4" />
          <span>Backend Architecture with Firestore</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Firestore Backend Architecture</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Updated backend architecture strongly recommending Firestore for student-friendly development, 
          cost-effectiveness, and faster implementation.
        </p>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Why Firestore?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">50% Faster</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Development Speed</div>
          </div>
          <div className="text-center">
            <Database className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">No SQL</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Knowledge Required</div>
          </div>
          <div className="text-center">
            <Cloud className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">80% Lower</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Infrastructure Costs</div>
          </div>
          <div className="text-center">
            <Shield className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">Built-in</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Security & Auth</div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Architecture Comparison</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Traditional PostgreSQL Setup</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-2">
                <span className="text-red-500">✗</span>
                <span>Requires SQL knowledge and database management</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500">✗</span>
                <span>Complex server setup and maintenance</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500">✗</span>
                <span>Higher infrastructure costs</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500">✗</span>
                <span>Manual scaling and optimization</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Firestore Architecture</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>NoSQL document database - easy to learn</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Serverless - no server management needed</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Generous free tier - perfect for students</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Auto-scaling and real-time capabilities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Firestore Data Models</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Users Collection</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">uid</code> - User ID</div>
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">email</code> - Email address</div>
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">displayName</code> - Full name</div>
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">plan</code> - Subscription plan</div>
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">usageCount</code> - API usage</div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Conversations Collection</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">id</code> - Conversation ID</div>
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">userId</code> - Owner ID</div>
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">title</code> - Conversation title</div>
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">contextData</code> - Context object</div>
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">createdAt</code> - Timestamp</div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Messages Subcollection</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">id</code> - Message ID</div>
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">role</code> - user/assistant</div>
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">content</code> - Message text</div>
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">modelUsed</code> - AI model</div>
                <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">timestamp</code> - Created time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Security Rules</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Firestore Security Rules Example</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read and write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Users can manage their own conversations
    match /conversations/{conversationId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
      
      // Messages subcollection
      match /messages/{messageId} {
        allow read, write: if request.auth != null && 
          request.auth.uid == get(/databases/$(database)/documents/conversations/$(conversationId)).data.userId;
      }
    }
  }
}`}
          </pre>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Cost Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-red-600 mb-4">Traditional Setup Monthly Costs</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Database hosting: ₹2,000-5,000</li>
              <li>• Server maintenance: ₹3,000-8,000</li>
              <li>• Backup & monitoring: ₹1,000-3,000</li>
              <li>• Developer time: ₹10,000+</li>
              <li className="font-semibold text-red-600">Total: ₹16,000-26,000/month</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-green-600 mb-4">Firestore Monthly Costs</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Free tier: 50K reads, 20K writes daily</li>
              <li>• No server costs: ₹0</li>
              <li>• No maintenance: ₹0</li>
              <li>• Faster development: 50% time saved</li>
              <li className="font-semibold text-green-600">Total: ₹0-3,000/month</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6">Implementation Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">For Students</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• No SQL learning curve</li>
              <li>• Focus on business logic</li>
              <li>• Real-time features out of box</li>
              <li>• Mobile SDK integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-4">For Startup</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Faster time to market</li>
              <li>• Lower operational costs</li>
              <li>• Automatic scaling</li>
              <li>• Google Cloud integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-400 mb-4">For Development</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Built-in authentication</li>
              <li>• Offline support</li>
              <li>• Real-time listeners</li>
              <li>• Cloud Functions integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackendArchitecture