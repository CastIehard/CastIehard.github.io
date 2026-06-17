import { useCallback } from 'react';

interface NavigationProps {
  lenisRef: React.MutableRefObject<any>;
}

export default function Navigation({ lenisRef }: NavigationProps) {
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

      <div />
    </nav>
  );
}
