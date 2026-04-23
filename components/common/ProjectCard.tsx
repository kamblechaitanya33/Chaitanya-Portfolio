'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  index: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col"
    >
      {/* Image container */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
          <p className="text-slate-300 group-hover:text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View Details
          </p>
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex-1 p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 mb-4 flex-1 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}
