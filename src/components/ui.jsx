import { motion } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

/** Wraps children in a motion.div that animates when it enters viewport */
export function Reveal({ children, className = '', delay = 0, variants = fadeUp }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ ...variants, visible: { ...variants.visible, transition: { ...variants.visible.transition, delay } } }}
    >
      {children}
    </motion.div>
  )
}

/** Section header with animated accent line */
export function SectionHeader({ eyebrow, title, subtitle, subtitleClassName = '' }) {
  return (
    <Reveal className="text-center mb-16">
      <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-[#d0d09d] to-[#d0d09d]/40"
        />
        <span style={{ color: '#d0d09d' }}>{eyebrow}</span>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-px bg-gradient-to-l from-[#d0d09d] to-[#d0d09d]/40"
        />
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">{title}</h2>
      {subtitle && <p className={`text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed ${subtitleClassName}`}>{subtitle}</p>}
    </Reveal>
  )
}

/** Glass card with hover glow */
export function GlassCard({ children, className = '', glowColor = 'rgba(220,38,38,0.15)' }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -4, boxShadow: `0 20px 40px ${glowColor}` }}
      transition={{ duration: 0.25 }}
      className={`glass rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  )
}

/** Stat number that counts up */
export function StatBadge({ value, label, color = 'text-[#d0d09d]', icon: Icon }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      {Icon && <Icon size={18} className={`mb-2 ${color}`} />}
      <div className={`text-3xl font-black ${color}`}>{value}</div>
      <div className="text-zinc-400 text-xs mt-1">{label}</div>
    </div>
  )
}
