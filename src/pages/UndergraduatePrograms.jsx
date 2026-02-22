import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BookOpen, Users, Calendar, Award, Star, Building2, Microscope, Calculator, TrendingUp, Briefcase, DollarSign, Globe, CheckCircle, ArrowRight, GraduationCap } from 'lucide-react'

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

  const careerHighlights = [
    {
      faculty: "Engineering",
      avgSalary: "৳45,000 - ৳85,000",
      topRoles: ["Software Engineer", "Project Engineer", "R&D Specialist"],
      employmentRate: "98%",
      topEmployers: ["Google", "Microsoft", "Samsung", "Walton", "Brain Station 23"]
    },
    {
      faculty: "Business",
      avgSalary: "৳35,000 - ৳65,000",
      topRoles: ["Business Analyst", "Financial Consultant", "Marketing Manager"],
      employmentRate: "95%",
      topEmployers: ["Unilever", "Grameenphone", "BRAC", "City Bank", "Deloitte"]
    },
    {
      faculty: "Medicine",
      avgSalary: "৳50,000 - ৳120,000",
      topRoles: ["Medical Officer", "Consultant", "Research Associate"],
      employmentRate: "99%",
      topEmployers: ["Square Hospital", "BIRDEM", "Apollo", "United Hospital"]
    },
    {
      faculty: "Science",
      avgSalary: "৳30,000 - ৳60,000",
      topRoles: ["Research Scientist", "Lab Analyst", "Data Scientist"],
      employmentRate: "92%",
      topEmployers: ["ICDDR,B", "BCSIR", "Universities", "Pharma Companies"]
    }
  ]

  const whyChoose = [
    {
      icon: GraduationCap,
      title: "World-Class Faculty",
      description: "Learn from 1,247 experienced professors, 85% with PhD degrees from top universities"
    },
    {
      icon: Globe,
      title: "Global Partnerships",
      description: "Exchange programs with 50+ universities in USA, UK, Canada, Australia, and Europe"
    },
    {
      icon: Briefcase,
      title: "98.3% Employment Rate",
      description: "Outstanding placement record with top local and multinational companies"
    },
    {
      icon: TrendingUp,
      title: "Research Excellence",
      description: "৳150 crore annual research funding • 800+ publications yearly in top journals"
    }
  ]

  const researchHighlights = [
    "50+ active research centers and laboratories",
    "800+ peer-reviewed publications annually",
    "৳150 crore research grants from national and international agencies",
    "Partnerships with MIT, Oxford, Cambridge, and 45+ global institutions",
    "Student research opportunities from 1st year",
    "Annual undergraduate research conference"
  ]

  const alumniSuccesses = [
    {
      name: "Dr. Nafisa Rahman",
      program: "Computer Science & Engineering",
      achievement: "Senior Software Engineer at Google, USA",
      quote: "The rigorous curriculum and research opportunities prepared me for global competition."
    },
    {
      name: "Imran Hossain",
      program: "Business Administration",
      achievement: "CEO of a leading fintech startup (Raised $5M)",
      quote: "The entrepreneurship focus helped me turn my idea into a successful business."
    },
    {
      name: "Dr. Tahmina Akter",
      program: "Medicine (MBBS)",
      achievement: "Chief Surgeon at Square Hospital",
      quote: "World-class clinical training and mentorship shaped my medical career."
    }
  ]

  return (
    <>
      <Helmet>
        <title>110+ Undergraduate Programs | Bachelor's Degrees | Aushnara College</title>
        <meta name="description" content="110+ Bachelor's degree programs across 9 faculties. 98.3% employment rate. World-class faculty with PhD degrees. Engineering, Medicine, Business, Science & more." />
        <meta name="keywords" content="undergraduate programs Bangladesh, bachelor degree, engineering degree, medical degree, BBA, CSE, MBBS, undergraduate admission, university programs, higher education" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://aushnaracollege.edu.bd/undergraduate-programs" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aushnaracollege.edu.bd/undergraduate-programs" />
        <meta property="og:title" content="110+ Undergraduate Programs - Aushnara College" />
        <meta property="og:description" content="World-class bachelor's degrees with 98.3% employment rate. 9 faculties • 36,420 students • Global partnerships." />
        <meta property="og:image" content="https://aushnaracollege.edu.bd/og-undergraduate.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aushnaracollege.edu.bd/undergraduate-programs" />
        <meta name="twitter:title" content="110+ Undergraduate Programs - Aushnara College" />
        <meta name="twitter:description" content="World-class bachelor's degrees with 98.3% employment rate. 9 faculties, global partnerships." />
        <meta name="twitter:image" content="https://aushnaracollege.edu.bd/og-undergraduate.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Aushnara College - Undergraduate Programs",
            "description": "110+ undergraduate degree programs across 9 faculties",
            "numberOfStudents": "36420",
            "offers": {
              "@type": "Offer",
              "category": "Undergraduate Programs",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

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

      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Undergraduate Programs?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join 36,420 students pursuing excellence at Bangladesh's leading college
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Career Outcomes by Faculty
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real data from our 2025 graduate survey (3,800+ respondents)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {careerHighlights.map((outcome, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Faculty of {outcome.faculty}</h3>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {outcome.employmentRate}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Average Starting Salary (Per Month)
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{outcome.avgSalary}</div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      Top Job Roles
                    </div>
                    <div className="space-y-1">
                      {outcome.topRoles.map((role, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <Building2 className="w-5 h-5 text-purple-600" />
                      Top Employers
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {outcome.topEmployers.map((employer, idx) => (
                        <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                          {employer}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Excellence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Research Excellence
              </h2>
              <p className="text-lg text-gray-600">
                Undergraduate students actively participate in cutting-edge research
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border-2 border-purple-200">
              <ul className="space-y-4">
                {researchHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alumni Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our graduates are leaders in their fields worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {alumniSuccesses.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {story.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                <div className="text-sm text-blue-600 font-semibold mb-2">{story.program}</div>
                <div className="text-gray-700 font-semibold mb-3">{story.achievement}</div>
                <p className="text-gray-600 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Academic Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 36,420 students in 110+ undergraduate programs • 98.3% employment rate • Global partnerships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
            >
              Apply for Admission
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/scholarships"
              className="inline-flex items-center justify-center gap-2 bg-blue-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/30 transition-all border border-white/20"
            >
              Explore Scholarships
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default UndergraduatePrograms