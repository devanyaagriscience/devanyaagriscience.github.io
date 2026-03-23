/**
 * Shared Document Whitelist
 * ─────────────────────────
 * Maps short slugs to hosted documents (PDFs, images, etc.)
 * stored under public/assets/information/.
 *
 * Access URL:  https://devanyaagriscience.github.io/share/media/<slug>
 * Direct URL:  https://devanyaagriscience.github.io/<path>
 *
 * Fields per entry:
 *   title      — display name shown in the viewer page
 *   path       — root-relative path (served from /public/)
 *   type       — 'pdf' | 'image' | 'video' | 'markdown'
 *   desc       — short description (optional)
 *   thumbnail  — root-relative path to a cover image (optional)
 *
 *
 * ⚠️  Only documents listed here are accessible via /share/media/.
 *     All others return a 403-style "not available" screen.
 */

export const SHARED_DOCS = {
  // ── PDFs ────────────────────────────────────────────────────────
  brochure: {
    title: 'Devanya Agri Science — Company Brochure',
    path: '/assets/information/brochures/devanaya-colatouge.pdf',
    type: 'pdf',
    desc: 'An overview of our product range, certifications and mission.',
  },

  // ── Images ─────────────────────────────────────────────────────────────────
  logo: {
    title: 'Devanya Agri Science — Company Logo',
    path: '/assets/images/logo.JPG',
    type: 'image',
    desc: 'Official company logo.',
    thumbnail: '/assets/images/logo.JPG',
  },
  'logo-transparent': {
    title: 'Devanya Agri Science — Logo (Transparent)',
    path: '/assets/images/logo-transparent-bg.png',
    type: 'image',
    desc: 'Logo with transparent background, suitable for overlays.',
    thumbnail: '/assets/images/logo-transparent-bg.png',
  },
  'product-mustard-das-4747': {
    title: 'Mustard DAS 4747 — Product Photo',
    path: '/assets/images/products/mustard/mustard-das-4747.JPG',
    type: 'image',
    desc: 'High-quality product image of Mustard DAS 4747 seed variety.',
    thumbnail: '/assets/images/products/mustard/mustard-das-4747.JPG',
  },
  'product-paddy-das-300': {
    title: 'Paddy DAS 300 — Product Photo',
    path: '/assets/images/products/paddy/paddy-das-300.JPG',
    type: 'image',
    desc: 'Product image of Paddy DAS 300 rice variety.',
    thumbnail: '/assets/images/products/paddy/paddy-das-300.JPG',
  },
  'product-paddy-kala-namak': {
    title: 'Paddy Kala Namak — Product Photo',
    path: '/assets/images/products/paddy/paddy-kala-namak.JPG',
    type: 'image',
    desc: 'Product image of the premium Kala Namak paddy variety.',
    thumbnail: '/assets/images/products/paddy/paddy-kala-namak.JPG',
  },
  'packing-sack-beige': {
    title: 'Packaging Sack — Beige Type 1 (3D Front)',
    path: '/assets/images/products/packing-sack-type1-beige-3d-front.JPG',
    type: 'image',
    desc: '3D render of beige-type seed packing sack (front view).',
    thumbnail: '/assets/images/products/packing-sack-type1-beige-3d-front.JPG',
  },

  // ── Videos ─────────────────────────────────────────────────────────────────
  'greenfield-video': {
    title: 'Devanya Agri — Greenfield Farm Showcase',
    path: '/assets/greenfield.MP4',
    type: 'video',
    desc: 'A cinematic field walkthrough showcasing our partner farms in full yield season.',
    thumbnail: '/assets/images/vision-journey.png',
  },
  'product-3d-placeholder': {
    title: 'Product 3D View — Demo',
    path: '/assets/videos/products/placeholder_3d.mp4',
    type: 'video',
    desc: 'Sample 3D product video for UI/carousel testing.',
    thumbnail: '/assets/images/products/packing-sack-type2-bluegreen-3d-front.JPG',
  },

  // ── Markdown — Products ────────────────────────────────────────────────────
  'md-mustard-das-4747': {
    title: 'Mustard DAS 4747 — Product Info',
    path: '/assets/information/markdown/products/mustard-das-4747.md',
    type: 'markdown',
    desc: 'Detailed specs and cultivation tips for Mustard DAS 4747.',
    thumbnail: '/assets/images/products/mustard/mustard-das-4747.JPG',
  },
  'md-paddy-das-300': {
    title: 'Paddy DAS 300 — Product Info',
    path: '/assets/information/markdown/products/paddy-das-300.md',
    type: 'markdown',
    desc: 'Detailed specs and cultivation guide for Paddy DAS 300.',
    thumbnail: '/assets/images/products/paddy/paddy-das-300.JPG',
  },
  'md-paddy-kala-namak': {
    title: 'Paddy Kala Namak — Product Info',
    path: '/assets/information/markdown/products/paddy-kala-namak.md',
    type: 'markdown',
    desc: 'Heritage grain variety — Kala Namak paddy specs and history.',
    thumbnail: '/assets/images/products/paddy/paddy-kala-namak.JPG',
  },
  'md-urad-pu-31': {
    title: 'Urad PU 31 — Product Info',
    path: '/assets/information/markdown/products/urad-pu-31.md',
    type: 'markdown',
    desc: 'Specs and field notes for Urad PU 31.',
  },
  'md-pea-sweet-green': {
    title: 'Pea Sweet Green — Product Info',
    path: '/assets/information/markdown/products/pea-sweet-green.md',
    type: 'markdown',
    desc: 'Product details for the Sweet Green pea variety.',
  },

  // ── Markdown — Events ──────────────────────────────────────────────────────
  'md-farmers-meet-2024': {
    title: "Annual Farmers' Meet 2024",
    path: '/assets/information/markdown/events/farmers-meet-2024.md',
    type: 'markdown',
    desc: 'Recap of our flagship farmer engagement event held in Varanasi.',
    thumbnail: '/assets/images/vision-journey.png',
  },
  'md-biotech-seminar': {
    title: 'Biotech Seminar — Event Notes',
    path: '/assets/information/markdown/events/biotech-seminar.md',
    type: 'markdown',
    desc: 'Summary of the agricultural biotech seminar hosted by Devanya.',
  },
  'md-corn-field-day': {
    title: 'Corn Field Day — Event Notes',
    path: '/assets/information/markdown/events/corn-field-day.md',
    type: 'markdown',
    desc: 'Field day event notes for corn variety trials.',
  },

  // ── Markdown — Media ──────────────────────────────────────────────────────
  'md-corporate-film': {
    title: 'Corporate Film — About Devanya',
    path: '/assets/information/markdown/media/corporate-film-video.md',
    type: 'markdown',
    desc: 'Description and context for our corporate film.',
    thumbnail: '/assets/images/vision-journey.png',
  },
  'md-future-farming': {
    title: 'Future Farming — Media Feature',
    path: '/assets/information/markdown/media/future-farming-video.md',
    type: 'markdown',
    desc: 'Article and notes accompanying the future farming video.',
  },
  'md-farmers-meet-photo': {
    title: "Farmers' Meet — Photo Gallery Notes",
    path: '/assets/information/markdown/media/farmers-meet-photo.md',
    type: 'markdown',
    desc: 'Captions and context for the farmers meet photo collection.',
  },
};

/**
 * Allowed MIME types for the embedded viewer.
 * Keep in sync with the 'type' field above.
 */
export const VIEWER_TYPES = {
  pdf: 'application/pdf',
  image: 'image/*',
  video: 'video/*',
};
