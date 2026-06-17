import { useCallback } from 'react';

interface NavigationProps {
  lenisRef: React.MutableRefObject<any>;
}

export default function Navigation({ lenisRef }: NavigationProps) {
  const handleNavClick = useCallback((targetId: string) => {
    if (lenisRef.current) {
      const target = document.getElementById(targetId);
      if (target) {
        lenisRef.current.scrollTo(target, { offset: -80, duration: 1.2 });
      }
    }
  }, [lenisRef]);

  const handleLogoClick = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2 });
    }
  }, [lenisRef]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{ padding: '24px 48px' }}
    >
      <button
        onClick={handleLogoClick}
        className="font-body text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[var(--accent)]"
        style={{ color: 'var(--primary-text)', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        Luca Burghard
      </button>

      <div className="flex items-center gap-8">
        {[
          { label: 'Overview', target: 'overview-section' },
          { label: 'Life', target: 'life-section' },
          { label: 'Projects', target: 'projects-section' },
        ].map((item) => (
          <button
            key={item.target}
            onClick={() => handleNavClick(item.target)}
            className="font-body text-[12px] uppercase tracking-[0.1em] transition-colors duration-300 hover:text-[var(--accent)]"
            style={{ color: 'var(--secondary-text)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
