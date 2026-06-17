export default function Footer() {
  return (
    <footer
      className="w-full flex items-center justify-between"
      style={{
        padding: '48px 48px',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <span
        className="font-body text-[11px]"
        style={{ color: 'rgba(255,255,255,0.2)' }}
      >
        &copy; 2026 Luca Burghard
      </span>

      <div className="flex items-center gap-6">
        {[
          { label: 'GitHub', href: 'https://github.com/CastIehard' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/burghard/' },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[var(--accent)]"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
