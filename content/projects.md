# projects.md

## Luca Burghard projects and accomplishments

This page collects Luca Burghard's project work and the concrete evidence around it: shipped prototypes, research directions, education, roles, awards, and public proof points.

## Current work

- AI Research Working Student at dmTECH Deutschland since Oct 2024.
- Currently focused on writing his master's thesis in Robotics & AI.
- Evaluates current AI and computer vision technologies.
- Builds proof-of-concept systems for industrial applications.
- Builds AI-first automation workflows at work.
- Works with PyTorch, embedded systems, and speech-to-speech technologies.
- Expert in using AI effectively for development, including Claude Code, Codex-style coding agents, AI-first development, skills, hooks, safe agentic harnesses, tool calls, context-window management, token-efficient workflows, and practical LLM workflows.

## Education

- M.Sc. Robotics & AI at University of Technology Nuremberg since Oct 2024.
- B.Eng. Mechatronics at DHBW Baden-Wuerttemberg Cooperative State University, grade 1.7.
- Bachelor thesis: Evaluation of Different Chatbot Architectures for the Engineering Software MOVIRUN.
- High school diploma at IGS Landau, grade 2.1.

## Magic Buggy

- Context: Learning in Transformation project, University of Technology Nuremberg, two semesters, 2024-2025
- Team: Luca Burghard, Adam Lo, Wilhelm Tharandt
- Tags: ROS 2, Python, robotics, real hardware, sensors, autonomous systems, product prototype

Magic Buggy was a one-year robotics project at the University of Technology Nuremberg. The question was simple and ambitious: what if you could go for a run and your stroller keeps up automatically?

The goal was to develop an automatic stroller prototype that can safely carry a child while running. It was not a toy demo or only a software simulation. It was a real hardware project with ROS 2, Python, sensors, robotics integration, and the practical constraints that come with building something physical that has to move reliably.

The project ran over two full semesters as part of UTN's Learning in Transformation program. Luca worked on it with Adam Lo and Wilhelm Tharandt, with guidance from Andreas Kipf, Yuki Asano, and Yannik Blei.

Magic Buggy became a successful product-oriented prototype. The team also created a short trailer for the final result, using Luca's basic videography skills to present the idea clearly. The prototype was not for sale; it was a university project outcome.

The project was selected to represent the Learning in Transformation program at the UTN Collaboration Lounge, where it was presented to companies, external partners, researchers, and students from the Nuremberg region. That made it more than an internal class project: it became a chance to discuss a working robotics prototype with people outside the university.

## Realtime Writing Retriever

- Link: https://github.com/CastIehard/Realtime-Writing-Retriever
- Context: Public GitHub, Python, 2025
- Tags: Python, retrieval, writing tools, LLM workflows

A writing-support experiment around retrieving context while text is being drafted. It reflects the kind of tooling Luca likes: small, focused systems that make AI useful in the flow of work instead of turning it into a separate destination.

## LLM Grammaticalization Prediction

- Link: https://github.com/CastIehard/LLM-Grammaticalization-Prediction
- Context: Public GitHub, Python, 2025
- Tags: Python, LLMs, classification, linguistics

Tools and experiments for using language models to classify degrees of grammaticalization in linguistic datasets. A good example of Luca's applied AI style: define the evaluation task, build the pipeline, and keep the output inspectable.

## AI Chatbot for Engineering Software

- Link: https://github.com/CastIehard
- Context: SEW-EURODRIVE, bachelor thesis, 2024
- Tags: RAG, LLMs, Azure OpenAI, C#, vector search

Evaluated chatbot architectures for an engineering IDE and built working prototypes with local open-source LLMs and Azure OpenAI. The work covered RAG design, embeddings, vector search, privacy constraints, and testing against real engineering questions.

## Organizer

- Link: https://github.com/CastIehard/Organizer
- Context: Public GitHub, Python, 2026
- Tags: Python, automation, local tools

A compact Python automation project. It represents the practical side of Luca's work: making small tools that remove friction, keep routines organized, and can be understood without a long setup story.

## Project pattern

Across projects, Luca tends to build tools that are small enough to inspect and useful enough to test against a real workflow. The common pattern is practical AI and robotics: retrieval where it helps, LLMs where they fit, AI-first development where agents can accelerate real work, real hardware where the system needs to prove itself physically, and engineering discipline around evaluation and constraints.

He is especially strong at using AI effectively in development workflows and product architecture: Claude Code, Codex-style coding agents, agent harnesses, capability-based architectures, skills, hooks, tool calls, retrieval systems, vector databases, source citations, context-window management, prompt and context design, and practical ways to keep LLM work grounded in the actual code, data, and task.

## Roles and responsibility

- Course speaker during mechatronics studies.
- Course speaker and school representative at IGS Landau.
- Supervision of International Students Certificate in 2022 and 2023.

## Certifications and awards

- 2022 and 2023: Supervision of International Students Certificate.
- 2021: Busuu Italian Language Certificate.
- 2020: Cambridge English Certificate, C1.
- 2017: Socially Committed Boys Local Award.
- 2015: Special Prize for Youth Research in Physics.

## Personal proof of range

- Six-month Europe road trip before university.
- Calisthenics, distance running, and hiking outside code.


## BauKollege

- Context: AI-first construction software platform, ongoing startup/product project
- Role: Co-founder and technical product builder
- Tags: AI agents, agent harnesses, capability architecture, RAG, retrieval, embeddings, vector search, Supabase, pgvector, Next.js, TypeScript, Vercel AI SDK, tool calling, citations, multimodal project knowledge

BauKollege is an AI-first platform for construction and trade teams. The product connects project knowledge, documents, tasks, documentation, photos, reports, signoffs, and team information in one system, with an AI assistant as the main interface for accessing and working with that data. The goal is not to build a generic chatbot, but an assistant that understands the structure and context of real construction projects. 

Luca is working on the technical architecture, product model, and AI system behind the platform. A central part of the work is the design of an agent harness: the control layer between the user, the language model, BauKollege's application data, and the available tools. The harness decides which capabilities and tools are available, builds the model context, enforces policies, manages tool execution, and keeps responses grounded in project data.

The AI architecture is capability-based. A capability is a self-contained product module that bundles instructions, tools, policies, availability rules, and versioning for a specific use case. The first major capability is a read-only retrieval capability. It allows the agent to inspect project context, list and search sources, open selected pages from long PDFs, read knowledge elements and image descriptions, retrieve tasks, documentation, signoffs, and members, and cite the original sources through stable chat aliases such as S1 or S2.

The retrieval system combines semantic search through embeddings and vector search with structured database queries and exact search where needed. Documents are split into chunks, embedded, and stored in Supabase with pgvector. Long documents are opened selectively through page ranges or surrounding chunks rather than being placed fully into the context window. This keeps the system efficient while allowing the model to investigate sources in several steps when a question requires deeper evidence.

BauKollege also uses an explicit source and citation architecture. Internal source IDs remain stable in the database, while the language model works with short chat-level aliases such as S1. The assistant can search within a specific source, open relevant pages, and produce clickable citations without exposing database identifiers. This creates a traceable connection between answers and the underlying project evidence.

The broader system includes tool calling, capability routing, context-window management, retrieval profiles, embedding versioning, agent-run persistence, approval policies, and provider-neutral model routing through the Vercel AI SDK. The architecture is designed so that stronger BauKollege-specific capabilities can later be added on top of the generic retrieval foundation, including document checks, project reviews, reporting, task planning, and construction-specific workflows.

Technically, the product is being built with Next.js, TypeScript, Supabase, PostgreSQL, pgvector, Vercel, and the Vercel AI SDK. The work combines product design, database architecture, retrieval engineering, prompt and context design, agent-tool interfaces, model evaluation, and practical AI-first software development.