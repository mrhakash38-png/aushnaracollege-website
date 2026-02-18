import React from 'react'
import { Award, Users, Target, Heart, BookOpen, Building2 } from 'lucide-react'

function About() {
  const milestones = [
    { year: '2001', event: 'Aushnara College Founded by Education Trust of Bangladesh' },
    { year: '2005', event: 'First Undergraduate Programs Launched - Engineering & Business' },
    { year: '2008', event: 'Medical College Established with MBBS Program' },
    { year: '2012', event: 'University Status Granted - Became Aushnara University' },
    { year: '2015', event: '50,000+ Students Milestone Achieved Across All Programs' },
    { year: '2018', event: 'International Accreditation from WHO for Medical Programs' },
    { year: '2020', event: '100+ Undergraduate Programs Portfolio Completed' },
    { year: '2022', event: '200+ Diploma Programs Added Across 8 Categories' },
    { year: '2023', event: '120,000+ Students Enrolled - Largest University in Bangladesh' },
    { year: '2024', event: 'Research Grants Worth ৳50 Crore Approved for Advanced Studies' }
  ]

  const leadership = [
    {
      name: 'Prof. Dr. Md. Abul Kalam Azad',
      position: 'Vice-Chancellor',
      qualification: 'Ph.D. in Education Management, University of Dhaka',
      experience: '32 years in university leadership and research'
    },
    {
      name: 'Prof. Dr. Rashida Begum',
      position: 'Pro Vice-Chancellor (Academic)',
      qualification: 'Ph.D. in Physics, MIT, USA',
      experience: '28 years in academic administration and research'
    },
    {
      name: 'Prof. Dr. Md. Nazrul Islam',
      position: 'Pro Vice-Chancellor (Administration)',
      qualification: 'Ph.D. in Management, Oxford University, UK',
      experience: '25 years in university administration and policy'
    },
    {
      name: 'Prof. Dr. Fatima Rahman',
      position: 'Treasurer',
      qualification: 'Ph.D. in Economics, Harvard University, USA',
      experience: '24 years in financial management and economics'
    }
  ]

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Aushnara University</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Bangladesh's Premier Educational Institution • 310+ Programs • 120,000+ Students
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
                To be Bangladesh's leading comprehensive university, providing world-class education across 
                310+ programs to over 120,000 students. We empower learners through innovative teaching, 
                cutting-edge research, and industry partnerships, fostering critical thinking, creativity, 
                and leadership skills that drive societal progress and global competitiveness.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-college-gold text-white rounded-full mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be recognized as South Asia's premier multi-disciplinary university, setting global 
                standards in education, research, and innovation. We aspire to produce graduates who are 
                industry-ready leaders, entrepreneurs, and change-makers contributing to Bangladesh's 
                economic growth and technological advancement on the world stage.
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