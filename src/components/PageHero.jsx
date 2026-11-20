import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

// Reusable hero banner for inner pages.
// Uses same 1500px container as Navbar + HeroSlider for edge alignment.
export default function PageHero({ label, title, subtitle, image, ctaText, ctaTo }) {
  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-24 sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-midnight-900/80 to-midnight-900/40" />
      </div>

      {/* Content — 1500px container matches navbar */}
      <div
        className="relative w-full pb-10 sm:pb-14 lg:pb-20"
        style={{ maxWidth: 'var(--site-max-w)', margin: '0 auto', paddingLeft: 'clamp(1.25rem, 4vw, 2.5rem)', paddingRight: 'clamp(1.25rem, 4vw, 2.5rem)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {label && <p className="section-label mb-3 md:mb-4">{label}</p>}
          <h1 className="heading-xl max-w-4xl text-white">{title}</h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-midnight-100 sm:text-lg md:mt-5">
              {subtitle}
            </p>
          )}
          {ctaText && ctaTo && (
            <Link to={ctaTo} className="btn-gold mt-6 md:mt-8">
              {ctaText}
              <FiArrowRight />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}
