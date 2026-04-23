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
    title: 'ERP & CRM Solutions',
    description:
      'Custom enterprise resource planning and customer relationship management systems built for scalability and user engagement.',
  },
  {
    icon: <Zap />,
    title: 'API Integration & Backend Sync',
    description:
      'Seamless integration of third-party APIs with robust backend synchronization ensuring data consistency across platforms.',
  },
  {
    icon: <Shield />,
    title: 'Fintech & Device Control',
    description:
      'Secure financial applications with advanced encryption and device control mechanisms for enhanced security and compliance.',
  },
  {
    icon: <Smartphone />,
    title: 'Custom App Solutions',
    description:
      'Tailored mobile applications designed specifically for your business needs, from concept to deployment.',
  },
  {
    icon: <Sparkles />,
    title: 'UI/UX & Optimization',
    description:
      'Beautiful, intuitive interfaces combined with performance optimization to deliver exceptional user experiences.',
  },
]

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" className="mb-16">
          <div className="text-center">
            <AnimatedHeading
              className="text-4xl md:text-5xl font-bold mb-4"
              gradient
            >
              Services & Expertise
            </AnimatedHeading>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive mobile development solutions tailored to your
              business goals
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
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
