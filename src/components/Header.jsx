import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap, Phone, ShieldCheck } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Research', href: '/research-papers' },
    { name: 'Updates', href: '/updates' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      {/* Trust bar */}
      <div className="hidden md:block bg-blue-950 text-blue-100 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
              Govt. Approved Institution
            </span>
            <span>Established 2001</span>
          </div>
          <a href="tel:+880258154893" className="inline-flex items-center gap-1 hover:text-white">
            <Phone className="h-3.5 w-3.5" />
            Admissions: +880-2-58154893
          </a>
        </div>
      </div>

      <div className="bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-college-blue to-blue-700 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-college-blue tracking-tight">Aushnara College</p>
                <p className="text-xs text-gray-500">Excellence • Trust • Leadership</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-college-blue bg-blue-50'
                      : 'text-gray-700 hover:text-college-blue hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/admissions"
                className="ml-2 inline-flex items-center bg-gradient-to-r from-college-blue to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold hover:shadow-lg hover:scale-105 transition-all"
              >
                Apply Now
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-college-blue hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200 pt-3">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-college-blue bg-blue-50'
                        : 'text-gray-700 hover:text-college-blue hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/admissions"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 text-center bg-gradient-to-r from-college-blue to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold"
                >
                  Apply Now
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
