import React from 'react'
import { Helmet } from 'react-helmet-async'
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

  const faqs = [
    {
      question: "How do I choose the right program for my career goals?",
      answer: "Consider your interests, career aspirations, and academic strengths. Our admissions counselors offer free career guidance sessions to help you select the best program. You can also explore our program pages for detailed career outcome data, salary projections, and alumni success stories."
    },
    {
      question: "What is the difference between Undergraduate and Diploma programs?",
      answer: "Undergraduate programs (Bachelor's degrees) typically last 4 years and provide comprehensive theoretical and practical education with research opportunities. Diploma programs are 1-3 year professional courses focused on industry-ready skills and immediate employment. Diplomas are ideal for quick career entry, while undergraduate degrees offer broader academic depth."
    },
    {
      question: "What are the eligibility requirements for admission?",
      answer: "For HSC programs: SSC/equivalent pass required. For Undergraduate programs: HSC/equivalent with minimum GPA requirements (varies by program, typically 3.0-4.5). For Diploma programs: SSC/HSC pass depending on course level. Specific programs may have additional requirements like subject prerequisites or entrance exams."
    },
    {
      question: "How long does each program take to complete?",
      answer: "HSC programs: 2 years. Undergraduate programs: 4 years (some professional degrees like MBBS take 5 years). Diploma programs: 1-3 years depending on the course level and specialization. All durations include examinations and practical training components."
    },
    {
      question: "What career opportunities are available after graduation?",
      answer: "Our programs have excellent employment outcomes: Undergraduate graduates achieve 98.3% employment rate within 6 months, with average starting salaries of ৳45,000-৳85,000/month. Diploma graduates have 96.8% placement rate with ৳25,000-৳55,000/month starting salaries. We have partnerships with 150+ leading companies for campus recruitment."
    },
    {
      question: "Can I transfer credits from another institution?",
      answer: "Yes, we accept credit transfers from accredited institutions for undergraduate programs. Transfers are evaluated case-by-case by our academic committee. You'll need to submit official transcripts and course syllabi for review. Typically, up to 50% of credits can be transferred depending on course equivalency and grades."
    }
  ]

  return (
    <div className="pt-8">
      <Helmet>
        <title>Academic Programs - HSC, Undergraduate & Diploma | Aushnara College</title>
        <meta name="description" content="Explore 310+ academic programs at Aushnara College. HSC (Science, Commerce, Arts), 110+ Undergraduate degrees, 216+ Diploma courses. Choose from Engineering, Business, Medicine, IT, and more." />
        <meta name="keywords" content="aushnara programs, HSC science commerce arts, undergraduate programs, diploma courses, engineering degree, business programs, medical courses, computer science, Bangladesh education" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://aushnaracollege.edu.bd/programs" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aushnaracollege.edu.bd/programs" />
        <meta property="og:title" content="310+ Academic Programs | Aushnara College" />
        <meta property="og:description" content="Choose from HSC, 110+ Undergraduate, and 216+ Diploma programs. Engineering, Business, Medicine, IT, and more. 98.7% success rate." />
        <meta property="og:image" content="https://aushnaracollege.edu.bd/og-programs.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aushnaracollege.edu.bd/programs" />
        <meta name="twitter:title" content="310+ Academic Programs | Aushnara College" />
        <meta name="twitter:description" content="Choose from HSC, 110+ Undergraduate, and 216+ Diploma programs. 98.7% success rate." />
        <meta name="twitter:image" content="https://aushnaracollege.edu.bd/og-programs.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Academic Programs at Aushnara College",
            "description": "Comprehensive list of 310+ academic programs",
            "itemListElement": programCategories.map((category, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Course",
                "name": category.name,
                "description": category.description,
                "provider": {
                  "@type": "CollegeOrUniversity",
                  "name": "Aushnara College"
                }
              }
            }))
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-college-gold text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎓 Explore Your Future
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-8">
              Choose from 310+ programs across 9 faculties designed to launch successful careers
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>310+ Programs</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>120,667 Students</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>98.2% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#undergraduate" className="px-6 py-3 bg-blue-100 text-college-blue rounded-lg font-semibold hover:bg-blue-200 transition-colors">
              🎓 Undergraduate Programs
            </a>
            <a href="#diploma" className="px-6 py-3 bg-green-100 text-green-700 rounded-lg font-semibold hover:bg-green-200 transition-colors">
              📜 Diploma Programs
            </a>
            <a href="#hsc-programs" className="px-6 py-3 bg-purple-100 text-purple-700 rounded-lg font-semibold hover:bg-purple-200 transition-colors">
              📚 HSC Programs
            </a>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {highlights.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow hover-lift">
                <div className="text-4xl font-bold text-college-blue mb-2">{stat.number}</div>
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're pursuing a bachelor's degree, professional diploma, or higher secondary certificate, 
              we have the perfect program to match your career goals.
            </p>
          </div>

          <div className="space-y-12">
            {programCategories.map((category, index) => (
              <div 
                key={index} 
                id={category.name === 'Undergraduate Programs' ? 'undergraduate' : category.name === 'Diploma Programs' ? 'diploma' : 'hsc'}
                className="bg-white rounded-xl card-shadow overflow-hidden hover-lift scroll-mt-20"
              >
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
      <section id="hsc-programs" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              HSC Programs — Your Path to University
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Choose the right stream based on your interests and career goals. 
              All programs include expert faculty, modern facilities, and excellent university placement support.
            </p>
            
            {/* Quick Comparison */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto mb-12">
              <h3 className="font-semibold text-gray-900 mb-4">🎯 Which Stream is Right for You?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div>
                  <div className="font-semibold text-blue-900 mb-2">📐 Choose Science if:</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Interested in engineering/medicine</li>
                    <li>• Strong in math & analytical thinking</li>
                    <li>• Goal: BUET/Medical/Universities</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-green-900 mb-2">💼 Choose Commerce if:</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Career in business/finance/banking</li>
                    <li>• Interest in economics & accounting</li>
                    <li>• Goal: BBA/CA/Business schools</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-purple-900 mb-2">📖 Choose Arts if:</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Passion for humanities/social science</li>
                    <li>• Interest in law/public service/media</li>
                    <li>• Goal: DU Arts/Law/Civil Service</li>
                  </ul>
                </div>
              </div>
            </div>
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

      {/* Why Choose Aushnara */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Aushnara College?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              23+ years of academic excellence with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Award, 
                title: '97.3% HSC Pass Rate', 
                description: '143 students achieved GPA 5.00 in 2024',
                color: 'from-green-500 to-green-600'
              },
              { 
                icon: Users, 
                title: '89 Qualified Teachers', 
                description: 'Expert faculty with advanced degrees',
                color: 'from-blue-500 to-blue-600'
              },
              { 
                icon: BookOpen, 
                title: 'Modern Facilities', 
                description: 'Labs, library, smart classrooms',
                color: 'from-purple-500 to-purple-600'
              },
              { 
                icon: GraduationCap, 
                title: 'University Success', 
                description: 'Top admissions to DU, BUET, Medical',
                color: 'from-yellow-500 to-yellow-600'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow hover-lift text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} text-white rounded-full mb-6`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our academic programs
            </p>
          </div>

          <div className="space-y-6">
            <details className="group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200">
              <summary className="flex items-start justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  How do I choose the right program for my career goals?
                </h3>
                <span className="text-college-blue text-2xl font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Consider your interests, career aspirations, and academic strengths. Our admissions counselors offer free career guidance sessions to help you select the best program. You can also explore our program pages for detailed career outcome data, salary projections, and alumni success stories.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200">
              <summary className="flex items-start justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  What is the difference between Undergraduate and Diploma programs?
                </h3>
                <span className="text-college-blue text-2xl font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Undergraduate programs (Bachelor's degrees) typically last 4 years and provide comprehensive theoretical and practical education with research opportunities. Diploma programs are 1-3 year professional courses focused on industry-ready skills and immediate employment. Diplomas are ideal for quick career entry, while undergraduate degrees offer broader academic depth.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200">
              <summary className="flex items-start justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  What are the eligibility requirements for admission?
                </h3>
                <span className="text-college-blue text-2xl font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                For HSC programs: SSC/equivalent pass required. For Undergraduate programs: HSC/equivalent with minimum GPA requirements (varies by program, typically 3.0-4.5). For Diploma programs: SSC/HSC pass depending on course level. Specific programs may have additional requirements like subject prerequisites or entrance exams.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200">
              <summary className="flex items-start justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  How long does each program take to complete?
                </h3>
                <span className="text-college-blue text-2xl font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                HSC programs: 2 years. Undergraduate programs: 4 years (some professional degrees like MBBS take 5 years). Diploma programs: 1-3 years depending on the course level and specialization. All durations include examinations and practical training components.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200">
              <summary className="flex items-start justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  What career opportunities are available after graduation?
                </h3>
                <span className="text-college-blue text-2xl font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our programs have excellent employment outcomes: Undergraduate graduates achieve 98.3% employment rate within 6 months, with average starting salaries of ৳45,000-৳85,000/month. Diploma graduates have 96.8% placement rate with ৳25,000-৳55,000/month starting salaries. We have partnerships with 150+ leading companies for campus recruitment.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200">
              <summary className="flex items-start justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  Can I transfer credits from another institution?
                </h3>
                <span className="text-college-blue text-2xl font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, we accept credit transfers from accredited institutions for undergraduate programs. Transfers are evaluated case-by-case by our academic committee. You'll need to submit official transcripts and course syllabi for review. Typically, up to 50% of credits can be transferred depending on course equivalency and grades.
              </p>
            </details>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions about our programs?</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-college-blue hover:text-blue-800 font-semibold"
            >
              Contact our academic advisors <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Join 2,847+ students building successful futures at Aushnara College
            </p>
            <p className="text-lg text-blue-200 mb-10">
              📅 HSC Admissions 2026-27 are now open — Limited seats available!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-2">🎓</div>
                <div className="font-semibold mb-1">HSC Programs</div>
                <div className="text-sm text-blue-100">Science • Commerce • Arts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-2">📜</div>
                <div className="font-semibold mb-1">Diploma Programs</div>
                <div className="text-sm text-blue-100">216+ Professional Courses</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold mb-1">Undergraduate</div>
                <div className="text-sm text-blue-100">110+ Bachelor's Degrees</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/admissions" 
                className="bg-college-gold hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-xl transition-all duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                🚀 Apply for Admission
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-college-blue px-10 py-4 rounded-lg font-bold text-xl transition-all duration-200 w-full sm:w-auto"
              >
                💬 Talk to Counselor
              </Link>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              ✓ Easy online application • ✓ Expert guidance available • ✓ Scholarships up to 50%
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs