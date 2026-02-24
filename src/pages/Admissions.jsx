import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, FileText, DollarSign, CheckCircle, AlertCircle, Clock, Users, Award, Download, Phone, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import { ADMISSIONS_CYCLE, CONTACT_INFO, STUDENT_COUNTS } from '../config/siteContent'
import { formatLongDate, getAdmissionsTimeline, getApplicationWindowStatus } from '../utils/admissionsCycle'

function Admissions() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }
  const timeline = getAdmissionsTimeline(new Date())
  const admissionsWindowStatus = getApplicationWindowStatus(new Date())
  const admissionsNoticeTitle = admissionsWindowStatus === 'open'
    ? `HSC Admissions ${ADMISSIONS_CYCLE.label} Now Open!`
    : admissionsWindowStatus === 'upcoming'
      ? `HSC Admissions ${ADMISSIONS_CYCLE.label} Opening Soon`
      : `HSC Admissions ${ADMISSIONS_CYCLE.label} Closed`

  const admissionsNoticeBody = admissionsWindowStatus === 'open'
    ? `Applications for HSC admission (Science, Commerce & Arts) are now being accepted. Deadline: ${formatLongDate(ADMISSIONS_CYCLE.applicationDeadline)}.`
    : admissionsWindowStatus === 'upcoming'
      ? `Applications will open on ${formatLongDate(ADMISSIONS_CYCLE.applicationStart)} for HSC admission (Science, Commerce & Arts).`
      : `The ${ADMISSIONS_CYCLE.label} cycle deadline passed on ${formatLongDate(ADMISSIONS_CYCLE.applicationDeadline)}. Please contact the admissions office for the next intake.`

  const requirements = [
    {
      title: 'Academic Documents',
      items: [
        'SSC/Equivalent certificate (original + 2 copies)',
        'SSC transcript/mark sheet (original + 2 copies)',
        'School leaving certificate from last institution',
        'Character certificate from previous school'
      ]
    },
    {
      title: 'Personal Documents',
      items: [
        'Birth certificate (original + 2 copies)',
        'National ID card copy (if available)',
        'Passport size photographs (6 copies)',
        'Guardian\'s National ID card copy'
      ]
    },
    {
      title: 'Additional Requirements',
      items: [
        'Completed application form',
        'Admission test fee payment receipt',
        'Medical certificate (if required)',
        'Guardian consent letter'
      ]
    }
  ]

  const fees = [
    {
      program: 'Science',
      admission: '৳8,000',
      monthly: '৳4,200',
      annual: '৳50,400',
      total: '৳1,08,800'
    },
    {
      program: 'Commerce',
      admission: '৳6,500',
      monthly: '৳3,800',
      annual: '৳45,600',
      total: '৳97,700'
    },
    {
      program: 'Arts',
      admission: '৳6,000',
      monthly: '৳3,500',
      annual: '৳42,000',
      total: '৳90,000'
    }
  ]

  const scholarships = [
    {
      name: 'Merit Scholarship',
      criteria: 'Top 10% students based on admission test',
      benefit: 'Up to 50% tuition fee waiver',
      icon: Award
    },
    {
      name: 'Need-based Aid',
      criteria: 'Students from economically disadvantaged families',
      benefit: 'Up to 30% tuition fee reduction',
      icon: Users
    },
    {
      name: 'Sports Excellence',
      criteria: 'Outstanding performance in sports',
      benefit: 'Up to 25% tuition fee waiver',
      icon: CheckCircle
    }
  ]

  const faqs = [
    {
      question: 'What are the eligibility criteria for HSC admission?',
      answer: `Students must have passed SSC/equivalent examination with minimum GPA 3.5 for Science, 3.0 for Commerce, and 2.5 for Arts. Age limit: 17-21 years as of ${formatLongDate(ADMISSIONS_CYCLE.classesBeginDate)}.`
    },
    {
      question: 'How can I apply for admission?',
      answer: 'You can apply online through our website or visit the admission office in person. Download the application form, fill it out completely, and submit along with required documents and admission test fee.'
    },
    {
      question: 'Is there an admission test?',
      answer: 'Yes, all applicants must take an admission test consisting of written exam (MCQ + Written) and viva voce. The test covers subjects relevant to your chosen stream. Syllabus is based on SSC curriculum.'
    },
    {
      question: 'What is the admission test fee?',
      answer: 'The admission test fee is ৳500 for all programs. This fee is non-refundable and separate from the admission fee.'
    },
    {
      question: 'Can I change my subject group after admission?',
      answer: 'Subject group changes are allowed only within the first 2 weeks of the academic session, subject to seat availability and fulfillment of eligibility criteria for the desired group.'
    },
    {
      question: 'Are there hostel facilities available?',
      answer: 'Currently, Aushnara College does not have on-campus hostel facilities. However, we maintain a list of approved off-campus accommodations near the college for outstation students.'
    },
    {
      question: 'How do I apply for scholarships?',
      answer: 'Scholarship applications are automatically considered based on admission test performance and submitted documents. Need-based aid requires additional income certificate submission.'
    },
    {
      question: 'What is the refund policy?',
      answer: 'Admission fees are non-refundable after confirmation. Monthly fees paid in advance may be refunded for the months not attended, subject to written request and college policy.'
    },
    {
      question: 'Can I visit the campus before applying?',
      answer: 'Yes! Campus tours are available Monday-Friday, 10:00 AM - 4:00 PM. We recommend scheduling a visit by calling our admission office at +880-2-58154893.'
    },
    {
      question: 'When will the admission results be published?',
      answer: `Merit list will be published on ${formatLongDate(ADMISSIONS_CYCLE.meritListDate)} on our website and notice board. Selected candidates will also receive SMS/email notifications.`
    },
    {
      question: 'What documents do I need for the admission test?',
      answer: 'Bring your SSC admit card or registration card, admission test admit card (downloaded from website), and one passport-size photograph.'
    },
    {
      question: 'Is coaching available for admission test preparation?',
      answer: 'The college does not offer official coaching. However, we publish detailed syllabus guidelines and previous years\' question patterns on our website to help candidates prepare.'
    }
  ]

  const downloads = [
    { name: `College Prospectus ${ADMISSIONS_CYCLE.label}`, size: '2.4 MB', type: 'PDF' },
    { name: 'Admission Application Form', size: '156 KB', type: 'PDF' },
    { name: 'Admission Test Syllabus', size: '428 KB', type: 'PDF' },
    { name: 'Fee Structure Details', size: '312 KB', type: 'PDF' },
    { name: 'Scholarship Application Form', size: '198 KB', type: 'PDF' }
  ]

  const testimonials = [
    {
      name: 'Ruhul Amin',
      batch: 'HSC 2024 - Science',
      image: '👨‍🎓',
      text: 'Aushnara College provided me with excellent faculty and resources. I scored GPA 5.0 and got admitted to Dhaka University. The supportive environment here is unmatched!'
    },
    {
      name: 'Tasnia Ahmed',
      batch: 'HSC 2024 - Commerce',
      image: '👩‍🎓',
      text: 'The practical approach to teaching and individual attention from teachers helped me excel in both academics and extracurricular activities. Highly recommend!'
    },
    {
      name: 'Fahim Hassan',
      batch: 'HSC 2023 - Science',
      image: '👨‍🎓',
      text: 'From a small-town student to getting admission in BUET - Aushnara College made it possible. The disciplined environment and quality education transformed my life.'
    }
  ]

  return (
    <div className="pt-8">
      <Helmet>
        <title>{`HSC Admission ${ADMISSIONS_CYCLE.label} - Apply Now | Aushnara College`}</title>
        <meta name="description" content={`Apply for HSC admission ${ADMISSIONS_CYCLE.label} at Aushnara College. Science, Commerce & Arts programs. Application deadline: ${formatLongDate(ADMISSIONS_CYCLE.applicationDeadline)}. 97.3% pass rate, scholarships available. Online & offline application accepted.`} />
        <meta name="keywords" content={`HSC admission ${ADMISSIONS_CYCLE.keywordYear}, college admission Bangladesh, Aushnara admission, apply HSC, admission process, admission fee, scholarship, application form, merit list, admission test`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://aushnaracollege.edu.bd/admissions" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aushnaracollege.edu.bd/admissions" />
        <meta property="og:title" content={`HSC Admission ${ADMISSIONS_CYCLE.label} - Apply Now | Aushnara College`} />
        <meta property="og:description" content={`Apply for HSC admission ${ADMISSIONS_CYCLE.label}. Science, Commerce & Arts. Application open till ${formatLongDate(ADMISSIONS_CYCLE.applicationDeadline)}. 97.3% pass rate. Scholarships available.`} />
        <meta property="og:image" content="https://aushnaracollege.edu.bd/og-admissions.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aushnaracollege.edu.bd/admissions" />
        <meta name="twitter:title" content={`HSC Admission ${ADMISSIONS_CYCLE.label} - Apply Now`} />
        <meta name="twitter:description" content={`Apply for HSC admission. Science, Commerce & Arts. 97.3% pass rate. Deadline: ${formatLongDate(ADMISSIONS_CYCLE.applicationDeadline)}.`} />
        <meta name="twitter:image" content="https://aushnaracollege.edu.bd/og-admissions.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Admissions",
            "description": "HSC admission process and requirements for Aushnara College",
            "provider": {
              "@type": "CollegeOrUniversity",
              "name": "Aushnara College"
            },
            "offers": {
              "@type": "EducationalOccupationalProgram",
              "name": "HSC Programs",
              "description": "Higher Secondary Certificate programs in Science, Commerce, and Arts",
              "provider": {
                "@type": "CollegeOrUniversity",
                "name": "Aushnara College"
              },
              "timeToComplete": "P2Y",
              "applicationDeadline": ADMISSIONS_CYCLE.applicationDeadline
            }
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{`Admissions ${ADMISSIONS_CYCLE.label}`}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Join Our Academic Community
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <AlertCircle className="h-6 w-6 text-yellow-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800">{admissionsNoticeTitle}</h3>
              <p className="text-yellow-700">{admissionsNoticeBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Timeline</h2>
            <p className="text-lg text-gray-600">Important dates for the admission process</p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    item.status === 'open'
                      ? 'bg-green-500'
                      : item.status === 'completed'
                        ? 'bg-blue-500'
                        : 'bg-gray-300'
                  }`}>
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.event}</h3>
                  <p className="text-gray-600">{item.date}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    item.status === 'open'
                      ? 'bg-green-100 text-green-800'
                      : item.status === 'completed'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                  }`}>
                    {item.status === 'open' ? 'Open' : item.status === 'completed' ? 'Completed' : 'Upcoming'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
            <p className="text-lg text-gray-600">Documents and materials needed for application</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg card-shadow">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-college-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <p className="text-lg text-gray-600">Transparent and affordable fee structure for all programs</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg card-shadow overflow-hidden">
              <thead className="bg-college-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Program</th>
                  <th className="px-6 py-4 text-center">Admission Fee</th>
                  <th className="px-6 py-4 text-center">Monthly Fee</th>
                  <th className="px-6 py-4 text-center">Annual Fee</th>
                  <th className="px-6 py-4 text-center">Total (2 Years)</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{fee.program}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{fee.admission}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{fee.monthly}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{fee.annual}</td>
                    <td className="px-6 py-4 text-center font-semibold text-college-blue">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start">
              <DollarSign className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Payment Information</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Fees can be paid in installments as per college policy</li>
                  <li>• Additional costs for books, uniforms, and activities are separate</li>
                  <li>• Fees are subject to annual review and may change</li>
                  <li>• No refund of fees after admission confirmation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scholarships & Aid</h2>
            <p className="text-lg text-gray-600">Financial support for deserving students</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white p-8 rounded-lg card-shadow hover-lift text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-college-gold text-white rounded-full mb-6">
                  <scholarship.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{scholarship.name}</h3>
                <p className="text-gray-600 mb-4">{scholarship.criteria}</p>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
                  {scholarship.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Apply</h2>
            <p className="text-lg text-gray-600">Simple steps to complete your application</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Online Application', description: 'Fill out the online application form with accurate information' },
              { step: 2, title: 'Document Submission', description: 'Submit required documents at the admission office' },
              { step: 3, title: 'Admission Test', description: 'Appear for the admission test on the scheduled date' },
              { step: 4, title: 'Enrollment', description: 'Complete enrollment formalities after selection' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-college-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Downloads & Resources</h2>
            <p className="text-lg text-gray-600">Important documents and information</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((download, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow hover-lift flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-10 w-10 text-college-blue mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{download.name}</h3>
                    <p className="text-sm text-gray-500">{download.type} • {download.size}</p>
                  </div>
                </div>
                <button className="bg-college-blue text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600">Hear from our successful alumni</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg card-shadow">
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.batch}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common admission queries</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg card-shadow overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-college-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600">Our admissions team is here to help</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg card-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-college-blue text-white rounded-full mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-2">Admissions Office</p>
              <a href={`tel:${CONTACT_INFO.admissionsPhoneUri}`} className="text-college-blue font-semibold text-lg hover:underline">
                {CONTACT_INFO.admissionsPhoneDisplay}
              </a>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri: 9:00 AM - 5:00 PM</p>
            </div>

            <div className="bg-white p-8 rounded-lg card-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-college-blue text-white rounded-full mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-2">Admissions Enquiries</p>
              <a href={`mailto:${CONTACT_INFO.admissionsEmail}`} className="text-college-blue font-semibold hover:underline break-all">
                {CONTACT_INFO.admissionsEmail}
              </a>
              <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
            </div>

            <div className="bg-white p-8 rounded-lg card-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-college-blue text-white rounded-full mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-2">Admissions Office</p>
              <p className="text-gray-800 font-medium">23/A, Dhanmondi R/A</p>
              <p className="text-gray-800">Dhaka-1205, Bangladesh</p>
              <p className="text-sm text-gray-500 mt-2">Open for campus tours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Future Starts Here</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Join {STUDENT_COUNTS.hscEnrollmentLabel} students building successful careers at Aushnara College
            </p>
            <p className="text-lg text-blue-200 mb-10">
              ⏰ Applications close on <span className="font-bold text-white">{formatLongDate(ADMISSIONS_CYCLE.applicationDeadline)}</span> — Don't miss out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-college-gold hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-xl transition-all duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                🎓 Apply Online Now
              </button>
              <a 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-college-blue px-10 py-4 rounded-lg font-bold text-xl transition-all duration-200 w-full sm:w-auto"
              >
                📞 Contact Admissions
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              ✓ Online application • ✓ Instant confirmation • ✓ 24/7 status tracking
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions
