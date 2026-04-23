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
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', service: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="up" className="mb-16">
          <div className="text-center">
            <AnimatedHeading
              className="text-4xl md:text-5xl font-bold mb-4"
              gradient
            >
              Let&apos;s Work Together
            </AnimatedHeading>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Have a project in mind? Get in touch and let&apos;s create
              something amazing together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-8">
                Contact Information
              </h3>

              <div className="flex gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                    Email
                  </h4>
                  <a
                    href="mailto:Georgy@gmail.com"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Georgy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                    Phone
                  </h4>
                  <p className="text-slate-400">+91 XXXXXXXXXX</p>
                </div>
              </div>

              <div className="flex gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                    Location
                  </h4>
                  <p className="text-slate-400">India</p>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-sm text-slate-400 mb-4">
                  Follow my work and stay updated:
                </p>
                <div className="flex gap-4">
                  {['GitHub', 'LinkedIn', 'Instagram'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg bg-slate-800 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-colors border border-slate-700 hover:border-cyan-500/50"
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Chaitanya Kamble"
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Service Needed
                </label>
                <motion.select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="erp">ERP & CRM Solutions</option>
                  <option value="api">API Integration</option>
                  <option value="fintech">Fintech Development</option>
                  <option value="custom">Custom App Development</option>
                  <option value="optimization">UI/UX & Optimization</option>
                </motion.select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Your Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                    : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/30'
                }`}
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <span>✓ Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
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
