import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface SectionTriggerProps {
  number: string;
  label: string;
  isExpanded: boolean;
  onClick: () => void;
}

export default function SectionTrigger({ number, label, isExpanded, onClick }: SectionTriggerProps) {
  const iconRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotation: isExpanded ? 45 : 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [isExpanded]);

  return (
    <button
      ref={triggerRef}
      onClick={onClick}
      aria-expanded={isExpanded}
      className="w-full flex items-center justify-between transition-colors duration-300 cursor-pointer group"
      style={{
        height: '72px',
        padding: '0 48px',
        borderBottom: '1px solid var(--border-color)',
        borderLeft: isExpanded ? '3px solid var(--accent)' : '3px solid transparent',
        backgroundColor: isExpanded ? 'rgba(255,255,255,0.02)' : 'transparent',
      }}
      onMouseEnter={(e) => {
        if (!isExpanded) {
          gsap.to(e.currentTarget, { backgroundColor: 'rgba(255,255,255,0.02)', duration: 0.3 });
        }
      }}
      onMouseLeave={(e) => {
        if (!isExpanded) {
          gsap.to(e.currentTarget, { backgroundColor: 'transparent', duration: 0.3 });
        }
      }}
    >
      <div className="flex items-center gap-6">
        <span
          className="font-body text-[12px] uppercase tracking-[0.1em]"
          style={{ color: 'rgba(255,255,255,0.2)' }}
        >
          {number}
        </span>
        <span
          className="font-display text-[28px] leading-[1.2]"
          style={{ color: 'var(--primary-text)' }}
        >
          {label}
        </span>
      </div>

      <span
        ref={iconRef}
        className="font-body text-[16px] transition-colors duration-300 group-hover:text-[var(--accent)]"
        style={{ color: isExpanded ? 'var(--accent)' : 'var(--secondary-text)' }}
      >
        +
      </span>
    </button>
  );
}
