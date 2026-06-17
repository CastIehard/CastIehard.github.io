export default function OverviewContent() {
  const infoCards = [
    { label: 'Location', value: 'Nuremberg, Germany' },
    { label: 'Current Role', value: 'AI Research Working Student @ dmTECH' },
    { label: 'Studying', value: 'M.Sc. Robotics & AI @ UTN Nuremberg' },
    { label: 'Outside Code', value: 'Calisthenics, distance running, hiking' },
  ];

  return (
    <div
      className="w-full mx-auto"
      style={{
        maxWidth: '900px',
        padding: '64px 48px',
      }}
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-8">
        {/* Left column - 60% */}
        <div className="md:w-[60%]">
          <h2
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: 1.1,
              color: 'var(--primary-text)',
            }}
          >
            Practical AI, grounded in real systems
          </h2>

          <div
            className="font-body"
            style={{
              marginTop: '32px',
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'var(--secondary-text)',
            }}
          >
            <p style={{ marginBottom: '20px' }}>
              I'm Luca, a developer and Robotics & AI master's student in Nuremberg. I like the
              part of AI where ideas stop being slides and start touching cameras, robots, tools,
              and daily workflows.
            </p>
            <p style={{ marginBottom: '20px' }}>
              At dmTECH I evaluate current AI and computer vision approaches and turn promising
              directions into proof-of-concept systems. At UTN Nuremberg I focus on robotics,
              embedded intelligence, and the math behind autonomous behavior.
            </p>
            <p>
              Before that, I studied mechatronics at DHBW while working at SEW-EURODRIVE. That
              mix still shapes how I build: understand the physical system, keep the software
              useful, and prove the idea with something that runs.
            </p>
          </div>
        </div>

        {/* Right column - 40% */}
        <div className="md:w-[40%] md:pl-12">
          <div className="flex flex-col gap-8">
            {/* Profile photo */}
            <div
              className="overflow-hidden"
              style={{
                width: 'clamp(112px, 14vw, 152px)',
                height: 'clamp(112px, 14vw, 152px)',
                border: '1px solid var(--border-color)',
              }}
            >
              <img
                src="/luca-profile.png"
                alt="Luca Burghard"
                className="w-full h-full object-cover"
              />
            </div>

            {infoCards.map((card) => (
              <div key={card.label}>
                <div
                  className="font-body uppercase tracking-[0.1em]"
                  style={{
                    fontSize: '12px',
                    lineHeight: 1.4,
                    color: 'rgba(255,255,255,0.3)',
                    marginBottom: '8px',
                  }}
                >
                  {card.label}
                </div>
                <div
                  className="font-body font-medium"
                  style={{
                    fontSize: '15px',
                    color: 'var(--primary-text)',
                  }}
                >
                  {card.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
