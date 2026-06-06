import { useEffect, useState } from 'react'

const menuItems = [
  { label: 'Ethos', href: '#ethos', id: 'ethos' },
  { label: 'The Residency', href: '#the-residency', id: 'the-residency' },
  { label: 'Night 0', href: '#night-0', id: 'night-0' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)

      const sections = ['ethos', 'the-residency', 'night-0', 'apply']
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          return
        }
      }
      setActiveSection('')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
          scrolled ? 'border-b border-[#E5E5E5] bg-[#FFFFFF]' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <a
            href="#"
            className="font-display text-3xl tracking-tight text-[#000000]"
            onClick={() => setMenuOpen(false)}
          >
            Edge Base
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-sm transition-colors ${
                    activeSection === item.id
                      ? 'text-[#000000]'
                      : 'text-[#6F6F6F] hover:text-[#000000]'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#apply"
            className="hidden rounded-full bg-[#000000] px-6 py-2.5 text-sm text-[#FFFFFF] transition-transform hover:scale-[1.03] md:inline-block"
          >
            Apply for Night 0
          </a>

          <button
            type="button"
            aria-label="Open menu"
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block h-px w-6 bg-[#000000]" />
            <span className="block h-px w-6 bg-[#000000]" />
            <span className="block h-px w-4 bg-[#000000]" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[#FFFFFF] px-8 py-6 md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-3xl tracking-tight text-[#000000]">
              Edge Base
            </span>
            <button
              type="button"
              aria-label="Close menu"
              className="text-2xl text-[#000000]"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
          </div>

          <ul className="mt-16 flex flex-col gap-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-display text-4xl text-[#000000]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#apply"
            className="mt-auto rounded-full bg-[#000000] px-6 py-4 text-center text-sm text-[#FFFFFF] transition-transform hover:scale-[1.03]"
            onClick={() => setMenuOpen(false)}
          >
            Apply for Night 0
          </a>
        </div>
      )}
    </>
  )
}
