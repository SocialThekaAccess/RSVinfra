import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { placeholder, residentialProjects } from '../data/projects'
import residentialImg   from '../assets/ResidentialImage.png'
import residentialImg2  from '../assets/Residential2.png'
import residentialBldg  from '../assets/ResidentialBuildings.png'
import residentialPlots from '../assets/ResidentialPlots.png'

const whyImages = [residentialPlots, residentialImg2, residentialBldg, residentialImg]

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
        label="Residential Plots"
        title="Own land where your legacy begins"
        subtitle="Premium RERA-approved residential plots across Ludhiana's most sought-after locations. Wide roads, complete infrastructure, and clear titles — everything you need to build your dream home."
        image={residentialImg2}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="section-label mb-4">Residential Plot Portfolio</p>
            <h2 className="heading-xl text-white">
              The right plot, in the <span className="gold-text">right location</span>
            </h2>
            <p className="mt-5 text-lg text-midnight-200">
              RSV Infra's residential plots are set in fully planned, gated
              communities with wide internal roads, underground utilities, lush
              green belts, and all civic amenities in place. Choose your size,
              choose your location — and build exactly what you envision.
            </p>
          </Reveal>

          {/* Filters */}
          <div className="mt-12 space-y-6 border-t border-white/5 pt-8">
            <FilterRow label="Plot Type" options={types} value={typeFilter} onChange={setTypeFilter} />
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

      {/* Plot features band */}
      <PlotFeaturesBand />

      {/* Why invest section */}
      <WhyInvest />

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

function PlotFeaturesBand() {
  const features = [
    'RERA Approved',
    'Clear Title Deeds',
    'Wide 30–60 Ft Roads',
    'Underground Electricity',
    'Sewerage & Drainage',
    'Water Supply Lines',
    'Gated Community',
    'Street Lighting',
    'Landscaped Green Belts',
    'Children\'s Play Area',
    'Easy Home Loan',
    'Flexible Plot Sizes',
  ]

  return (
    <section className="section-padding bg-dark-gradient">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="section-label mb-4">Plot Infrastructure</p>
          <h2 className="heading-xl text-white">
            Everything in place, <span className="gold-text">before you build</span>
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {features.map((a, i) => (
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

function WhyInvest() {
  return (
    <section className="section-padding">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="section-label mb-4">Why Buy a Plot with RSV Infra</p>
          <h2 className="heading-xl text-white">
            Your plot, your <span className="gold-text">rules</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-midnight-200">
            Unlike apartments, a plot gives you complete freedom — build now,
            build later, or simply hold and watch your investment grow. RSV Infra
            plots are in locations that have consistently delivered strong
            appreciation, backed by transparent deals and a 45-year legacy.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              'Build at your own pace — no pressure, no penalties',
              'High appreciation potential in prime Ludhiana corridors',
              'Full freedom of design — your architect, your vision',
              'Passive investment option with strong rental demand nearby',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-midnight-100">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-outline mt-10">
            Enquire Now <FiArrowRight />
          </Link>
        </Reveal>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            {whyImages.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl ${i === 1 ? 'mt-8' : ''} ${i === 2 ? '-mt-8' : ''}`}
              >
                <img
                  src={src}
                  alt={`Residential plot ${i + 1}`}
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

function ResidentialCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-900 via-midnight-800 to-midnight-900" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <Reveal>
          <h2 className="heading-xl text-white">
            Your dream plot is <span className="gold-text">closer than you think</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-midnight-100">
            Schedule a site visit to any of our residential plot communities and
            walk the land that could be yours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">
              Book a Site Visit <FiArrowRight />
            </Link>
            <a
              href="https://share.google/wDBpeADG5SuZ3qPJs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FiMapPin /> View on Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
