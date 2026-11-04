import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle, FiChevronDown } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { px, img } from '../data/projects'

export default function Contact() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Let's start a conversation"
        subtitle="Whether you're looking for your dream home, the perfect commercial space, or just have a question — our team is here to help. Reach out and experience the RSV Infra way."
        image={px(1098460, 2000)}
      />

      <ContactCards />
      <FormAndMap />
      <FAQ />
    </>
  )
}

/* ----------------------------- Contact Cards ----------------------------- */
function ContactCards() {
  const cards = [
    {
      icon: FiMapPin,
      title: 'Visit Us',
      lines: ['RSV Tower, Sector 66', 'Mohali, Punjab 160066'],
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      lines: ['+91 98765 43210', '+91 98765 43211'],
    },
    {
      icon: FiMail,
      title: 'Email Us',
      lines: ['sales@rsvinfra.com', 'info@rsvinfra.com'],
    },
    {
      icon: FiClock,
      title: 'Office Hours',
      lines: ['Mon – Sat: 9:30 AM – 7:00 PM', 'Sunday: By appointment'],
    },
  ]

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="glass-card group h-full p-8 text-center transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.06]">
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-gold/10 text-3xl text-gold transition-transform duration-300 group-hover:scale-110">
                  <c.icon />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">{c.title}</h3>
                <div className="mt-3 space-y-1">
                  {c.lines.map((line) => (
                    <p key={line} className="text-sm text-midnight-200">{line}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- Form & Map ----------------------------- */
function FormAndMap() {
  return (
    <section className="section-padding bg-dark-gradient">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="section-label mb-4">Send a Message</p>
          <h2 className="heading-xl text-white">
            We'd love to <span className="gold-text">hear from you</span>
          </h2>
          <p className="mt-5 text-lg text-midnight-200">
            Fill out the form below and one of our specialists will get back to
            you within 24 hours. For urgent enquiries, please call us directly.
          </p>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="RSV Infra Location"
              src="https://www.google.com/maps?q=Mohali+Sector+66&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: '420px', border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 glass-card p-6">
            <h3 className="font-serif text-lg font-bold text-white">Head Office</h3>
            <div className="mt-4 space-y-3 text-sm text-midnight-200">
              <p className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-gold" />
                RSV Tower, Sector 66, Mohali, Punjab 160066, India
              </p>
              <p className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-gold" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <FiMail className="shrink-0 text-gold" />
                sales@rsvinfra.com
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------- Contact Form ----------------------------- */
function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Residential',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim()) {
      e.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email'
    }
    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone number'
    } else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone)) {
      e.phone = 'Please enter a valid phone number'
    }
    if (!form.message.trim()) e.message = 'Please tell us how we can help'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate()
    if (Object.keys(found).length > 0) {
      setErrors(found)
      return
    }
    // In a real app this would POST to an API endpoint.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card mt-8 p-10 text-center"
      >
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-gold/10 text-4xl text-gold">
          <FiCheckCircle />
        </div>
        <h3 className="font-serif text-2xl font-bold text-white">Thank you!</h3>
        <p className="mt-3 text-midnight-200">
          Your message has been received. One of our specialists will reach out
          to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setForm({ name: '', email: '', phone: '', interest: 'Residential', message: '' })
          }}
          className="btn-outline mt-8"
        >
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="John Doe" />
        <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="john@example.com" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone Number" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="+91 98765 43210" />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-midnight-100">
            I'm interested in
          </label>
          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-midnight-800 px-4 py-3 text-white outline-none transition-colors focus:border-gold"
          >
            <option>Residential</option>
            <option>Commercial</option>
            <option>Investment</option>
            <option>General Enquiry</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-midnight-100">Message</label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what you're looking for..."
          className={`w-full resize-none rounded-xl border bg-midnight-800 px-4 py-3 text-white placeholder-midnight-300 outline-none transition-colors focus:border-gold ${
            errors.message ? 'border-red-400/50' : 'border-white/10'
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-gold w-full sm:w-auto">
        Send Message
        <FiSend />
      </button>
    </form>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-midnight-100">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-midnight-800 px-4 py-3 text-white placeholder-midnight-300 outline-none transition-colors focus:border-gold ${
          error ? 'border-red-400/50' : 'border-white/10'
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  )
}

/* ----------------------------- FAQ ----------------------------- */
function FAQ() {
  const faqs = [
    {
      q: 'Are RSV Infra projects government approved?',
      a: 'Yes. Every RSV Infra development is a government-approved project with all necessary clearances and documentation in place before sales begin.',
    },
    {
      q: 'What is the typical booking process?',
      a: 'Once you select a unit, our sales team will guide you through the booking form, token payment, and agreement. The entire process is transparent, with all costs clearly communicated upfront.',
    },
    {
      q: 'Can I schedule a site visit before booking?',
      a: 'Absolutely. We encourage site visits. You can book one through the contact form on this page or by calling us directly, and we will arrange a guided tour at your convenience.',
    },
    {
      q: 'Do you offer home loan assistance?',
      a: 'Yes. We have tie-ups with leading banks and financial institutions. Our team can help you with loan eligibility, documentation, and getting the best interest rates.',
    },
    {
      q: 'What happens after possession?',
      a: 'We provide a comprehensive handover, warranty for structural and finishing defects, and ongoing property management support to ensure your home or office remains in pristine condition.',
    },
  ]

  const [open, setOpen] = useState(0)

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="section-label mb-4">Questions & Answers</p>
          <h2 className="heading-xl text-white">
            Frequently asked <span className="gold-text">questions</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-serif text-lg font-semibold text-white">{faq.q}</span>
                  <FiChevronDown
                    className={`shrink-0 text-gold transition-transform duration-300 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-6 text-midnight-200 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
