# projects.md

## Luca Burghard projects and accomplishments

This page collects Luca's project work and the concrete evidence around it: shipped prototypes, research directions, education, roles, awards, and public proof points.

## BauKollege

- Context: AI-first construction software platform, ongoing startup/product project
- Role: Co-founder and technical product builder
- Tags: AI agents, agent harnesses, capability architecture, RAG, retrieval, embeddings, vector search, Supabase, pgvector, Next.js, TypeScript, Vercel AI SDK, tool calling, citations, multimodal project knowledge

BauKollege is an AI-first platform for construction and trade teams. The product connects project knowledge, documents, tasks, employees, documentation, photos, reports, signoffs, and team information in one system, with an AI assistant as the main interface for accessing and working with that data. The goal is not to build a generic chatbot, but an assistant that understands the structure and context of real construction projects.

Luca is working on the technical architecture, product model, and AI system behind the platform. A central part of the work is the design of an agent harness: the control layer between the user, the language model, BauKollege's application data, and the available tools. The harness decides which capabilities and tools are available, builds the model context, enforces policies, manages tool execution, and keeps responses grounded in project data.

The broader system includes tool calling, capability routing, context-window management, retrieval profiles, embedding versioning, agent-run persistence, approval policies, and provider-neutral model routing through the Vercel AI SDK. The architecture is designed so that stronger BauKollege-specific capabilities can later be added on top of the generic retrieval foundation, including document checks, project reviews, reporting, task planning, and construction-specific workflows.

Technically, the product is being built with Next.js, TypeScript, Supabase, PostgreSQL, pgvector, Vercel, and the Vercel AI SDK. The work combines product design, AI architecture, application structure, database concepts, cloud services, branding, business strategy, retrieval engineering, prompt and context design, agent-tool interfaces, model evaluation, and practical AI-first software development.

## Magic Buggy

- Context: Learning in Transformation project, University of Technology Nuremberg, two semesters, 2024-2025
- Team: Luca Burghard, Adam Lo, Wilhelm Tharandt
- Tags: ROS 2, Python, robotics, real hardware, sensors, autonomous systems, product prototype

Magic Buggy was a one-year robotics project at the University of Technology Nuremberg. The question was simple and ambitious: what if you could go for a run and your stroller keeps up automatically?

The goal was to develop an automatic stroller prototype that can safely carry a child while running. It was not a toy demo or only a software simulation. It was a real hardware project with ROS 2, Python, sensors, robotics integration, and the practical constraints that come with building something physical that has to move reliably.

The project ran over two full semesters as part of UTN's Learning in Transformation program. Luca worked on it with Adam Lo and Wilhelm Tharandt, with guidance from Andreas Kipf, Yuki Asano, and Yannik Blei.

Magic Buggy became a successful product-oriented prototype. The team also created a short trailer for the final result, using Luca's basic videography skills to present the idea clearly. The prototype was not for sale; it was a university project outcome.

The project was selected to represent the Learning in Transformation program at the UTN Collaboration Lounge, where it was presented to companies, external partners, researchers, and students from the Nuremberg region. That made it more than an internal class project: it became a chance to discuss a working robotics prototype with people outside the university.

## Agentic Speech Systems

- Context: Master's thesis and current AI research direction
- Tags: voice AI, speech-to-speech, agents, tool use, shared state, retrieval, interruptions, multi-turn conversation

Luca's current research focuses on agentic speech systems and multi-turn voice assistants. The core idea is a dual-brain architecture: a fast speech-based model handles natural real-time conversation, while text-based reasoning agents handle more complex background tasks.

The system direction includes tool use while the user is still speaking, shared structured state between agents, support for interruptions and follow-up questions, retrieval of relevant information during conversation, and parallel reasoning that does not block the spoken interaction.

The work is motivated by a practical question: how can voice assistants listen, respond quickly, reason in the background, use tools, and remain useful across longer interactions instead of only answering isolated commands?

## AI Chatbot for Engineering Software

- Context: SEW-EURODRIVE, bachelor thesis, 2024
- Tags: RAG, LLMs, Azure OpenAI, C#, vector search

Evaluated chatbot architectures for an engineering IDE and built working prototypes with local open-source LLMs and Azure OpenAI. The work covered RAG design, embeddings, vector search, privacy constraints, and testing against real engineering questions.