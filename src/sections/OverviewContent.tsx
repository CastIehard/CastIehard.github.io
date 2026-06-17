export default function OverviewContent() {
  const infoCards = [
    { label: 'Location', value: 'Nuremberg, Germany' },
    { label: 'Current Role', value: 'AI Research Working Student @ dmTECH' },
    { label: 'Studying', value: 'M.Sc. Robotics & AI @ UTN Nuremberg' },
    { label: 'Interests', value: 'Calisthenics, Long Distance Running, Hiking' },
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
            Where code meets curiosity
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
              I'm Luca — a 23-year-old developer based in Nuremberg, Germany. I spend my days bridging
              the gap between cutting-edge AI research and practical engineering.
            </p>
            <p style={{ marginBottom: '20px' }}>
              At dmTECH, I work as an AI Research Working Student, evaluating state-of-the-art models
              and building proofs of concept for industrial computer vision applications. On the academic
              side, I'm pursuing a Master's in Robotics & AI at the University of Technology Nuremberg,
              focusing on how intelligent algorithms can be embedded into physical systems.
            </p>
            <p>
              My journey started with a Bachelor's in Mechatronics from DHBW, where I spent three years
              as a dual student at SEW-EURODRIVE — evolving from hardware-focused engineering to building
              AI-powered chatbots and machine learning pipelines. That blend of hands-on industry
              experience and theoretical depth is what drives my approach today.
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
