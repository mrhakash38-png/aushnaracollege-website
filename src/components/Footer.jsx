import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight, ShieldCheck } from 'lucide-react'
import { ADMISSIONS_CYCLE, CONTACT_INFO, SOCIAL_LINKS } from '../config/siteContent'
import { formatLongDate, getApplicationWindowStatus } from '../utils/admissionsCycle'

function Footer() {
  const admissionsWindowStatus = getApplicationWindowStatus(new Date())
  const admissionsStatusText = admissionsWindowStatus === 'open'
    ? 'are open'
    : admissionsWindowStatus === 'upcoming'
      ? 'open soon'
      : 'have closed'

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Admissions {ADMISSIONS_CYCLE.label} {admissionsStatusText}</h3>
            <p className="text-blue-100 text-sm">Apply by {formatLongDate(ADMISSIONS_CYCLE.applicationDeadline)}.</p>
          </div>
          <Link
            to="/admissions"
            className="inline-flex items-center bg-college-gold text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-college-gold to-yellow-500 text-gray-900 flex items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold">Aushnara College</h3>
                <p className="text-xs text-blue-200">Since 2001</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              A trusted institution committed to academic excellence, character building, and future-ready education in Bangladesh.
            </p>
            <div className="inline-flex items-center gap-2 text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
              Government Approved Institution
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-college-gold">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-blue-100 hover:text-white">About Us</Link></li>
              <li><Link to="/programs" className="text-blue-100 hover:text-white">Academic Programs</Link></li>
              <li><Link to="/admissions" className="text-blue-100 hover:text-white">Admissions</Link></li>
              <li><Link to="/scholarships" className="text-blue-100 hover:text-white">Scholarships</Link></li>
              <li><Link to="/admissions-bengali" className="text-blue-100 hover:text-white">ভর্তি তথ্য (বাংলা)</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Programs */}
          <div>
            <h4 className="font-bold mb-4 text-college-gold">Popular Streams</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/programs#hsc-programs" className="text-blue-100 hover:text-white">HSC Science</Link></li>
              <li><Link to="/programs#hsc-programs" className="text-blue-100 hover:text-white">HSC Commerce</Link></li>
              <li><Link to="/programs#hsc-programs" className="text-blue-100 hover:text-white">HSC Arts</Link></li>
              <li><Link to="/undergraduate-programs" className="text-blue-100 hover:text-white">Undergraduate Programs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-college-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{CONTACT_INFO.addressLine1}, {CONTACT_INFO.addressLine2}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.mainPhoneUri}`} className="hover:text-white">{CONTACT_INFO.mainPhoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.infoEmail}`} className="hover:text-white">{CONTACT_INFO.infoEmail}</a>
              </li>
            </ul>

            <div className="mt-5 flex gap-3">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Aushnara College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
