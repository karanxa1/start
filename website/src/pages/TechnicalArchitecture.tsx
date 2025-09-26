import { Code, Database, Cloud, Shield } from 'lucide-react'

const TechnicalArchitecture = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
          <Code className="w-4 h-4" />
          <span>Technical Architecture Document</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">System Architecture & Technology Stack</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive technical architecture with React/FastAPI stack, database schemas, and deployment strategy 
          using free/student resources.
        </p>
      </div>

      {/* Technology Stack */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <Code className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">React + Next.js + Tailwind CSS + TypeScript</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <Database className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">FastAPI + Python + Pydantic</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <Shield className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Database</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Supabase (PostgreSQL) + Redis Cache</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
            <Cloud className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Deployment</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Vercel + Railway + Upstash</p>
          </div>
        </div>
      </div>

      {/* Architecture Overview */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Architecture Overview</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="mb-4">System Architecture Diagram</p>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-sm">
              <div className="space-y-4">
                <div>User Browser/Mobile App</div>
                <div>↓</div>
                <div>React Frontend Application</div>
                <div>↓</div>
                <div>FastAPI Backend Service</div>
                <div>↓</div>
                <div className="flex justify-center space-x-8">
                  <span>Supabase Database</span>
                  <span>Redis Cache</span>
                  <span>AI API Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Routes */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">API Routes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Frontend Routes</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/</code> - Landing page</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/chat</code> - AI chat interface</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/dashboard</code> - User dashboard</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/utilities</code> - Utility services</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/pricing</code> - Pricing plans</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">API Endpoints</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/auth/login</code></li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/chat/message</code></li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/chat/history</code></li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/utilities/weather</code></li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/subscription/upgrade</code></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data Models */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Data Models</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Users</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• id (UUID)</li>
                <li>• email (string)</li>
                <li>• name (string)</li>
                <li>• plan (string)</li>
                <li>• usage_count (integer)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Conversations</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• id (UUID)</li>
                <li>• user_id (UUID)</li>
                <li>• title (string)</li>
                <li>• context_data (JSON)</li>
                <li>• created_at (timestamp)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Messages</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• id (UUID)</li>
                <li>• conversation_id (UUID)</li>
                <li>• role (string)</li>
                <li>• content (text)</li>
                <li>• model_used (string)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Performance */}
      <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6">Security & Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Security Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• JWT-based authentication with refresh tokens</li>
              <li>• Row Level Security (RLS) with Supabase</li>
              <li>• API rate limiting per user tier</li>
              <li>• Data encryption in transit and at rest</li>
              <li>• CORS configuration for secure API access</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-4">Performance Optimization</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Redis caching for frequently accessed data</li>
              <li>• CDN integration for static assets</li>
              <li>• Database indexing for optimal queries</li>
              <li>• API response compression</li>
              <li>• Lazy loading and code splitting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnicalArchitecture