
import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b1120]/90 backdrop-blur-xl">
      <nav className="container-width flex min-h-[76px] items-center justify-between gap-5">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2 text-lg font-bold text-white"
          aria-label="Go to home"
        >
          <span className="rounded-lg bg-violet-500/15 p-2 text-violet-300">
            <Code2 size={21} />
          </span>
          Dev<span className="text-violet-400">Portfolio.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="primary-button hidden !px-4 !py-2 text-sm md:inline-flex"
        >
          Let's Talk
        </a>

        <button
          type="button"
          className="rounded-lg border border-gray-700 p-2 text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0b1120] px-5 py-5 md:hidden"
        >
          <div className="container-width flex flex-col gap-5">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                className="nav-link py-1 text-base"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="primary-button w-full"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
