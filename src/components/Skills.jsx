import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const skillGroups = [
  {
    category: 'Office & Documents',
    icon: '📄',
    color: 'blue',
    skills: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Google Sheets', 'EQ Field Code', 'Document Formatting', 'Question Paper Formatting', 'Certificate & Notice Formatting'],
  },
  {
    category: 'Data Entry',
    icon: '⌨️',
    color: 'green',
    skills: ['English Data Entry','Bangla Entry ',  'Admission & Attendance Entry', 'Email Management', 'Record Filing', 'Data Backup'],
  },
  {
    category: 'IT Support',
    icon: '🖥️',
    color: 'purple',
    skills: ['PC Diagnosis', 'OS Installation', 'Software Setup', 'Virus Removal', 'Driver Updates', 'Printer Maintenance'],
  },
  {
    category: 'Typing & Tools',
    icon: '🚀',
    color: 'orange',
    skills: ['English — 55 WPM', 'Bangla — 25 WPM', 'Claude AI', 'ChatGPT'],
  },
  {
    category: 'Soft Skills',
    icon: '✨',
    color: 'pink',
    skills: ['Attention to Detail', 'Data Confidentiality', 'Punctuality', 'Time Management', 'Adaptability'],
  },
    {
    category: 'Tech & Fundamentals',
    icon: '💡',
    color: 'teal',
    skills: ['Basic Programming', 'Basic OS', 'Basic Computer Networking','JAVASCRIPT'],
  },
]

const colorMap = {
  blue:   { card: 'hover:border-blue-400/50',   icon: 'bg-blue-400/10 text-blue-300',   tag: 'bg-blue-400/10 text-blue-300 border-blue-400/20',   label: 'text-blue-300',   dot: 'bg-blue-400' },
  green:  { card: 'hover:border-green-400/50',  icon: 'bg-green-400/10 text-green-300', tag: 'bg-green-400/10 text-green-300 border-green-400/20', label: 'text-green-300', dot: 'bg-green-400' },
  purple: { card: 'hover:border-purple-400/50', icon: 'bg-purple-400/10 text-purple-300', tag: 'bg-purple-400/10 text-purple-300 border-purple-400/20', label: 'text-purple-300', dot: 'bg-purple-400' },
  orange: { card: 'hover:border-orange-400/50', icon: 'bg-orange-400/10 text-orange-300', tag: 'bg-orange-400/10 text-orange-300 border-orange-400/20', label: 'text-orange-300', dot: 'bg-orange-400' },
  pink:   { card: 'hover:border-pink-400/50',   icon: 'bg-pink-400/10 text-pink-300',   tag: 'bg-pink-400/10 text-pink-300 border-pink-400/20',   label: 'text-pink-300',   dot: 'bg-pink-400' },
  teal:   { card: 'hover:border-teal-400/50',   icon: 'bg-teal-400/10 text-teal-300',   tag: 'bg-teal-400/10 text-teal-300 border-teal-400/20',   label: 'text-teal-300',   dot: 'bg-teal-400' },
}

export default function Skills() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return
      gsap.fromTo(card,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        })
    })
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="bg-[#0a1f1a] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-green-400 text-sm">My Competencies</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl font-bold text-white">
              Skills & Tools 
            </h2>
           
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => {
            const c = colorMap[group.color]
            return (
              <div key={group.category} ref={el => cardsRef.current[i] = el}
                className={`bg-[#0d2420] rounded-2xl p-5 border border-white/5 transition-all duration-300 hover:-translate-y-1 ${c.card}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${c.icon}`}>
                    {group.icon}
                  </div>
                  <h3 className={`font-bold text-sm ${c.label}`}>{group.category}</h3>
                  <div className={`ml-auto w-2 h-2 rounded-full ${c.dot}`} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className={`text-xs px-3 py-1 rounded-full border ${c.tag}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}