import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Clock, Send, Users, MessageCircle, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (submitStatus) setSubmitStatus(null) // Clear status when user starts typing
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Campus Address',
      details: ['23/A, Dhanmondi R/A', 'Dhaka-1205', 'Bangladesh'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+880-2-58154892 (Main)', '+880-2-58154893 (Admissions)', '+880-2-58154894 (Academic)'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@aushnaracollege.edu.bd', 'admissions@aushnaracollege.edu.bd', 'academic@aushnaracollege.edu.bd'],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Sunday - Thursday: 8:00 AM - 4:00 PM', 'Friday: 8:00 AM - 12:00 PM', 'Saturday: Closed'],
      color: 'text-orange-600'
    }
  ]

  const departments = [
    {
      name: 'Principal\'s Office',
      phone: '+880-2-58154892',
      email: 'principal@aushnaracollege.edu.bd',
      hours: 'Sun-Thu: 9:00 AM - 4:00 PM'
    },
    {
      name: 'Admissions Office',
      phone: '+880-2-58154893',
      email: 'admissions@aushnaracollege.edu.bd',
      hours: 'Sun-Thu: 8:00 AM - 5:00 PM'
    },
    {
      name: 'Academic Office',
      phone: '+880-2-58154894',
      email: 'academic@aushnaracollege.edu.bd',
      hours: 'Sun-Thu: 8:30 AM - 4:30 PM'
    },
    {
      name: 'Student Affairs',
      phone: '+880-2-58154895',
      email: 'students@aushnaracollege.edu.bd',
      hours: 'Sun-Thu: 8:00 AM - 4:00 PM'
    }
  ]

  const faqs = [
    {
      question: "What are your office hours?",
      answer: "Our main office is open Sunday to Thursday, 9:00 AM - 5:00 PM. The Admissions Office operates extended hours during admission season (December-February): Sunday to Thursday 9:00 AM - 7:00 PM, and Saturday 10:00 AM - 4:00 PM. We are closed on Fridays and public holidays."
    },
    {
      question: "How quickly will I receive a response to my inquiry?",
      answer: "We aim to respond to all email inquiries within 24 hours during business days. Phone inquiries are handled immediately during office hours. For urgent admission-related questions during peak season (January-February), our team provides same-day responses. You can also use our contact form for non-urgent matters."
    },
    {
      question: "Can I visit the campus for a tour?",
      answer: "Yes! We offer free guided campus tours Monday to Thursday at 10:00 AM and 2:00 PM. Tours last approximately 90 minutes and include visits to classrooms, laboratories, library, sports facilities, and cafeteria. Please call +880-2-58154893 or email admissions@aushnaracollege.edu.bd at least 2 days in advance to book your tour."
    },
    {
      question: "What documents should I bring when visiting the admissions office?",
      answer: "For admission consultation, please bring: original SSC/HSC certificates and transcripts, passport-size photographs (4 copies), National ID card or birth certificate copy, and guardian's NID copy. For document submission, bring 2 photocopies of all original documents. Our staff will verify originals and retain copies."
    }
  ]

  return (
    <div className="pt-8">
      <Helmet>
        <title>Contact Us - Get in Touch | Aushnara College</title>
        <meta name="description" content="Contact Aushnara College for admissions, academic inquiries, or campus information. Call +880-2-58154892, email info@aushnaracollege.edu.bd or visit us at Dhanmondi, Dhaka. Office hours: 9 AM - 5 PM." />
        <meta name="keywords" content="contact aushnara college, college phone number, admission inquiry, campus address, email, office hours, contact form, get in touch, visit campus" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://aushnaracollege.edu.bd/contact" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aushnaracollege.edu.bd/contact" />
        <meta property="og:title" content="Contact Aushnara College - Get in Touch" />
        <meta property="og:description" content="Call +880-2-58154892 or email info@aushnaracollege.edu.bd. Visit us at Dhanmondi, Dhaka. We're here to help with admissions and inquiries." />
        <meta property="og:image" content="https://aushnaracollege.edu.bd/og-contact.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aushnaracollege.edu.bd/contact" />
        <meta name="twitter:title" content="Contact Aushnara College" />
        <meta name="twitter:description" content="Call +880-2-58154892 or visit us at Dhanmondi, Dhaka. We're here to help." />
        <meta name="twitter:image" content="https://aushnaracollege.edu.bd/og-contact.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "CollegeOrUniversity",
              "name": "Aushnara College",
              "url": "https://aushnaracollege.edu.bd",
              "telephone": "+880-2-58154892",
              "email": "info@aushnaracollege.edu.bd",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "23/A, Dhanmondi R/A",
                "addressLocality": "Dhaka",
                "postalCode": "1205",
                "addressCountry": "BD"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "23.7808875",
                "longitude": "90.4218063"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
                "opens": "09:00",
                "closes": "17:00"
              }
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-college-gold text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              💬 We're Here to Help
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-8">
              Questions about admissions, programs, or campus life? Our team is ready to assist you.
            </p>
            
            {/* Quick Contact Options */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href="tel:+880258154893" 
                className="bg-white text-college-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Admissions
              </a>
              <a 
                href="mailto:admissions@aushnaracollege.edu.bd" 
                className="bg-white/10 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-college-blue transition-colors flex items-center backdrop-blur-sm"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
              <a 
                href="#contact-form" 
                className="bg-white/10 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-college-blue transition-colors flex items-center backdrop-blur-sm"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Send Message
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Free campus tours</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Expert guidance available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-lg text-gray-600">Multiple ways to reach us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow hover-lift text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${info.color} bg-gray-100 rounded-full mb-6`}>
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {info.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {/* Success/Error Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">Message Sent Successfully!</h3>
                    <p className="text-green-700 text-sm">
                      Thank you for contacting us. We'll respond to your inquiry within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Submission Failed</h3>
                    <p className="text-red-700 text-sm">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-college-blue focus:border-college-blue transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-college-blue focus:border-college-blue transition-colors"
                      placeholder="+880-2-58154892"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-college-blue focus:border-college-blue transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-college-blue focus:border-college-blue transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="academic">Academic Information</option>
                    <option value="fees">Fee Structure</option>
                    <option value="facilities">Facilities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-college-blue focus:border-college-blue transition-colors resize-none"
                    placeholder="Please describe your inquiry in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-college-blue hover:bg-blue-700 transform hover:scale-105 shadow-lg'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by our admissions team.
                </p>
              </form>
            </div>

            {/* Map + Visit Actions */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Campus</h2>

              <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                <iframe
                  title="Aushnara College Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=90.3660%2C23.7430%2C90.3790%2C23.7560&layer=mapnik&marker=23.7495%2C90.3725"
                  className="w-full h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aushnara+College,+Dhanmondi,+Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-college-blue text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Open in Google Maps
                </a>
                <a
                  href="https://www.openstreetmap.org/?mlat=23.7495&mlon=90.3725#map=16/23.7495/90.3725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-college-blue text-college-blue px-4 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Open in OpenStreetMap
                </a>
              </div>

              {/* Directions */}
              <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Reach Us</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-college-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span>Take bus to Dhanmondi Bus Stand or Metro to Dhanmondi Station</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-college-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span>College is 3 minutes walk from Dhanmondi-27 intersection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-college-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span>Look for the Aushnara College main gate with blue signboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-lg text-gray-600">Direct contact information for specific departments</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow hover-lift">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-college-blue text-white rounded-lg mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{dept.name}</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>{dept.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        <span>{dept.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{dept.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Can Help You</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team assists thousands of students and parents every year
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Admissions Guidance',
                description: 'Get expert help with applications, requirements, and deadlines',
                count: '2,800+ helped'
              },
              {
                icon: '💰',
                title: 'Financial Aid Info',
                description: 'Learn about scholarships, fee waivers, and payment plans',
                count: '500+ scholarships'
              },
              {
                icon: '🏫',
                title: 'Campus Tours',
                description: 'Schedule a personalized tour of our facilities and classrooms',
                count: '1,200+ tours/year'
              },
              {
                icon: '📚',
                title: 'Program Counseling',
                description: 'Find the right academic program for your career goals',
                count: '310+ programs'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow hover-lift text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="text-xs font-semibold text-college-blue">{item.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency & Urgent Contact */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <AlertCircle className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Need Urgent Assistance?</h3>
                <p className="text-gray-700">For time-sensitive admissions queries or emergencies</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+880258154893" 
                className="bg-college-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                📞 Call: +880-2-58154893
              </a>
              <a 
                href="mailto:urgent@aushnaracollege.edu.bd" 
                className="bg-white text-college-blue border-2 border-college-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                📧 urgent@aushnaracollege.edu.bd
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common inquiries</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                question: 'What are the admission requirements?',
                answer: 'SSC or equivalent certificate with minimum GPA requirements based on the chosen program. Detailed requirements are available on our Admissions page.'
              },
              {
                question: 'When do classes start?',
                answer: 'New academic year typically begins in July. Exact dates are announced after the completion of admission process.'
              },
              {
                question: 'Are scholarships available?',
                answer: 'Yes, we offer merit-based scholarships, need-based aid, and sports excellence scholarships for deserving students.'
              },
              {
                question: 'What facilities does the college provide?',
                answer: 'Modern classrooms, science laboratories, computer lab, library, sports facilities, cafeteria, and transportation services.'
              },
              {
                question: 'How can I visit the campus?',
                answer: 'Campus visits can be arranged by contacting our admissions office. We conduct guided tours for prospective students and parents.'
              },
              {
                question: 'What is the medium of instruction?',
                answer: 'Classes are conducted in both Bangla and English depending on the subject and program requirements.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <MessageCircle className="h-5 w-5 text-college-blue mr-2 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Students & Parents Say</h2>
            <p className="text-lg text-gray-600">Real feedback from our college community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Mrs. Sultana Ahmed',
                role: 'Parent of HSC Student',
                text: 'The admissions team was incredibly helpful and patient with all my questions. They made the entire process smooth and stress-free for my daughter.',
                rating: 5
              },
              {
                name: 'Imran Hossain',
                role: 'HSC Science - 2024',
                text: 'I had doubts about which stream to choose. The counseling session helped me understand my strengths and I\'m now confident in my Science group choice.',
                rating: 5
              },
              {
                name: 'Nusrat Jahan',
                role: 'Parent of Commerce Student',
                text: 'Quick response to emails, clear information about fees and scholarships. The transparency helped us make an informed decision.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg card-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
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
              Quick answers about contacting Aushnara College
            </p>
          </div>

          <div className="space-y-6">
            <details className="group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200">
              <summary className="flex items-start justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  What are your office hours?
                </h3>
                <span className="text-college-blue text-2xl font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our main office is open Sunday to Thursday, 9:00 AM - 5:00 PM. The Admissions Office operates extended hours during admission season (December-February): Sunday to Thursday 9:00 AM - 7:00 PM, and Saturday 10:00 AM - 4:00 PM. We are closed on Fridays and public holidays.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200">
              <summary className="flex items-start justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  How quickly will I receive a response to my inquiry?
                </h3>
                <span className="text-college-blue text-2xl font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We aim to respond to all email inquiries within 24 hours during business days. Phone inquiries are handled immediately during office hours. For urgent admission-related questions during peak season (January-February), our team provides same-day responses. You can also use our contact form for non-urgent matters.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200">
              <summary className="flex items-start justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  Can I visit the campus for a tour?
                </h3>
                <span className="text-college-blue text-2xl font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes! We offer free guided campus tours Monday to Thursday at 10:00 AM and 2:00 PM. Tours last approximately 90 minutes and include visits to classrooms, laboratories, library, sports facilities, and cafeteria. Please call +880-2-58154893 or email admissions@aushnaracollege.edu.bd at least 2 days in advance to book your tour.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200">
              <summary className="flex items-start justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  What documents should I bring when visiting the admissions office?
                </h3>
                <span className="text-college-blue text-2xl font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                For admission consultation, please bring: original SSC/HSC certificates and transcripts, passport-size photographs (4 copies), National ID card or birth certificate copy, and guardian's NID copy. For document submission, bring 2 photocopies of all original documents. Our staff will verify originals and retain copies.
              </p>
            </details>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Didn't find your answer?</p>
            <a 
              href="tel:+88025815489 2"
              className="inline-flex items-center text-college-blue hover:text-blue-800 font-semibold"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call us at +880-2-58154892
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Join 2,847+ students at Aushnara College — Bangladesh's premier educational institution
            </p>
            <p className="text-lg text-blue-200 mb-10">
              ⏰ HSC Admissions 2026-27 close on <span className="font-bold text-white">February 28, 2026</span>
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl mb-2">📞</div>
                <div className="font-semibold">Call Us</div>
                <div className="text-sm text-blue-100">+880-2-58154893</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl mb-2">📧</div>
                <div className="font-semibold">Email Us</div>
                <div className="text-sm text-blue-100">24hr response time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl mb-2">🏫</div>
                <div className="font-semibold">Visit Campus</div>
                <div className="text-sm text-blue-100">Free guided tours</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/admissions" 
                className="bg-college-gold hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                🎓 Apply for Admission
              </a>
              <a 
                href="tel:+880258154893" 
                className="border-2 border-white text-white hover:bg-white hover:text-college-blue px-10 py-4 rounded-lg font-bold text-xl transition-all duration-200"
              >
                📞 Call Admissions Team
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              ✓ Expert guidance • ✓ Free counseling • ✓ Campus tours available
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact