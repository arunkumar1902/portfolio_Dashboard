
import { Code2, Lightbulb, Rocket, Target } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    text: 'Reusable components and maintainable code.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Thinking',
    text: 'Practical solutions to real-world problems.',
  },
  {
    icon: Target,
    title: 'User Focus',
    text: 'Accessible and intuitive user experiences.',
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    text: 'Exploring modern tools and best practices.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding scroll-mt-20 bg-[#0e1627]">
      <div className="container-width">
        <div className="mb-12">
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            A passionate developer who enjoys building useful products
            with clean code and thoughtful design.
          </p>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-[15px] leading-8 text-gray-400">
            <p>
              I'm a frontend developer passionate about transforming
              ideas into responsive, interactive, and accessible web
              applications. I enjoy working with React and modern
              JavaScript to create engaging user interfaces.
            </p>

            <p>
              My approach combines reusable components, clear code
              structure, responsive layouts, and attention to detail.
              I enjoy learning new technologies and improving my
              development skills through hands-on projects.
            </p>

            <p>
              I'm always interested in collaborating with others,
              solving problems, and building digital experiences that
              make a difference.
            </p>

            <a href="#contact" className="primary-button mt-3">
              Let's Connect
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article key={title} className="glass-card p-5">
                <div className="mb-4 inline-flex rounded-xl bg-violet-500/15 p-3 text-violet-300">
                  <Icon size={23} />
                </div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
