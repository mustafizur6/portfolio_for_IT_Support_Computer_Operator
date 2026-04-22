

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






import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'MS Word', 'MS Excel', 'Data Management', 'Typing Speed', 'Email Management']

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
  // {
  //   title: 'Email Management guide',
  //   category: 'Email Management',
  //   desc: 'This guide demonstrates professional email management for Nibras International School.',
  //   file: 'https://drive.google.com/file/d/1PUoc_IHKkcGEITKvQ4O_kkudhVQ8sv9L/view?usp=sharing',
  //   download: 'https://drive.google.com/uc?export=download&id=1PUoc_IHKkcGEITKvQ4O_kkudhVQ8sv9L',
  //   thumbnail: 'https://i.ibb.co.com/W4ZprFCv/Screenshot-2026-04-22-135904.png',
  //   tags: ['Email', 'template'],
  // },
  {
  title: 'Email Management Guide',
  category: 'Email Management',
  desc: 'This guide demonstrates professional email management for Nibras International School.',
  file: 'https://drive.google.com/file/d/1PUoc_IHKkcGEITKvQ4O_kkudhVQ8sv9L/preview',
  download: 'https://drive.google.com/uc?export=download&id=1PUoc_IHKkcGEITKvQ4O_kkudhVQ8sv9L',
  thumbnail: 'https://i.ibb.co.com/W4ZprFCv/Screenshot-2026-04-22-135904.png',
  tags: ['Email', 'Template'],
},
  {
    title: 'Typing Certificate',
    category: 'Typing Speed',
    desc: 'Typing speed certification demonstrating 55 WPM accuracy.',
    file: 'https://drive.google.com/file/d/1ShOITma3YwY_LUK6xEEMkhbZwCN2w_27/preview',
    download: 'https://drive.google.com/uc?export=download&id=1ShOITma3YwY_LUK6xEEMkhbZwCN2w_27',
    thumbnail: 'https://i.ibb.co.com/B5fLFg6F/Typing.png',
    tags: ['Typing', '55+ WPM'],
  },
]

// SVG Icons
const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

export default function SampleWork() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const filterRef = useRef(null)
  const cardsRef = useRef([])
  const modalRef = useRef(null)
  const modalContentRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [preview, setPreview] = useState(null)
  const floatingOrbs = useRef([])

  const filtered =
    activeCategory === 'All'
      ? samples
      : samples.filter(s => s.category === activeCategory)

  // Section entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating orbs background animation
      floatingOrbs.current.forEach((orb, i) => {
        if (!orb) return
        gsap.to(orb, {
          y: `${-30 + i * 10}px`,
          x: `${10 - i * 5}px`,
          duration: 4 + i * 0.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.5,
        })
      })

      // Heading animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current.children,
          { opacity: 0, y: 60, skewY: 4 },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
          }
        )
      }

      // Filter buttons animation
      if (filterRef.current) {
        gsap.fromTo(
          filterRef.current.children,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: filterRef.current,
              start: 'top 85%',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Cards animation on category change
  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    if (cards.length === 0) return

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.92, rotateX: 8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.65,
        stagger: { amount: 0.4, ease: 'power2.out' },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    )

    // Hover tilt effect on each card
    cards.forEach(card => {
      const handleEnter = () => {
        gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: 'power2.out' })
      }
      const handleLeave = () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: 'power2.inOut' })
      }
      card.addEventListener('mouseenter', handleEnter)
      card.addEventListener('mouseleave', handleLeave)
      card._cleanup = () => {
        card.removeEventListener('mouseenter', handleEnter)
        card.removeEventListener('mouseleave', handleLeave)
      }
    })

    return () => {
      cards.forEach(card => card._cleanup?.())
    }
  }, [activeCategory])

  // Modal open/close animations
  const openPreview = (sample) => {
    setPreview(sample)
    setTimeout(() => {
      if (modalRef.current && modalContentRef.current) {
        gsap.fromTo(modalRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'power2.out' }
        )
        gsap.fromTo(modalContentRef.current,
          { scale: 0.88, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: 'expo.out' }
        )
      }
    }, 0)
  }

  const closePreview = () => {
    if (modalRef.current && modalContentRef.current) {
      gsap.to(modalContentRef.current, {
        scale: 0.9,
        opacity: 0,
        y: 30,
        duration: 0.3,
        ease: 'power2.in',
      })
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        ease: 'power2.in',
        onComplete: () => setPreview(null),
      })
    } else {
      setPreview(null)
    }
  }

  const handleFilter = cat => {
    const cards = cardsRef.current.filter(Boolean)
    gsap.to(cards, {
      opacity: 0,
      y: 20,
      scale: 0.95,
      duration: 0.2,
      stagger: 0.03,
      ease: 'power2.in',
      onComplete: () => setActiveCategory(cat),
    })
  }

  return (
    <>
      <style>{`
        .sample-section {
          position: relative;
          overflow: hidden;
        }

        /* Glowing orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        /* Filter button styles */
        .filter-btn {
          position: relative;
          padding: 10px 22px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.03em;
          cursor: pointer;
          border: none;
          transition: all 0.25s ease;
          overflow: hidden;
          font-family: inherit;
        }
        .filter-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 999px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(74,222,128,0.5), rgba(74,222,128,0.1));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .filter-btn.inactive {
          background: rgba(74,222,128,0.05);
          color: #9ca3af;
        }
        .filter-btn.inactive:hover {
          background: rgba(74,222,128,0.12);
          color: #4ade80;
        }
        .filter-btn.inactive:hover::before {
          opacity: 1;
        }
        .filter-btn.active {
          background: linear-gradient(135deg, #4ade80, #22c55e);
          color: #0a1f1a;
          box-shadow: 0 0 20px rgba(74,222,128,0.4), 0 4px 15px rgba(74,222,128,0.2);
        }
        .filter-btn.active::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          border-radius: 999px;
        }

        /* Card styles */
        .work-card {
          background: linear-gradient(145deg, #0c221d, #0a1a16);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(74,222,128,0.08);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
          transform-style: preserve-3d;
        }
        .work-card:hover {
          border-color: rgba(74,222,128,0.25);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(74,222,128,0.08);
        }

        /* Thumbnail overlay */
        .thumb-wrap {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .thumb-wrap img {
          width: 100%;
          height: 176px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .thumb-wrap:hover img {
          transform: scale(1.06);
        }
        .thumb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,26,22,0.9) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 14px;
        }
        .thumb-wrap:hover .thumb-overlay {
          opacity: 1;
        }
        .thumb-overlay-text {
          color: #4ade80;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Tag styles */
        .tag {
          font-size: 11px;
          background: rgba(74,222,128,0.08);
          color: #4ade80;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(74,222,128,0.15);
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        /* Action buttons */
        .btn-preview {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 10px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid rgba(74,222,128,0.3);
          background: rgba(74,222,128,0.06);
          color: #4ade80;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.02em;
          font-family: inherit;
        }
        .btn-preview:hover {
          background: rgba(74,222,128,0.15);
          border-color: rgba(74,222,128,0.6);
          box-shadow: 0 0 14px rgba(74,222,128,0.15);
          transform: translateY(-1px);
        }
        .btn-preview:active {
          transform: translateY(0px) scale(0.98);
        }

        .btn-download {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 10px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          background: linear-gradient(135deg, #4ade80, #22c55e);
          color: #052015;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 14px rgba(74,222,128,0.25);
          position: relative;
          overflow: hidden;
        }
        .btn-download::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.4s ease;
        }
        .btn-download:hover::before {
          left: 100%;
        }
        .btn-download:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(74,222,128,0.4);
        }
        .btn-download:active {
          transform: translateY(0px) scale(0.98);
        }

        /* Modal styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
        }
        .modal-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          height: 85vh;
          background: linear-gradient(145deg, #0c221d, #081a15);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(74,222,128,0.2);
          box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(74,222,128,0.08);
        }
        .modal-header {
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: linear-gradient(to bottom, rgba(8,26,21,0.98), transparent);
        }
        .modal-title {
          color: #4ade80;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.03em;
        }
        .modal-close {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(74,222,128,0.3);
          background: rgba(74,222,128,0.08);
          color: #4ade80;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .modal-close:hover {
          background: rgba(74,222,128,0.2);
          border-color: rgba(74,222,128,0.6);
          transform: rotate(90deg) scale(1.1);
          box-shadow: 0 0 12px rgba(74,222,128,0.3);
        }
        .modal-close:active {
          transform: rotate(90deg) scale(0.95);
        }

        /* Decorative line */
        .section-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #4ade80, transparent);
          border-radius: 2px;
          margin-bottom: 16px;
        }
      `}</style>

      <section ref={sectionRef} id="samples" className="sample-section bg-[#0d2420] py-28">

        {/* Background Orbs */}
        <div ref={el => (floatingOrbs.current[0] = el)} className="orb"
          style={{ width: 400, height: 400, top: '5%', left: '-10%', background: 'rgba(74,222,128,0.04)' }} />
        <div ref={el => (floatingOrbs.current[1] = el)} className="orb"
          style={{ width: 300, height: 300, top: '40%', right: '-8%', background: 'rgba(34,197,94,0.05)' }} />
        <div ref={el => (floatingOrbs.current[2] = el)} className="orb"
          style={{ width: 250, height: 250, bottom: '10%', left: '30%', background: 'rgba(74,222,128,0.03)' }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Heading */}
          <div ref={headingRef} className="mb-10">
            <div className="section-line" />
            <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: 8 }}>
              Sample Work
            </h2>
            <p style={{ color: '#6b7280', fontSize: '15px' }}>
              Real documents created as part of skill development
            </p>
          </div>

          {/* Filter Buttons */}
          <div ref={filterRef} className="flex flex-wrap gap-3 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : 'inactive'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((sample, i) => (
              <div
                key={sample.title}
                ref={el => (cardsRef.current[i] = el)}
                className="work-card"
              >
                {/* Thumbnail */}
                <div className="thumb-wrap" onClick={() => openPreview(sample)}>
                  <img src={sample.thumbnail} alt={sample.title} />
                  <div className="thumb-overlay">
                    <span className="thumb-overlay-text">
                      <EyeIcon /> Quick View
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '15px', marginBottom: 6 }}>
                    {sample.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: 12, lineHeight: 1.5 }}>
                    {sample.desc}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {sample.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button onClick={() => openPreview(sample)} className="btn-preview">
                      <EyeIcon /> Preview
                    </button>
                    <a href={sample.download} target="_blank" rel="noopener noreferrer" className="btn-download">
                      <DownloadIcon /> Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {preview && (
        <div
          ref={modalRef}
          className="modal-backdrop"
          onClick={closePreview}
        >
          <div
            ref={modalContentRef}
            className="modal-container"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <span className="modal-title">📄 {preview.title}</span>
              <button className="modal-close" onClick={closePreview} aria-label="Close preview">
                <CloseIcon />
              </button>
            </div>

            {/* iFrame */}
            <iframe
              src={preview.file}
              className="w-full h-full"
              title={preview.title}
              style={{ border: 'none', display: 'block' }}
            />
          </div>
        </div>
      )}
    </>
  )
}