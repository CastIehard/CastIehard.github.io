import { useCallback, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WaveformCanvas from '../components/WaveformCanvas';
import Navigation from '../components/Navigation';
import GridOverlay from '../components/GridOverlay';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import SectionAccordion from '../sections/SectionAccordion';
import OverviewContent from '../sections/OverviewContent';
import LifeContent from '../sections/LifeContent';
import ProjectsContent from '../sections/ProjectsContent';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [expandedId, setExpandedId] = useState<string>('');
  const lenisRef = useRef<Lenis | null>(null);
  const sectionTriggersRef = useRef<HTMLDivElement>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1.0,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  // Entrance animation for section triggers
  useEffect(() => {
    if (!sectionTriggersRef.current) return;

    const triggers = sectionTriggersRef.current.querySelectorAll('.section-trigger-wrapper');
    gsap.fromTo(
      triggers,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionTriggersRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleExpand = useCallback(
    (id: string) => {
      // Close current if different
      if (expandedId && expandedId !== id) {
        setExpandedId(id);
        // Scroll to the new section after a brief delay for the collapse animation
        setTimeout(() => {
          if (lenisRef.current && id) {
            const target = document.getElementById(`${id}-section`);
            if (target) {
              lenisRef.current.scrollTo(target, { offset: -80, duration: 0.8 });
            }
          }
        }, 100);
      } else if (id === expandedId) {
        // Toggle off
        setExpandedId('');
      } else {
        setExpandedId(id);
        setTimeout(() => {
          if (lenisRef.current && id) {
            const target = document.getElementById(`${id}-section`);
            if (target) {
              lenisRef.current.scrollTo(target, { offset: -80, duration: 0.8 });
            }
          }
        }, 100);
      }
    },
    [expandedId]
  );

  return (
    <>
      <WaveformCanvas />
      <GridOverlay />
      <Navigation lenisRef={lenisRef} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />

        <div ref={sectionTriggersRef}>
          <div className="section-trigger-wrapper">
            <SectionAccordion
              id="overview"
              number="01"
              label="Overview"
              isExpanded={expandedId === 'overview'}
              onExpand={handleExpand}
            >
              <OverviewContent />
            </SectionAccordion>
          </div>

          <div className="section-trigger-wrapper">
            <SectionAccordion
              id="life"
              number="02"
              label="Life"
              isExpanded={expandedId === 'life'}
              onExpand={handleExpand}
            >
              <LifeContent />
            </SectionAccordion>
          </div>

          <div className="section-trigger-wrapper">
            <SectionAccordion
              id="projects"
              number="03"
              label="Projects"
              isExpanded={expandedId === 'projects'}
              onExpand={handleExpand}
            >
              <ProjectsContent />
            </SectionAccordion>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
