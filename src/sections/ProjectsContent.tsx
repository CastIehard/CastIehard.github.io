export default function ProjectsContent() {
  const projects = [
    {
      name: 'Realtime Writing Retriever',
      context: 'Public GitHub \u00b7 Python \u00b7 2025',
      description:
        'A writing-support experiment around retrieving context while text is being drafted. It reflects the kind of tooling I like: small, focused systems that make AI useful in the flow of work instead of turning it into a separate destination.',
      href: 'https://github.com/CastIehard/Realtime-Writing-Retriever',
      tags: ['PYTHON', 'RETRIEVAL', 'WRITING TOOLS', 'LLM WORKFLOWS'],
    },
    {
      name: 'LLM Grammaticalization Prediction',
      context: 'Public GitHub \u00b7 Python \u00b7 2025',
      description:
        'Tools and experiments for using language models to classify degrees of grammaticalization in linguistic datasets. A good example of how I approach applied AI: define the evaluation task, build the pipeline, and keep the output inspectable.',
      href: 'https://github.com/CastIehard/LLM-Grammaticalization-Prediction',
      tags: ['PYTHON', 'LLMS', 'CLASSIFICATION', 'LINGUISTICS'],
    },
    {
      name: 'AI Chatbot for Engineering Software',
      context: 'SEW-EURODRIVE \u00b7 Bachelor Thesis \u00b7 2024',
      description:
        'Evaluated chatbot architectures for an engineering IDE and built working prototypes with local open-source LLMs and Azure OpenAI. The work covered RAG design, embeddings, vector search, privacy constraints, and testing against real engineering questions.',
      href: 'https://github.com/CastIehard',
      tags: ['RAG', 'LLMS', 'AZURE OPENAI', 'C#', 'VECTOR SEARCH'],
    },
    {
      name: 'Organizer',
      context: 'Public GitHub \u00b7 Python \u00b7 2026',
      description:
        'A compact Python automation project. It represents the practical side of my work: making small tools that remove friction, keep routines organized, and can be understood without a long setup story.',
      href: 'https://github.com/CastIehard/Organizer',
      tags: ['PYTHON', 'AUTOMATION', 'LOCAL TOOLS'],
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

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body uppercase tracking-[0.08em] inline-block transition-colors duration-300 hover:text-[var(--primary-text)]"
              style={{
                fontSize: '12px',
                color: 'var(--accent)',
                marginTop: '18px',
                textDecoration: 'none',
              }}
            >
              View project
            </a>

            {/* Tags */}
            <div className="flex flex-wrap gap-2" style={{ marginTop: '20px' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body uppercase tracking-[0.08em]"
                  style={{
                    fontSize: '11px',
                    color: 'var(--accent)',
                    border: '1px solid rgba(103,242,200,0.3)',
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
