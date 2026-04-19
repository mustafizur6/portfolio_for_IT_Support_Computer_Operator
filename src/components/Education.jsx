import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const education = [
  {
    year: '2026 – Present',
    degree: 'BA (Running) — Islamic Studies',
    institution: 'Manarat International University',
    desc: '1st Year. Classes held on Fridays only — fully available for full-time employment throughout the week.',
    icon: '🎓',
    gpa: '1st Year',
    board: 'Dhaka',
  },
  {
    year: '2022',
    degree: 'HSC — Humanities',
    institution: 'Notre Dame College Mymensingh',
    desc: 'Higher Secondary Certificate in Humanities from a reputed institution in Mymensingh.',
    icon: '🏫',
    gpa: 'GPA 5.00',
    board: 'Mymensingh Board',
  },
  {
    year: '2020',
    degree: 'SSC — Science',
    institution: 'K.B. Model SESIP High School',
    desc: 'Secondary School Certificate in Science from K.B. Model SESIP High School under Dhaka Board.',
    icon: '📚',
    gpa: 'GPA 4.44',
    board: 'Dhaka Board',
  },
]

export default function Education() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 80%' }
        })
    })
  }, [])

  return (
    <section id="education" ref={sectionRef} className="bg-[#0d2420] py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-green-400 text-sm">Academic Background</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            Educational <span className="text-green-400">Qualifications</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-green-400/20" />
          <div className="space-y-8">
            {education.map((item, i) => (
              <div key={i} ref={el => itemsRef.current[i] = el}
                className="relative flex gap-8 group">
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-green-400/20 border border-green-400/40 flex items-center justify-center text-2xl group-hover:bg-green-400/30 transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="bg-[#0a1f1a] rounded-2xl p-6 flex-1 border border-green-400/10 hover:border-green-400/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-white font-bold text-lg">{item.degree}</h3>
                      <p className="text-green-400 text-sm">{item.institution}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="bg-green-400/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-400/20">
                        {item.year}
                      </span>
                      <span className="bg-green-400 text-gray-900 text-xs px-3 py-1 rounded-full font-bold">
                        {item.gpa}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  <p className="text-gray-600 text-xs mt-2">{item.board}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-10 bg-green-400/10 border border-green-400/20 rounded-2xl p-5 text-center">
          <p className="text-green-300 text-sm">
            📌 <strong>Note:</strong> BA classes are held on <strong>Fridays only</strong> — fully available for full-time employment Monday to Thursday &amp; Saturday.
          </p>
        </div>
      </div>
    </section>
  )
}