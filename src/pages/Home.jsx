import React from 'react'
import { Helmet } from 'react-helmet-async'
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
  Building2,
  GraduationCap,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Shield
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

  const faqs = [
    {
      question: "What programs does Aushnara College offer?",
      answer: "We offer 310+ programs across 9 faculties including Undergraduate programs (110+), Diploma courses (200+), and HSC programs in Science, Commerce, and Arts streams. Our flagship faculties include Engineering, Business, Medicine, Science, Arts, and Social Sciences."
    },
    {
      question: "How do I apply for admission to Aushnara College?",
      answer: "Applications can be submitted online through our admissions portal or in-person at the Admissions Office. The process includes filling out the application form, submitting required documents (SSC/JSC certificates, photos, NID), paying the application fee, and attending the admission test. Visit our Admissions page for detailed steps."
    },
    {
      question: "What is the admission process timeline?",
      answer: "Admissions open in December and close in February. The admission test is conducted in March, results are announced in April, and classes begin in July. Important dates are updated annually on our Admissions page."
    },
    {
      question: "Does Aushnara College offer scholarships?",
      answer: "Yes! We offer multiple scholarship programs: Merit-Based Scholarships (up to 100% tuition waiver for GPA 5.0), Need-Based Financial Aid (25-75% coverage), Academic Excellence Awards (50%), Sports & Cultural Scholarships (30-50%), Siblings Discount (15%), and Freedom Fighter Quota (50%). Visit our Scholarships page for eligibility details."
    }
  ]

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Aushnara College | Best College in Bangladesh | Excellence in Education Since 2001</title>
        <meta name="description" content="Aushnara College - Bangladesh's premier educational institution since 2001. 47,520+ students, 310+ programs, 98.7% success rate. Offering HSC, Undergraduate, Diploma programs. Apply for admission 2026-27." />
        <meta name="keywords" content="aushnara college, best college Bangladesh, HSC admission, undergraduate programs, diploma courses, Dhaka college, top college Bangladesh, higher education, college admission 2026" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://aushnaracollege.edu.bd/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aushnaracollege.edu.bd/" />
        <meta property="og:title" content="Aushnara College | Excellence in Education Since 2001" />
        <meta property="og:description" content="Join 47,520+ students at Bangladesh's most trusted educational institution. 310+ programs, world-class faculty, 98.7% success rate. Apply now for admission 2026-27." />
        <meta property="og:image" content="https://aushnaracollege.edu.bd/og-image.jpg" />
        <meta property="og:locale" content="en_BD" />
        <meta property="og:site_name" content="Aushnara College" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aushnaracollege.edu.bd/" />
        <meta name="twitter:title" content="Aushnara College | Excellence in Education Since 2001" />
        <meta name="twitter:description" content="Join 47,520+ students at Bangladesh's most trusted educational institution. 310+ programs, world-class faculty, 98.7% success rate." />
        <meta name="twitter:image" content="https://aushnaracollege.edu.bd/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="BD-C" />
        <meta name="geo.placename" content="Dhaka" />
        <meta name="geo.position" content="23.7808875;90.4218063" />
        <meta name="ICBM" content="23.7808875, 90.4218063" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            "name": "Aushnara College",
            "alternateName": "Aushnara College Bangladesh",
            "url": "https://aushnaracollege.edu.bd",
            "logo": "https://aushnaracollege.edu.bd/logo.png",
            "image": "https://aushnaracollege.edu.bd/og-image.jpg",
            "description": "Premier educational institution in Bangladesh since 2001, offering HSC, Undergraduate, and Diploma programs with 98.7% success rate.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "23/A, Dhanmondi R/A",
              "addressLocality": "Dhaka",
              "postalCode": "1205",
              "addressCountry": "BD"
            },
            "telephone": "+880-2-58154892",
            "email": "info@aushnaracollege.edu.bd",
            "foundingDate": "2001",
            "numberOfStudents": "47520",
            "sameAs": [
              "https://www.facebook.com/aushnaracollege",
              "https://twitter.com/aushnaracollege",
              "https://www.linkedin.com/school/aushnaracollege"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "2847",
              "bestRating": "5"
            }
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
      {/* Hero Section - Premium Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 lg:py-32">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-college-gold rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
              <Shield className="h-4 w-4 text-college-gold" />
              <span className="text-sm font-semibold">Established 2001 • 23+ Years of Excellence</span>
              <Star className="h-4 w-4 text-college-gold fill-college-gold" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="block mb-2">Excellence in Education</span>
              <span className="bg-gradient-to-r from-college-gold via-yellow-300 to-college-gold bg-clip-text text-transparent">
                Shaping Future Leaders
              </span>
            </h1>

            {/* Subheading with Icons */}
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-blue-100 leading-relaxed">
              Join 47,520+ students at Bangladesh's most trusted educational institution. 
              <span className="block mt-2 font-semibold text-white">310+ Programs • World-Class Faculty • 98.7% Success Rate</span>
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">Govt. Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <Trophy className="h-5 w-5 text-college-gold" />
                <span className="text-sm font-medium">Award Winning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <TrendingUp className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">97.3% Pass Rate</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <Users className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium">2,847+ HSC Students</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/admissions" 
                className="group bg-gradient-to-r from-college-gold to-yellow-500 hover:from-yellow-500 hover:to-college-gold text-gray-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Apply for Admission 2026-27
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/programs" 
                className="group border-2 border-white/50 text-white hover:bg-white hover:text-college-blue px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm hover:border-white inline-flex items-center"
              >
                Explore Programs
                <BookOpen className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="text-sm text-blue-200 mb-4">Trusted by thousands of students and parents across Bangladesh</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Free Campus Tours
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Scholarships Available
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Expert Career Counseling
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  24/7 Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Icon based on stat type */}
                <div className="relative mb-4">
                  {index === 0 && <Users className="h-8 w-8 text-blue-500 mx-auto" />}
                  {index === 1 && <GraduationCap className="h-8 w-8 text-purple-500 mx-auto" />}
                  {index === 2 && <BookOpen className="h-8 w-8 text-green-500 mx-auto" />}
                  {index === 3 && <Trophy className="h-8 w-8 text-yellow-500 mx-auto" />}
                </div>
                
                <div className="relative text-center">
                  <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>

                {/* Animated shine effect */}
                <div className="absolute inset-0 -top-full group-hover:top-full bg-gradient-to-b from-transparent via-white/20 to-transparent transition-all duration-1000"></div>
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
              for success in their academic and professional careers. Learn more{' '}
              <Link to="/about" className="text-college-blue hover:underline font-semibold">
                about our history and achievements
              </Link>.
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
            <p className="text-lg text-gray-600 mb-4">
              310+ Programs | 9 Faculties | 45 Departments | World-Class Education
            </p>
            <Link 
              to="/programs" 
              className="inline-flex items-center text-college-blue font-semibold hover:text-blue-800"
            >
              View All Programs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get quick answers to common questions about Aushnara College
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200">
                <summary className="flex items-start justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <span className="text-college-blue text-2xl font-bold group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-college-blue hover:text-blue-800 font-semibold"
            >
              Contact our support team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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
            Have questions? <Link to="/contact" className="underline hover:text-white">Contact our admissions team</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/admissions" 
              className="bg-college-gold hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/programs" 
              className="border-2 border-white text-white hover:bg-white hover:text-college-blue px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home