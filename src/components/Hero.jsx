import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const marqueeItems = [
  'Computer Operator', 'Data Entry Specialist', 'IT Support', 'MS Office Expert',
  'Document Formatting', '55 WPM English Typing', 'Bangla & English', 'Available Full-Time'
]

const YOUTUBE_ID = 'dQw4w9WgXcQ' // ← replace with your actual YouTube ID

export default function Hero() {
  const heroRef   = useRef(null)
  const tagRef    = useRef(null)
  const h1Ref     = useRef(null)
  const paraRef   = useRef(null)
  const btnsRef   = useRef(null)
  const marqueeRef = useRef(null)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(tagRef.current,  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(h1Ref.current.children, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, '-=0.3')
      .fromTo(paraRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(btnsRef.current.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, '-=0.3')

    gsap.to(marqueeRef.current, { xPercent: -50, duration: 18, ease: 'none', repeat: -1 })
  }, [])

  return (
    <section id="home" ref={heroRef}
      className="relative min-h-screen bg-[#0a1f1a] overflow-hidden flex flex-col">

      {/* Background image — hidden on small mobile, visible md+ */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-gradient-to-l from-transparent to-[#0a1d18] z-10" />
        <img
          src="https://i.ibb.co.com/M52Pr2Y0/Mustafizur-boat.jpg"
          alt="hero"
          className="absolute right-0 top-0 w-full md:w-1/2 h-full object-cover object-top "
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex-1 flex items-center w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 w-full">
          <div className="max-w-2xl">

            <div ref={tagRef} className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
              <span className="text-gray-300 text-xs sm:text-sm">
                Computer Operator · IT Support · Data Entry Specialist
              </span>
            </div>

            <h1 ref={h1Ref}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-green-400">I'm Mustafizur,</span>
              <br />
              <span className="text-white">Computer Operator</span>
             
            </h1>

            <p ref={paraRef}
              className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-lg">
              Detail-oriented and disciplined Computer Operator with expertise in MS Office Suite,
              Bangla & English data entry, document formatting, and IT support.
              Committed to accuracy, confidentiality, and efficient operations.
            </p>

            <div ref={btnsRef} className="flex flex-wrap items-center gap-3 sm:gap-5">
              <a href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="bg-green-400 hover:bg-green-300 text-gray-900 font-semibold px-6 sm:px-7 py-3 rounded-full transition-all duration-200 hover:scale-105 text-sm sm:text-base">
                Hire Me
              </a>
              <button onClick={() => setShowVideo(true)}
                className="flex items-center gap-2 sm:gap-3 text-white hover:text-green-400 transition-colors duration-200">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-green-400 flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-gray-900 transition-all duration-200 text-sm">
                  ▶
                </span>
                <span className="text-sm sm:text-base">Intro(processing)</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-20 bg-green-400 py-3 sm:py-4 overflow-hidden">
        <div ref={marqueeRef} className="flex gap-8 sm:gap-12 whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-gray-900 font-bold text-xs sm:text-sm tracking-widest uppercase flex items-center gap-3 sm:gap-4">
              {item} <span>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* YouTube Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-green-400/30"
            onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors text-sm">
              ✕
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={``}
                title="Video CV — MD. Mustafizur Rahman"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


// https://i.ibb.co.com/xq4f5Rtk/rsz-mustafizur.jpg