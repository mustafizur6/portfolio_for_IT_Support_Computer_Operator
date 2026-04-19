import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import SampleWork from './components/SampleWork'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <SampleWork />
      <Education />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
// public/
// └── samples/
//     ├── math-question-paper.pdf
//     ├── physics-question-paper.pdf
//     ├── bangla-question-paper.pdf
//     ├── school-notice.pdf
//     ├── student-certificate.pdf
//     ├── result-sheet.pdf
//     ├── attendance-sheet.pdf
//     ├── exam-marks-sheet.pdf
//     ├── typing-english.jpg
//     └── typing-bangla.jpg