import React from 'react'
import { Calendar, FileText, DollarSign, CheckCircle, AlertCircle, Clock, Users, Award } from 'lucide-react'

function Admissions() {
  const timeline = [
    { date: 'March 1 - April 30', event: 'Application Period', status: 'open' },
    { date: 'May 1 - May 15', event: 'Document Verification', status: 'upcoming' },
    { date: 'May 20 - May 25', event: 'Admission Test', status: 'upcoming' },
    { date: 'June 1', event: 'Merit List Publication', status: 'upcoming' },
    { date: 'June 5 - June 15', event: 'Enrollment Period', status: 'upcoming' }
  ]

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
      admission: '৳5,000',
      monthly: '৳3,500',
      annual: '৳42,000',
      total: '৳89,000'
    },
    {
      program: 'Commerce',
      admission: '৳4,000',
      monthly: '৳3,000',
      annual: '৳36,000',
      total: '৳76,000'
    },
    {
      program: 'Arts',
      admission: '৳3,500',
      monthly: '৳2,500',
      annual: '৳30,000',
      total: '৳63,500'
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

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions 2026-27</h1>
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
              <h3 className="text-lg font-semibold text-yellow-800">Applications Now Open!</h3>
              <p className="text-yellow-700">HSC admission applications are currently being accepted. Apply before April 30, 2026.</p>
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
                    item.status === 'open' ? 'bg-green-500' : 'bg-gray-300'
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
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {item.status === 'open' ? 'Open' : 'Upcoming'}
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

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to join Bangladesh's premier educational institution. 
            Applications close on April 30, 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-college-gold hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
              Apply Online Now
            </button>
            <a 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-college-blue px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions