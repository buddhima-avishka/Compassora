import React, { useEffect, useRef } from 'react'
import { assets, adventures, categories } from '../assets/assets'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Adventures() {
  const heroRef = useRef(null)
  const cardRefs = useRef([])
  const filterRefs = useRef([])

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    ScrollTrigger.refresh()

    // Hero animations
    gsap.from('.adventures-hero-title', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from('.adventures-hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    })

    // Filter buttons animation
    filterRefs.current.forEach((filter, index) => {
      if (filter) {
        gsap.from(filter, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.5 + index * 0.1,
          ease: 'power3.out'
        })
      }
    })

    // Cards animation with ScrollTrigger
    cardRefs.current.forEach((card) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 80,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
              markers: false
            }
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.heroImage})` }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" /> */}
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Discover Your Next <span style={{ color: '#0A9548' }}>Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Explore breathtaking destinations and create unforgettable memories
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                ref={(el) => (filterRefs.current[index] = el)}
                className="px-6 py-2 rounded-full text-white/70 border border-white/20 hover:border-[#0A9548] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(10,149,72,0.4)]"
                style={{
                  backgroundColor: index === 0 ? '#0A9548' : 'transparent',
                  color: index === 0 ? 'white' : undefined,
                  borderColor: index === 0 ? '#0A9548' : undefined
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Adventures Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map((adventure, index) => (
              <div
                key={adventure.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(10,149,72,0.3)] cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={adventure.image}
                    alt={adventure.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-semibold text-white backdrop-blur-xl"
                    style={{
                      backgroundColor: adventure.difficulty === 'Easy' ? 'rgba(10, 149, 72, 0.8)' : 
                                     adventure.difficulty === 'Moderate' ? 'rgba(255, 159, 10, 0.8)' : 
                                     'rgba(239, 68, 68, 0.8)'
                    }}
                  >
                    {adventure.difficulty}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white text-sm font-semibold">{adventure.rating}</span>
                    <span className="text-white/60 text-xs">({adventure.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4" style={{ color: '#0A9548' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-white/60 text-sm">{adventure.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0A9548] transition-colors duration-300">
                    {adventure.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {adventure.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white/60 text-sm">{adventure.duration}</span>
                  </div>

                  {/* Price & Book Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <p className="text-white/60 text-xs mb-1">Starting from</p>
                      <p className="text-2xl font-bold text-white">{adventure.price}</p>
                    </div>
                    <button
                      className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(10,149,72,0.6)]"
                      style={{ backgroundColor: '#0A9548' }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 border-2 border-[#0A9548] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Adventures