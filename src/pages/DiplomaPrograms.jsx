import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BookOpen, Users, Calendar, Award, Star, Building2, Microscope, Calculator, Wrench, Monitor, TrendingUp, Briefcase, DollarSign, Target, CheckCircle, ArrowRight } from 'lucide-react'

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

  const careerOutcomes = [
    {
      category: "Engineering & Tech",
      avgSalary: "৳25,000 - ৳45,000",
      topRoles: ["Junior Engineer", "Technical Assistant", "Quality Inspector"],
      employmentRate: "94%",
      topEmployers: ["Walton", "BERC", "BEPZA", "Local Industries"]
    },
    {
      category: "IT & Software",
      avgSalary: "৳30,000 - ৳55,000",
      topRoles: ["Web Developer", "IT Support", "Database Admin"],
      employmentRate: "96%",
      topEmployers: ["Brain Station 23", "Samsung R&D", "Pathao", "Startups"]
    },
    {
      category: "Business & Mgmt",
      avgSalary: "৳20,000 - ৳40,000",
      topRoles: ["Executive Assistant", "Sales Officer", "HR Coordinator"],
      employmentRate: "89%",
      topEmployers: ["Banks", "Retail", "Multinationals", "SMEs"]
    },
    {
      category: "Healthcare",
      avgSalary: "৳22,000 - ৳42,000",
      topRoles: ["Lab Technician", "Radiology Tech", "Pharmacy Assistant"],
      employmentRate: "91%",
      topEmployers: ["Square", "Beximco Pharma", "Hospitals", "Clinics"]
    }
  ]

  const successStories = [
    {
      name: "Rafiq Ahmed",
      program: "Diploma in Computer Science",
      achievement: "Now Software Engineer at Brain Station 23",
      quote: "The hands-on training prepared me perfectly for the job market."
    },
    {
      name: "Nusrat Jahan",
      program: "Diploma in Business Administration",
      achievement: "HR Manager at a leading bank",
      quote: "The program gave me both theoretical knowledge and practical skills."
    },
    {
      name: "Kamal Hossain",
      program: "Diploma in Electronics & Telecom",
      achievement: "Technical Lead at Walton",
      quote: "Lab facilities and industry exposure were exceptional."
    }
  ]

  const placementPartners = [
    "Walton Group",
    "Square Pharmaceuticals",
    "Brain Station 23",
    "Beximco Group",
    "Samsung R&D Bangladesh",
    "Grameen Phone",
    "BRAC",
    "Pathao",
    "Daraz",
    "City Bank",
    "Dutch-Bangla Bank",
    "ACI Limited",
    "Renata Limited",
    "Navana Group",
    "PHP Group",
    "Summit Group"
  ]

  const keyBenefits = [
    {
      icon: Target,
      title: "Industry-Focused Curriculum",
      description: "Programs designed with input from industry experts to meet current market demands"
    },
    {
      icon: Briefcase,
      title: "Guaranteed Internships",
      description: "Every student gets 3-6 months internship with our 150+ partner companies"
    },
    {
      icon: TrendingUp,
      title: "96.8% Placement Rate",
      description: "Outstanding track record of placing graduates in reputable organizations"
    },
    {
      icon: DollarSign,
      title: "Competitive Salaries",
      description: "Our graduates earn 25-40% higher starting salaries than industry average"
    }
  ]

  return (
    <>
      <Helmet>
        <title>216+ Diploma Programs | Career-Ready Training | Aushnara College</title>
        <meta name="description" content="216+ professional diploma programs across 8 categories. 96.8% placement rate. Engineering, IT, Business, Healthcare, Agriculture, Arts & more. Apply now!" />
        <meta name="keywords" content="diploma programs Bangladesh, technical diploma, engineering diploma, IT diploma, business diploma, healthcare diploma, vocational training, career training, professional courses" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://aushnaracollege.edu.bd/diploma-programs" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aushnaracollege.edu.bd/diploma-programs" />
        <meta property="og:title" content="216+ Diploma Programs - Aushnara College" />
        <meta property="og:description" content="Professional diplomas with 96.8% placement rate. Industry-focused training across Engineering, IT, Business, Healthcare & more." />
        <meta property="og:image" content="https://aushnaracollege.edu.bd/og-diploma.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aushnaracollege.edu.bd/diploma-programs" />
        <meta name="twitter:title" content="216+ Diploma Programs - Aushnara College" />
        <meta name="twitter:description" content="Professional diplomas with 96.8% placement rate. Industry-focused training." />
        <meta name="twitter:image" content="https://aushnaracollege.edu.bd/og-diploma.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Aushnara College - Diploma Programs",
            "description": "216+ professional diploma programs",
            "numberOfStudents": "81400",
            "offers": {
              "@type": "Offer",
              "category": "Diploma Programs",
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

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Diploma Programs?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-focused training with guaranteed career outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm">{benefit.description}</p>
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
              Career Outcomes & Salaries
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real data from our 2025 diploma graduate outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {careerOutcomes.map((outcome, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{outcome.category}</h3>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {outcome.employmentRate}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Average Starting Salary
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

      {/* Placement Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Placement Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              150+ top companies hire our diploma graduates every year
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {placementPartners.map((partner, index) => (
                <div key={index} className="bg-white px-4 py-3 rounded-lg text-center font-semibold text-gray-700 hover:shadow-md transition-shadow">
                  {partner}
                </div>
              ))}
            </div>
            <div className="text-center mt-6 text-gray-600">
              <span className="font-semibold">+ 134 more companies</span> actively recruiting our graduates
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real graduates, real success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
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
            Ready to Start Your Professional Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 81,400+ students building successful careers through our diploma programs
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
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/30 transition-all border border-white/20"
            >
              Talk to Admissions Team
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default DiplomaPrograms