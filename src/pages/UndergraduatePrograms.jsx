import React from 'react'
import { BookOpen, Users, Calendar, Award, Star, Building2, Microscope, Calculator } from 'lucide-react'

function UndergraduatePrograms() {
  const faculties = [
    {
      name: 'Faculty of Engineering',
      description: 'Leading engineering education with cutting-edge technology and research',
      programs: [
        'Computer Science & Engineering (CSE)', 'Electrical & Electronic Engineering (EEE)',
        'Civil Engineering', 'Mechanical Engineering', 'Chemical Engineering',
        'Software Engineering', 'Industrial & Production Engineering', 'Materials Science Engineering',
        'Environmental Engineering', 'Petroleum Engineering', 'Marine Engineering', 'Aerospace Engineering'
      ],
      duration: '4 Years',
      students: '12,000+',
      icon: Building2,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Faculty of Business Administration',
      description: 'Comprehensive business education for future leaders and entrepreneurs',
      programs: [
        'Bachelor of Business Administration (BBA)', 'Finance & Banking', 'Marketing',
        'Human Resource Management', 'Management Information Systems', 'International Business',
        'Accounting & Information Systems', 'Operations Management', 'Entrepreneurship',
        'Supply Chain Management', 'Digital Marketing', 'Business Analytics'
      ],
      duration: '4 Years',
      students: '8,500+',
      icon: Calculator,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Faculty of Medicine & Health Sciences',
      description: 'World-class medical education with state-of-the-art facilities',
      programs: [
        'Bachelor of Medicine & Bachelor of Surgery (MBBS)', 'Bachelor of Dental Surgery (BDS)',
        'Bachelor of Pharmacy', 'Nursing Science', 'Public Health', 'Medical Laboratory Technology',
        'Physiotherapy', 'Occupational Therapy', 'Nutrition & Dietetics', 'Medical Imaging Technology',
        'Health Administration', 'Biomedical Engineering'
      ],
      duration: '5-6 Years',
      students: '6,200+',
      icon: Microscope,
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Faculty of Science',
      description: 'Pure and applied sciences with emphasis on research and innovation',
      programs: [
        'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Statistics',
        'Environmental Science', 'Biotechnology', 'Microbiology', 'Biochemistry',
        'Geology', 'Geography', 'Computer Science', 'Applied Mathematics',
        'Marine Biology', 'Atmospheric Science', 'Bioinformatics'
      ],
      duration: '4 Years',
      students: '5,800+',
      icon: Award,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Faculty of Arts & Humanities',
      description: 'Rich tradition in liberal arts and human sciences',
      programs: [
        'English Literature', 'Bangla Literature', 'History', 'Philosophy',
        'Islamic Studies', 'Arabic', 'Archaeology', 'Linguistics', 'Fine Arts',
        'Music', 'Theatre & Media Studies', 'Creative Writing', 'Cultural Studies',
        'Anthropology', 'Religious Studies', 'Translation Studies'
      ],
      duration: '4 Years',
      students: '4,200+',
      icon: BookOpen,
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Faculty of Social Sciences',
      description: 'Understanding society through research and critical analysis',
      programs: [
        'Economics', 'Political Science', 'Sociology', 'Psychology',
        'International Relations', 'Public Administration', 'Social Work',
        'Development Studies', 'Gender Studies', 'Peace & Conflict Studies',
        'Communication & Journalism', 'Mass Communication', 'Criminology',
        'Urban & Regional Planning', 'Population Sciences'
      ],
      duration: '4 Years',
      students: '3,900+',
      icon: Users,
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: 'Faculty of Law',
      description: 'Comprehensive legal education with practical training',
      programs: [
        'Bachelor of Laws (LLB)', 'International Law', 'Constitutional Law',
        'Criminal Law', 'Commercial Law', 'Environmental Law', 'Human Rights Law',
        'Islamic Law', 'Intellectual Property Law', 'Cyber Law'
      ],
      duration: '4 Years',
      students: '2,100+',
      icon: Star,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'Faculty of Architecture & Design',
      description: 'Creative design and architectural excellence',
      programs: [
        'Bachelor of Architecture', 'Interior Design', 'Landscape Architecture',
        'Urban Planning', 'Industrial Design', 'Fashion Design',
        'Graphic Design', 'Product Design', 'Sustainable Design'
      ],
      duration: '5 Years',
      students: '1,800+',
      icon: Building2,
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'Faculty of Agriculture',
      description: 'Modern agricultural science and technology',
      programs: [
        'Agricultural Science', 'Agricultural Economics', 'Agricultural Engineering',
        'Veterinary Science', 'Animal Husbandry', 'Fisheries', 'Forestry',
        'Food Technology', 'Agricultural Extension', 'Soil Science'
      ],
      duration: '4 Years',
      students: '1,500+',
      icon: Award,
      color: 'from-green-600 to-green-700'
    }
  ]

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Undergraduate Programs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              110+ Bachelor's Degree Programs • 9 Faculties • 45 Departments
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '110+', label: 'Bachelor Programs' },
              { number: '36,420', label: 'Undergraduate Students' },
              { number: '1,247', label: 'Faculty Members' },
              { number: '98.3%', label: 'Graduate Employment Rate' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow">
                <div className="text-3xl font-bold text-college-blue mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nine Faculties of Excellence
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive undergraduate education across all major disciplines
            </p>
          </div>

          <div className="space-y-16">
            {faculties.map((faculty, index) => (
              <div key={index} className="bg-white rounded-xl card-shadow overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${faculty.color} text-white rounded-full mb-6`}>
                      <faculty.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{faculty.name}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{faculty.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-college-blue" />
                        <strong>Duration:</strong> {faculty.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-college-blue" />
                        <strong>Students:</strong> {faculty.students}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8 bg-gray-50">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-college-blue" />
                      Undergraduate Programs Offered
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {faculty.programs.map((program, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-college-blue rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{program}</span>
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

      {/* Admission Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Undergraduate Admission Requirements
            </h2>
            <p className="text-lg text-gray-600">
              General requirements for all undergraduate programs
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl card-shadow">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Award className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">HSC or A-Levels with minimum GPA 4.0 (varies by program)</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SSC or O-Levels with minimum GPA 4.5</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">English proficiency (TOEFL/IELTS for international students)</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Age limit: Maximum 25 years at the time of admission</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-college-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                    <span className="text-gray-700">Online application submission with required documents</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-college-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                    <span className="text-gray-700">University admission test (written and MCQ)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-college-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                    <span className="text-gray-700">Merit list publication and counselling</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-college-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                    <span className="text-gray-700">Final admission and fee payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UndergraduatePrograms