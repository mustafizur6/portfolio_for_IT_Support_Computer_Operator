import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(imgRef.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      })
    gsap.fromTo(contentRef.current.children,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      })
  }, [])

  return (
    <section id="about" ref={sectionRef} className="bg-[#0d2420] py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div ref={imgRef} className="flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-400/30 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-4 rounded-full border border-green-400/50" />
            {/* Replace src below with your actual photo */}
            <img
              src="https://i.ibb.co.com/xq4f5Rtk/rsz-mustafizur.jpg"
              alt="MD. Mustafizur Rahman"
              className="absolute inset-6 rounded-full object-cover w-[calc(100%-3rem)] h-[calc(100%-3rem)]"
              style={{ border: '3px solid #4ade80' }}
            />
          </div>
        </div>

        <div ref={contentRef}>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-green-400 text-sm">About Me</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">
            Who is <span className="text-green-400">Mustafizur?</span>
          </h2>
          <p className="text-gray-300 font-medium mb-4">
            "A disciplined, trustworthy, and detail-oriented Computer Operator seeking full-time employment."
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            I'm MD. Mustafizur Rahman — proficient in MS Office Suite (Word, Excel, PowerPoint),
            EQ Field Code for mathematical equations, Bangla and English data entry, document formatting,
            and basic IT support. Currently pursuing BA at Manarat International University
            (Friday classes only) — fully available for full-time employment.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-xs">Email</p>
                <p className="text-white text-sm font-medium">mustafizur8g@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Phone</p>
                <p className="text-white text-sm font-medium">+880 1715-347906</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Present Address</p>
                <p className="text-white text-sm font-medium">Mirpur, Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-xs">Date of Birth</p>
                <p className="text-white text-sm font-medium">1 March, 2004 (Age 22)</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Nationality</p>
                <p className="text-white text-sm font-medium">Bangladeshi</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Employment Type</p>
                <p className="text-green-400 text-sm font-bold">Full-Time Available</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="bg-[#1a3530] rounded-xl p-5 text-center">
              <p className="text-green-400 text-3xl font-bold">55</p>
              <p className="text-gray-400 text-xs mt-1">WPM English</p>
            </div>
            <div className="bg-[#1a3530] rounded-xl p-5 text-center">
              <p className="text-green-400 text-3xl font-bold">40</p>
              <p className="text-gray-400 text-xs mt-1">WPM Bangla</p>
            </div>
            <a href="https://drive.google.com/file/d/1FnDXe5dw8gAN87al9sQL_2f6WK_4BGk_/view?usp=sharing" download
              className="text-white flex items-center gap-2 hover:text-green-400 transition-colors font-medium">
              Download CV <span className="text-green-400">✦</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}