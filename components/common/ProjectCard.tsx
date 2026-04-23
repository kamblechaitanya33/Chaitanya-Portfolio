'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  index: number
  features?: string[]
  impact?: string
  github?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  index,
  features,
  impact,
}) => {
  return (
    <motion.div
    
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
          <span className="text-xs sm:text-sm text-white opacity-0 group-hover:opacity-100 transition">
            View Project
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col">

        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-2 group-hover:text-cyan-300 transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 mb-3 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Features (NEW) */}
        {features && (
          <ul className="text-[10px] sm:text-xs text-slate-400 space-y-1 mb-3">
            {features.slice(0, 2).map((f, i) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>
        )}

        {/* Impact (NEW) */}
        {impact && (
          <p className="text-[10px] sm:text-xs text-cyan-400 font-medium mt-auto">
            {impact}
          </p>
        )}
      </div>

      {/* Gradient Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
    </motion.div>
  )
}