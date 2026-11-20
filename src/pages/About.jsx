import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiTarget, FiEye, FiHeart } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import AnimatedCounter from '../components/AnimatedCounter'
import { placeholder } from '../data/projects'
import alegacy              from '../assets/Alegacyoftrust.png'
import commercialBuildings  from '../assets/CommercialBuildings.png'
import commercialImg1       from '../assets/CommercialImage.png'
import residentialBldg      from '../assets/ResidentialBuildings.png'
import residentialImg       from '../assets/ResidentialImage.png'
import commercialPlots      from '../assets/CommercialPlots.png'

export default function About() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="Four decades of building trust"
        subtitle="RSV Infra is redefining real estate development in North India through transparency, integrity, and timely delivery — with a 45-year legacy rooted in infrastructure excellence."
        image={commercialBuildings}
      />

      <StorySection />
      <CirclePillars />
      <MissionVision />
      <Values />
      <Timeline />
      <Team />
      <LegacyCTA />
    </>
  )
}

/* ----------------------------- Story ----------------------------- */
function StorySection() {
  return (
    <section className="section-padding">
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={commercialBuildings}
                alt="RSV Infra development"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-midnight-800/90 p-6 backdrop-blur-md lg:left-auto lg:-right-8 lg:w-64">
              <div>
                <p className="font-serif text-3xl font-bold rust-text">45+</p>
                <p className="text-xs uppercase tracking-wider text-midnight-200">
                  Years of Excellence
                </p>
              </div>
              <div className="h-12 w-[1px] bg-white/10" />
              <div>
                <p className="font-serif text-3xl font-bold gold-text">20+</p>
                <p className="text-xs uppercase tracking-wider text-midnight-200">
                  Landmark Projects
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="section-label mb-4">Who We Are</p>
            <h2 className="heading-xl text-white">
              A name built on <span className="gold-text">integrity</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-midnight-200">
              RSV Infra began with a simple belief: that real estate
              development should be honest, transparent, and delivered on time.
              What started as an infrastructure venture over four decades ago
              has grown into one of North India's most trusted names in premium
              residential and commercial development.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-lg leading-relaxed text-midnight-200">
              Today, we bring disciplined execution and customer-first values to
              every project — from soaring corporate towers to gated villa
              communities. Our approach combines infrastructure expertise with
              urban planning, thoughtful design, and community-oriented
              development, creating spaces that stand the test of time.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: 'Transparency', desc: 'Honest deals' },
                { label: 'Integrity', desc: 'Delivered promise' },
                { label: 'Excellence', desc: 'Uncompromising' },
              ].map((v) => (
                <div key={v.label} className="glass-card p-4 text-center">
                  <p className="font-serif text-sm font-bold text-gold">{v.label}</p>
                  <p className="mt-1 text-xs text-midnight-200">{v.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- Mission & Vision ----------------------------- */
function MissionVision() {
  const cards = [
    {
      icon: FiTarget,
      title: 'Our Mission',
      text: 'To develop landmark residential and commercial spaces that enrich lives, strengthen communities, and set new benchmarks for quality and trust in real estate.',
    },
    {
      icon: FiEye,
      title: 'Our Vision',
      text: "To be North India's most respected real estate developer — recognised for transparent dealings, timely delivery, and developments that shape the cities of tomorrow.",
    },
    {
      icon: FiHeart,
      title: 'Our Promise',
      text: 'Every RSV Infra project is government-approved, transparently priced, and delivered with the discipline our 45-year legacy demands. Your trust is our foundation.',
    },
  ]

  return (
    <section className="section-padding bg-dark-gradient">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-4">What Drives Us</p>
          <h2 className="heading-xl text-white">
            Mission, vision & <span className="gold-text">promise</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="glass-card group h-full p-8 transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.06]">
                <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gold/10 text-3xl text-gold transition-transform duration-300 group-hover:scale-110">
                  <c.icon />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">{c.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-midnight-200">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- Core Values ----------------------------- */
function Values() {
  const values = [
    { num: '01', title: 'Customer First', text: 'Every decision begins with what is best for those who invest their trust and savings in us.' },
    { num: '02', title: 'Transparency', text: 'Clear pricing, honest timelines, and open communication at every stage of the journey.' },
    { num: '03', title: 'Quality Craftsmanship', text: 'The finest materials, the best talent, and an uncompromising eye for detail in every build.' },
    { num: '04', title: 'Timely Delivery', text: 'A disciplined execution engine that has delivered landmark after landmark, on schedule.' },
    { num: '05', title: 'Sustainability', text: 'Future-ready, energy-efficient buildings designed to reduce waste and respect the planet.' },
    { num: '06', title: 'Community Focus', text: "We don't just build structures — we build neighborhoods where people love to belong." },
  ]

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-4">Core Values</p>
          <h2 className="heading-xl text-white">
            The principles that <span className="gold-text">guide us</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.num} delay={i * 0.08}>
              <div className="group h-full border-l-2 border-white/10 p-6 transition-all duration-300 hover:border-gold">
                <p className="font-serif text-4xl font-bold text-white/10 transition-colors group-hover:text-gold/40">
                  {v.num}
                </p>
                <h3 className="mt-2 font-serif text-xl font-bold text-white">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-midnight-200">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- Timeline ----------------------------- */
function Timeline() {
  const milestones = [
    { year: '1981', title: 'The Beginning', text: 'Founded as an infrastructure venture with a focus on disciplined, quality-driven execution.' },
    { year: '1995', title: 'First Landmark', text: 'Delivered our first major residential development, setting the standard for what was to come.' },
    { year: '2008', title: 'Going Premium', text: 'Expanded into luxury residential and Grade-A commercial developments across the region.' },
    { year: '2018', title: 'Smart & Sustainable', text: 'Pioneered smart home automation and sustainable building systems across new projects.' },
    { year: '2024', title: 'Expanding Horizons', text: 'Acquired new land parcels for mixed-use developments, growing our footprint and ambition.' },
    { year: 'Today', title: 'Building the Future', text: 'Continuing to redefine real estate with a pipeline of landmark residential and commercial projects.' },
  ]

  return (
    <section className="section-padding bg-dark-gradient">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="section-label mb-4">Our Journey</p>
          <h2 className="heading-xl text-white">
            A legacy in the <span className="gold-text">making</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-gold via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-gold bg-midnight-900 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="h-3 w-3 rounded-full bg-gold" />
                  </div>

                  {/* Card */}
                  <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="glass-card p-6">
                      <p className="font-serif text-2xl font-bold gold-text">{m.year}</p>
                      <h3 className="mt-1 font-serif text-lg font-bold text-white">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-midnight-200">{m.text}</p>
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- Team ----------------------------- */
function Team() {
  const team = [
    { name: 'Rajveer Singh Virk', role: 'Founder & Chairman', img: residentialBldg },
    { name: 'Sandeep Verma', role: 'Managing Director', img: commercialPlots },
    { name: 'Anita Kapoor', role: 'Director, Design', img: residentialImg },
    { name: 'Vikram Khanna', role: 'Head of Projects', img: commercialImg1 },
  ]

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-4">Leadership</p>
          <h2 className="heading-xl text-white">
            The minds behind <span className="gold-text">the mission</span>
          </h2>
          <p className="mt-5 text-lg text-midnight-200">
            A team of seasoned professionals bringing decades of combined
            experience in real estate, design, and execution.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div className="group text-center">
                <div className="relative mx-auto h-64 w-full overflow-hidden rounded-2xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/90 via-transparent to-transparent" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-gold">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- Legacy Stats ----------------------------- */
function LegacyCTA() {
  return (
    <section className="section-padding bg-dark-gradient">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-midnight-800/40 p-10 text-center md:grid-cols-4 lg:p-14">
          {[
            { end: 45, suffix: '+', label: 'Years of Legacy' },
            { end: 20, suffix: '+', label: 'Projects Delivered' },
            { end: 8500, suffix: '+', label: 'Happy Families' },
            { end: 100, suffix: '%', label: 'On-Time Delivery' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <p className="font-serif text-4xl font-bold md:text-5xl" style={{
                background: i % 2 === 0
                  ? 'linear-gradient(135deg,#e05a1a 0%,#c84b11 60%,#9e3a0c 100%)'
                  : 'linear-gradient(135deg,#e2c898 0%,#c9a46e 50%,#a07840 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-midnight-200">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Be part of the next chapter
          </h2>
          <p className="mt-4 text-lg text-midnight-200">
            Explore our residential and commercial developments, or get in touch
            to start your journey with RSV Infra.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/residential" className="btn-gold">
              View Projects
              <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   CIRCLE PILLARS — interactive bubble selector
   Left: heading + animated body text
   Right: big filled active circle + outlined sibling circles
   Clicking any circle swaps the active content
═══════════════════════════════════════════════════════════════ */
const PILLARS = [
  {
    id: 0,
    label: 'Our Promise',
    heading: 'Our Promise',
    body: 'At RSV Infra, we are deeply committed to consistently working towards excellence, trust, and transparency. For us, all our clients, end-users, investors, and team members are at the heart of everything we do. We pledge to deliver exceptional quality and enduring value through each project — with meticulous attention to detail. Every relationship we forge and every project we undertake stands as a testament to our integrity and our vision.',
  },
  {
    id: 1,
    label: 'Vision Manifest',
    heading: 'Vision Manifest',
    body: 'To be the most respected real estate developer in North India — recognised for transparent dealings, landmark design, and communities that inspire generations. We envision a future where every RSV Infra address becomes a beacon of aspiration, setting new standards for how people live, work, and connect.',
  },
  {
    id: 2,
    label: 'Mission Statement',
    heading: 'Mission Statement',
    body: 'Our mission is to develop landmark residential and commercial spaces that enrich lives and strengthen communities. We combine 45 years of infrastructure excellence with customer-first values, disciplined execution, and a deep respect for the trust our clients place in us — delivering spaces that stand the test of time.',
  },
]

function CirclePillars() {
  const [active, setActive] = useState(0)
  const current = PILLARS[active]

  return (
    <section className="section-padding overflow-hidden bg-dark-gradient">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">

          {/* ── Left: text content ── */}
          <div className="flex-1 lg:max-w-[48%]">
            <Reveal key={current.id}>
              {/* Heading */}
              <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
                {current.heading}
              </h2>
              {/* Gold underline */}
              <div className="mt-4 h-[3px] w-20 rounded-full bg-brand-gradient" />
              {/* Body */}
              <p className="mt-8 text-base leading-[1.95] text-midnight-200">
                {current.body}
              </p>
              {/* Mobile pill buttons */}
              <div className="mt-8 flex flex-wrap gap-3 lg:hidden">
                {PILLARS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                      active === p.id
                        ? 'text-midnight-900'
                        : 'border border-white/20 text-midnight-200 hover:border-gold/50 hover:text-gold'
                    }`}
                    style={
                      active === p.id
                        ? { background: 'linear-gradient(135deg,#c84b11 0%,#c9a46e 100%)' }
                        : {}
                    }
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── Right: circle cluster ── */}
          <div className="relative hidden w-full max-w-[420px] lg:block">
            {/* We position 3 circles: active = big centre-left, others = smaller right stacked */}

            <div className="relative mx-auto h-[480px] w-[420px]">

              {/* Active — large filled circle with floating bubble animation */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 flex h-52 w-52 cursor-pointer items-center justify-center rounded-full shadow-[0_0_60px_rgba(200,75,17,0.35)] animate-float-spin transition-all duration-500"
                style={{ background: 'linear-gradient(135deg,#c84b11 0%,#c9a46e 100%)' }}
              >
                <span className="px-4 text-center font-serif text-lg font-bold leading-snug text-white">
                  {current.label}
                </span>
              </div>

              {/* Other two circles — outlined, stacked on the right */}
              <div className="absolute right-0 top-0 flex h-full flex-col items-center justify-center gap-6">
                {PILLARS.filter((p) => p.id !== active).map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    style={{ animationDelay: `${idx * 1.2}s` }}
                    className="flex h-44 w-44 items-center justify-center rounded-full border-2 border-gold/40 animate-float transition-all duration-300 hover:border-gold hover:shadow-[0_0_30px_rgba(201,164,110,0.25)]"
                  >
                    <span className="px-4 text-center font-serif text-base font-semibold leading-snug text-white/70 transition-colors hover:text-gold">
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
