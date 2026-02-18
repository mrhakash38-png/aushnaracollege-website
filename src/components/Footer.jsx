import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-college-gold" />
              <div>
                <h3 className="text-lg font-bold">Aushnara College</h3>
                <p className="text-sm text-gray-400">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Committed to providing quality education and fostering academic excellence 
              for students across Bangladesh since our establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-college-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white text-sm">Academic Programs</Link></li>
              <li><Link to="/admissions" className="text-gray-400 hover:text-white text-sm">Admissions</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4 text-college-gold">Programs</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Science</li>
              <li>Commerce</li>
              <li>Arts</li>
              <li>Computer Studies</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-college-gold">Contact Info</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Aushnara College Campus<br />Bangladesh</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+880-XXX-XXXXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@aushnaracollege.edu.bd</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-college-gold">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-college-gold">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-college-gold">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Aushnara College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer