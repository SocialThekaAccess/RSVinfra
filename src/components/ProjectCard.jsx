import { Link } from 'react-router-dom'
import { FiMapPin, FiArrowRight } from 'react-icons/fi'
import Reveal from './Reveal'

// Card used in Commercial & Residential listings.
export default function ProjectCard({ project, index = 0 }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-midnight-800/60 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_20px_60px_-20px_rgba(201,164,110,0.3)]">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-midnight-900/20 to-transparent" />
          {/* Status badge */}
          <span
            className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-md ${
              project.status === 'Ready to Move'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                : 'bg-gold/20 text-gold-light border border-gold/40'
            }`}
          >
            {project.status}
          </span>
          <span className="absolute top-4 right-4 rounded-full bg-midnight-900/80 px-3 py-1 text-xs font-medium text-midnight-100 backdrop-blur-md">
            {project.type}
          </span>
          {/* Name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-serif text-2xl font-bold text-white">{project.name}</h3>
            <p className="mt-0.5 text-sm italic text-gold-light">{project.tagline}</p>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2 text-sm text-midnight-200">
            <FiMapPin className="text-gold" />
            <span>{project.location}</span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-midnight-200 line-clamp-2">
            {project.description}
          </p>

          {/* Key specs */}
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/5 pt-5">
            <Spec label="Configuration" value={project.type} />
            <Spec label="Built-up Area" value={project.area} />
            <Spec label="Possession" value={project.possession} />
            <Spec label="Price" value={project.price} />
          </div>

          <div className="mt-auto flex items-center justify-between pt-6">
            <span className="font-serif text-lg font-bold gold-text">{project.price}</span>
            <Link
              to={`#`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
            >
              View Details
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function Spec({ label, value }) {
  return (
    <div>
      <p className="text-[0.65rem] uppercase tracking-wider text-midnight-300">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-white">{value}</p>
    </div>
  )
}
