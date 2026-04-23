'use client'

import {
  BarChart3,
  Zap,
  Shield,
  Smartphone,
  Sparkles,
} from 'lucide-react'
import { AnimatedHeading } from '@/components/common/AnimatedHeading'
import { ServiceCard } from '@/components/common/ServiceCard'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const services = [
  {
    icon: <BarChart3 />,
    title: 'ERP & CRM Systems',
    description:
      'Developed scalable ERP and CRM solutions to automate business workflows, improve operational efficiency, and enhance customer relationship management.',
  },
  {
    icon: <Zap />,
    title: 'API Integration & Backend Sync',
    description:
      'Implemented secure REST API integrations with real-time data synchronization to ensure seamless communication between mobile apps and backend systems.',
  },
  {
    icon: <Shield />,
    title: 'Secure Fintech Applications',
    description:
      'Built finance-focused applications with strong authentication, encryption, and device-level security to ensure data protection and compliance.',
  },
  {
    icon: <Sparkles />,
    title: 'UI/UX Design & Optimization',
    description:
      'Designed intuitive, responsive interfaces with a focus on performance optimization and smooth user experience across devices.',
  },
  {
    icon: <Smartphone />,
    title: 'Workforce & Tracking Solutions',
    description:
      'Created attendance, call tracking, and follow-up management apps to streamline business operations and improve team productivity.',
  },
  {
    icon: <Smartphone />,
    title: 'Custom Mobile App Development',
    description:
      'Delivered end-to-end mobile applications tailored to business needs, from concept and design to deployment and ongoing maintenance.',
  },
]

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <ScrollReveal direction="up" className="mb-12 sm:mb-16">
          <div className="text-center">
            <AnimatedHeading
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              gradient
            >
              Solutions I Delivered
            </AnimatedHeading>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl sm:max-w-2xl mx-auto">
              End-to-end mobile development solutions designed to solve
              real-world business problems and deliver measurable results.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
