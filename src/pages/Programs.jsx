import React from 'react'
import { BookOpen, Calculator, Palette, Computer, Users, Clock, Award, CheckCircle } from 'lucide-react'

function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Science',
      subtitle: 'HSC Science Group',
      description: 'Comprehensive science education preparing students for medical, engineering, and research careers.',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Bangla'],
      duration: '2 Years',
      eligibility: 'SSC with Science background (Min GPA 3.5)',
      career: ['Medical Doctor', 'Engineer', 'Researcher', 'Pharmacist', 'Biotechnologist'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calculator,
      title: 'Commerce',
      subtitle: 'HSC Business Studies',
      description: 'Business-focused curriculum developing entrepreneurial skills and commercial understanding.',
      subjects: ['Accounting', 'Management', 'Economics', 'Finance', 'English', 'Bangla'],
      duration: '2 Years',
      eligibility: 'SSC with any background (Min GPA 3.0)',
      career: ['Accountant', 'Banker', 'Business Manager', 'Economist', 'Entrepreneur'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Palette,
      title: 'Arts',
      subtitle: 'HSC Humanities',
      description: 'Liberal arts education fostering critical thinking, creativity, and cultural understanding.',
      subjects: ['History', 'Geography', 'Political Science', 'Sociology', 'English', 'Bangla'],
      duration: '2 Years',
      eligibility: 'SSC with any background (Min GPA 2.5)',
      career: ['Teacher', 'Civil Service', 'Journalist', 'Social Worker', 'Cultural Officer'],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const features = [
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Highly qualified teachers with advanced degrees and extensive experience'
    },
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'Updated syllabus aligned with national standards and global best practices'
    },
    {
      icon: Computer,
      title: 'Technology Integration',
      description: 'Digital learning tools and smart classrooms for enhanced education'
    },
    {
      icon: Award,
      title: 'Excellence Recognition',
      description: 'Merit scholarships and recognition programs for outstanding students'
    }
  ]

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Choose Your Path to Success
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              HSC Programs Offered
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer three comprehensive Higher Secondary Certificate (HSC) programs designed to 
              prepare students for higher education and professional careers.
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl card-shadow overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${program.color} text-white rounded-full mb-6`}>
                      <program.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{program.subtitle}</p>
                    <p className="text-gray-700 leading-relaxed">{program.description}</p>
                  </div>

                  <div className="md:w-2/3 p-8 bg-gray-50">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Subjects */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2 text-college-blue" />
                          Core Subjects
                        </h4>
                        <ul className="space-y-2">
                          {program.subjects.map((subject, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Details */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Clock className="h-5 w-5 mr-2 text-college-blue" />
                            Program Details
                          </h4>
                          <p className="text-gray-700 mb-2"><strong>Duration:</strong> {program.duration}</p>
                          <p className="text-gray-700"><strong>Eligibility:</strong> {program.eligibility}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Award className="h-5 w-5 mr-2 text-college-blue" />
                            Career Opportunities
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {program.career.map((career, idx) => (
                              <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {career}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Our Programs Special
            </h2>
            <p className="text-lg text-gray-600">
              Distinctive features that set our academic programs apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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

      {/* Admission Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Requirements
            </h2>
            <p className="text-lg text-gray-600">
              General requirements for all HSC programs
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl card-shadow">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SSC or equivalent certificate from recognized board</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Minimum GPA requirements as per program</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Age limit: Maximum 20 years at the time of admission</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Good conduct certificate from previous institution</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-college-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      1
                    </div>
                    <span className="text-gray-700">Submit online application form</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-college-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      2
                    </div>
                    <span className="text-gray-700">Provide required documents and certificates</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-college-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      3
                    </div>
                    <span className="text-gray-700">Attend admission test and interview</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-college-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      4
                    </div>
                    <span className="text-gray-700">Merit list publication and enrollment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Academic Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose the program that aligns with your interests and career goals. 
            Our counselors are here to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/admissions" 
              className="bg-college-gold hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Apply Now
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-college-blue px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Guidance
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs