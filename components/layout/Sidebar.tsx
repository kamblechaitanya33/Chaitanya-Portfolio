'use client'

import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa' // ✅ NEW
import { SocialIcon } from '@/components/common/SocialIcon'

export const Sidebar: React.FC = () => {
  const socialLinks = [
    {
      href: 'https://github.com/kamblechaitanya33?tab=repositories',
      icon: <Github size={20} />,
      label: 'GitHub',
    },
    {
      href: 'https://github.com/kamblechaitanya33',
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
    },
    // {
    //   href: 'mailto:kamblechaitanya33@gmail.com',
    //   icon: <Mail size={20} />,
    //   label: 'Email',
    // },
    {
      href: 'https://wa.me/919326272706',
      icon: <FaWhatsapp size={20} />,
      label: 'WhatsApp',
    },
  ]

  return (
    <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6 px-6 py-8">
      
      {/* Social Icons */}
      <div className="flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <SocialIcon
            key={link.label}
            href={link.href}
            icon={link.icon}
            label={link.label}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Vertical Line */}
      <div className="w-0.5 h-24 bg-gradient-to-b from-slate-700 to-transparent" />
    </div>
  )
}