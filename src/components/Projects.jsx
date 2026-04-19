import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Data Entry & Record Management',
    category: 'Office Operations',
    desc: 'Fast, accurate Bangla & English data entry. Admission forms, attendance sheets, digital records, email management, and confidential data backup.',
    tags: ['Bangla & English', 'MS Excel', 'Record Filing'],
    icon: '📊',
  },
  {
    title: 'Document & Question Paper Formatting',
    category: 'Document Management',
    desc: 'Professional formatting of documents, question papers, notices, certificates, and reports using MS Word and EQ Field Code for mathematical equations.',
    tags: ['MS Word', 'EQ Field Code', 'PowerPoint'],
    icon: '📝',
  },
  {
    title: 'IT Support & PC Maintenance',
    category: 'Technical Support',
    desc: 'PC diagnosis, OS installation, software configuration, virus removal, driver updates, and printer maintenance for smooth office operations.',
    tags: ['PC Setup', 'OS Install', 'Troubleshooting'],
    icon: '🖥️',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.7, delay: i * 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        })
    })
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="bg-[#0a1f1a] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-green-400 text-sm">My Specialization</span>
            </div>
            <h2 className="text-4xl font-bold text-white">
              Innovative, efficient &<br />
              <span className="text-green-400">reliable office services</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-gray-400 text-sm max-w-xs mb-4">
              As a skilled Computer Operator, I offer services tailored to help organizations run efficiently.
            </p>
            <a href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="bg-green-400/10 border border-green-400/30 hover:bg-green-400 hover:text-gray-900 text-green-400 text-sm font-medium px-6 py-2 rounded-full transition-all duration-200">
              Hire Me Now
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div key={svc.title} ref={el => cardsRef.current[i] = el}
              className="group bg-[#0d2420] rounded-2xl overflow-hidden border border-green-400/10 hover:border-green-400/40 transition-all duration-300 hover:-translate-y-2 p-6">
              <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-3xl mb-5 group-hover:bg-green-400/20 transition-colors">
                {svc.icon}
              </div>
              <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-gray-900 text-sm font-bold ml-auto mb-3 group-hover:scale-110 transition-transform">
                ↗
              </div>
              <p className="text-green-400 text-xs mb-1">{svc.category}</p>
              <h3 className="text-white font-bold text-lg mb-3">{svc.title}</h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">{svc.desc}</p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map(t => (
                  <span key={t} className="bg-green-400/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-400/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 text-gray-400 text-sm">
          <span className="bg-green-400/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-400/30 mr-3">Available Full-Time</span>
          BA classes on Fridays only — free every other day.
          <a href="#contact"
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-green-400 hover:underline ml-1">Contact me →</a>
        </div>
      </div>
    </section>
  )
}