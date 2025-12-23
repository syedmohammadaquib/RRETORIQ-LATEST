import React from 'react';
import {
  Brain,
  Target,
  Users,
  Award,
  Zap,
  Globe,
  Shield,
  Heart,
  CheckCircle,
  Star,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Learning',
      description: 'Advanced machine learning algorithms provide personalized feedback and adaptive learning paths.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal-Oriented Practice',
      description: 'Structured practice sessions designed to help you achieve specific communication goals.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert-Designed Content',
      description: 'Curriculum developed by certified IELTS trainers and interview coaching experts.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Proven Results',
      description: '95% of users see measurable improvement within their first month of practice.'
    }
  ];

  const stats = [
    {
      number: '50,000+',
      label: 'Active Users',
      icon: <Users className="w-5 h-5" />
    },
    {
      number: '1M+',
      label: 'Practice Sessions',
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      number: '95%',
      label: 'Success Rate',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      number: '4.9/5',
      label: 'User Rating',
      icon: <Star className="w-5 h-5" />
    }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'User-Centric Design',
      description: 'Every feature is built with user experience and learning outcomes in mind.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Privacy & Security',
      description: 'Your data and practice sessions are protected with enterprise-grade security.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Accessibility',
      description: 'Making quality communication training accessible to learners worldwide.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Continuous Innovation',
      description: 'Constantly improving our AI models and expanding practice capabilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <img
              src="/resources/Rretoriq_main_blk.png"
              alt="Rretoriq Logo"
              className="h-12 sm:h-16 w-auto"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-3 sm:mb-4 px-4">
            About Rretoriq
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Empowering individuals and organizations with AI-driven communication training
            that transforms practice into performance.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              To democratize access to world-class communication training through innovative AI technology,
              helping millions of people achieve their academic, professional, and personal communication goals.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-600">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className="text-2xl font-semibold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-900 text-center mb-6 sm:mb-8 px-4">Why Choose Rretoriq</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-gray-600">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Founded in 2023, Rretoriq was born from the vision of making premium communication
                training accessible to everyone. Our founders, experienced educators and technologists,
                recognized the gap between traditional coaching methods and the needs of modern learners.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By combining cutting-edge AI technology with pedagogical expertise, we've created
                a platform that provides instant, personalized feedback - something previously
                only available through expensive one-on-one coaching.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-900 font-medium">Trusted by leading educational institutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-900 font-medium">99.9% platform uptime and reliability</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    <strong>2023:</strong> Platform launch with IELTS Speaking practice
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    <strong>2024:</strong> Added Interview Practice with AI feedback
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    <strong>2025:</strong> 50K+ active users across 40+ countries
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-900 text-center mb-6 sm:mb-8 px-4">Our Values</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-gray-600">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-6 text-center">Powered by Advanced AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural Language Processing</h3>
              <p className="text-gray-600 text-sm">Advanced NLP models analyze speech patterns, grammar, and vocabulary usage.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Speech Recognition</h3>
              <p className="text-gray-600 text-sm">Real-time speech-to-text processing with pronunciation analysis.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-600 text-sm">Adaptive algorithms that personalize feedback based on your progress.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Join Our Growing Community</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the future of communication training with thousands of learners worldwide.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Get Started Today
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;