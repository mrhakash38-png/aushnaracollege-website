import React from 'react'
import { BookOpen, Users, Award, ArrowRight, Building2, GraduationCap, Star, Calculator, Microscope, Computer } from 'lucide-react'
import { Link } from 'react-router-dom'

function Programs() {
  const programCategories = [
    {
      name: 'Undergraduate Programs',
      description: '110+ Bachelor\'s degree programs across 9 faculties with world-class education and research opportunities.',
      programs: ['Engineering', 'Business Administration', 'Medicine & Health Sciences', 'Science', 'Arts & Humanities', 'Social Sciences', 'Law', 'Architecture & Design', 'Agriculture'],
      students: '36,420+',
      count: '110+',
      link: '/undergraduate-programs',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Diploma Programs', 
      description: '216+ professional diploma courses in 8 categories designed for industry-ready skills and employment.',
      programs: ['Engineering & Technology', 'Computer Science & IT', 'Business & Management', 'Health & Medical Sciences', 'Agriculture & Food Sciences', 'Arts, Design & Media', 'Social Sciences & Education', 'Vocational & Trade Skills'],
      students: '81,400+',
      count: '216+',
      link: '/diploma-programs',
      icon: Award,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'HSC Programs',
      description: 'Higher Secondary Certificate programs in Science, Commerce, and Arts with excellent pass rates.',
      programs: ['Science Group', 'Commerce Group', 'Arts Group'],
      students: '2,847+',
      count: '3',
      link: '#hsc-programs',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const hscPrograms = [
    {
      name: 'Science',
      description: 'Comprehensive science education with focus on Physics, Chemistry, Biology, and Mathematics.',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Bangla'],
      duration: '2 years',
      students: 1247,
      successRate: '98.7%',
      icon: Microscope,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Commerce',
      description: 'Business-oriented curriculum preparing students for careers in commerce and management.',
      subjects: ['Accounting', 'Management', 'Economics', 'Finance', 'Statistics', 'English'],
      duration: '2 years',
      students: 982,
      successRate: '97.2%',
      icon: Calculator,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Arts',
      description: 'Liberal arts education fostering critical thinking and cultural understanding.',
      subjects: ['History', 'Political Science', 'Geography', 'Sociology', 'Economics', 'English'],
      duration: '2 years',
      students: 618,
      successRate: '96.8%',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const highlights = [
    { number: '310+', label: 'Total Programs', description: 'Comprehensive educational offerings' },
    { number: '120,667', label: 'Total Students', description: 'Active enrollment across all programs' },
    { number: '1,847', label: 'Faculty & Staff', description: 'Qualified educators and support staff' },
    { number: '98.2%', label: 'Overall Success Rate', description: 'Graduate employment and education' }
  ]

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              310+ Programs • 9 Faculties • Excellence Across All Disciplines
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {highlights.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow">
                <div className="text-3xl font-bold text-college-blue mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Academic Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              Choose from undergraduate degrees, professional diplomas, or higher secondary programs
            </p>
          </div>

          <div className="space-y-12">
            {programCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl card-shadow overflow-hidden hover-lift">
                <div className="md:flex">
                  <div className="md:w-1/3 p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} text-white rounded-full mb-6`}>
                      <category.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{category.description}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <BookOpen className="h-4 w-4 mr-2 text-college-blue" />
                        <strong>Programs:</strong> {category.count}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-college-blue" />
                        <strong>Students:</strong> {category.students}
                      </div>
                    </div>
                    <Link 
                      to={category.link}
                      className="inline-flex items-center bg-college-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  <div className="md:w-2/3 p-8 bg-gray-50">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Star className="h-5 w-5 mr-2 text-college-blue" />
                      Program Areas
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.programs.map((program, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-college-blue rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm font-medium">{program}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HSC Programs Detail */}
      <section id="hsc-programs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              HSC Programs in Detail
            </h2>
            <p className="text-lg text-gray-600">
              Higher Secondary Certificate programs with outstanding success rates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hscPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl card-shadow overflow-hidden hover-lift">
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${program.color} text-white rounded-full mb-6`}>
                    <program.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.name}</h3>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Students:</span>
                      <span className="font-semibold">{program.students}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Success Rate:</span>
                      <span className="font-semibold text-green-600">{program.successRate}</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-3">Core Subjects</h4>
                  <div className="space-y-2">
                    {program.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-college-blue rounded-full mr-2"></div>
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Educational Resources
            </h2>
            <p className="text-lg text-gray-600">
              State-of-the-art facilities supporting academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: '45 Departments', description: 'Specialized academic departments' },
              { icon: Microscope, title: '120+ Labs', description: 'Research and teaching laboratories' },
              { icon: BookOpen, title: 'Central Library', description: '2.5M books & digital resources' },
              { icon: Computer, title: 'Digital Campus', description: 'Smart classrooms & online learning' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow hover-lift text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-college-blue text-white rounded-full mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Your Perfect Program
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            With 310+ programs to choose from, we have the perfect educational path for your goals and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/admissions" 
              className="bg-college-gold hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Apply Now
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-college-blue px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Academic Counseling
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs