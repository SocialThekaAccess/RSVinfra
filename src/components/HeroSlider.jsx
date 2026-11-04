import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import slider1 from '../assets/Slider1.png'
import slider2 from '../assets/Slider2.png'
import slider3 from '../assets/Slider3.png'
import slider4 from '../assets/Slider4.png'
import './HeroSlider.css'

/*
  Headline markup:
    **text**  → bold white
    [text]    → bold gold (accent word)
    plain     → light weight white
*/
const AUTOPLAY_MS = 6000   // slide badalne ka time (milliseconds)

const SLIDES = [
  {
    id: 0,
    image: slider1,
    eyebrow: 'Premium Real Estate Development',
    lines: ['BUILDING [LANDMARKS]', 'THAT DEFINE **CITIES**', 'WITH **VISION AND INTEGRITY**'],
    ctaTo: '/residential',
  },
  {
    id: 1,
    image: slider2,
    eyebrow: 'Luxury Residences',
    lines: ['HOMES CRAFTED FOR', 'THOSE WHO [DEMAND MORE]'],
    ctaTo: '/residential',
  },
  {
    id: 2,
    image: slider3,
    eyebrow: 'Grade-A Commercial',
    lines: ['SPACES THAT GIVE', 'YOUR BUSINESS', '**AN [EDGE]**'],
    ctaTo: '/commercial',
  },
  {
    id: 3,
    image: slider4,
    eyebrow: 'Upward Growth Always',
    lines: ['45 YEARS OF [TRUST]', '**INTEGRITY AND**', '**EXPERTISE**'],
    ctaTo: '/about',
  },
]

/* Converts the markup above into styled spans */
function renderLine(str) {
  return str
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\])/g)
    .filter(Boolean)
    .map((part, i) => {
      if (part.startsWith('**')) {
        // bold may contain a [gold] word inside, e.g. **AN [EDGE.]**
        return <strong key={i}>{renderLine(part.slice(2, -2))}</strong>
      }
      if (part.startsWith('[')) {
        return <span key={i} className="hero-gold">{part.slice(1, -1)}</span>
      }
      return <span key={i}>{part}</span>
    })
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const lock = useRef(false)          // click-spam se bachne ke liye (state nahi, ref)
  const total = SLIDES.length

  function goTo(idx) {
    if (lock.current || idx === current) return
    lock.current = true
    setCurrent(idx)
    setTimeout(() => { lock.current = false }, 900)
  }

  // Auto-advance: har slide ke baad timer dobara shuru hota hai
  // (manual click par bhi reset ho jata hai)
  useEffect(() => {
    const t = setTimeout(() => {
      setCurrent((c) => (c + 1) % total)
    }, AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [current, total])

  const prev = () => goTo((current - 1 + total) % total)
  const next = () => goTo((current + 1) % total)

  return (
    <section className="hero-section">

      {/* ── Background slides ── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          aria-hidden={i !== current}
        >
          <img src={slide.image} alt={slide.eyebrow} />
        </div>
      ))}

      {/* ── Overlays ── */}
      <div className="hero-overlay hero-overlay-top" />
      <div className="hero-overlay hero-overlay-left" />
      <div className="hero-overlay hero-overlay-bottom" />

      {/* ── Text ── */}
      <div className="hero-text-wrapper">
        <div className="hero-text-inner">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              className={`hero-slide-text ${i === current ? 'active' : 'inactive'}`}
              aria-hidden={i !== current}
            >
              <span className="hero-eyebrow" style={{ '--i': 0 }}>
                {slide.eyebrow}
              </span>

              <h1 className="hero-headline">
                {slide.lines.map((line, j) => (
                  <span key={j} className="hero-line" style={{ '--i': j + 1 }}>
                    {renderLine(line)}
                  </span>
                ))}
              </h1>

              <div className="hero-cta-row" style={{ '--i': slide.lines.length + 1 }}>
                <Link to={slide.ctaTo} className="btn-gold">
                  Explore Projects <FiArrowRight />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Book a Site Visit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Arrows ── */}
      <button className="hero-arrow hero-arrow-left" onClick={prev} aria-label="Previous slide">
        <FiChevronLeft />
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={next} aria-label="Next slide">
        <FiChevronRight />
      </button>

      {/* ── Dots ── */}
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Counter ── */}
      <div className="hero-counter">
        <span className="hero-counter-current">{String(current + 1).padStart(2, '0')}</span>
        <span className="hero-counter-line" />
        <span>{String(total).padStart(2, '0')}</span>
      </div>

    </section>
  )
}