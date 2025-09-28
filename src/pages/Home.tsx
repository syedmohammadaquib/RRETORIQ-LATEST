import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Users, Briefcase, CheckCircle } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full filter blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Simplified Brand Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-medium mb-8 border border-blue-100">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <span>AI-POWERED FOR INDIA</span>
          </div>

          {/* Clean Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mb-4">Rretoriq</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl text-neutral-800 font-medium">Transform Your Communication</span>
          </h1>

          {/* Refined Slogan */}
          <p className="text-xl text-blue-600 font-medium mb-10 italic">
            "Where Words Meet Wisdom, Skills Meet Success"
          </p>

          {/* Simplified Value Proposition */}
          <p className="text-lg text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Master IELTS, ace interviews, and excel in business English with 
            <span className="text-blue-600 font-semibold"> AI-powered feedback</span> designed for Indian professionals.
          </p>

          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              to="/ielts"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/glimpse"
              className="group bg-white/80 backdrop-blur-sm border border-neutral-200 hover:border-blue-300 hover:bg-white text-neutral-700 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Features
            </Link>
          </div>
          
          {/* Minimal Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-neutral-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Free to Start</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">🇮🇳</span>
              <span className="font-medium">Made for India</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-blue-600">50K+</span>
              <span className="font-medium">Trusted Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🚀</span>
              <span>AI-Powered Features</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
              Everything You Need to 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Succeed</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Practice with cutting-edge AI feedback designed specifically for Indian English speakers and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* IELTS Practice */}
            <Link to="/ielts" className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-neutral-200/50 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">IELTS Mastery</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Master all four IELTS skills with AI-powered feedback. Tailored for Indian test-takers with local context, examples, and success strategies.
              </p>
              <div className="text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                Start Your Prep <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            {/* Interview Practice */}
            <Link to="/interview" className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-neutral-200/50 hover:border-green-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Interview Excellence</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Practice with real questions from top Indian companies. Get AI feedback on confidence, communication style, and professional presence.
              </p>
              <div className="text-green-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                Practice Now <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            {/* Business English */}
            <Link to="/business" className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-neutral-200/50 hover:border-purple-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Business Fluency</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Master professional communication for Indian corporate culture and international business environments.
              </p>
              <div className="text-purple-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                Coming Soon <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Trusted Across India
            </h2>
            <p className="text-lg text-neutral-600">Join thousands of professionals who've transformed their communication skills</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-sm font-medium text-neutral-700">Active Users</div>
              <div className="text-xs text-neutral-500 mt-1">Growing Daily</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm font-medium text-neutral-700">Success Rate</div>
              <div className="text-xs text-neutral-500 mt-1">Proven Results</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">500K+</div>
              <div className="text-sm font-medium text-neutral-700">Practice Sessions</div>
              <div className="text-xs text-neutral-500 mt-1">Completed</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm font-medium text-neutral-700">AI Support</div>
              <div className="text-xs text-neutral-500 mt-1">Always Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span>🚀</span>
            <span>Start Your Journey Today</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your
            <span className="block text-yellow-300">Communication Skills?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Indian professionals who have already elevated their English skills and career prospects with Rretoriq's AI-powered coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/ielts"
              className="group bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Start Free Practice
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/signup"
              className="group border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Create Account
            </Link>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
              <span>Free Forever Plan</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home