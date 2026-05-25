import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { RadialBarChart, RadialBar, PolarAngleAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Award, Star, Mic2, Calendar, TrendingUp, Trophy } from 'lucide-react'
import { SectionHeader, Reveal, GlassCard, stagger, scaleIn } from './ui'

function AnimatedNumber({ target, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 80, damping: 20 })
  const display = useTransform(spring, v => Math.round(v).toLocaleString() + suffix)

  useEffect(() => { if (isInView) mv.set(target) }, [isInView, target, mv])

  return <motion.span ref={ref}>{display}</motion.span>
}

const stats = [
  { icon: Award,      label: 'NSND (Tổng)', value: 9,   color: 'text-[#d0d09d]', glow: 'rgba(208,208,157,0.12)', border: 'border-[#d0d09d]/20' },
  { icon: Star,       label: 'NSƯT (Tổng)', value: 27,  color: 'text-yellow-400', glow: 'rgba(234,179,8,0.12)', border: 'border-yellow-500/20' },
  { icon: Award,      label: 'NSND đương nhiệm', value: 5,  color: 'text-red-400', glow: 'rgba(239,68,68,0.12)', border: 'border-red-500/20' },
  { icon: Mic2,       label: 'NSƯT đương nhiệm', value: 15, color: 'text-violet-400', glow: 'rgba(139,92,246,0.12)', border: 'border-violet-500/20' },
  { icon: Calendar,   label: 'Buổi diễn 2025', value: 142, color: 'text-emerald-400', glow: 'rgba(16,185,129,0.12)', border: 'border-emerald-500/20' },
  { icon: TrendingUp, label: 'Vượt KH năm', value: 20, suffix: '%', color: 'text-blue-400', glow: 'rgba(59,130,246,0.12)', border: 'border-blue-500/20' },
]

const radialData = [
  { name: 'NSND', value: 9, fill: '#d0d09d' },
  { name: 'NSƯT', value: 27, fill: '#8B5CF6' },
  { name: 'Buổi diễn', value: 142, fill: '#10B981' },
]

const milestones = [
  { year: '2010', event: 'Nâng cấp & phục dựng', detail: 'Hơn 20 chương trình & vở diễn lớn', color: 'bg-[#d0d09d]' },
  { year: '2024', event: 'NSND Vũ Tự Long', detail: 'Bổ nhiệm Giám đốc (tháng 12/2024)', color: 'bg-red-500' },
  { year: '2025', event: 'Liên hoan QT Thử nghiệm', detail: 'Giải Dàn nhạc xuất sắc + 4 giải cá nhân', color: 'bg-emerald-500' },
  { year: '2025', event: 'Vở "Chuyện làng"', detail: 'Tác phẩm đương đại mang tính thời sự', color: 'bg-violet-500' },
  { year: '2025', event: '"Những người thắp lửa"', detail: 'Tham gia Liên hoan Chèo toàn quốc', color: 'bg-blue-500' },
]

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="glass rounded-xl px-4 py-2 text-sm text-white border border-white/12">
      <strong>{payload[0].payload.name}</strong>: {payload[0].value}
    </div>
  )
}

export default function TheaterStats() {
  return (
    <section id="stats" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2b23]/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          eyebrow="Thống kê nhà hát"
          title="Chỉ Số Hoạt Động & Nhân Sự"
          subtitle="Số liệu thực tế về lực lượng nghệ sĩ và thành tích biểu diễn của Nhà hát Chèo Quân đội."
        />

        {/* Stat cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10"
        >
          {stats.map(s => (
            <motion.div
              key={s.label}
              variants={scaleIn}
              whileHover={{ y: -6, boxShadow: `0 20px 40px ${s.glow}` }}
              className={`glass rounded-2xl p-5 text-center border ${s.border} transition-all cursor-default`}
            >
              <div className={`w-9 h-9 rounded-xl mx-auto mb-3 flex items-center justify-center`}
                style={{ background: s.glow }}>
                <s.icon size={18} className={s.color} />
              </div>
              <div className={`text-3xl font-black ${s.color}`}>
                <AnimatedNumber target={s.value} suffix={s.suffix || ''} />
              </div>
              <div className="text-zinc-300 text-xs font-medium mt-1 leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Radial chart */}
          <Reveal>
            <div className="glass rounded-2xl p-8 h-full">
              <div className="flex items-center gap-2 mb-1">
                <Trophy size={18} style={{ color: '#d0d09d' }} />
                <h3 className="text-white font-bold text-lg">Phân bổ Danh hiệu Nghệ sĩ</h3>
              </div>
              <p className="text-zinc-500 text-sm mb-6">So sánh tổng thể vs đương nhiệm</p>
              <div className="flex items-center gap-6">
                <ResponsiveContainer width="100%" height={220}>
                  <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="90%" data={radialData} startAngle={90} endAngle={-270}>
                    <PolarAngleAxis type="number" domain={[0, 150]} angleAxisId={0} tick={false} />
                    <RadialBar background={{ fill: 'rgba(255,255,255,0.03)' }} dataKey="value" cornerRadius={8} />
                    <Tooltip content={<CustomTooltip />} />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="space-y-4 min-w-[130px]">
                  {[
                    { color: '#d0d09d', label: 'NSND', val: '9 tổng / 5 hiện tại' },
                    { color: '#8B5CF6', label: 'NSƯT', val: '27 tổng / 15 hiện tại' },
                    { color: '#10B981', label: 'Buổi diễn', val: '142 (đến T9/2025)' },
                  ].map(item => (
                    <div key={item.label}>
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                        <span className="text-xs text-zinc-400">{item.label}</span>
                      </div>
                      <div className="text-white text-sm font-semibold pl-4">{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Timeline */}
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full">
              <div className="flex items-center gap-2 mb-1">
                <Calendar size={18} className="text-blue-400" />
                <h3 className="text-white font-bold text-lg">Mốc Thành Tựu Nổi Bật</h3>
              </div>
              <p className="text-zinc-500 text-sm mb-6">Lịch sử phát triển giai đoạn hiện đại</p>
              <div className="relative">
                <div className="absolute left-[54px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="space-y-4">
                  {milestones.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="font-black text-sm w-10 text-right shrink-0 pt-0.5" style={{ color: '#d0d09d' }}>{m.year}</div>
                      <div className="relative z-10 shrink-0 mt-1.5">
                        <div className={`w-3 h-3 rounded-full ${m.color}`} />
                        <div className={`absolute inset-0 rounded-full ${m.color} opacity-30 ping-slow`} />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{m.event}</div>
                        <div className="text-zinc-500 text-xs mt-0.5">{m.detail}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
