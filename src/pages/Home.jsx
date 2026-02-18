import React from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Users, 
  Award, 
  Building, 
  ArrowRight, 
  Star,
  Calendar,
  Trophy,
  Globe
} from 'lucide-react'

function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'Comprehensive academic programs designed to nurture critical thinking and creativity'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers dedicated to student success'
    },
    {
      icon: Award,
      title: 'Excellence Recognition',
      description: 'Consistently ranked among top educational institutions in Bangladesh'
    },
    {
      icon: Building,
      title: 'Modern Campus',
      description: 'State-of-the-art facilities including labs, library, and sports complex'
    }
  ]

  const stats = [
    { number: '2,847', label: 'Total Students' },
    { number: '89', label: 'Qualified Teachers' },
    { number: '23', label: 'Years of Excellence' },
    { number: '97.3%', label: 'HSC Pass Rate 2024' }
  ]

  const news = [
    {
      date: 'Dec 22, 2024',
      title: 'HSC Results 2024: Outstanding Performance',
      description: 'Aushnara College students achieve 97.3% pass rate with 143 students securing GPA 5.00'
    },
    {
      date: 'Nov 15, 2024',
      title: 'Inter-College Science Fair Victory',
      description: 'Our students won first place in the National Inter-College Science Fair organized by Bangladesh Education Board'
    },
    {
      date: 'Oct 30, 2024',
      title: 'Digital Library Expansion Completed',
      description: 'Modern digital library with 50,000+ e-books and research journals now accessible to all students'
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Welcome to <br className="md:hidden" />
              <span className="text-college-gold">Aushnara College</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Empowering minds, shaping futures. Excellence in education for over two decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/admissions" 
                className="bg-college-gold hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white hover:bg-white hover:text-college-blue px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow">
                <div className="text-3xl md:text-4xl font-bold text-college-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Aushnara College?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing world-class education that prepares students 
              for success in their academic and professional careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg card-shadow hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-college-blue text-white rounded-full mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Programs
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our diverse range of academic programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['Science', 'Commerce', 'Arts'].map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-lg card-shadow hover-lift text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-college-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program}</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive {program.toLowerCase()} curriculum designed to prepare students for higher education and careers.
                </p>
                <Link 
                  to="/programs" 
                  className="text-college-blue font-semibold hover:text-blue-800 inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News & Events
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest happenings at Aushnara College
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow hover-lift">
                <div className="flex items-center text-sm text-college-blue mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards an excellent education. Apply today and become part of our legacy.
          </p>
          <Link 
            to="/admissions" 
            className="bg-college-gold hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center"
          >
            Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home