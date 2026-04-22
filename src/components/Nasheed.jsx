import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 🎯 Replace these with your actual YouTube video IDs
// Example: if your URL is https://www.youtube.com/watch?v=ABC123, use 'ABC123'
const VIDEOS = [
  {
    // https://www.youtube.com/watch?v=MVnjZT6cyVk
    id: 'MVnjZT6cyVk', // ← Replace with your 1st YouTube video ID
    title: 'Assubu bada min', // ← Replace with actual title
    description: 'A soulful rendition', // ← Optional short description
  },
  {
    // https://www.youtube.com/watch?v=6SDMoUo7EdQ
    id: '6SDMoUo7EdQ', // ← Replace with your 2nd YouTube video ID
    title: 'Allah amar Rob', // ← Replace with actual title
    description: 'Peaceful & melodic', // ← Optional short description
  },
]

export default function Nasheed() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const cardsRef = useRef([])
  const decorRef = useRef([])
  const dividerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Decorative elements float in
      gsap.from(decorRef.current, {
        opacity: 0,
        scale: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Divider line draws itself
      gsap.from(dividerRef.current, {
        scaleX: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      })

      // Heading slides up
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      })

      // Subtitle
      gsap.from(subRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subRef.current,
          start: 'top 88%',
        },
      })

      // Cards slide in from sides
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          x: i === 0 ? -80 : 80,
          opacity: 0,
          duration: 1,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="nasheed"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gray-950"
    >
      {/* ── Background atmosphere ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(74,222,128,0.07) 0%, transparent 70%)',
        }}
      />

      {/* ── Floating decorative Arabic-inspired shapes ── */}
      {[
        { top: '8%',  left: '4%',  size: 80,  opacity: 0.06 },
        { top: '70%', left: '2%',  size: 50,  opacity: 0.04 },
        { top: '15%', right: '3%', size: 100, opacity: 0.05 },
        { top: '60%', right: '5%', size: 60,  opacity: 0.05 },
      ].map((d, i) => (
        <svg
          key={i}
          ref={(el) => (decorRef.current[i] = el)}
          aria-hidden="true"
          width={d.size}
          height={d.size}
          viewBox="0 0 100 100"
          className="absolute pointer-events-none"
          style={{ top: d.top, left: d.left, right: d.right, opacity: d.opacity }}
        >
          <polygon
            points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
            fill="#4ade80"
          />
        </svg>
      ))}

      <div className="relative max-w-5xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
        
          <div ref={headingRef}>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "", letterSpacing: '-0.02em' }}
            >
              My{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4ade80 0%, #22d3ee 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Nasheed
              </span>{' '}
              Corner
            </h2>

            {/* Animated divider */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div
                ref={dividerRef}
                className="h-px w-24 origin-left"
                style={{ background: 'linear-gradient(90deg, transparent, #4ade80)' }}
              />
              <span className="text-green-400 text-lg">♪</span>
              <div
                className="h-px w-24 origin-right"
                style={{ background: 'linear-gradient(90deg, #4ade80, transparent)' }}
              />
            </div>

            <p className="text-gray-400 mt-4 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
        
            </p>
          </div>
        </div>

        {/* ── Video cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEOS.map((video, i) => (
            <div
              key={video.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #111827 0%, #0f172a 100%)',
                border: '1px solid rgba(74,222,128,0.15)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(74,222,128,0.4)'
                e.currentTarget.style.boxShadow = '0 16px 60px rgba(74,222,128,0.12)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(74,222,128,0.15)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.4)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Green top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: 'linear-gradient(90deg, transparent, #4ade80, transparent)',
                  opacity: 0.6,
                }}
              />

              {/* YouTube embed */}
              <div
                className="relative w-full"
                style={{ paddingBottom: '56.25%' /* 16:9 ratio */ }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Card footer */}
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-sm">{video.title}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">{video.description}</p>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-green-400 hover:text-green-300 transition-colors"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <p className="text-center text-gray-600 text-xs mt-10 italic">
          "The heart finds its rest in the remembrance of Allah." — Quran 13:28
        </p>

      </div>
    </section>
  )
}