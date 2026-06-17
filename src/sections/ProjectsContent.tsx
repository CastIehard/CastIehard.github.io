export default function ProjectsContent() {
  const projects = [
    {
      name: 'AI Chatbot for Programming IDE',
      context: 'SEW-EURODRIVE \u00b7 Bachelor\u2019s Project \u00b7 2023/24',
      description:
        'Developed an intelligent chatbot to provide engineers with instant access to user guides and technical manuals within their programming environment. Evaluated multiple architectures and built two functional prototypes: one using locally-running open-source LLMs for privacy-sensitive environments, and another leveraging GPT-4 via Azure OpenAI for maximum capability. The project involved RAG architecture design, embedding model selection, vector database integration, and comprehensive testing against real engineering queries.',
      tags: ['PYTHON', 'LLM', 'RAG', 'AZURE OPENAI', 'VECTOR DB', 'C#'],
    },
    {
      name: 'Machine Learning Stock Prediction',
      context: 'Personal \u00b7 Study Paper \u00b7 2023/24',
      description:
        'Built an end-to-end machine learning pipeline to predict stock price movements using six months of daily trading data with over 120 features per day. Experimented with multiple algorithms \u2014 from random forests to LSTM networks \u2014 and evaluated their performance through simulated virtual portfolio trading. The system runs autonomously, executing daily predictions and tracking simulated returns against a buy-and-hold baseline strategy.',
      tags: ['PYTHON', 'MACHINE LEARNING', 'PANDAS', 'SCIKIT-LEARN', 'FINANCE'],
    },
    {
      name: 'Art Maker \u2014 Portrait Transformation',
      context: 'Personal \u00b7 Side Project \u00b7 2023',
      description:
        "A creative fusion of programming and artistic vision. Art Maker uses machine learning to analyze reference images provided by the user and automatically adjusts style parameters to transform portraits into artistic renditions. The program learns aesthetic preferences through an iterative feedback loop, progressively refining its output to match the user's creative intent. An exploration of how AI can serve as a collaborative tool for personal expression.",
      tags: ['PYTHON', 'ML', 'COMPUTER VISION', 'CREATIVE AI'],
    },
  ];

  return (
    <div
      className="w-full mx-auto"
      style={{
        maxWidth: '900px',
        padding: '64px 48px',
      }}
    >
      <div className="flex flex-col" style={{ gap: '48px' }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border-color)',
              padding: '32px',
            }}
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3
                className="font-body font-medium"
                style={{
                  fontSize: '22px',
                  color: 'var(--primary-text)',
                }}
              >
                {project.name}
              </h3>
              <span
                className="font-body uppercase tracking-[0.1em] shrink-0"
                style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.3)',
                }}
              >
                {project.context.split(' \u00b7 ').pop()}
              </span>
            </div>

            {/* Context */}
            <div
              className="font-body"
              style={{
                fontSize: '13px',
                color: 'var(--secondary-text)',
                marginTop: '8px',
              }}
            >
              {project.context}
            </div>

            {/* Description */}
            <p
              className="font-body"
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--secondary-text)',
                marginTop: '16px',
              }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2" style={{ marginTop: '20px' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body uppercase tracking-[0.08em]"
                  style={{
                    fontSize: '11px',
                    color: 'var(--accent)',
                    border: '1px solid rgba(201,169,110,0.3)',
                    padding: '6px 12px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
