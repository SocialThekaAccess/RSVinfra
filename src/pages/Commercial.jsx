import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { placeholder, commercialProjects } from '../data/projects'
import commercialImg1   from '../assets/CommercialImage.png'
import commercialImg4   from '../assets/Commercialimage4.png'
import commercialPlots  from '../assets/CommercialPlots.png'
import commercialPlots6 from '../assets/CommercialPlots6.png'

const investImages = [commercialPlots, commercialImg1, commercialImg4, commercialPlots6]

export default function Commercial() {
  const [typeFilter, setTypeFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  const types = useMemo(
    () => ['All', ...new Set(commercialProjects.map((p) => p.type))],
    []
  )
  const statuses = useMemo(
    () => ['All', ...new Set(commercialProjects.map((p) => p.status))],
    []
  )

  const filtered = useMemo(
    () =>
      commercialProjects.filter(
        (p) =>
          (typeFilter === 'All' || p.type === typeFilter) &&
          (statusFilter === 'All' || p.status === statusFilter)
      ),
    [typeFilter, statusFilter]
  )

  return (
    <>
      <PageHero
        label="Commercial Developments"
        title="Land and showrooms built for business"
        subtitle="Prime commercial land parcels and high-street showroom units across Ludhiana's most active commercial corridors. Invest where the city grows."
        image={commercialPlots}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="section-label mb-4">Commercial Portfolio</p>
            <h2 className="heading-xl text-white">
              Addresses that <span className="gold-text">command attention</span>
            </h2>
            <p className="mt-5 text-lg text-midnight-200">
              From large commercial land parcels ready for hotels, offices, and
              mixed-use buildings, to premium ground-floor showroom units with
              glass facades and double-height ceilings — RSV Infra's commercial
              portfolio puts your investment on the city's most sought-after
              corridors.
            </p>
          </Reveal>

          {/* Filters */}
          <div className="mt-12 space-y-6 border-t border-white/5 pt-8">
            <FilterRow label="Property Type" options={types} value={typeFilter} onChange={setTypeFilter} />
            <FilterRow label="Status" options={statuses} value={statusFilter} onChange={setStatusFilter} />
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-8 text-sm text-midnight-200">
            Showing <span className="font-semibold text-gold">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'project' : 'projects'}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-white">
                No projects match your filters
              </p>
              <button
                onClick={() => {
                  setTypeFilter('All')
                  setStatusFilter('All')
                }}
                className="btn-outline mt-6"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats band */}
      <CommercialHighlights />

      {/* Investment benefits */}
      <InvestmentBenefits />

      {/* CTA */}
      <CommercialCTA />
    </>
  )
}

function FilterRow({ label, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center">
      <span className="w-40 shrink-0 text-xs font-semibold uppercase tracking-wider text-midnight-300">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              value === opt
                ? 'bg-gold-gradient text-midnight-900 shadow-[0_0_20px_rgba(201,164,110,0.3)]'
                : 'border border-white/10 text-midnight-100 hover:border-gold/40 hover:text-gold'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

function CommercialHighlights() {
  const highlights = [
    { stat: '4+', label: 'Commercial Projects' },
    { stat: '₹ Cr+', label: 'Investment Value' },
    { stat: '100%', label: 'Clear Title' },
    { stat: 'RERA', label: 'Approved Projects' },
  ]

  return (
    <section className="bg-dark-gradient py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-10">
        {highlights.map((h, i) => (
          <Reveal key={h.label} delay={i * 0.1} className="text-center">
            <p className="font-serif text-4xl font-bold brand-text md:text-5xl">{h.stat}</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-midnight-200">
              {h.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function InvestmentBenefits() {
  return (
    <section className="section-padding">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="section-label mb-4">Commercial Investment Benefits</p>
          <h2 className="heading-xl text-white">
            Why commercial land & <span className="gold-text">showrooms?</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-midnight-200">
            Commercial properties in Ludhiana's high-growth corridors deliver
            strong rental yields and capital appreciation. Whether you're
            looking for a showroom for your brand or land for a future
            development — RSV Infra puts you in the right spot.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { icon: '📈', title: 'High Appreciation', text: 'Ludhiana commercial corridors have delivered consistent land value growth year-on-year.' },
              { icon: '🏬', title: 'Premium Showrooms', text: 'Ground-floor, glass-facade showroom units designed for maximum brand visibility.' },
              { icon: '🗺️', title: 'Prime Locations', text: 'Ferozepur Road, Mall Road, GT Road — Ludhiana\'s most sought-after commercial strips.' },
              { icon: '📋', title: 'All Approvals Ready', text: 'Commercial zoning, NOCs, and clear title — zero legal hassle, ready to transact.' },
            ].map((b) => (
              <div key={b.title} className="glass-card p-6">
                <div className="mb-3 text-2xl">{b.icon}</div>
                <h3 className="font-serif text-lg font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-midnight-200">{b.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            {investImages.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl ${i === 1 ? 'mt-8' : ''} ${i === 2 ? '-mt-8' : ''}`}
              >
                <img
                  src={src}
                  alt={`Commercial ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CommercialCTA() {
  return (
    <section className="section-padding bg-dark-gradient">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="heading-xl text-white">
            Looking for the right <span className="gold-text">commercial space?</span>
          </h2>
          <p className="mt-5 text-lg text-midnight-200">
            Our commercial specialists will help you find or invest in a
            land parcel or showroom unit that aligns with your business goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">
              Talk to a Specialist <FiArrowRight />
            </Link>
            <a
              href="https://share.google/wDBpeADG5SuZ3qPJs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FiMapPin /> View Location
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
