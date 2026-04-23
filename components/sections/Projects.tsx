'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedHeading } from '@/components/common/AnimatedHeading'
import { ProjectCard } from '@/components/common/ProjectCard'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const projects = [
  {
    id: 1,
    title: 'Call Logs Management',
    description:
      'Advanced call log tracking and analytics application with real-time notifications.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop',
    tags: ['Android', 'Kotlin', 'Room DB'],
    category: 'android',
  },
  {
    id: 2,
    title: 'Financial Locker',
    description:
      'Secure financial data management app with encryption and biometric authentication.',
    image: 'https://images.unsplash.com/photo-1563986768609-92f5b1409336?w=500&h=400&fit=crop',
    tags: ['Flutter', 'Dart', 'Firebase'],
    category: 'fintech',
  },
  {
    id: 3,
    title: 'Location Tracking System',
    description:
      'Real-time GPS tracking with geofencing and route optimization capabilities.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=500&h=400&fit=crop',
    tags: ['Android', 'Google Maps', 'Location Services'],
    category: 'android',
  },
  {
    id: 4,
    title: 'Question Paper Generator',
    description:
      'Educational tool for creating and managing question papers with AI assistance.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=400&fit=crop',
    tags: ['Flutter', 'REST API', 'SQLite'],
    category: 'flutter',
  },
  {
    id: 5,
    title: 'ERP Solution',
    description:
      'Enterprise resource planning system with inventory and order management.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    tags: ['Android', 'Backend Integration', 'Real-time Sync'],
    category: 'android',
  },
  {
    id: 6,
    title: 'Performance Optimizer',
    description:
      'Application profiling and optimization tool for mobile development.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop',
    tags: ['Flutter', 'Performance', 'Analytics'],
    category: 'flutter',
  },
]

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Android', value: 'android' },
  { label: 'Flutter', value: 'flutter' },
  { label: 'Fintech', value: 'fintech' },
]

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" className="mb-16">
          <div className="text-center">
            <AnimatedHeading
              className="text-4xl md:text-5xl font-bold mb-4"
              gradient
            >
              Featured Projects
            </AnimatedHeading>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Showcase of my recent work across Android, Flutter, and innovative
              solutions
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterOptions.map((option) => (
            <motion.button
              key={option.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(option.value)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === option.value
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-500/50'
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
