'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedHeading } from '@/components/common/AnimatedHeading'
import { ProjectCard } from '@/components/common/ProjectCard'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const projects = [
  {
    "id": 1,
    "title": "Vektor ERP Solution",
    "description": "Built an enterprise-grade ERP application to manage core business operations including inventory, order processing, and real-time reporting. The system ensures seamless data flow between modules and enhances operational visibility for better decision-making.",
    "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    "tags": ["Android", "Backend API", "Realtime Sync", "Business Automation"],
    "category": "android",
    "github": "https://github.com/kamblechaitanya33/Vektor",
    "features": [
      "Comprehensive inventory management system",
      "Order processing with real-time status tracking",
      "Live data synchronization with backend APIs",
      "Detailed reporting and analytics dashboard",
      "Modular architecture for scalable business operations"
    ],
    "impact": "Streamlined business workflows by automating key processes, reduced manual errors, and improved operational efficiency with real-time insights."
  },
  {
    "id": 2,
    "title": "Financial Locker",
    "description": "Built a secure fintech application to store sensitive financial data using biometric authentication and encrypted storage, ensuring privacy and data protection.",
    "image": "https://images.unsplash.com/photo-1607862167094-622324dcf908?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "tags": ["Android", "Java", "Backend API", "Security"],
    "category": "android",
    "features": [
      "Biometric authentication (Fingerprint/Face)",
      "Secure encrypted data storage",
      "Cloud backup integration with Firebase",
      "User-friendly financial data management"
    ],
    "impact": "Ensured high-level security and privacy for managing sensitive financial information."
  },
  {
    "id": 3,
    "title": "Call Logs Management System",
    "description": "Built an Android application to track, store, and analyze call logs in real time. The system captures incoming, outgoing, and missed calls and provides structured insights.",
    "image": "https://images.unsplash.com/photo-1621255457330-7ef4e88ec27f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dp",
    "tags": ["Android", "Java", "Room DB", "MVVM"],
    "category": "android",
    "github": "https://github.com/SG-Code01/CallLogsViewer",
    "features": [
      "Real-time tracking of incoming, outgoing, and missed calls",
      "Advanced search and filtering by contact, type, and date",
      "Efficient local data storage using Room Database",
      "Structured call history for analytics",
      "Optimized performance with MVVM architecture"
    ],
    "impact": "Streamlined call log management and improved accessibility while reducing manual tracking efforts."
  },
  {
    "id": 4,
    "title": "QAce Question Paper Generator",
    "description": "Developed a Flutter-based application to automate the creation and management of question papers with customizable formats and difficulty levels.",
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=400&fit=crop",
    "tags": ["Android", "Kotlin", "REST API", "RoomDb"],
    "category": "android",
    "github": "https://github.com/kamblechaitanya33/QAce",
    "features": [
      "Dynamic question generation using API integration",
      "Difficulty-based categorization (Easy, Medium, Hard)",
      "Customizable paper formats and structure",
      "Offline storage using SQLite",
      "Simple and intuitive UI for educators"
    ],
    "impact": "Reduced manual effort in academic paper creation and improved efficiency for educators."
  },
  {
    "id": 5,
    "title": "Quick Bus Booking & Location Tracking System",
    "description": "Developed a Flutter application that enables users to book bus tickets, track live locations, and receive real-time updates using GPS and geofencing.",
    "image": "https://images.unsplash.com/photo-1713096849818-0ef8023980e2?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "tags": ["Flutter", "Google Maps", "Location API", "Real-time Tracking"],
    "category": "flutter",
    "github": "https://github.com/kamblechaitanya33/quick_bus",
    "features": [
      "Bus ticket booking and management",
      "Live GPS tracking using Google Maps",
      "Geofencing alerts for arrivals and departures",
      "Route history visualization",
      "Real-time trip updates"
    ],
    "impact": "Improved travel convenience and operational efficiency through real-time tracking and booking integration."
  },
  {
    "id": 6,
    "title": "Slay With Clawdia (Web Platform)",
    "description": "Developed a responsive web platform focused on delivering a smooth and optimized user experience with modern UI design and fast performance.",
    "image": "https://plus.unsplash.com/premium_photo-1722945683602-fa3b05086316?q=80&w=837&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "tags": ["React.js", "Frontend", "Responsive Design", "Performance"],
    "category": "website",
    "github": "https://github.com/kamblechaitanya33/slay_with_clawdia",
    "features": [
      "Responsive and user-friendly interface",
      "Optimized performance and fast loading",
      "Efficient state and resource management",
      "Modern UI/UX design principles",
      "Cross-device compatibility"
    ],
    "impact": "Enhanced user engagement through improved performance and seamless user experience across devices."
  }
]

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Android', value: 'android' },
  { label: 'Flutter', value: 'flutter' },
  { label: 'Website', value: 'website' },
]

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <ScrollReveal direction="up" className="mb-8 sm:mb-10">
          <div className="text-center">
            <AnimatedHeading className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" gradient>
              Featured Projects
            </AnimatedHeading>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
              A selection of real-world applications built across Android & Flutter.
            </p>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <motion.div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`px-4 py-2 rounded-lg ${activeFilter === option.value
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                : 'bg-slate-800 text-slate-300 border border-slate-700'
                }`}
            >
              {option.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => project.github && window.open(project.github, '_blank')}
              className="cursor-pointer"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                features={project.features}
                impact={project.impact}
                index={index}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

