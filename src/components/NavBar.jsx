import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music2, Menu, X, ChevronRight } from 'lucide-react'

const links = [
  { href: '#context',  label: 'Bối cảnh' },
  { href: '#stats',    label: 'Thống kê' },
  { href: '#audience', label: 'Khán giả' },
  { href: '#search',   label: 'Google Trends' },
  { href: '#social',   label: 'Mạng xã hội' },
  { href: '#strategy', label: 'Chiến lược' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#111815]/95 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d0d09d, #111815)' }}>
            <Music2 size={16} className="text-white" />
          </div>
          <span className="font-black text-white text-sm tracking-tight">
            Nhà hát Chèo<span style={{ color: '#d0d09d' }}> Quân Đội</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-zinc-400 hover:text-white hover:bg-white/8 transition-all px-3 py-1.5 rounded-md font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/8 transition-all"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#111815]/98 border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/8 transition-all"
                >
                  {l.label}
                  <ChevronRight size={14} className="text-zinc-600" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
