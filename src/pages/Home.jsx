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
  Globe,
  Building2
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
    { number: '47,520', label: 'Total Students' },
    { number: '1,847', label: 'Faculty & Staff' },
    { number: '310+', label: 'Academic Programs' },
    { number: '98.7%', label: 'Graduate Success Rate' }
  ]

  const news = [
    {
      date: 'Jan 15, 2025',
      title: 'New Engineering Complex Inaugurated',
      description: 'State-of-the-art 15-story engineering building with 45 advanced laboratories and research facilities opened'
    },
    {
      date: 'Dec 20, 2024',
      title: 'Medical College Receives International Accreditation',
      description: 'Aushnara Medical College accredited by World Health Organization for MBBS program excellence'
    },
    {
      date: 'Nov 28, 2024',
      title: 'University Research Grants Worth ৳50 Crore Approved',
      description: 'Major research funding secured for biotechnology, renewable energy, and artificial intelligence projects'
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
              Bangladesh's Premier Educational Institution • 310+ Programs • 47,520+ Students • World-Class Faculty
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
              Academic Excellence Across All Disciplines
            </h2>
            <p className="text-lg text-gray-600">
              310+ Programs | 9 Faculties | 45 Departments | World-Class Education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { name: 'Undergraduate Programs', count: '110+', description: 'Bachelor\'s degrees across all major disciplines', color: 'from-blue-500 to-blue-600' },
              { name: 'Diploma Courses', count: '200+', description: 'Professional diplomas and certificates', color: 'from-green-500 to-green-600' },
              { name: 'HSC Programs', count: '3', description: 'Higher Secondary Certificate tracks', color: 'from-purple-500 to-purple-600' },
              { name: 'Research Centers', count: '15', description: 'Advanced research facilities and labs', color: 'from-orange-500 to-orange-600' }
            ].map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow hover-lift text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{program.count}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{program.name}</h3>
                <p className="text-gray-600 text-sm">
                  {program.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Faculty of Engineering', 
                programs: 'Civil, Electrical, Computer, Mechanical, Chemical Engineering',
                students: '12,000+',
                link: 'engineering'
              },
              { 
                name: 'Faculty of Business', 
                programs: 'MBA, BBA, Finance, Marketing, Management, Accounting',
                students: '8,500+',
                link: 'business'
              },
              { 
                name: 'Faculty of Medicine', 
                programs: 'MBBS, Nursing, Pharmacy, Public Health, Dentistry',
                students: '6,200+',
                link: 'medical'
              }
            ].map((faculty, index) => (
              <div key={index} className="bg-white p-8 rounded-lg card-shadow hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-college-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{faculty.name}</h3>
                <p className="text-gray-600 mb-4 text-center">
                  {faculty.programs}
                </p>
                <div className="text-center">
                  <span className="inline-block bg-college-blue text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {faculty.students} Students
                  </span>
                </div>
                <div className="text-center">
                  <Link 
                    to={`/programs#${faculty.link}`}
                    className="text-college-blue font-semibold hover:text-blue-800 inline-flex items-center"
                  >
                    Explore Programs <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
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