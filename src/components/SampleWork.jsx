import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'MS Word', 'MS Excel', 'Data Management', 'Typing Speed']

const samples = [
  {
    title: 'School Notice',
    category: 'MS Word',
    desc: 'Professionally formatted school notice using proper layout, spacing, and official tone.',
    file: 'https://drive.google.com/file/d/1ijGrkHfewSdHpelhPoQGSP0dDXp_1HDx/preview',
    download: 'https://drive.google.com/uc?export=download&id=1ijGrkHfewSdHpelhPoQGSP0dDXp_1HDx',
    thumbnail: 'https://i.ibb.co.com/3mshMGKF/Notice.png',
    tags: ['Notice', 'Formatting', 'Official'],
  },

  {
    title: 'Data Management & Backup',
    category: 'Data Management',
    desc: 'Organized digital filing system with proper folder structure and backup strategy.',
    file: 'https://drive.google.com/file/d/1pMCnXC9xvVWZPDuOF7YOJq3s43bls3Qv/preview',
    download: 'https://drive.google.com/uc?export=download&id=1pMCnXC9xvVWZPDuOF7YOJq3s43bls3Qv',
    thumbnail: 'https://i.ibb.co.com/CK0Qp2D7/Data-Management-and-Backup.png',
    tags: ['Backup', 'System', 'Files'],
  },

  {
    title: 'Data Privacy Guide',
    category: 'Data Management',
    desc: 'Guidelines for maintaining confidentiality and protecting school data.',
    file: 'https://drive.google.com/file/d/19ROYkY4Xd2Pea8jcYEHqeZ4JivvZloRY/preview',
    download: 'https://drive.google.com/uc?export=download&id=19ROYkY4Xd2Pea8jcYEHqeZ4JivvZloRY',
    thumbnail: 'https://i.ibb.co.com/WpfTG678/Data-Privacy.png',
    tags: ['Privacy', 'Security'],
  },

  {
    title: 'Student Result Sheet',
    category: 'MS Excel',
    desc: 'Excel-based result sheet with GPA calculation and structured layout.',
    file: 'https://docs.google.com/spreadsheets/d/1XdKYBl27wp614V5K9RUSYIqBBtukbxRB4QzKiGiGlvY/preview',
    download: 'https://docs.google.com/spreadsheets/d/1XdKYBl27wp614V5K9RUSYIqBBtukbxRB4QzKiGiGlvY/export?format=xlsx',
    thumbnail: 'https://i.ibb.co.com/0yrQ8862/Screenshot-2026-04-22-125830.png',
    tags: ['Excel', 'GPA'],
  },

  {
    title: 'Attendance Sheet',
    category: 'MS Excel',
    desc: 'Daily attendance tracking system with structured Excel format.',
    file: 'https://docs.google.com/spreadsheets/d/1UXgWYh9F7_WHJdzh5t15x_0v0MM89YtaEeOLN07H9R8/preview',
    download: 'https://docs.google.com/spreadsheets/d/1UXgWYh9F7_WHJdzh5t15x_0v0MM89YtaEeOLN07H9R8/export?format=xlsx',
    thumbnail: 'https://i.ibb.co.com/r9RZnKG/Attendance-Sheet.png',
    tags: ['Attendance', 'Excel'],
  },

  {
    title: 'Student Database',
    category: 'MS Excel',
    desc: 'Student database management system with structured records.',
    file: 'https://docs.google.com/spreadsheets/d/1S6my6YvA6P92FWlyhO29PfYFm4KX1x-_rScGvR6P-BI/preview',
    download: 'https://docs.google.com/spreadsheets/d/1S6my6YvA6P92FWlyhO29PfYFm4KX1x-_rScGvR6P-BI/export?format=xlsx',
    thumbnail: 'https://i.ibb.co.com/NdJK55gb/Student-Database.png',
    tags: ['Database', 'Records'],
  },

  {
    title: 'Typing Certificate',
    category: 'Typing Speed',
    desc: 'Typing speed certification demonstrating 55 WPM accuracy.',
    file: 'https://drive.google.com/file/d/1ShOITma3YwY_LUK6xEEMkhbZwCN2w_27/preview',
    download: 'https://drive.google.com/uc?export=download&id=1ShOITma3YwY_LUK6xEEMkhbZwCN2w_27',
    thumbnail: 'https://i.ibb.co.com/B5fLFg6F/Typing.png',
    tags: ['Typing', '55 WPM'],
  },
]

export default function SampleWork() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [preview, setPreview] = useState(null)

  const filtered =
    activeCategory === 'All'
      ? samples
      : samples.filter(s => s.category === activeCategory)

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )
    })
  }, [activeCategory])

  const handleFilter = cat => {
    cardsRef.current.forEach(card => {
      if (card) gsap.to(card, { opacity: 0, y: 20, duration: 0.2 })
    })
    setTimeout(() => setActiveCategory(cat), 200)
  }

  return (
    <section ref={sectionRef} className="bg-[#0d2420] py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => handleFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm ${
                activeCategory === cat
                  ? 'bg-green-400 text-black'
                  : 'text-gray-400 border border-green-400/20'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((sample, i) => (
            <div key={sample.title}
              ref={el => (cardsRef.current[i] = el)}
              className="bg-[#0a1f1a] rounded-xl overflow-hidden">

              {/* Thumbnail */}
              <div onClick={() => setPreview(sample)} className="cursor-pointer">
                <img src={sample.thumbnail} className="h-44 w-full object-cover" />
              </div>

              <div className="p-4">
                <h3 className="text-white font-bold">{sample.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{sample.desc}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {sample.tags.map(tag => (
                    <span key={tag} className="text-xs bg-green-400/10 text-green-400 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button onClick={() => setPreview(sample)}
                    className="flex-1 bg-green-400/10 text-green-400 py-2 rounded">
                    Preview
                  </button>
                  <a href={sample.download} target="_blank"
                    className="flex-1 bg-green-400 text-black py-2 rounded text-center">
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {preview && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center"
          onClick={() => setPreview(null)}>
          <div className="bg-white w-full max-w-4xl h-[80vh]"
            onClick={e => e.stopPropagation()}>

            <iframe
              src={preview.file}
              className="w-full h-full"
              title="preview"
            />
          </div>
        </div>
      )}
    </section>
  )
}



// Ms Word

// Notice -
// https://drive.google.com/file/d/1ijGrkHfewSdHpelhPoQGSP0dDXp_1HDx/view?usp=sharing
// https://i.ibb.co.com/3mshMGKF/Notice.png 


// Data Management 

// Data Management and Backup - 
// https://drive.google.com/file/d/1pMCnXC9xvVWZPDuOF7YOJq3s43bls3Qv/view?usp=sharing
// https://i.ibb.co.com/CK0Qp2D7/Data-Management-and-Backup.png

// Data Privacy -
// https://drive.google.com/file/d/19ROYkY4Xd2Pea8jcYEHqeZ4JivvZloRY/view?usp=sharing
// https://i.ibb.co.com/WpfTG678/Data-Privacy.png

// Ms Exel 

//  Result Sheet -  
// https://docs.google.com/spreadsheets/d/1XdKYBl27wp614V5K9RUSYIqBBtukbxRB4QzKiGiGlvY/edit?usp=sharing
// https://i.ibb.co.com/0yrQ8862/Screenshot-2026-04-22-125830.png

// Attendance Sheet -
// https://docs.google.com/spreadsheets/d/1UXgWYh9F7_WHJdzh5t15x_0v0MM89YtaEeOLN07H9R8/edit?usp=sharing
// https://i.ibb.co.com/r9RZnKG/Attendance-Sheet.png

// Student Database - 
// https://docs.google.com/spreadsheets/d/1S6my6YvA6P92FWlyhO29PfYFm4KX1x-_rScGvR6P-BI/edit?usp=sharing
// https://i.ibb.co.com/NdJK55gb/Student-Database.png

// Typing Speed
// https://drive.google.com/file/d/1ShOITma3YwY_LUK6xEEMkhbZwCN2w_27/view?usp=sharing

// https://i.ibb.co.com/B5fLFg6F/Typing.png


