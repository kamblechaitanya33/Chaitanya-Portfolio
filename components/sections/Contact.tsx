'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { AnimatedHeading } from '@/components/common/AnimatedHeading'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setSubmitted(true)

    setTimeout(() => {
      setFormData({ name: '', email: '', service: '', message: '' })
      setSubmitted(false)
    }, 2500)
  }

  return (
    <section
      id="contact"
      className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <ScrollReveal direction="up" className="mb-8 sm:mb-10">
          <div className="text-center">
            <AnimatedHeading
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
              gradient
            >
              Let&apos;s Work Together
            </AnimatedHeading>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl sm:max-w-2xl mx-auto">
              Have a project in mind? Let’s build something impactful together.
            </p>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {/* Left - Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-6">

              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition">
                  <Mail className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href="mailto:chaitanya@example.com"
                    className="text-slate-200 hover:text-cyan-400 transition"
                  >
                    chaitanya@example.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition">
                  <Phone className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-slate-200">+91 9000000000</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-slate-200">Mumbai, India</p>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4">
                <p className="text-sm text-slate-400 mb-3">
                  Connect with me:
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'GitHub', link: '#' },
                    { name: 'LinkedIn', link: '#' },
                    { name: 'Instagram', link: '#' },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg bg-slate-800 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 transition"
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="text-sm text-slate-300">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Chaitanya Kamble"
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-slate-300">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              {/* Service */}
              <div>
                <label className="text-sm text-slate-300">
                  Service Needed
                </label>
                <motion.select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:border-cyan-500 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="erp">ERP & CRM</option>
                  <option value="api">API Integration</option>
                  <option value="fintech">Fintech App</option>
                  <option value="custom">Custom App</option>
                  <option value="uiux">UI/UX Optimization</option>
                </motion.select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-slate-300">
                  Your Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:border-cyan-500 focus:outline-none resize-none"
                />
              </div>

              {/* Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                  submitted
                    ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                    : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/30'
                }`}
                disabled={submitted}
              >
                {submitted ? (
                  '✓ Message Sent!'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}