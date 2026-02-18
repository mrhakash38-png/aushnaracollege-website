import React from 'react'
import { Award, Users, Target, Heart, BookOpen, Building2 } from 'lucide-react'

function About() {
  const milestones = [
    { year: '2001', event: 'Aushnara College Established' },
    { year: '2005', event: 'First Science Laboratory Built' },
    { year: '2010', event: 'Computer Lab Inaugurated' },
    { year: '2015', event: 'Sports Complex Completed' },
    { year: '2020', event: 'Digital Learning Initiative Launched' },
    { year: '2025', event: 'Modern Library & Research Center' }
  ]

  const leadership = [
    {
      name: 'Prof. Dr. Mohammad Rahman',
      position: 'Principal',
      qualification: 'Ph.D. in Education, Dhaka University',
      experience: '25+ years in education'
    },
    {
      name: 'Dr. Fatima Khatun',
      position: 'Vice Principal',
      qualification: 'Ph.D. in Mathematics, BUET',
      experience: '20+ years in academics'
    },
    {
      name: 'Mr. Abdul Karim',
      position: 'Academic Director',
      qualification: 'M.A. in English Literature',
      experience: '18+ years in education'
    }
  ]

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Aushnara College</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Excellence in Education Since 2001
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-college-blue text-white rounded-full mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide quality education that empowers students with knowledge, skills, and values 
                necessary for success in their academic pursuits and future careers. We strive to create 
                an inclusive learning environment that fosters critical thinking, creativity, and character development.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-college-gold text-white rounded-full mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be recognized as a leading educational institution in Bangladesh, known for academic 
                excellence, innovative teaching methodologies, and producing graduates who contribute 
                meaningfully to society and the global community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our educational journey</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-college-blue"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg card-shadow">
                      <h3 className="text-2xl font-bold text-college-blue mb-2">{milestone.year}</h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-college-gold rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet our dedicated educational leaders</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white p-8 rounded-lg card-shadow hover-lift text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-college-blue to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-college-blue font-semibold mb-4">{leader.position}</p>
                <p className="text-gray-600 mb-2">{leader.qualification}</p>
                <p className="text-sm text-gray-500">{leader.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-lg text-gray-600">State-of-the-art infrastructure for modern education</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: 'Modern Library', description: 'Extensive collection of books, journals, and digital resources' },
              { icon: Building2, title: 'Science Labs', description: 'Fully equipped chemistry, physics, and biology laboratories' },
              { icon: Users, title: 'Computer Lab', description: 'Latest computers with high-speed internet connectivity' },
              { icon: Award, title: 'Sports Complex', description: 'Indoor and outdoor sports facilities for various activities' },
              { icon: Target, title: 'Auditorium', description: 'Modern auditorium for events, seminars, and cultural programs' },
              { icon: Heart, title: 'Cafeteria', description: 'Clean and hygienic dining facility serving nutritious meals' }
            ].map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow hover-lift text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-college-blue text-white rounded-full mb-6">
                  <facility.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-college-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-100">The principles that guide our educational philosophy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { title: 'Excellence', description: 'Striving for the highest standards in education' },
              { title: 'Integrity', description: 'Maintaining honesty and moral principles' },
              { title: 'Innovation', description: 'Embracing new methods and technologies' },
              { title: 'Inclusivity', description: 'Creating opportunities for all students' }
            ].map((value, index) => (
              <div key={index} className="p-6">
                <h3 className="text-2xl font-bold text-college-gold mb-4">{value.title}</h3>
                <p className="text-blue-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About