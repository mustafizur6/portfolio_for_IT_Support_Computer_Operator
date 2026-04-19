import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const ctaRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(ctaRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.current, start: 'top 85%' }
      })
  }, [])

  const scroll = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="overflow-hidden">

      {/* CTA Banner */}
      <div ref={ctaRef} className="bg-gradient-to-r from-green-400 to-green-300 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight">
              Ready to hire<br />me full-time?
            </h2>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              Available Sat–Thu. BA classes on Fridays only.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gray-900 flex items-center justify-center relative">
              <span className="text-gray-900 text-xl sm:text-2xl">↗</span>
              <svg className="absolute inset-0 w-full h-full animate-spin"
                style={{ animationDuration: '10s' }} viewBox="0 0 100 100">
                <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text fontSize="11" fontWeight="600" fill="#111">
                  <textPath href="#circle">• HIRE ME NOW • CONTACT ME NOW •</textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="bg-green-300 border-t border-gray-900/10 py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <p className="text-2xl font-black text-gray-900 mb-2">
              Mustafizur<span className="text-green-700">.</span>
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-1">
              Computer Operator · IT Support · Data Entry Specialist
            </p>
            <p className="text-gray-600 text-xs mb-4">Mirpur, Dhaka, Bangladesh</p>
            <a href="mailto:mustafizur8g@gmail.com"
              className="text-gray-800 text-xs hover:text-gray-900 underline break-all">
              mustafizur8g@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-bold text-gray-900 mb-3 sm:mb-4">Quick Links</p>
            {[['#home','Home'],['#about','About'],['#skills','Skills'],['#education','Education'],['#contact','Contact']].map(([id, label]) => (
              <button key={id} onClick={() => scroll(id)}
                className="block text-gray-700 hover:text-gray-900 text-sm mb-2 transition-colors text-left">
                {label}
              </button>
            ))}
          </div>

          {/* Services */}
          <div>
            <p className="font-bold text-gray-900 mb-3 sm:mb-4">My Services</p>
            {[
              'Data Entry (Bangla & English)',
              'Document Formatting',
              'Question Paper Formatting',
              'IT Support & PC Setup',
              'MS Office Operations',
            ].map(s => (
              <p key={s} className="text-gray-700 text-sm mb-2">{s}</p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold text-gray-900 mb-3 sm:mb-4">Contact Info</p>
            <p className="text-gray-700 text-sm mb-2">📞 +880 1715-347906</p>
            <p className="text-gray-700 text-sm mb-2 break-all">✉ mustafizur8g@gmail.com</p>
            <p className="text-gray-700 text-sm mb-2">📍 Mirpur, Dhaka</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto border-t border-gray-900/10 mt-10 sm:mt-12 pt-5 sm:pt-6 text-center text-gray-700 text-xs sm:text-sm">
          Copyright © 2026 MD. Mustafizur Rahman. All Rights Reserved.
        </div>
      </div>

    </footer>
  )
}