export default function LifeContent() {
  const timelineEntries = [
    {
      date: 'Oct 2024 \u2013 Present',
      title: 'AI Research Working Student',
      subtitle: 'dmTECH Deutschland',
      description:
        'Evaluating state-of-the-art AI and computer vision technologies. Building proofs of concept to identify models and architectures for industrial applications. Working with PyTorch, embedded systems, and speech-to-speech technologies.',
    },
    {
      date: 'Oct 2024 \u2013 Present',
      title: 'Master of Science \u2014 Robotics & AI',
      subtitle: 'University of Technology Nuremberg',
      description:
        'Focusing on the integration of advanced AI algorithms into physical systems. Coursework spans deep learning, applied mathematics, autonomous systems, and embedded intelligence.',
    },
    {
      date: 'Oct 2021 \u2013 Sep 2024',
      title: 'Bachelor of Engineering \u2014 Mechatronics',
      subtitle: 'DHBW \u2014 Baden-Wuerttemberg Cooperative State University',
      description:
        "Grade: 1.7. Course speaker role. Bachelor thesis: \u2018Evaluation of Different Chatbot Architectures for the Engineering Software MOVIRUN\u00ae\u2019 \u2014 bridging mechatronics with AI-driven software.",
    },
    {
      date: 'Oct 2021 \u2013 Sep 2024',
      title: 'Cooperative Education Student',
      subtitle: 'SEW-EURODRIVE',
      description:
        'Three-year dual study program. Evolved from hardware engineering to AI software development. Built an AI chatbot for a programming IDE using local LLMs and Azure OpenAI. Worked with C#, .NET, RAG architectures, and vector databases.',
    },
    {
      date: 'Apr \u2013 Sep 2021',
      title: 'Europe Road Trip',
      subtitle: 'Personal',
      description:
        'Six months of travel across Europe before starting university. A formative experience that shaped my perspective on problem-solving and adaptability.',
    },
    {
      date: 'Aug 2018 \u2013 Mar 2021',
      title: 'High School Diploma',
      subtitle: 'IGS Landau',
      description:
        'Grade: 2.1. Course speaker and school representative. Focus on mathematics, English, and sports.',
    },
  ];

  const skillGroups = [
    {
      label: 'Languages',
      skills: ['Python', 'C++', 'C', 'C#', 'Bash', 'SQL'],
    },
    {
      label: 'AI / ML',
      skills: ['LLMs', 'PyTorch', 'RAG', 'Vector DBs', 'Computer Vision', 'Embeddings'],
    },
    {
      label: 'Systems',
      skills: ['Linux', 'Debian', '.NET', 'Git', 'Azure', 'Agile / Scrum'],
    },
  ];

  const certifications = [
    '2022 & 2023 \u2014 Supervision of International Students Certificate',
    '2021 \u2014 Busuu Italian Language Certificate',
    '2020 \u2014 Cambridge English Certificate (C1)',
    '2017 \u2014 Socially Committed Boys Local Award',
    '2015 \u2014 Special Prize for Youth Research in Physics',
  ];

  return (
    <div
      className="w-full mx-auto"
      style={{
        maxWidth: '900px',
        padding: '64px 48px',
      }}
    >
      {/* Timeline */}
      <div className="relative">
        {/* Vertical line - hidden on mobile */}
        <div
          className="absolute hidden md:block"
          style={{
            left: '0',
            top: '0',
            bottom: '0',
            width: '1px',
            backgroundColor: 'var(--border-color)',
          }}
        />

        <div className="flex flex-col" style={{ gap: '48px' }}>
          {timelineEntries.map((entry, index) => (
            <div key={index} className="relative md:pl-8">
              {/* Dot - hidden on mobile */}
              <div
                className="absolute hidden md:block"
                style={{
                  left: '-3px',
                  top: '6px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent)',
                }}
              />

              {/* Date */}
              <div
                className="font-body uppercase tracking-[0.1em]"
                style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '8px',
                }}
              >
                {entry.date}
              </div>

              {/* Title */}
              <div
                className="font-body font-medium"
                style={{
                  fontSize: '18px',
                  color: 'var(--primary-text)',
                }}
              >
                {entry.title}
              </div>

              {/* Subtitle */}
              <div
                className="font-body"
                style={{
                  fontSize: '15px',
                  color: 'var(--secondary-text)',
                  marginTop: '4px',
                }}
              >
                {entry.subtitle}
              </div>

              {/* Description */}
              {entry.description && (
                <div
                  className="font-body"
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.6,
                    marginTop: '12px',
                  }}
                >
                  {entry.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div style={{ marginTop: '64px' }}>
        <h3
          className="font-body font-medium"
          style={{
            fontSize: '18px',
            color: 'var(--primary-text)',
            marginBottom: '24px',
          }}
        >
          Tools & Technologies
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div
                className="font-body uppercase tracking-[0.1em]"
                style={{
                  fontSize: '12px',
                  color: 'var(--accent)',
                  marginBottom: '12px',
                }}
              >
                {group.label}
              </div>
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="font-body"
                  style={{
                    fontSize: '13px',
                    color: 'var(--secondary-text)',
                    lineHeight: 2.0,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div style={{ marginTop: '48px' }}>
        <h3
          className="font-body font-medium"
          style={{
            fontSize: '18px',
            color: 'var(--primary-text)',
            marginBottom: '16px',
          }}
        >
          Certifications & Awards
        </h3>

        {certifications.map((cert, index) => (
          <div
            key={index}
            className="font-body"
            style={{
              fontSize: '14px',
              color: 'var(--secondary-text)',
              lineHeight: 2.2,
            }}
          >
            {cert}
          </div>
        ))}
      </div>
    </div>
  );
}
