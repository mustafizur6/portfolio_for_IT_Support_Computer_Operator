import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'MS Word', 'MS Excel', 'Typing Speed']

const samples = [
  // MS Word
  {
    title: 'NOTICE',
    category: 'MS Word',
    desc: 'Professionally formatted school notice with header, notice number, date, body text and principal signature.',
    file: '/samples/NibrasIS_Notice_Circular_Templates.pdf',
    thumb: '/samples/',
    tags: ['Notice', 'Official', 'Formatting'],
    icon: '📢',
  },
  {
    title: 'DIGITAL FILING SYSTEM DEMO',
    category: 'Data Management',
    desc: '',
    file: '/samples/NibrasIS_DigitalFilingSystem_Demo.pdf',
    thumb: '/samples/filing.png',
    tags: ['Notice', 'Official', 'Formatting'],
    icon: '📁',
  },
  {
    title: ' BACKUP SYSTEM SETUP GUIDE',
    category: 'Data Management',
    desc: '',
    file: '/samples/NibrasIS_BackupSystem_Setup_Guide.pdf',
    thumb: '/public//samples/backup.png',
    tags: ['Notice', 'Official', 'Formatting'],
    icon: '📁',
  },

  // {
  //   title: 'Student Certificate Template',
  //   category: 'MS Word',
  //   desc: 'Formal student certificate with decorative border, institution header, student details and signature lines.',
  //   file: '/samples/student-certificate.pdf',
  //   thumb: '/samples/student-certificate-thumb.jpg',
  //   tags: ['Certificate', 'Template', 'Design'],
  //   icon: '🏆',
  // },
  // MS Excel
  {
    title: 'Student Result Sheet',
    category: 'MS Excel',
    desc: 'Full result sheet with automatic GPA calculation using IF formulas. Grade boundaries, totals and pass/fail.',
    file: '/samples//result-sheet.pdf',
    thumb: '/samples//result.png',
    tags: ['GPA Formula', 'IF Function', 'Excel'],
    icon: '📊',
  },
  // {
  //   title: 'Attendance Tracking Sheet',
  //   category: 'MS Excel',
  //   desc: 'Monthly attendance sheet with present/absent tracking, percentage calculation and color-coded status.',
  //   file: '/samples/attendance-sheet.pdf',
  //   thumb: '/samples/attendance-sheet-thumb.jpg',
  //   tags: ['Attendance', 'Tracking', 'Formulas'],
  //   icon: '📋',
  // },
  // {
  //   title: 'Exam Marks Entry Sheet',
  //   category: 'MS Excel',
  //   desc: 'Subject-wise exam marks entry with automatic total, average and grade generation per student.',
  //   file: '/samples/exam-marks-sheet.pdf',
  //   thumb: '/samples/exam-marks-sheet-thumb.jpg',
  //   tags: ['Data Entry', 'Marks', 'Auto Grade'],
  //   icon: '✏️',
  // },
  // Typing Speed
  {
    title: 'English Typing — 55 WPM',
    category: 'Typing Speed',
    desc: 'Verified typing speed test result from typing.com. 55 words per minute with accuracy score.',
    file: '/samples/typing_certificate.pdf',
    thumb: '/samples/typing.png',
    tags: ['55 WPM', 'English', 'Verified'],
    icon: '⌨️',
    // isImage: true,
  },
  // {
  //   title: 'Bangla Typing — 40 WPM',
  //   category: 'Typing Speed',
  //   desc: 'Verified Bangla typing speed. 40 WPM using Unicode and Bijoy keyboard layout.',
  //   file: '/samples/typing-bangla.jpg',
  //   thumb: '/samples/typing-bangla.jpg',
  //   tags: ['40 WPM', 'Bangla', 'Unicode & Bijoy'],
  //   icon: '🔤',
  //   isImage: true,
  // },
]

export default function SampleWork() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [preview, setPreview] = useState(null)

  const filtered = activeCategory === 'All'
    ? samples
    : samples.filter(s => s.category === activeCategory)

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, delay: i * 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        })
    })
  }, [activeCategory])

  // Filter animation
  const handleFilter = (cat) => {
    cardsRef.current.forEach(card => {
      if (card) gsap.to(card, { opacity: 0, y: 20, duration: 0.2 })
    })
    setTimeout(() => setActiveCategory(cat), 220)
  }

  return (
    <section id="samples" ref={sectionRef} className="bg-[#0d2420] py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-green-400 text-sm">Proof of Work</span>
            </div>
            <h2 className="text-4xl font-bold text-white">
              Sample work & verified<br />
              <span className="text-green-400">skills showcase</span>
              <span className='text-lg pl-2 text-red-400'>(I will add more soon)</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs mt-4 md:mt-0">
            Real documents I've created. Preview or download each sample to verify my skills.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => handleFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-green-400 text-gray-900 border-green-400'
                  : 'bg-transparent text-gray-400 border-green-400/20 hover:border-green-400/60 hover:text-white'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((sample, i) => (
            <div key={sample.title}
              ref={el => cardsRef.current[i] = el}
              className="bg-[#0a1f1a] rounded-2xl overflow-hidden border border-green-400/10 hover:border-green-400/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col">

              {/* Preview area */}
              <div
                onClick={() => setPreview(sample)}
                className="h-44 bg-[#081a15] flex items-center justify-center cursor-pointer relative overflow-hidden border-b border-green-400/10 hover:bg-[#0a2018] transition-colors">
                <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity group-hover:scale-110 transform duration-300">
                  {sample.icon}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-green-400 text-gray-900 text-xs font-bold px-4 py-2 rounded-full">
                    👁 Preview
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium border ${
                    sample.category === 'MS Word' ? 'bg-blue-400/10 text-blue-300 border-blue-400/20' :
                    sample.category === 'MS Excel' ? 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20' :
                    'bg-purple-400/10 text-purple-300 border-purple-400/20'
                  }`}>
                    {sample.category}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-base mb-2">{sample.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{sample.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {sample.tags.map(tag => (
                    <span key={tag} className="bg-green-400/10 text-green-400 text-xs px-2 py-0.5 rounded-full border border-green-400/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setPreview(sample)}
                    className="flex-1 bg-green-400/10 hover:bg-green-400/20 text-green-400 text-sm font-medium py-2 rounded-xl border border-green-400/20 transition-colors">
                    👁 Preview
                  </button>
                  <a href={sample.file} download target="_blank" rel="noreferrer"
                    className="flex-1 bg-green-400 hover:bg-green-300 text-gray-900 text-sm font-bold py-2 rounded-xl text-center transition-colors">
                    ⬇ Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setPreview(null)}>
          <div
            className="bg-[#0d2420] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-green-400/30 flex flex-col"
            onClick={e => e.stopPropagation()}>

            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-green-400/10">
              <div>
                <h3 className="text-white font-bold">{preview.title}</h3>
                <p className="text-gray-400 text-xs">{preview.category}</p>
              </div>
              <div className="flex items-center gap-3">
                <a href={preview.file} download target="_blank" rel="noreferrer"
                  className="bg-green-400 hover:bg-green-300 text-gray-900 text-sm font-bold px-4 py-2 rounded-full transition-colors">
                  ⬇ Download
                </a>
                <button onClick={() => setPreview(null)}
                  className="text-gray-400 hover:text-white text-2xl transition-colors w-8 h-8 flex items-center justify-center">
                  ✕
                </button>
              </div>
            </div>

            {/* Modal preview body */}
            <div className="flex-1 overflow-auto p-4">
              {preview.isImage ? (
                <img src={preview.file} alt={preview.title}
                  className="w-full rounded-xl object-contain" />
              ) : (
                <iframe
                  src={preview.file}
                  className="w-full rounded-xl bg-white"
                  style={{ height: '70vh' }}
                  title={preview.title}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


// NibrasIS_DigitalFilingSystem_Demo -  https://drive.google.com/file/d/12txS_kwHA8QSeyvUdHor78QuKq2psN5D/view?usp=sharing

// NibrasIS_BackupSystem_Setup_Guide -  https://drive.google.com/file/d/1DiTR7Es3uwekAC-cQNTVrMupLF9di3JC/view?usp=sharing 

//  NibrasIS_Notice_Templates - https://drive.google.com/file/d/1HL7WaNeXH08ODxeDXI7QyPExTObq-afy/view?usp=sharing

// exam-marks-sheet -  https://drive.google.com/file/d/1lROxnlkagdwQg2vUcu-NSQb3P6b2VbQR/view?usp=sharing

// result- sheet  - https://drive.google.com/file/d/1G8v0LhmiMvDziCT-fU21YMRbJaVDyqP-/view?usp=sharing

// typing certificate -  https://drive.google.com/file/d/1ShOITma3YwY_LUK6xEEMkhbZwCN2w_27/view?usp=sharing