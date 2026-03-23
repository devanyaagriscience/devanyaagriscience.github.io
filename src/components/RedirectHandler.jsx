import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { URL_MAPPINGS, REDIRECT_FALLBACK } from '../data/urlMappings';

/**
 * RedirectHandler
 *
 * Mounted at `/r/:slug`. Resolves the slug against URL_MAPPINGS and either:
 *  - Performs a hard redirect for external URLs (http/https)
 *  - Returns a React Router <Navigate> for internal paths
 *  - Falls back to REDIRECT_FALLBACK for unknown slugs
 */
function RedirectHandler() {
  const { slug } = useParams();
  const target = URL_MAPPINGS[slug?.toLowerCase()];

  const isExternal = target && (target.startsWith('http://') || target.startsWith('https://'));

  useEffect(() => {
    if (isExternal) {
      window.location.replace(target);
    } else if (!target) {
      console.warn(`[RedirectHandler] Unknown slug: "${slug}". Falling back to "${REDIRECT_FALLBACK}".`);
    }
  }, [slug, target, isExternal]);

  // External: show a brief "Redirecting…" message while the browser navigates away
  if (isExternal) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', fontFamily: 'inherit' }}>
        <p>Redirecting…</p>
      </div>
    );
  }

  // Internal path or fallback: hand off to React Router
  return <Navigate to={target ?? REDIRECT_FALLBACK} replace />;
}

export default RedirectHandler;
