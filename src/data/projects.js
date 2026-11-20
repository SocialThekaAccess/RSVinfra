// Centralized project data — all images from client-provided assets

import leMeridienImg    from '../assets/Meridineimg1.png'
import commercialImg1   from '../assets/CommercialImage.png'
import commercialImg4   from '../assets/Commercialimage4.png'
import commercialPlots  from '../assets/CommercialPlots.png'
import commercialPlots6 from '../assets/CommercialPlots6.png'
import residentialImg   from '../assets/ResidentialImage.png'
import residentialImg2  from '../assets/Residential2.png'
import residentialBldg  from '../assets/ResidentialBuildings.png'
import residentialPlot2 from '../assets/ResidentialPlot2.png'
import residentialPlots from '../assets/ResidentialPlots.png'

// Fallback placeholder (used only if no real image available)
export const placeholder = (label = '') =>
  `https://placehold.co/1200x900/0d0d0d/c9a46e?text=${encodeURIComponent(label || 'Image Coming Soon')}`

export const px  = (_id, _w) => placeholder()
export const img = px

// ─────────────────────────── RESIDENTIAL PLOTS ───────────────────────────
export const residentialProjects = [
  {
    id: 'le-meridien-ludhiana',
    name: 'Le Meridien',
    tagline: 'A new landmark. A new legacy.',
    location: 'Ferozepur Road, Ludhiana',
    type: 'Residential Plot',
    price: 'On Request',
    area: 'Multiple Plot Sizes',
    floors: 'Open Plot',
    units: 'Limited Units',
    status: 'New Launch',
    possession: 'Immediate',
    mapLink: 'https://share.google/wDBpeADG5SuZ3qPJs',
    image: leMeridienImg,
    gallery: [leMeridienImg, residentialPlots, residentialPlot2],
    features: [
      'RERA approved project',
      'Wide internal roads',
      'Gated & secured community',
      'Underground electricity',
      'Sewerage & water supply',
      'Landscaped green belts',
    ],
    description:
      "Le Meridien is RSV Infra's flagship residential plot development on Ferozepur Road, Ludhiana. Thoughtfully planned with wide roads, lush greens, and all civic amenities in place — this is the address you build your legacy on.",
  },
  {
    id: 'rsv-green-valley',
    name: 'RSV Green Valley',
    tagline: 'Your plot, your vision.',
    location: 'Pakhowal Road, Ludhiana',
    type: 'Residential Plot',
    price: 'On Request',
    area: '100–500 Sq. Yd. plots',
    floors: 'Open Plot',
    units: 'Limited Units',
    status: 'Under Construction',
    possession: 'Dec 2026',
    mapLink: 'https://share.google/wDBpeADG5SuZ3qPJs',
    image: residentialPlots,
    gallery: [residentialPlots, residentialPlot2, residentialImg],
    features: [
      'DTCP approved layout',
      'Paved internal roads 30–40 ft wide',
      'Gated community with security',
      'Street lighting throughout',
      "Park & children's play area",
      'Easy bank loan facility',
    ],
    description:
      'RSV Green Valley offers premium residential plots in a planned, gated layout on Pakhowal Road. With multiple plot sizes to choose from and all approvals in place, it is the ideal canvas for your dream home.',
  },
  {
    id: 'rsv-prime-enclave',
    name: 'RSV Prime Enclave',
    tagline: 'Prime land, prime life.',
    location: 'GT Road, Ludhiana',
    type: 'Residential Plot',
    price: 'On Request',
    area: '150–600 Sq. Yd. plots',
    floors: 'Open Plot',
    units: 'Limited Units',
    status: 'Ready to Move',
    possession: 'Available Now',
    mapLink: 'https://share.google/wDBpeADG5SuZ3qPJs',
    image: residentialPlot2,
    gallery: [residentialPlot2, residentialImg, residentialBldg],
    features: [
      'Corner & park-facing plots available',
      '60 ft wide master road',
      'Electricity & water connections ready',
      'Club facility for residents',
      'RERA & LDA approved',
      'Transparent pricing, no hidden charges',
    ],
    description:
      'RSV Prime Enclave delivers the most sought-after residential plots on GT Road — fully developed, government-approved, and ready to build on. Choose from park-facing, corner, and regular plots in a secure, well-planned community.',
  },
  {
    id: 'rsv-residency-heights',
    name: 'RSV Residency Heights',
    tagline: 'Where community meets comfort.',
    location: 'Dugri Road, Ludhiana',
    type: 'Residential Plot',
    price: 'On Request',
    area: '100–300 Sq. Yd. plots',
    floors: 'Open Plot',
    units: 'Limited Units',
    status: 'Under Construction',
    possession: 'Mar 2026',
    mapLink: 'https://share.google/wDBpeADG5SuZ3qPJs',
    image: residentialImg2,
    gallery: [residentialImg2, residentialBldg, residentialImg],
    features: [
      'Gated township layout',
      'Community clubhouse',
      'Wide tree-lined avenues',
      'Solar street lighting',
      'Underground drainage system',
      'Vastu-compliant plot orientation',
    ],
    description:
      'RSV Residency Heights is a thoughtfully planned residential township on Dugri Road, Ludhiana. Designed for families who want space, security, and a connected community — all in one address.',
  },
]

// ─────────────────────────── COMMERCIAL PROJECTS ───────────────────────────
export const commercialProjects = [
  {
    id: 'rsv-commercial-hub',
    name: 'RSV Commercial Hub',
    tagline: 'The business address Ludhiana needs.',
    location: 'Ferozepur Road, Ludhiana',
    type: 'Commercial Land',
    price: 'On Request',
    area: '500–5000 Sq. Yd. plots',
    floors: 'Open Land',
    units: 'Limited Plots',
    status: 'New Launch',
    possession: 'Immediate',
    mapLink: 'https://share.google/wDBpeADG5SuZ3qPJs',
    image: commercialPlots,
    gallery: [commercialPlots, commercialPlots6, commercialImg4],
    features: [
      'High-visibility frontage on main road',
      'Zoned for commercial use',
      'All NOCs & approvals in place',
      'Adjacent to residential catchment',
      'Wide road access — 60 ft road',
      'Ideal for showrooms, hotels, offices',
    ],
    description:
      "RSV Commercial Hub offers prime commercial land parcels on Ferozepur Road — the busiest commercial corridor in Ludhiana. Perfect for showrooms, hotels, office buildings, or mixed-use developments with maximum visibility and footfall.",
  },
  {
    id: 'rsv-showroom-square',
    name: 'RSV Showroom Square',
    tagline: 'Display your brand at its best.',
    location: 'BRS Nagar, Ludhiana',
    type: 'Commercial Showroom',
    price: 'On Request',
    area: '500–3000 Sq. Ft. units',
    floors: 'Ground Floor',
    units: 'Select Units Available',
    status: 'Ready to Move',
    possession: 'Available Now',
    mapLink: 'https://share.google/wDBpeADG5SuZ3qPJs',
    image: commercialImg1,
    gallery: [commercialImg1, commercialImg4, commercialPlots6],
    features: [
      'Double-height showroom ceiling',
      'Full glass frontage facade',
      'Dedicated parking for customers',
      'High foot-traffic location',
      'Power backup & 3-phase electricity',
      'Ideal for auto, furniture, lifestyle brands',
    ],
    description:
      'RSV Showroom Square offers ground-floor commercial showroom units designed for maximum brand impact. With full glass facades, double-height ceilings, and ample parking, every unit is built to put your brand in the spotlight.',
  },
  {
    id: 'rsv-mall-road-commercial',
    name: 'RSV Mall Road Commercial',
    tagline: 'Invest where the city meets commerce.',
    location: 'Mall Road, Ludhiana',
    type: 'Commercial Showroom',
    price: 'On Request',
    area: '300–2000 Sq. Ft. units',
    floors: 'Ground + First Floor',
    units: 'Limited Units',
    status: 'Under Construction',
    possession: 'Jun 2026',
    mapLink: 'https://share.google/wDBpeADG5SuZ3qPJs',
    image: commercialImg4,
    gallery: [commercialImg4, commercialImg1, commercialPlots],
    features: [
      'Prime Mall Road frontage',
      'Ground & first floor retail units',
      'Central air conditioning',
      'Escalators & lifts',
      'Multi-level basement parking',
      'High rental yield potential',
    ],
    description:
      "RSV Mall Road Commercial places your business at the epicentre of Ludhiana's most iconic shopping and commercial strip. With premium retail and showroom units across two floors, it is the city's most compelling commercial investment.",
  },
  {
    id: 'rsv-commercial-plots',
    name: 'RSV Commercial Plots',
    tagline: 'Build your enterprise from the ground up.',
    location: 'Focal Point, Ludhiana',
    type: 'Commercial Land',
    price: 'On Request',
    area: '1000–10000 Sq. Yd. plots',
    floors: 'Open Land',
    units: 'Available',
    status: 'Ready to Move',
    possession: 'Available Now',
    mapLink: 'https://share.google/wDBpeADG5SuZ3qPJs',
    image: commercialPlots6,
    gallery: [commercialPlots6, commercialPlots, commercialImg1],
    features: [
      'Industrial zoning approved',
      'Wide road access for heavy vehicles',
      'Power connection available',
      'Adjacent to major highway',
      'Clear title & all documents ready',
      'Suitable for factory, warehouse, logistics',
    ],
    description:
      'RSV Commercial Plots at Focal Point offer large commercial land parcels ideal for manufacturing units, warehouses, and logistics centres. With commercial zoning, clear title, and direct highway access, these plots are ready to build on.',
  },
]

export const testimonials = [
  {
    name: 'Harpreet Singh',
    role: 'Business Owner',
    project: 'Le Meridien',
    rating: 5,
    quote:
      'Bought a plot in Le Meridien and the experience was completely transparent. The layout is beautifully planned and the team delivered on every promise. RSV Infra has earned a customer for life.',
  },
  {
    name: 'Gurpreet Kaur',
    role: 'Investor',
    project: 'RSV Showroom Square',
    rating: 5,
    quote:
      'The showroom units at RSV Showroom Square are in a fantastic location. Already getting great rental inquiries. The build quality and the glass frontage are exactly what a premium brand needs.',
  },
  {
    name: 'Rajesh Mahajan',
    role: 'Homeowner',
    project: 'RSV Green Valley',
    rating: 5,
    quote:
      'RSV Green Valley gave us everything we were looking for — a wide road, park-facing plot, all approvals in place, and a team that was honest from day one. Building our home here soon.',
  },
  {
    name: 'Sukhwinder Bedi',
    role: 'Commercial Investor',
    project: 'RSV Commercial Hub',
    rating: 5,
    quote:
      'Invested in a commercial land parcel at RSV Commercial Hub on Ferozepur Road. The location is unbeatable and the appreciation has already been excellent. RSV Infra knows how to pick prime spots.',
  },
]
