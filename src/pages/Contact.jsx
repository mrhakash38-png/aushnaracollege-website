import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Users, MessageCircle } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
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

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Get in Touch with Aushnara College
            </p>
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
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
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
                  className="w-full bg-college-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Interactive Map Coming Soon</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Aushnara College<br />
                    23/A, Dhanmondi R/A, Dhaka-1205<br />
                    Bangladesh
                  </p>
                </div>
              </div>

              {/* Directions */}
              <div className="mt-8 bg-white p-6 rounded-lg card-shadow">
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

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our friendly staff is here to help. Don't hesitate to reach out for any information 
            about Aushnara College.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+880258154892" 
              className="bg-college-gold hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call Us Now
            </a>
            <a 
              href="/admissions" 
              className="border-2 border-white text-white hover:bg-white hover:text-college-blue px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Visit Admissions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact