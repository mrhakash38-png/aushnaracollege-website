import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import RouteSeo from './components/RouteSeo'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import UndergraduatePrograms from './pages/UndergraduatePrograms'
import DiplomaPrograms from './pages/DiplomaPrograms'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <RouteSeo />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/undergraduate-programs" element={<UndergraduatePrograms />} />
              <Route path="/diploma-programs" element={<DiplomaPrograms />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
