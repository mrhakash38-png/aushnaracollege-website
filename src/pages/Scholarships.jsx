import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Award, 
  GraduationCap, 
  DollarSign, 
  FileText, 
  Calendar, 
  CheckCircle, 
  Users, 
  TrendingUp,
  AlertCircle,
  Download,
  ArrowRight
} from 'lucide-react'

export default function Scholarships() {
  const scholarships = [
    {
      id: 1,
      name: "Merit-Based Scholarship",
      amount: "Up to 100% tuition waiver",
      eligibility: "SSC & HSC GPA 5.0 or equivalent",
      coverage: "Full tuition fees for the entire program",
      deadline: "15 days after admission",
      icon: Award,
      color: "blue"
    },
    {
      id: 2,
      name: "Need-Based Financial Aid",
      amount: "25% - 75% tuition reduction",
      eligibility: "Family income below BDT 30,000/month",
      coverage: "Partial tuition based on financial need assessment",
      deadline: "Rolling applications",
      icon: Users,
      color: "green"
    },
    {
      id: 3,
      name: "Academic Excellence Award",
      amount: "50% tuition waiver",
      eligibility: "Combined SSC & HSC GPA 9.0+",
      coverage: "50% reduction on all semester fees",
      deadline: "During admission process",
      icon: GraduationCap,
      color: "purple"
    },
    {
      id: 4,
      name: "Sports & Cultural Scholarship",
      amount: "30% - 50% tuition reduction",
      eligibility: "National/District level achievements",
      coverage: "Tuition reduction based on achievement level",
      deadline: "With supporting certificates",
      icon: TrendingUp,
      color: "orange"
    },
    {
      id: 5,
      name: "Siblings Discount",
      amount: "15% tuition reduction",
      eligibility: "Two or more siblings enrolled",
      coverage: "Applied to all siblings' tuition fees",
      deadline: "At the time of admission",
      icon: Users,
      color: "indigo"
    },
    {
      id: 6,
      name: "Freedom Fighter Quota",
      amount: "50% tuition waiver",
      eligibility: "Children/grandchildren of freedom fighters",
      coverage: "50% discount with valid certificates",
      deadline: "During admission with documents",
      icon: Award,
      color: "red"
    }
  ]

  const applicationSteps = [
    {
      step: 1,
      title: "Complete Admission",
      description: "Get accepted to your desired program first"
    },
    {
      step: 2,
      title: "Submit Application",
      description: "Fill out the scholarship application form"
    },
    {
      step: 3,
      title: "Provide Documents",
      description: "Submit academic records, income certificates, or achievement proof"
    },
    {
      step: 4,
      title: "Wait for Review",
      description: "Scholarship committee reviews within 7-10 days"
    },
    {
      step: 5,
      title: "Receive Decision",
      description: "Get notified via email and student portal"
    }
  ]

  const requiredDocuments = [
    "SSC & HSC mark sheets and certificates",
    "Family income certificate (for need-based aid)",
    "National ID or Birth Certificate",
    "Passport-size photographs (2 copies)",
    "Freedom fighter certificate (if applicable)",
    "Sports/cultural achievement certificates (if applicable)",
    "Recommendation letter from school principal (optional)"
  ]

  const faqs = [
    {
      question: "Can I apply for multiple scholarships?",
      answer: "Yes, you can apply for multiple scholarships. However, you can only receive one primary scholarship (merit or need-based) along with supplementary benefits like sibling discounts."
    },
    {
      question: "Do I need to maintain grades to keep my scholarship?",
      answer: "Yes, merit-based scholarships require maintaining a minimum CGPA of 3.5 throughout your program. If your GPA falls below this threshold for two consecutive semesters, the scholarship may be revoked."
    },
    {
      question: "When will I know if I received a scholarship?",
      answer: "Scholarship decisions are typically communicated within 7-10 business days after submitting your complete application with all required documents."
    },
    {
      question: "Is the scholarship renewable each year?",
      answer: "Yes, all scholarships are renewable each academic year, subject to meeting the continuation criteria (academic performance and conduct standards)."
    },
    {
      question: "Can international students apply for scholarships?",
      answer: "Currently, scholarships are available only to Bangladeshi nationals. International students should contact the admissions office for information about fee waivers or payment plans."
    },
    {
      question: "What if my family's financial situation changes?",
      answer: "If your family experiences a significant financial hardship during your studies, you can apply for emergency financial aid. Contact the Financial Aid Office with updated documentation."
    },
    {
      question: "Are there scholarships for postgraduate programs?",
      answer: "Yes, we offer merit-based scholarships for postgraduate students. The criteria and amounts vary by program. Check with your specific department for details."
    },
    {
      question: "How is the scholarship amount applied to my fees?",
      answer: "Scholarship discounts are automatically deducted from your tuition fees each semester. You only pay the remaining balance after the scholarship reduction."
    }
  ]

  const stats = [
    { label: "Students Receiving Aid", value: "45%", icon: Users },
    { label: "Total Scholarships Awarded", value: "350+", icon: Award },
    { label: "Annual Financial Aid", value: "৳2.5 Crore", icon: DollarSign },
    { label: "Average Scholarship", value: "৳75,000", icon: TrendingUp }
  ]

  return (
    <>
      <Helmet>
        <title>Scholarships & Financial Aid - Up to 100% Tuition Waiver | Aushnara College</title>
        <meta name="description" content="Explore scholarship opportunities at Aushnara College. Merit-based scholarships, need-based financial aid, and special grants available. Up to 100% tuition waiver for eligible students." />
        <meta name="keywords" content="aushnara college scholarships, financial aid Bangladesh, merit scholarship, need-based aid, tuition waiver, education funding, student grants, scholarship application" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://aushnaracollege.edu.bd/scholarships" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aushnaracollege.edu.bd/scholarships" />
        <meta property="og:title" content="Scholarships & Financial Aid - Aushnara College" />
        <meta property="og:description" content="Up to 100% tuition waiver available. Apply for merit-based scholarships, need-based financial aid, and special grants." />
        <meta property="og:image" content="https://aushnaracollege.edu.bd/og-scholarships.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aushnaracollege.edu.bd/scholarships" />
        <meta name="twitter:title" content="Scholarships & Financial Aid - Aushnara College" />
        <meta name="twitter:description" content="Up to 100% tuition waiver. Merit-based, need-based aid & special grants available." />
        <meta name="twitter:image" content="https://aushnaracollege.edu.bd/og-scholarships.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Scholarships & Financial Aid",
            "description": "Comprehensive scholarship and financial aid programs at Aushnara College",
            "provider": {
              "@type": "CollegeOrUniversity",
              "name": "Aushnara College"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Award className="w-4 h-4" />
              <span>Financial Aid Programs 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Scholarships & Financial Aid
            </h1>
            <p className="text-xl sm:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              We believe talent deserves opportunity. Explore our comprehensive scholarship programs designed to make quality education accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#scholarships"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
              >
                <Award className="w-5 h-5" />
                View Scholarships
              </a>
              <Link 
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-green-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-500/30 transition-all border border-white/20"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Scholarships */}
      <section id="scholarships" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Available Scholarships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple scholarship opportunities to support your academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {scholarships.map((scholarship) => {
              const Icon = scholarship.icon
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                green: 'bg-green-100 text-green-600 border-green-200',
                purple: 'bg-purple-100 text-purple-600 border-purple-200',
                orange: 'bg-orange-100 text-orange-600 border-orange-200',
                indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
                red: 'bg-red-100 text-red-600 border-red-200'
              }

              return (
                <div key={scholarship.id} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[scholarship.color]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {scholarship.name}
                      </h3>
                      <div className="text-lg font-semibold text-green-600">
                        {scholarship.amount}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Eligibility</div>
                        <div className="text-gray-600">{scholarship.eligibility}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Coverage</div>
                        <div className="text-gray-600">{scholarship.coverage}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Calendar className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Application Deadline</div>
                        <div className="text-gray-600">{scholarship.deadline}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 5-step process to apply for scholarships
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {applicationSteps.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Required Documents
              </h2>
              <p className="text-xl text-gray-600">
                Prepare these documents for your scholarship application
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200">
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-lg">{doc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div className="text-sm text-blue-900">
                    <strong>Important:</strong> All documents must be original or certified copies. Incomplete applications will not be processed.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about scholarships and financial aid
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-700 pl-6">
                    <strong className="text-gray-900">A:</strong> {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Apply for a Scholarship?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Start your admission process first, then submit your scholarship application. Our financial aid team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg"
            >
              <GraduationCap className="w-5 h-5" />
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-500/30 transition-all border border-white/20"
            >
              Contact Financial Aid Office
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
