
import { Code2, Layers3, Wrench } from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React.js', level: 80 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Vite & npm', level: 80 },
      { name: 'REST APIs', level: 75 },
      { name: 'Azure DevOps', level: 65 },
    ],
  },
  {
    title: 'Core Concepts',
    icon: Layers3,
    skills: [
      { name: 'Responsive Design', level: 90 },
      { name: 'Reusable Components', level: 85 },
      { name: 'React Hooks', level: 80 },
      { name: 'State Management', level: 70 },
      { name: 'Debugging', level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding scroll-mt-20">
      <div className="container-width">
        <div className="mb-12 text-center">
          <p className="section-label">What I work with</p>
          <h2 className="section-title">My Skills</h2>
          <p className="section-description mx-auto">
            Technologies and practices I use to build modern web
            applications and deliver reliable user experiences.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article key={title} className="glass-card p-6 sm:p-7">
              <div className="mb-7 flex items-center gap-3">
                <div className="rounded-xl bg-violet-500/15 p-3 text-violet-300">
                  <Icon size={23} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>

              <div className="space-y-6">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm text-gray-300">{name}</span>
                      <span className="text-xs text-gray-500">{level}%</span>
                    </div>
                    <div
                      className="h-2 overflow-hidden rounded-full bg-gray-800"
                      role="progressbar"
                      aria-label={name}
                      aria-valuenow={level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-700"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
