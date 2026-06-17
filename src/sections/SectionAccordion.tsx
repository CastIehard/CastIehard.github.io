import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import SectionTrigger from '../components/SectionTrigger';

interface SectionAccordionProps {
  id: string;
  number: string;
  label: string;
  isExpanded: boolean;
  onExpand: (id: string) => void;
  children: React.ReactNode;
}

export default function SectionAccordion({
  id,
  number,
  label,
  isExpanded,
  onExpand,
  children,
}: SectionAccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const handleClick = useCallback(() => {
    if (isExpanded) {
      onExpand('');
    } else {
      onExpand(id);
    }
  }, [isExpanded, onExpand, id]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    if (isExpanded) {
      // Expand
      gsap.set(content, { height: 'auto', overflow: 'hidden' });
      const autoHeight = content.offsetHeight;
      gsap.fromTo(
        content,
        { height: 0 },
        {
          height: autoHeight,
          duration: 0.6,
          ease: 'power3.inOut',
          onComplete: () => {
            gsap.set(content, { height: 'auto', overflow: 'visible' });
          },
        }
      );

      // Stagger children on first expand
      if (innerRef.current && !hasAnimated.current) {
        const childElements = innerRef.current.children;
        gsap.fromTo(
          childElements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            delay: 0.3,
          }
        );
        hasAnimated.current = true;
      }
    } else {
      // Collapse
      gsap.set(content, { overflow: 'hidden' });
      gsap.to(content, {
        height: 0,
        duration: 0.5,
        ease: 'power3.inOut',
      });
    }
  }, [isExpanded]);

  return (
    <div id={`${id}-section`} style={{ position: 'relative', zIndex: 1 }}>
      <SectionTrigger
        number={number}
        label={label}
        isExpanded={isExpanded}
        onClick={handleClick}
      />
      <div
        ref={contentRef}
        style={{
          height: 0,
          overflow: 'hidden',
          backgroundColor: 'var(--surface)',
        }}
      >
        <div ref={innerRef}>{children}</div>
      </div>
    </div>
  );
}
