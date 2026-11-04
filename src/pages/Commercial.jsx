import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { px, img, commercialProjects } from '../data/projects'

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
        title="Spaces where business thrives"
        subtitle="Grade-A office towers, retail destinations, and corporate campuses engineered for ambition. Every commercial development by RSV Infra is designed to give your enterprise the stage it deserves."
        image={px(2157532, 2000)}
      />

      {/* Why commercial with us */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="section-label mb-4">Commercial Portfolio</p>
            <h2 className="heading-xl text-white">
              Addresses that <span className="gold-text">command attention</span>
            </h2>
            <p className="mt-5 text-lg text-midnight-200">
              From soaring business towers to high-footfall retail malls, our
              commercial portfolio spans every category a growing enterprise
              needs — each built to the highest standards of quality and
              sustainability.
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

      {/* Commercial highlights band */}
      <CommercialHighlights />

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
    { stat: '6', label: 'Commercial Projects' },
    { stat: '40 L+', label: 'Sq.Ft. Built-up' },
    { stat: '100%', label: 'Power Backup' },
    { stat: 'LEED', label: 'Certified Towers' },
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

function CommercialCTA() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="heading-xl text-white">
            Looking for the right <span className="gold-text">commercial space?</span>
          </h2>
          <p className="mt-5 text-lg text-midnight-200">
            Our commercial specialists will help you find or invest in a space
            that aligns with your business goals.
          </p>
          <a href="/contact" className="btn-gold mt-8">
            Talk to a Specialist
          </a>
        </Reveal>
      </div>
    </section>
  )
}
