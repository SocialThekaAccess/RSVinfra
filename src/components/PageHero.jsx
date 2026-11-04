import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

// Reusable hero banner for inner pages.
export default function PageHero({ label, title, subtitle, image, ctaText, ctaTo }) {
  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden pt-24 md:min-h-[62vh]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-midnight-900/80 to-midnight-900/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 lg:px-10 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {label && <p className="section-label mb-4">{label}</p>}
          <h1 className="heading-xl max-w-3xl text-white">{title}</h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-midnight-100">
              {subtitle}
            </p>
          )}
          {ctaText && ctaTo && (
            <Link to={ctaTo} className="btn-gold mt-8">
              {ctaText}
              <FiArrowRight />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}
