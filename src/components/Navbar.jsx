import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Samples', href: '#samples' },
  { label: 'Education', href: '#education' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
     
        <a href="#home" onClick={(e) => handleClick(e, '#home')}
  className="text-white font-bold text-xl tracking-wide">
  MD. Mustafizur<span className="text-green-400">.</span>
</a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm font-medium">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Download CV Button */}
        <a href="/cv.pdf" download
          className="hidden md:block bg-green-400 hover:bg-green-300 text-gray-900 text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200">
          Download CV
        </a>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none">
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur px-6 pb-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="block text-gray-300 hover:text-green-400 py-3 border-b border-gray-700 text-sm font-medium transition-colors">
              {link.label}
            </a>
          ))}
          <a href="/cv.pdf" download
            className="mt-4 block text-center bg-green-400 text-gray-900 font-semibold px-5 py-2 rounded-full text-sm">
            Download CV
          </a>
        </div>
      )}
    </nav>
  )
}