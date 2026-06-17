import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.to(labelRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
      .to(
        nameRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        0.3
      )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        0.9
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        },
        1.05
      )
      .to(
        scrollRef.current,
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
        },
        1.4
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center"
      style={{ minHeight: '100vh', padding: '0 24px', zIndex: 1 }}
    >
      <div className="text-center" style={{ maxWidth: '700px' }}>
        {/* Label */}
        <div
          ref={labelRef}
          className="font-body text-[12px] uppercase tracking-[0.15em]"
          style={{
            color: 'var(--secondary-text)',
            marginBottom: '20px',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          AI Software Developer & Robotics Master's Student
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="font-display font-bold uppercase"
          style={{
            fontSize: 'clamp(48px, 10vw, 80px)',
            lineHeight: 1.05,
            color: 'var(--primary-text)',
            letterSpacing: '-0.02em',
            opacity: 0,
            transform: 'translateY(30px)',
          }}
        >
          Luca Burghard
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-body mx-auto"
          style={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: 'var(--secondary-text)',
            maxWidth: '520px',
            marginTop: '24px',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          Building intelligent systems at the intersection of AI, robotics, and real-world
          applications. Currently researching at dmTECH while pursuing my Master's at UTN Nuremberg.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex items-center justify-center flex-wrap gap-4"
          style={{
            marginTop: '40px',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <a
            href="mailto:luca@castlehard.com"
            className="font-body text-[13px] font-medium uppercase tracking-[0.08em] inline-block transition-all duration-300 hover:bg-[var(--primary-text)] hover:text-[var(--canvas-bg)]"
            style={{
              border: '1px solid var(--primary-text)',
              padding: '14px 36px',
              color: 'var(--primary-text)',
              textDecoration: 'none',
            }}
          >
            Get in Touch
          </a>

          <a
            href="https://github.com/Castlehard"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[13px] font-medium uppercase tracking-[0.08em] inline-block transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '14px 36px',
              color: 'var(--secondary-text)',
              textDecoration: 'none',
            }}
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute flex flex-col items-center gap-2"
        style={{
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0,
        }}
      >
        <span
          className="font-body text-[11px] uppercase tracking-[0.12em]"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          Scroll
        </span>
        <div
          className="scroll-indicator-line"
          style={{
            width: '1px',
            height: '20px',
            backgroundColor: 'rgba(255,255,255,0.3)',
          }}
        />
      </div>
    </section>
  );
}
