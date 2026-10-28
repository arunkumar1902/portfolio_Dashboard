
import { ExternalLink, Code2, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Dashboard',
    category: 'Web Application',
    description:
      'A responsive management dashboard with product CRUD, order tracking, inventory statistics, search, and filtering.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    number: '01',
    color: 'from-violet-500/20 to-indigo-500/5',
    github: 'https://github.com/',
    demo: '',
  },
  {
    title: 'Helpdesk Ticket System',
    category: 'Support Management',
    description:
      'A support interface for creating tickets, assigning priorities, tracking status, and managing customer requests.',
    technologies: ['React', 'REST API', 'CSS'],
    number: '02',
    color: 'from-cyan-500/20 to-blue-500/5',
    github: 'https://github.com/',
    demo: '',
  },
  {
    title: 'Customer Management Portal',
    category: 'Business Application',
    description:
      'A customer management application with searchable records, editable forms, policy details, and validation.',
    technologies: ['React', 'FastAPI', 'MySQL'],
    number: '03',
    color: 'from-fuchsia-500/20 to-purple-500/5',
    github: 'https://github.com/',
    demo: '',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding scroll-mt-20 bg-[#0e1627]"
    >
      <div className="container-width">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Featured Projects</h2>

            <p className="section-description">
              A selection of applications showcasing my development
              skills, problem-solving approach, and UI design.
            </p>
          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button self-start sm:self-auto"
          >
            <Code2 size={18} /> View GitHub
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="glass-card group flex flex-col overflow-hidden"
            >
              <div
                className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.color}`}
              >
                <div className="absolute left-5 top-5 text-sm font-medium text-gray-400">
                  PROJECT / {project.number}
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1120]/70 p-6 text-center shadow-xl transition-transform duration-300 group-hover:scale-105">
                  <Code2
                    size={35}
                    className="mx-auto text-violet-300"
                  />

                  <div className="mt-3 text-2xl font-bold tracking-tight text-violet-300">
                    {project.number}
                  </div>

                  <p className="mt-2 text-xs text-gray-400">
                    BUILD · CREATE · SHIP
                  </p>
                </div>

                <ArrowUpRight
                  className="absolute right-5 top-5 text-gray-400 transition group-hover:text-violet-300"
                  size={20}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-700 bg-gray-800/60 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-violet-300"
                  >
                    <Code2 size={17} /> Source Code
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-violet-300"
                    >
                      <ExternalLink size={17} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
