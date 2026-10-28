
import { ArrowDown, ArrowRight, Code2, Mail } from 'lucide-react'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: 'GH',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: 'in',
  },
  {
    label: 'Email',
    href: 'mailto:hello@example.com',
    icon: 'mail',
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-violet-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="container-width grid items-center gap-14 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
        <div className="reveal">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Frontend Developer
          </div>

          <p className="mb-4 text-lg text-gray-400">Hello, I'm</p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Arun Kumar
            <br />
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I build modern, responsive, and user-friendly web applications
            using React, JavaScript, and thoughtful UI design. I turn
            ideas into digital experiences that people enjoy using.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="primary-button">
              Explore My Work <ArrowRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me <ArrowDown size={17} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="mr-2 text-sm text-gray-500">Find me on</span>

            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-800 text-sm font-bold text-gray-300 transition hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-300"
              >
                {social.icon === 'mail' ? (
                  <Mail size={19} />
                ) : (
                  social.icon
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal mx-auto w-full max-w-sm md:max-w-md">
          <div className="relative rounded-[30px] border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-gray-900 to-cyan-500/10 p-5 shadow-2xl shadow-violet-950/30 sm:p-8">
            <div className="absolute -right-3 -top-4 rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-violet-200 shadow-xl">
              &lt;React /&gt;
            </div>

            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/5 bg-[#0b1120]/70 p-5 text-center">
              <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-violet-300/30 bg-violet-500/10 text-5xl font-bold text-violet-300 shadow-lg shadow-violet-500/10 sm:h-36 sm:w-36 sm:text-6xl">
                AK
              </div>

              <h2 className="text-2xl font-bold text-white">Arun Kumar</h2>

              <p className="mt-2 text-sm text-gray-400">
                Frontend Developer
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {['React', 'JavaScript', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-700 bg-gray-800/70 px-3 py-1.5 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -left-3 rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-cyan-200 shadow-xl">
              Clean UI · Responsive Design
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
