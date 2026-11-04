import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { px, img, residentialProjects } from '../data/projects'

export default function Residential() {
  const [typeFilter, setTypeFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  const types = useMemo(
    () => ['All', ...new Set(residentialProjects.map((p) => p.type))],
    []
  )
  const statuses = useMemo(
    () => ['All', ...new Set(residentialProjects.map((p) => p.status))],
    []
  )

  const filtered = useMemo(
    () =>
      residentialProjects.filter(
        (p) =>
          (typeFilter === 'All' || p.type === typeFilter) &&
          (statusFilter === 'All' || p.status === statusFilter)
      ),
    [typeFilter, statusFilter]
  )

  return (
    <>
      <PageHero
        label="Residential Developments"
        title="Homes designed for living well"
        subtitle="From sky-villas with private lift lobbies to gated villa communities and smart family homes, every RSV Infra residence is crafted to turn the everyday into the extraordinary."
        image={px(1029599, 2000)}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="section-label mb-4">Residential Portfolio</p>
            <h2 className="heading-xl text-white">
              Where comfort meets <span className="gold-text">craftsmanship</span>
            </h2>
            <p className="mt-5 text-lg text-midnight-200">
              Our residential developments span the full spectrum of luxury —
              from ultra-exclusive penthouses to thoughtfully designed family
              apartments. Each home reflects our belief that where you live
              should be as inspiring as what you do.
            </p>
          </Reveal>

          {/* Filters */}
          <div className="mt-12 space-y-6 border-t border-white/5 pt-8">
            <FilterRow label="Configuration" options={types} value={typeFilter} onChange={setTypeFilter} />
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

      {/* Amenities band */}
      <AmenitiesBand />

      {/* Lifestyle showcase */}
      <LifestyleShowcase />

      {/* CTA */}
      <ResidentialCTA />
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

function AmenitiesBand() {
  const amenities = [
    'Resort-style pools',
    'Sky-deck lounges',
    'Private lift lobbies',
    'Clubhouse & spa',
    'Landscaped gardens',
    'Smart home automation',
    'Sports courts',
    'EV charging',
    'Kids play zones',
    'Rooftop gardens',
  ]

  return (
    <section className="section-padding bg-dark-gradient">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="section-label mb-4">World-Class Amenities</p>
          <h2 className="heading-xl text-white">
            Everything you need, <span className="gold-text">and more</span>
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {amenities.map((a, i) => (
            <Reveal key={a} delay={i * 0.05}>
              <span className="glass-card px-5 py-3 text-sm font-medium text-midnight-100 transition-colors hover:text-gold">
                {a}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function LifestyleShowcase() {
  return (
    <section className="section-padding">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="section-label mb-4">The RSV Lifestyle</p>
          <h2 className="heading-xl text-white">
            More than a home — a <span className="gold-text">way of living</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-midnight-200">
            When you choose an RSV Infra home, you're choosing a community
            where every detail has been considered. From the moment you drive
            through the gates to the sunset views from your private balcony,
            life here is designed to feel effortless and exceptional.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              'Thoughtfully planned communities with green open spaces',
              'Architecturally distinctive towers and villa streetscapes',
              'Concierge-style property management and support',
              'Sustainable systems that lower your cost of living',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-midnight-100">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-outline mt-10">
            Enquire Now
            <FiArrowRight />
          </Link>
        </Reveal>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={px(2102587, 700)}
                alt="Residential pool"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src={px(1571460, 700)}
                alt="Residential interior"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="-mt-8 overflow-hidden rounded-2xl">
              <img
                src={px(259962, 700)}
                alt="Residential living space"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={px(2121121, 700)}
                alt="Residential facade"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ResidentialCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={px(1571460, 2000)}
          alt="RSV Infra home"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-midnight-900/85" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <Reveal>
          <h2 className="heading-xl text-white">
            Your dream home is <span className="gold-text">closer than you think</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-midnight-100">
            Schedule a visit to any of our residential communities and
            experience the difference for yourself.
          </p>
          <Link to="/contact" className="btn-gold mt-10">
            Book a Site Visit
            <FiArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
