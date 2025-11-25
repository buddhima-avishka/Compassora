import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-6'}`}>
      <nav className={`flex items-center mx-4 md:mx-8 px-6 py-4 rounded-full text-white text-sm transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl' 
          : 'bg-white/5 backdrop-blur-md border border-white/10'
      }`}>
        
        {/* Logo */}
        <a href="#" className="group">
          <img src={assets.logo} className="h-12 transition-transform duration-300 group-hover:scale-110" alt="Compassora Logo" />
        </a>

        {/* Desktop Menu */}
        
        <div className="hidden md:flex items-center gap-6 ml-12">
          <a href="/" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300" style={{ color: '#0A9548' }}>Home</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300" style={{ color: '#16DB65' }}>Home</span>
          </a>
          <a href="/adventures" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300" style={{ color: '#0A9548' }}>Adventures</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300" style={{ color: '#16DB65' }}>Adventures</span>
          </a>
          <a href="/about" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300" style={{ color: '#0A9548' }}>About</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300" style={{ color: '#16DB65' }}>About</span>
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden ml-auto md:flex items-center gap-4">
          <button onClick={() => navigate('/login')} className="relative border border-white/20 px-6 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 overflow-hidden group hover:border-transparent hover:shadow-[0_0_30px_rgba(4,71,28,0.6)]">
            <span className="relative z-10  transition-colors duration-300">Login</span>
            <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: '#0A9548' }} />
          </button>
          <button className="relative px-6 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(10,149,72,0.6)] hover:scale-105 overflow-hidden group" style={{ backgroundColor: '#0A9548' }}>
            <span className="relative z-10">Register</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden ml-auto text-white transition-transform duration-300 hover:scale-110"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-4 right-4 mt-4 bg-black/95 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden transition-all duration-500 md:hidden ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="flex flex-col items-center gap-6 py-8">
            <a 
              href="/" 
              className="text-lg transition-colors duration-300 transform hover:scale-110"
              onMouseEnter={(e) => e.currentTarget.style.color = '#16DB65'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ffffffff'}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/adventures" 
              className="text-lg transition-colors duration-300 transform hover:scale-110"
              onMouseEnter={(e) => e.currentTarget.style.color = '#16DB65'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ffffffff'}
              onClick={() => setMobileMenuOpen(false)}
            >
              Adventures
            </a>
            <a 
              href="/about" 
              className="text-lg transition-colors duration-300 transform hover:scale-110"
              onMouseEnter={(e) => e.currentTarget.style.color = '#16DB65'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ffffffff'}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            
            <div className="flex flex-col gap-3 mt-4 w-full px-8">
              <button onClick={() => navigate('/login')} className="relative border border-white/20 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 overflow-hidden group hover:border-transparent hover:shadow-[0_0_30px_rgba(4,71,28,0.6)]">
                <span className="relative z-10 transition-colors duration-300">Login</span>
                <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: '#0A9548' }} />
              </button>
              <button className="px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(10,149,72,0.6)]" style={{ backgroundColor: '#0A9548' }}>
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar