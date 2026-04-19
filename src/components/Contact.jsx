import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'
gsap.registerPlugin(ScrollTrigger)

// ✅ Replace these 3 values with your actual EmailJS credentials
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const sectionRef = useRef(null)
  const leftRef    = useRef(null)
  const rightRef   = useRef(null)
  const formRef    = useRef(null)

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: ''
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  useEffect(() => {
    gsap.fromTo(leftRef.current,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      })
    gsap.fromTo(rightRef.current,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      })
  }, [])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    // Basic validation
    if (!form.firstName || !form.email || !form.message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  `${form.firstName} ${form.lastName}`.trim(),
          from_email: form.email,
          phone:      form.phone || 'Not provided',
          message:    form.message,
          to_name:    'Mustafizur',
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)

    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputClass = `w-full bg-[#0d2420] border border-green-400/20 focus:border-green-400 
    text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none 
    transition-colors duration-200`

  return (
    <section id="contact" ref={sectionRef} className="bg-[#0d2420] py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* ── Left side ── */}
        <div ref={leftRef}>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-green-400 text-sm">Contact Me</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in touch
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-10">
            Looking for a reliable, detail-oriented Computer Operator or IT Support staff?
            I'm available full-time (sat-thu). Fill the form and I'll reply within a few minutes/hours.
          </p>

          {/* Contact info */}
          <div className="space-y-5 mb-10">
            {[
              { icon: '✉', label: 'Email', value: 'mustafizur8g@gmail.com', href: 'mailto:mustafizur8g@gmail.com' },
              { icon: '📞', label: 'Phone / WhatsApp', value: '+880 1715-347906', href: 'tel:+8801715347906' },
              { icon: '📍', label: 'Present Address', value: 'Mirpur, Dhaka, Bangladesh', href: null },
              { icon: '🌐', label: 'Website', value: 'www.mustafizur-rahman.com', href: 'http://www.mustafizur-rahman.com' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-green-400/20 border border-green-400/40 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-green-400/30 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                  {item.href ? (
                    <a href={item.href}
                      className="text-white font-medium text-sm hover:text-green-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Availability badge */}
          <div className="bg-green-400/10 border border-green-400/20 rounded-2xl p-4">
            <p className="text-green-400 text-sm font-bold mb-1">✅ Currently Available</p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Available full-time Saturday–Thursday.<br />
              BA classes on Fridays only. Ready to join immediately.
            </p>
          </div>
        </div>

        {/* ── Right side — Form ── */}
        <div ref={rightRef} className="bg-[#0a1f1a] rounded-2xl p-8 border border-green-400/10">
          <p className="text-gray-400 text-sm mb-6">
            Fill out the form below — I'll get back to you within <span className="text-green-400 font-medium">a few minutes/hours InshaAllah</span>.
          </p>

          <div ref={formRef} className="space-y-4">

            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-500 text-xs mb-1 block">First Name <span className="text-green-400">*</span></label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="MD. Mustafizur"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-gray-500 text-xs mb-1 block">Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Rahman"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-500 text-xs mb-1 block">Email <span className="text-green-400">*</span></label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  type="email"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-gray-500 text-xs mb-1 block">Phone Number</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+880 1XXX-XXXXXX"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-500 text-xs mb-1 block">Message <span className="text-green-400">*</span></label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the position..."
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Status messages */}
            {status === 'error' && (
              <div className="bg-red-400/10 border border-red-400/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                ⚠ {!form.firstName || !form.email || !form.message
                  ? 'Please fill in Name, Email and Message fields.'
                  : 'Something went wrong. Please try again or email me directly.'}
              </div>
            )}

            {status === 'success' && (
              <div className="bg-green-400/10 border border-green-400/30 rounded-xl px-4 py-3 text-green-400 text-sm">
                ✅ Message sent successfully! I'll reply within a few minutes/hours InshaAllah.
              </div>
            )}

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              className={`w-full font-bold py-3.5 rounded-full text-sm transition-all duration-200 flex items-center justify-center gap-2
                ${status === 'sending'
                  ? 'bg-green-400/50 text-gray-900 cursor-not-allowed'
                  : 'bg-green-400 hover:bg-green-300 text-gray-900 hover:scale-105 cursor-pointer'
                }`}>
              {status === 'sending' && (
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
              )}
              {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : 'Submit Message'}
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}