import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const marqueeItems = [
  'Computer Operator', 'Data Entry Specialist', 'IT Support', 'MS Office Expert',
  'Document Formatting', '55 WPM English Typing', 'Bangla & English', 'Available Full-Time'
]

// ✅ Replace this with your actual YouTube video ID
// Example: if your URL is https://www.youtube.com/watch?v=dQw4w9WgXcQ
// then YOUTUBE_ID = 'dQw4w9WgXcQ'
const YOUTUBE_ID = 'dQw4w9WgXcQ'

export default function Hero() {
  const heroRef = useRef(null)
  const tagRef = useRef(null)
  const h1Ref = useRef(null)
  const paraRef = useRef(null)
  const btnsRef = useRef(null)
  const marqueeRef = useRef(null)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(tagRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(h1Ref.current.children, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, '-=0.3')
      .fromTo(paraRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(btnsRef.current.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, '-=0.3')

    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 18,
      ease: 'none',
      repeat: -1,
    })
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen bg-[#0a1f1a] overflow-hidden flex flex-col">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-transparent to-[#0a1f1a] z-10" />
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
          alt="hero"
          className="absolute right-0 top-0 w-1/2 h-full object-cover object-top opacity-60"
        />
      </div>

      <div className="relative z-20 flex-1 flex items-center max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="max-w-2xl">
          <div ref={tagRef} className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            <span className="text-gray-300 text-sm">Computer Operator · IT Support · Data Entry Specialist</span>
          </div>

          <h1 ref={h1Ref} className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-green-400">I'm Mustafizur,</span>
            <br />
            <span className="text-white">Computer Operator</span>
            <br />
            
          </h1>

          <p ref={paraRef} className="text-gray-400 text-base leading-relaxed mb-10 max-w-lg">
            Detail-oriented and disciplined Computer Operator with expertise in MS Office Suite,
            Bangla & English data entry, document formatting, and IT support.
            Committed to accuracy, confidentiality, and efficient operations.
          </p>

          <div ref={btnsRef} className="flex items-center gap-5">
            <a href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="bg-green-400 hover:bg-green-300 text-gray-900 font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:scale-105">
              Hire Me
            </a>

            {/* Video CV Button */}
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 text-white hover:text-green-400 transition-colors duration-200">
              <span className="w-10 h-10 rounded-full border border-green-400 flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-gray-900 transition-all duration-200">
                ▶
              </span>
              Video CV
            </button>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-20 bg-green-400 py-4 overflow-hidden">
        <div ref={marqueeRef} className="flex gap-12 whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-gray-900 font-bold text-sm tracking-widest uppercase flex items-center gap-4">
              {item} <span className="text-gray-900">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* YouTube Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}>
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-green-400/30"
            onClick={e => e.stopPropagation()}>

            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center text-lg transition-colors">
              ✕
            </button>

            {/* YouTube embed — autoplay on open */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
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


//**
// Only one thing to do — find your YouTube video ID and update this line at the top:
//jsconst YOUTUBE_ID = 'dQw4w9WgXcQ'
//Your YouTube URL looks like https://www.youtube.com/watch?v=XXXXXXXXXX — the part after v= is your ID. Paste that in and it will work. Clicking anywhere outside the modal closes it, and the video autoplays when opened. */