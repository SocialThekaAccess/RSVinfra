import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail, FiArrowUpRight } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logo from '../assets/LogoRSV.png'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-midnight-900">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img src={logo} alt="RSV Infra" className="h-16 w-auto object-contain" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-midnight-200">
              Crafting landmark residential and commercial spaces with a legacy
              of trust, transparency, and timeless design. Upward Growth Always.
            </p>
            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-midnight-100 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-midnight-900"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Commercial', path: '/commercial' },
                { name: 'Residential', path: '/residential' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-midnight-200 transition-colors hover:text-gold"
                  >
                    <span>{link.name}</span>
                    <FiArrowUpRight className="opacity-0 transition-all group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white">Offerings</h4>
            <ul className="mt-5 space-y-3 text-sm text-midnight-200">
              <li>Premium Apartments</li>
              <li>Luxury Villas</li>
              <li>Grade-A Offices</li>
              <li>Retail Destinations</li>
              <li>Co-working Spaces</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm text-midnight-200">
              <li className="flex gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-gold" />
                <span>SCO 18, Punjab 141001</span>
              </li>
              <li className="flex gap-3">
                <FiPhone className="mt-0.5 shrink-0 text-gold" />
                <a href="tel:+919876543210" className="hover:text-gold">+91 98765 43210</a>
              </li>
              <li className="flex gap-3">
                <FiMail className="mt-0.5 shrink-0 text-gold" />
                <a href="mailto:sales@rsvinfra.com" className="hover:text-gold">sales@rsvinfra.com</a>
              </li>
            </ul>
            {/* Email subscribe */}
            <div className="mt-6 flex overflow-hidden rounded-full border border-white/10 focus-within:border-gold">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-midnight-300 outline-none"
              />
              <button className="shrink-0 bg-gold-gradient px-4 py-3 text-midnight-900 transition-all hover:opacity-90">
                <FiArrowUpRight />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center text-xs text-midnight-300 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} RSV Infra. All rights reserved.</p>
          <p className="max-w-xl leading-relaxed">
            This website is purely conceptual and does not constitute a legally
            binding offer. All images are artist's impressions and subject to
            change without notice.
          </p>
        </div>
      </div>
    </footer>
  )
}
