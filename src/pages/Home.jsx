import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMapPin, FiCheckCircle, FiStar } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import AnimatedCounter from '../components/AnimatedCounter'
import HeroSlider from '../components/HeroSlider'
import {
  placeholder,
  commercialProjects,
  residentialProjects,
  testimonials,
} from '../data/projects'
import alegacy from '../assets/Alegacyoftrust.png'
import whoWeAreImg       from '../assets/Who We Are.png'
import residentialBldg   from '../assets/ResidentialBuildings.png'
import commercialBuildings from '../assets/CommercialBuildings.png'
import commercialPlots  from '../assets/CommercialPlots.png'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <AboutPreview />
      <FeaturedProjectShowcase />
      <PhilosophyPanel />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  )
}

/* ─────────────────────────── STATS ─────────────────────────── */
function StatsBar() {
  const stats = [
    { end: 45, suffix: '+', label: 'Years of Legacy' },
    { end: 20, suffix: '+', label: 'Landmark Projects' },
    { end: 12, suffix: 'M', label: 'Sq.Ft. Delivered' },
    { end: 8500, suffix: '+', label: 'Happy Families' },
  ]
  return (
    <section className="relative border-y border-white/5 bg-midnight-800/50">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-8 px-6 py-14 lg:grid-cols-4 lg:px-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <p className="font-serif text-4xl font-bold md:text-5xl" style={{
              background: i % 2 === 0
                ? 'linear-gradient(135deg,#e2c898 0%,#c9a46e 50%,#a07840 100%)'
                : 'linear-gradient(135deg,#e05a1a 0%,#c84b11 60%,#9e3a0c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              <AnimatedCounter end={s.end} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm uppercase tracking-wider text-midnight-200">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────── ABOUT PREVIEW ─────────────────────────── */
function AboutPreview() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={whoWeAreImg}
                alt="RSV Infra — A Legacy of Trust"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <div className="absolute top-3 left-3 grid h-20 w-20 place-items-center rounded-2xl bg-brand-gradient text-center text-white shadow-xl">
              <div>
                <p className="font-serif text-3xl font-bold leading-none">45</p>
                <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-wider">Years</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="section-label mb-4">Who We Are</p>
            <h2 className="heading-xl text-white">
              A legacy of trust, built on
              <span className="gold-text"> timeless value</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-midnight-200">
              For over four decades, RSV Infra has been delivering premium residential plots,
              commercial lands, and showroom spaces across Ludhiana and Punjab. We bring
              disciplined execution, complete transparency, and an uncompromising commitment
              to quality to every development we undertake.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                'Government & RERA approved projects',
                'Transparent, on-time delivery',
                'Prime locations across Ludhiana',
                'Clear titles & full documentation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-midnight-100">
                  <FiCheckCircle className="mt-1 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.35}>
            <Link to="/about" className="btn-outline mt-10">
              Discover Our Story <FiArrowRight />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── FEATURED SHOWCASE ─────────────────────────── */
function FeaturedProjectShowcase() {
  const showcased = [
    { ...residentialProjects[0], tag: 'Flagship Launch', category: 'Residential Plot' },
    { ...commercialProjects[0], tag: 'Prime Commercial', category: 'Commercial Land' },
    { ...commercialProjects[1], tag: 'Showroom Units', category: 'Commercial Showroom' },
  ]

  return (
    <section className="bg-dark-gradient">
      <div className="mx-auto max-w-[1500px] px-6 pt-20 pb-4 lg:px-10">
        <Reveal>
          <p className="section-label mb-4">Signature Developments</p>
          <h2 className="heading-xl text-white">
            Projects that <span className="gold-text">define Ludhiana</span>
          </h2>
        </Reveal>
      </div>

      {showcased.map((project, i) => (
        <ShowcaseCard key={project.id} project={project} flip={i % 2 !== 0} index={i} />
      ))}
    </section>
  )
}

function ShowcaseCard({ project, flip, index }) {
  const isCommercial = project.category === 'Commercial Land' || project.category === 'Commercial Showroom'
  return (
    <Reveal delay={0.1}>
      <div
        className={`mx-auto flex max-w-[1500px] flex-col items-center gap-8 border-t border-white/5 px-6 py-12 lg:px-10 lg:py-16 md:flex-row md:gap-0 ${
          flip ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Project image */}
        <div className="relative flex-shrink-0 w-full md:w-[46%]">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/70 via-transparent to-transparent" />
            <span
              className={`absolute bottom-5 left-5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-md ${
                project.status === 'Ready to Move'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                  : 'bg-gold/20 text-gold-light border border-gold/40'
              }`}
            >
              {project.status}
            </span>
            <span className="absolute top-5 right-5 rounded-full bg-midnight-900/70 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/10">
              {project.category}
            </span>
          </div>
        </div>

        {/* Detail card */}
        <div className={`flex-1 ${flip ? 'md:pr-10 lg:pr-16' : 'md:pl-10 lg:pl-16'}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            {project.tag}
          </p>
          <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            {project.name}
          </h3>
          <div className="mt-4 h-[3px] w-20 bg-brand-gradient rounded-full" />
          <p className="mt-6 max-w-lg text-base leading-relaxed text-midnight-200">
            {project.description}
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              { label: 'Type', value: project.type },
              { label: 'Location', value: project.location },
              { label: 'Plot Size', value: project.area },
              { label: 'Status', value: project.status },
              { label: 'Possession', value: project.possession },
              { label: 'Price', value: project.price },
            ].map(({ label, value }) => (
              <li key={label} className="flex gap-2">
                <span className="font-semibold text-white">{label}</span>
                <span className="text-gold">—</span>
                <span className="text-midnight-200">{value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to={isCommercial ? '/commercial' : '/residential'}
              className="btn-gold"
            >
              View Projects <FiArrowRight />
            </Link>
            {project.mapLink && (
              <a
                href={project.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FiMapPin /> View on Map
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* ─────────────────────────── PHILOSOPHY ─────────────────────────── */
function PhilosophyPanel() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 flex">
        <div className="w-full bg-midnight-800/80 md:w-1/2" />
        <div className="hidden w-1/2 md:block bg-midnight-900/60" />
      </div>

      <div className="relative mx-auto grid max-w-[1500px] items-stretch px-0 md:grid-cols-[100px_1fr_1fr] lg:grid-cols-[120px_1fr_1fr]">
        <div className="hidden items-center justify-center border-r border-white/10 py-24 md:flex">
          <p
            className="font-serif text-2xl font-bold text-white/20 lg:text-3xl"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.1em' }}
          >
            Our Philosophy
          </p>
        </div>

        <div className="flex flex-col justify-center px-8 py-12 lg:px-16 lg:py-28">
          <Reveal>
            <p className="section-label mb-5">Upward Growth Always</p>
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              Real estate that
              <span className="rust-text"> transcends</span>
              <br />the ordinary
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-base leading-[1.9] text-midnight-200">
              At RSV Infra, we believe real estate transcends mere construction
              — it is an art form that must inspire and endure. Our philosophy
              centres on creating plots and spaces that seamlessly blend
              stability, beauty, and purpose, serving as timeless landmarks for
              generations to come.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-4 text-base leading-[1.9] text-midnight-200">
              Each project is envisioned not just as land on a map, but as a
              legacy — crafted with precision, backed by clear titles, and
              delivered with an unwavering commitment to excellence.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <Link to="/about" className="btn-gold mt-10 self-start">
              Discover More <FiArrowRight />
            </Link>
          </Reveal>
        </div>

        <div className="relative hidden items-center justify-center py-16 pr-8 md:flex">
          <Reveal delay={0.2} className="relative w-full max-w-sm">
            <div className="absolute -top-6 right-0 w-4/5 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={commercialBuildings}
                alt="Commercial building"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="relative ml-0 mt-24 w-4/5 overflow-hidden rounded-2xl border-4 border-midnight-900 shadow-2xl">
              <img
                src={residentialBldg}
                alt="Residential plot"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── FEATURED GRID ─────────────────────────── */
function FeaturedProjects() {
  const featured = [
    commercialProjects[1],
    residentialProjects[1],
    residentialProjects[2],
    commercialProjects[2],
  ]

  return (
    <section className="section-padding bg-dark-gradient">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="section-label mb-4">More Developments</p>
              <h2 className="heading-xl text-white">Explore All Projects</h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="flex gap-3">
              <Link to="/commercial" className="btn-outline text-sm">Commercial</Link>
              <Link to="/residential" className="btn-outline text-sm">Residential</Link>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ project, index }) {
  const isCommercial = commercialProjects.includes(project)
  return (
    <Reveal delay={index * 0.1}>
      <Link
        to={isCommercial ? '/commercial' : '/residential'}
        className="group relative block h-80 overflow-hidden rounded-2xl md:h-96"
      >
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-midnight-900/30 to-transparent transition-all duration-500 group-hover:from-midnight-900/95" />
        <span className="absolute top-5 left-5 rounded-full border border-gold/40 bg-gold/20 px-3 py-1 text-xs font-semibold text-gold-light backdrop-blur-md">
          {project.type}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-sm text-midnight-100">
            <FiMapPin className="text-gold" />
            <span>{project.location}</span>
          </div>
          <h3 className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">{project.name}</h3>
          <div className="mt-3 flex max-h-0 items-center gap-2 overflow-hidden text-gold opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100">
            <span className="text-sm font-semibold">View Project</span>
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

/* ─────────────────────────── WHY CHOOSE US ─────────────────────────── */
function WhyChooseUs() {
  const reasons = [
    { icon: '🏛️', title: 'Unmatched Legacy', text: '45 years of real estate excellence backing every promise we make and every plot we deliver.' },
    { icon: '🤝', title: 'Transparent Deals', text: 'Clear pricing, honest timelines, and government-approved projects. No hidden charges, ever.' },
    { icon: '📋', title: 'Clear Title & Docs', text: 'Every plot comes with fully verified title, all approvals, and complete documentation in place.' },
    { icon: '🌱', title: 'Planned Communities', text: 'Wide roads, green belts, sewerage, water supply — fully developed layouts ready to build on.' },
    { icon: '📍', title: 'Prime Ludhiana Locations', text: 'Every development sits on the most strategic corridors of Ludhiana for maximum appreciation.' },
    { icon: '💎', title: 'Premium Quality', text: 'Whether a plot or a showroom unit — the infrastructure, finish, and planning are second to none.' },
  ]

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-4">Why RSV Infra</p>
          <h2 className="heading-xl text-white">
            The difference is in the <span className="gold-text">details</span>
          </h2>
          <p className="mt-5 text-lg text-midnight-200">
            We don't just sell land. We deliver fully developed, government-approved
            plots and commercial spaces that earn trust and grow in value.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="glass-card group h-full p-8 transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.06]">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-gold/10 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {r.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-midnight-200">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── TESTIMONIALS ─────────────────────────── */
function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive((v) => (v + 1) % testimonials.length), 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-padding overflow-hidden bg-dark-gradient">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="section-label mb-4">Client Stories</p>
          <h2 className="heading-xl text-white">Trusted by Thousands</h2>
        </Reveal>

        <div className="relative mt-12 min-h-[300px] sm:min-h-[260px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 0.96 }}
              transition={{ duration: 0.5 }}
              className={`${active === i ? 'relative' : 'absolute inset-0'} ${active !== i ? 'pointer-events-none' : ''}`}
            >
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FiStar key={j} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif text-xl italic leading-relaxed text-white md:text-2xl">
                "{t.quote}"
              </p>
              <div className="mt-6">
                <p className="font-semibold text-gold-light">{t.name}</p>
                <p className="text-sm text-midnight-200">{t.role} · {t.project}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 py-4 box-content ${active === i ? 'w-8 bg-gold' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── CTA ─────────────────────────── */
function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-midnight-900" />
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-900 via-midnight-800/80 to-midnight-900" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <Reveal>
          <p className="section-label mb-4">Ready to Find Your Space?</p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Let's build your next
            <span className="gold-text"> address</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-midnight-100">
            Book a personalised site visit today and experience the RSV Infra
            difference for yourself.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">
              Book a Site Visit <FiArrowRight />
            </Link>
            <a href="tel:+919876543210" className="btn-outline">
              +91 98765 43210
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
