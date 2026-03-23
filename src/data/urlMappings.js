/**
 * URL Redirect Mappings
 * ---------------------
 * Maps shorthand slugs (used in QR codes / short links) to their target URLs.
 *
 * Usage:
 *   https://devanyaagriscience.github.io/r/<slug>
 *
 * Rules:
 *   - Internal paths  → start with '/'  (React Router <Navigate>)
 *   - External URLs   → start with 'http' (hard browser redirect)
 *
 * To update a QR code destination, just change the value here and redeploy.
 * The QR image itself never needs to change.
 */

export const URL_MAPPINGS = {
  // ── Internal pages ─────────────────────────────────────────────────────────
  home: '/',
  products: '/products',
  shop: '/products',          // alias
  about: '/about',
  media: '/media',
  contact: '/contact',
  careers: '/careers',
  faq: '/faq',

  // ── External links ──────────────────────────────────────────────────────────
  // brochure:  'https://example.com/devanya-brochure.pdf',
  // catalogue: 'https://example.com/catalogue-2025.pdf',
  // enquiry:   'https://forms.gle/your-form-id',

  twitter: "https://x.com/devanyaagri",
  facebook: "https://www.facebook.com/DevanyaAgriScience",
  linkedin: "https://www.linkedin.com/company/devanyaagriscience",
  instagram: "https://www.instagram.com/devanyaagriscience",
  youtube: "https://www.youtube.com/@DevanyaAgriScience",

  // Add new slugs above ↑
};

/**
 * Where to send the user when a slug is not found.
 * Change to '/404' if you add a dedicated not-found page.
 */
export const REDIRECT_FALLBACK = '/';
