
import { ArrowUp, Code2, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d18] py-8">
      <div className="container-width flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <a href="#home" className="text-lg font-bold text-white">
            Dev<span className="text-violet-400">Portfolio.</span>
          </a>

          <p className="mt-2 text-sm text-gray-500">
            Designed and built with React and Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 transition hover:text-violet-300"
          >
            <Code2 size={19} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition hover:text-violet-300"
          >
            <span className="text-sm font-bold">in</span>
          </a>

          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="text-gray-400 transition hover:text-violet-300"
          >
            <Mail size={19} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 rounded-lg border border-gray-700 p-2 text-gray-300 transition hover:border-violet-400 hover:text-violet-300"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="container-width mt-7 border-t border-white/5 pt-5 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  )
}
