import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, TrendingUp, Users, Calendar, Search } from 'lucide-react'

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 10 + 12,
  color: i % 3 === 0 ? '#d0d09d' : i % 3 === 1 ? '#d0d09d' : '#a0c4a8',
}))

const stats = [
  { icon: Calendar, num: '142', label: 'Buổi diễn 2025', sub: 'Vượt 20% KH', color: 'text-[#d0d09d]' },
  { icon: Search,   num: '50K', label: 'Lượt tìm kiếm', sub: '"hát chèo"/tháng', color: 'text-red-400' },
  { icon: TrendingUp, num: '4.9K', label: 'Reactions cao nhất', sub: 'Facebook post', color: 'text-violet-400' },
  { icon: Users,    num: '3',   label: 'Nhóm khán giả', sub: 'Phân khúc cốt lõi', color: 'text-emerald-400' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Floating particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size, height: p.size,
            left: `${p.left}%`,
            bottom: '-10px',
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Center orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-[#d0d09d]/10" />
        <div className="absolute inset-[60px] rounded-full border border-[#d0d09d]/8" />
        <div className="absolute inset-[120px] rounded-full border border-[#a0c4a8]/10" />
        <div className="absolute inset-[180px] rounded-full bg-[#d0d09d]/4 rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">
        {/* Badge */}
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-4">
            <span className="block text-white">Chân Dung &</span>
            <span className="block shimmer-text">Hành Vi Khán Giả</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-zinc-400 mb-3 tracking-tight">
            Nhà Hát <span className="text-white font-semibold">Chèo Quân Đội</span>
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Phân tích toàn diện nhân khẩu học, hành vi tiêu dùng văn hóa
          và chiến lược tiếp cận đa kênh nhằm trẻ hóa công chúng nghệ thuật truyền thống.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="glass rounded-2xl p-4 text-center group hover:border-white/20 transition-all"
            >
              <s.icon size={16} className={`mx-auto mb-2 ${s.color} group-hover:scale-110 transition-transform`} />
              <div className={`text-2xl font-black ${s.color}`}>{s.num}</div>
              <div className="text-white text-xs font-semibold mt-0.5">{s.label}</div>
              <div className="text-zinc-500 text-xs">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#context"
            className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-xl transition-all text-sm shadow-lg"
            style={{ background: '#d0d09d', color: '#22372f', boxShadow: '0 8px 24px rgba(208,208,157,0.25)' }}
          >
            Khám phá nghiên cứu
            <ArrowDown size={16} />
          </a>
          <a
            href="#stats"
            className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/12 border border-white/12 text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-sm backdrop-blur-sm"
          >
            Xem thống kê
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 text-xs tracking-widest uppercase font-medium">Cuộn xuống</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
