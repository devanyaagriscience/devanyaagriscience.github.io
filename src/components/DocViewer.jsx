import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SHARED_DOCS } from '../data/sharedDocs';

/**
 * DocViewer
 *
 * Mounted at /share/media/:slug
 * - Looks up the slug in SHARED_DOCS (the whitelist)
 * - Renders a branded, embedded viewer for PDFs / images / videos
 * - Returns a "not available" screen for unknown or unlisted slugs
 */
function DocViewer() {
  const { slug } = useParams();
  const doc = SHARED_DOCS[slug?.toLowerCase()];

  /* ── Not whitelisted ──────────────────────────────────────────────────── */
  if (!doc) {
    return (
      <div style={styles.wrap}>
        <div style={styles.card}>
          <div style={styles.icon}>🔒</div>
          <h1 style={styles.h1}>Document Not Available</h1>
          <p style={styles.sub}>
            The document you requested is either not found or not publicly shared.
          </p>
          <Link to="/" style={styles.btn}>← Back to Home</Link>
        </div>
      </div>
    );
  }

  /* ── PDF: redirect to raw file — no wrapper at all ───────────────────── */
  if (doc.type === 'pdf') {
    window.location.replace(doc.path);
    return null;
  }

  /* ── Image / Video / Markdown: Devanya-branded viewer (no top ribbon) ── */
  return (
    <div style={styles.wrap}>
      {/* Title & description — no logo/ribbon */}
      <div style={styles.titleBar}>
        <h1 style={styles.docTitle}>{doc.title}</h1>
        {doc.desc && <p style={styles.docDesc}>{doc.desc}</p>}
      </div>

      {/* Viewer */}
      <div style={styles.viewerWrap}>
        {doc.type === 'image' && (
          <img
            src={doc.path}
            alt={doc.title}
            style={{ maxWidth: '100%', borderRadius: 8 }}
          />
        )}
        {doc.type === 'video' && (
          <video controls style={styles.iframe}>
            <source src={doc.path} />
            Your browser does not support the video tag.
          </video>
        )}
        {doc.type === 'markdown' && (
          <MarkdownViewer path={doc.path} />
        )}
        {!['image', 'video', 'markdown'].includes(doc.type) && (
          <div style={styles.fallback}>
            <p>Preview not available for this file type.</p>
            <a href={doc.path} style={styles.btn}>Open File</a>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        © {new Date().getFullYear()} Devanya Agri Science · This document is shared for
        informational purposes only.
      </div>
    </div>
  );
}

/* ── Markdown Viewer component ─────────────────────────────────────────────── */
function MarkdownViewer({ path }) {
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(path)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then(md => {
        setHtml(mdToHtml(md));
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [path]);

  if (loading) return <div style={{ textAlign: 'center', padding: 40, color: '#5a7a5a' }}>Loading…</div>;
  if (error)   return <div style={{ textAlign: 'center', padding: 40, color: '#c0392b' }}>Failed to load: {error}</div>;

  return (
    <div
      style={styles.mdBody}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/** Minimal Markdown → HTML converter (headings, bold, lists, paragraphs) */
function mdToHtml(md) {
  const bold = s => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  return md
    .split('\n')
    .map(line => {
      if (/^### (.+)/.test(line)) return `<h3>${bold(line.replace(/^### /, ''))}</h3>`;
      if (/^## (.+)/.test(line))  return `<h2>${bold(line.replace(/^## /, ''))}</h2>`;
      if (/^# (.+)/.test(line))   return `<h1>${bold(line.replace(/^# /, ''))}</h1>`;
      // Separator rows (e.g. | :--- | :--- |) — must be checked BEFORE table data rows
      if (/^\|[\s|:*-]+\|/.test(line) && /[-]{2,}/.test(line)) return '';
      if (/^\| /.test(line))      return `<tr>${line.split('|').filter(Boolean).map(c => `<td>${bold(c.trim())}</td>`).join('')}</tr>`;
      if (/^- (.+)/.test(line))   return `<li>${bold(line.replace(/^- /, ''))}</li>`;
      if (line.trim() === '')     return '<br/>';
      return `<p>${bold(line)}</p>`;
    })
    .join('\n')
    .replace(/(<tr>.*?<\/tr>\n*)+/gs, m => `<table style="border-collapse:collapse;width:100%">${m}</table>`);
}

/* ── Inline styles (no extra CSS file needed) ──────────────────────────────── */
const styles = {
  wrap: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f7f0 0%, #e8f5e8 100%)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Inter', 'Outfit', sans-serif",
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 24px',
    background: '#fff',
    borderBottom: '1px solid #e2e8e2',
    boxShadow: '0 1px 4px rgba(0,0,0,.06)',
    flexWrap: 'wrap',
    gap: 12,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none',
  },
  logoText: {
    fontWeight: 700,
    fontSize: 16,
    color: '#1a3a1a',
    letterSpacing: '-0.3px',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  tag: {
    background: '#d4edda',
    color: '#2d6a4f',
    borderRadius: 4,
    padding: '2px 8px',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1,
  },
  downloadBtn: {
    background: '#2d6a4f',
    color: '#fff',
    textDecoration: 'none',
    padding: '6px 14px',
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 600,
    transition: 'background .2s',
  },
  titleBar: {
    padding: '20px 28px 8px',
    maxWidth: 960,
    width: '100%',
    margin: '0 auto',
  },
  docTitle: {
    margin: 0,
    fontSize: 20,
    fontWeight: 700,
    color: '#1a3a1a',
  },
  docDesc: {
    margin: '6px 0 0',
    fontSize: 14,
    color: '#5a7a5a',
  },
  viewerWrap: {
    flex: 1,
    padding: '12px 28px 28px',
    maxWidth: 960,
    width: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  iframe: {
    width: '100%',
    height: 'calc(100vh - 220px)',
    minHeight: 480,
    border: 'none',
    borderRadius: 10,
    boxShadow: '0 4px 24px rgba(0,0,0,.10)',
    background: '#fff',
  },
  card: {
    background: '#fff',
    borderRadius: 14,
    padding: '48px 40px',
    textAlign: 'center',
    maxWidth: 420,
    boxShadow: '0 4px 24px rgba(0,0,0,.10)',
    margin: 'auto',
    marginTop: '15vh',
  },
  icon: { fontSize: 48, marginBottom: 16 },
  h1: {
    fontSize: 22,
    fontWeight: 700,
    color: '#1a3a1a',
    margin: '0 0 10px',
  },
  sub: { color: '#6b7280', fontSize: 15, margin: '0 0 24px' },
  btn: {
    display: 'inline-block',
    background: '#2d6a4f',
    color: '#fff',
    padding: '10px 22px',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: 14,
  },
  fallback: { textAlign: 'center', padding: 40 },
  mdBody: {
    background: '#fff',
    borderRadius: 10,
    boxShadow: '0 4px 24px rgba(0,0,0,.10)',
    padding: '28px 36px',
    lineHeight: 1.75,
    color: '#1a3a1a',
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    overflowX: 'auto',
  },
  footer: {
    textAlign: 'center',
    padding: '14px',
    color: '#9ca3af',
    fontSize: 12,
    borderTop: '1px solid #e2e8e2',
    background: '#fff',
  },
};

export default DocViewer;
