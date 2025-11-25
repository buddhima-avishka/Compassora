import React, { useEffect, useRef } from 'react'
import { assets, stats, values, team } from '../assets/assets'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const heroRef = useRef(null)
  const statsRefs = useRef([])
  const missionRef = useRef(null)
  const valuesRefs = useRef([])
  const teamRefs = useRef([])
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh()

    // Hero animations
    gsap.from('.hero-title', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    })

    // Stats animations
    statsRefs.current.forEach((stat) => {
      if (stat) {
        gsap.fromTo(stat, 
          {
            opacity: 0,
            scale: 0.5
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
              markers: false
            }
          }
        )
      }
    })

    // Mission animation
    if (missionRef.current) {
      gsap.fromTo(missionRef.current,
        {
          opacity: 0,
          x: -100
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 75%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
            markers: false
          }
        }
      )
    }

    // Values animations
    valuesRefs.current.forEach((value) => {
      if (value) {
        gsap.fromTo(value,
          {
            opacity: 0,
            y: 50,
            rotation: -5
          },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: value,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
              markers: false
            }
          }
        )
      }
    })

    // Team animations
    teamRefs.current.forEach((member) => {
      if (member) {
        gsap.fromTo(member,
          {
            opacity: 0,
            y: 80
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: member,
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
    <div className=" min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.heroImage})` }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" /> */}
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span style={{ color: '#0A9548' }}>Compassora</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRefs.current[index] = el)}
              className="text-center transform hover:scale-110 transition-transform duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#0A9548' }}>
                {stat.number}
              </div>
              <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div ref={missionRef} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span style={{ color: '#0A9548' }}>Mission</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis voluptatibus esse voluptatem dolor cumque. Delectus voluptatibus, tempora fugiat maiores laboriosam a ea accusamus cupiditate hic, neque sed cum vero alias.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our <span style={{ color: '#0A9548' }}>Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                ref={(el) => (valuesRefs.current[index] = el)}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Meet Our <span style={{ color: '#0A9548' }}>Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                ref={(el) => (teamRefs.current[index] = el)}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-white/80 text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border-t border-white/10 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p style={{ color: '#0A9548' }} className="text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span style={{ color: '#0A9548' }}>Adventure?</span>
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands of travelers who have discovered the world with Compassora
          </p>
          <button
            onClick={() => {
              navigate('/adventures');
              window.scrollTo(0, 0);
            }}
            className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(10,149,72,0.6)]"
            style={{ backgroundColor: '#0A9548' }}
          >
            Explore Adventures
          </button>
        </div>
      </section>
    </div>
  )
}

export default About