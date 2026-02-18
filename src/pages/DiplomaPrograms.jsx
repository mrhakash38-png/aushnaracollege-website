import React from 'react'
import { BookOpen, Users, Calendar, Award, Star, Building2, Microscope, Calculator, Wrench, Monitor } from 'lucide-react'

function DiplomaPrograms() {
  const diplomaCategories = [
    {
      category: 'Engineering & Technology',
      description: 'Professional diplomas in engineering and technical fields',
      programs: [
        'Diploma in Computer Engineering', 'Diploma in Electronics & Telecommunication', 'Diploma in Civil Engineering',
        'Diploma in Mechanical Engineering', 'Diploma in Electrical Engineering', 'Diploma in Chemical Engineering',
        'Diploma in Automobile Engineering', 'Diploma in Textile Engineering', 'Diploma in Industrial Engineering',
        'Diploma in Construction Technology', 'Diploma in Survey Engineering', 'Diploma in Environmental Engineering',
        'Diploma in Marine Engineering', 'Diploma in Aeronautical Engineering', 'Diploma in Mining Engineering',
        'Diploma in Petroleum Engineering', 'Diploma in Food Technology', 'Diploma in Leather Technology',
        'Diploma in Ceramic Engineering', 'Diploma in Glass & Ceramic Technology', 'Diploma in Instrumentation',
        'Diploma in Power Engineering', 'Diploma in Refrigeration & Air Conditioning', 'Diploma in Welding Technology',
        'Diploma in Production Engineering', 'Diploma in Tool & Die Making', 'Diploma in Plastic Technology',
        'Diploma in Print & Media Technology', 'Diploma in Packaging Technology'
      ],
      duration: '3-4 Years',
      students: '18,500+',
      icon: Wrench,
      color: 'from-blue-600 to-blue-700',
      count: 29
    },
    {
      category: 'Computer Science & IT',
      description: 'Modern computing and information technology diplomas',
      programs: [
        'Diploma in Computer Science', 'Diploma in Software Engineering', 'Diploma in Web Development',
        'Diploma in Mobile App Development', 'Diploma in Database Management', 'Diploma in Network Administration',
        'Diploma in Cybersecurity', 'Diploma in Data Science', 'Diploma in Artificial Intelligence',
        'Diploma in Machine Learning', 'Diploma in Cloud Computing', 'Diploma in DevOps',
        'Diploma in UI/UX Design', 'Diploma in Game Development', 'Diploma in Blockchain Technology',
        'Diploma in IoT (Internet of Things)', 'Diploma in Digital Marketing', 'Diploma in E-commerce',
        'Diploma in System Administration', 'Diploma in Information Security', 'Diploma in Computer Graphics',
        'Diploma in Animation & Multimedia', 'Diploma in Video Editing', 'Diploma in 3D Modeling',
        'Diploma in Virtual Reality', 'Diploma in Augmented Reality', 'Diploma in Robotics Programming'
      ],
      duration: '1-3 Years',
      students: '15,200+',
      icon: Monitor,
      color: 'from-green-600 to-green-700',
      count: 27
    },
    {
      category: 'Business & Management',
      description: 'Professional business and management qualifications',
      programs: [
        'Diploma in Business Administration', 'Diploma in Marketing Management', 'Diploma in Human Resources',
        'Diploma in Financial Management', 'Diploma in Banking & Finance', 'Diploma in Insurance',
        'Diploma in International Trade', 'Diploma in Supply Chain Management', 'Diploma in Operations Management',
        'Diploma in Project Management', 'Diploma in Quality Management', 'Diploma in Customer Service',
        'Diploma in Sales Management', 'Diploma in Retail Management', 'Diploma in Event Management',
        'Diploma in Hotel Management', 'Diploma in Tourism Management', 'Diploma in Real Estate',
        'Diploma in Entrepreneurship', 'Diploma in Small Business Management', 'Diploma in Office Management',
        'Diploma in Executive Secretary', 'Diploma in Public Relations', 'Diploma in Corporate Communication',
        'Diploma in Leadership Development', 'Diploma in Change Management', 'Diploma in Strategic Planning'
      ],
      duration: '1-2 Years',
      students: '12,800+',
      icon: Calculator,
      color: 'from-purple-600 to-purple-700',
      count: 27
    },
    {
      category: 'Health & Medical Sciences',
      description: 'Healthcare and medical technology diplomas',
      programs: [
        'Diploma in Medical Technology', 'Diploma in Laboratory Technology', 'Diploma in Radiology Technology',
        'Diploma in Pharmacy Technology', 'Diploma in Nursing', 'Diploma in Midwifery',
        'Diploma in Physiotherapy', 'Diploma in Occupational Therapy', 'Diploma in Dental Technology',
        'Diploma in Medical Equipment Technology', 'Diploma in Hospital Administration', 'Diploma in Health Information',
        'Diploma in Community Health', 'Diploma in Emergency Medical Technology', 'Diploma in Surgical Technology',
        'Diploma in Anesthesia Technology', 'Diploma in Dialysis Technology', 'Diploma in Cardiac Technology',
        'Diploma in Respiratory Therapy', 'Diploma in Medical Imaging', 'Diploma in Pathology Technology',
        'Diploma in Blood Bank Technology', 'Diploma in Microbiology Technology', 'Diploma in Biochemistry Technology',
        'Diploma in Optometry', 'Diploma in Audiology', 'Diploma in Prosthetics & Orthotics'
      ],
      duration: '2-3 Years',
      students: '9,400+',
      icon: Microscope,
      color: 'from-red-600 to-red-700',
      count: 27
    },
    {
      category: 'Agriculture & Food Sciences',
      description: 'Modern agriculture and food technology programs',
      programs: [
        'Diploma in Agriculture', 'Diploma in Horticulture', 'Diploma in Animal Husbandry',
        'Diploma in Poultry Science', 'Diploma in Dairy Technology', 'Diploma in Food Technology',
        'Diploma in Food Processing', 'Diploma in Food Quality Control', 'Diploma in Nutrition & Dietetics',
        'Diploma in Fisheries Technology', 'Diploma in Aquaculture', 'Diploma in Forestry',
        'Diploma in Agricultural Engineering', 'Diploma in Soil Science', 'Diploma in Plant Protection',
        'Diploma in Seed Technology', 'Diploma in Agricultural Extension', 'Diploma in Farm Management',
        'Diploma in Rural Development', 'Diploma in Cooperative Management', 'Diploma in Veterinary Science',
        'Diploma in Bee Keeping', 'Diploma in Mushroom Cultivation', 'Diploma in Organic Farming',
        'Diploma in Greenhouse Technology', 'Diploma in Agricultural Marketing'
      ],
      duration: '2-3 Years',
      students: '6,200+',
      icon: Award,
      color: 'from-green-700 to-green-800',
      count: 26
    },
    {
      category: 'Arts, Design & Media',
      description: 'Creative arts and design professional programs',
      programs: [
        'Diploma in Graphic Design', 'Diploma in Web Design', 'Diploma in Interior Design',
        'Diploma in Fashion Design', 'Diploma in Textile Design', 'Diploma in Jewelry Design',
        'Diploma in Product Design', 'Diploma in Industrial Design', 'Diploma in Architecture Technology',
        'Diploma in Fine Arts', 'Diploma in Commercial Art', 'Diploma in Photography',
        'Diploma in Film Making', 'Diploma in Video Production', 'Diploma in Sound Engineering',
        'Diploma in Music Production', 'Diploma in Theatre Arts', 'Diploma in Dance',
        'Diploma in Creative Writing', 'Diploma in Journalism', 'Diploma in Mass Communication',
        'Diploma in Broadcasting', 'Diploma in Radio & TV', 'Diploma in Advertising',
        'Diploma in Public Relations', 'Diploma in Event Planning', 'Diploma in Exhibition Design'
      ],
      duration: '1-3 Years',
      students: '5,800+',
      icon: Star,
      color: 'from-pink-600 to-pink-700',
      count: 27
    },
    {
      category: 'Social Sciences & Education',
      description: 'Education and social development programs',
      programs: [
        'Diploma in Education', 'Diploma in Early Childhood Education', 'Diploma in Special Education',
        'Diploma in Elementary Education', 'Diploma in Secondary Education', 'Diploma in Adult Education',
        'Diploma in Educational Technology', 'Diploma in Library Science', 'Diploma in Social Work',
        'Diploma in Community Development', 'Diploma in NGO Management', 'Diploma in Counselling',
        'Diploma in Psychology', 'Diploma in Human Rights', 'Diploma in Gender Studies',
        'Diploma in Peace Studies', 'Diploma in Development Studies', 'Diploma in Public Administration',
        'Diploma in Local Government', 'Diploma in Disaster Management', 'Diploma in Environmental Studies',
        'Diploma in Research Methods', 'Diploma in Statistics', 'Diploma in Survey Research',
        'Diploma in Population Studies', 'Diploma in Urban Planning'
      ],
      duration: '1-2 Years',
      students: '4,600+',
      icon: Users,
      color: 'from-teal-600 to-teal-700',
      count: 26
    },
    {
      category: 'Vocational & Trade Skills',
      description: 'Practical skills and vocational training programs',
      programs: [
        'Diploma in Electrical Installation', 'Diploma in Plumbing', 'Diploma in Carpentry',
        'Diploma in Masonry', 'Diploma in Painting & Decorating', 'Diploma in Welding',
        'Diploma in Motor Mechanics', 'Diploma in Heavy Equipment Operation', 'Diploma in Driver Training',
        'Diploma in Beauty & Cosmetology', 'Diploma in Hairdressing', 'Diploma in Tailoring',
        'Diploma in Embroidery', 'Diploma in Handicrafts', 'Diploma in Leather Work',
        'Diploma in Furniture Making', 'Diploma in Upholstery', 'Diploma in Shoe Making',
        'Diploma in Bakery & Confectionery', 'Diploma in Cooking', 'Diploma in Food Service',
        'Diploma in Housekeeping', 'Diploma in Laundry Management', 'Diploma in Security Services',
        'Diploma in Fire Safety', 'Diploma in First Aid', 'Diploma in Basic Computer Skills'
      ],
      duration: '6 months - 2 Years',
      students: '8,900+',
      icon: Building2,
      color: 'from-orange-600 to-orange-700',
      count: 27
    }
  ]

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Diploma Programs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              216+ Professional Diplomas • 8 Categories • 81,400+ Students Enrolled
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '216', label: 'Diploma Programs' },
              { number: '81,400+', label: 'Diploma Students' },
              { number: '1,240', label: 'Professional Instructors' },
              { number: '96.8%', label: 'Job Placement Rate' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow">
                <div className="text-3xl font-bold text-college-blue mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
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
              Professional Diploma Categories
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive professional training across all major industries
            </p>
          </div>

          <div className="space-y-16">
            {diplomaCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl card-shadow overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} text-white rounded-full mb-6`}>
                      <category.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{category.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <BookOpen className="h-4 w-4 mr-2 text-college-blue" />
                        <strong>Programs:</strong> {category.count} diplomas
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-college-blue" />
                        <strong>Duration:</strong> {category.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-college-blue" />
                        <strong>Students:</strong> {category.students}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8 bg-gray-50">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-college-blue" />
                      Available Diploma Programs
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {category.programs.map((program, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-college-blue rounded-full mr-3 flex-shrink-0 mt-1"></div>
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

      {/* Admission & Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl card-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Diploma Admission Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SSC or equivalent certificate (minimum GPA varies by program)</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Age limit: 16-35 years depending on program</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Program-specific entrance test or interview</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Industry experience preferred for advanced programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl card-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="h-6 w-6 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Industry-aligned curriculum with practical training</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Experienced faculty from industry and academia</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">State-of-the-art laboratories and workshops</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Industry internships and job placement assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DiplomaPrograms