import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Users, Briefcase, CheckCircle } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Brand Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-6 py-3 rounded-full border border-blue-200 mb-8 shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold tracking-wide">AI-POWERED • MADE FOR INDIA</span>
          </div>

          {/* Main Brand Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Rretoriq</span>
            <span className="block text-neutral-900 mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold">Transform Your Communication Excellence</span>
          </h1>

          {/* Brand Slogan */}
          <div className="mb-10">
            <p className="text-lg sm:text-xl text-blue-700 font-semibold italic tracking-wide">
              "Where Words Meet Wisdom, Skills Meet Success"
            </p>
          </div>

          {/* Value Proposition */}
          <p className="text-lg sm:text-xl text-neutral-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Unlock your potential with India's most advanced AI communication coach. 
            <span className="text-blue-600 font-semibold"> Master IELTS, ace interviews, and excel in business English</span> with 
            personalized feedback designed for Indian professionals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/ielts"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/glimpse"
              className="group bg-white border-2 border-neutral-300 hover:border-blue-400 hover:bg-blue-50 text-neutral-900 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore AI Features
            </Link>
          </div>
          
          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-neutral-200/50 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Free to Start</h3>
              <p className="text-sm text-neutral-600 text-center">Begin your journey with our comprehensive free tier</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-neutral-200/50 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">🇮🇳</span>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Made for India</h3>
              <p className="text-sm text-neutral-600 text-center">Hindi & English support with Indian context</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-neutral-200/50 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">50K+</span>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Trusted Users</h3>
              <p className="text-sm text-neutral-600 text-center">Join thousands of successful professionals</p>
            </div>
          </div>

          {/* Brand Promise */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-white shadow-2xl">
            <p className="text-xl sm:text-2xl font-bold mb-4">
              🚀 Your Success Story Starts Here
            </p>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Join the revolution of AI-powered communication training. Whether you're preparing for IELTS, 
              mastering job interviews, or elevating your business English - Rretoriq is your partner in excellence.
            </p>
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