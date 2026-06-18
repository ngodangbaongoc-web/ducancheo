import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Award, Star, Mic2, Calendar, TrendingUp, ArrowRight } from 'lucide-react'
import { SectionHeader, Reveal, scaleIn } from './ui'

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

const milestones = [
  {
    decade: 'Thập niên 1950',
    label: 'Bước khởi đầu',
    hex: '#d0d09d',
    events: [
      { year: '01/10/1954', event: 'Thành lập Đội văn công', detail: 'Thuộc Cục Chính trị - Tổng cục Cung cấp tại Thái Nguyên — tiền thân sơ khai của Nhà hát.' },
      { year: '1954–1975', event: '"Tiếng hát át tiếng bom"', detail: 'Lưu diễn phục vụ bộ đội và thanh niên xung phong khắp tuyến đường Trường Sơn.' },
    ],
  },
  {
    decade: 'Thập niên 2010',
    label: 'Đổi mới & Nâng cấp',
    hex: '#3B82F6',
    events: [
      { year: '2010', event: 'Nâng cấp & đổi tên', detail: 'Chính thức trở thành Nhà hát Chèo Quân đội từ Đoàn Chèo Tổng cục Hậu cần.' },
      { year: '2013', event: '"Sáng trong như ngọc một con người"', detail: 'Công diễn tại Nhà hát Lớn Hà Nội, phục vụ lãnh đạo cấp cao của Đảng và Nhà nước.' },
      { year: '2014', event: 'Huân chương Bảo vệ Tổ quốc hạng Ba', detail: 'Kỷ niệm 60 năm ngày truyền thống — đã dựng thành công gần 100 vở diễn.' },
      { year: '2019', event: 'Huân chương Bảo vệ Tổ quốc hạng Nhì', detail: 'Gặp mặt kỷ niệm 65 năm Ngày truyền thống Nhà hát.' },
    ],
  },
  {
    decade: 'Thập niên 2020',
    label: 'Khẳng định vị thế',
    hex: '#10B981',
    events: [
      { year: '2020', event: '"Hai mươi năm hận thù"', detail: 'Công diễn tại Trung tâm Nghệ thuật Âu Cơ — tiếp cận khán giả hiện đại.' },
      { year: '2024', event: 'Kỷ niệm 70 năm thành lập', detail: 'Chuỗi chương trình nghệ thuật đặc sắc chào mừng 70 năm ngày truyền thống.' },
    ],
  },
]

export default function TheaterStats() {
  return (
    <section id="stats" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f0c]/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">

        {/* Sub-section 1.3 label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-0.5 h-5 rounded-full bg-emerald-400" />
            <span className="text-xs font-black text-emerald-400">1.3</span>
            <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Nội Tại Nhà Hát — Nhân Sự, Thành Tích & Lịch Sử</span>
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <SectionHeader
          eyebrow="Nguồn lực nội tại"
          title="Chỉ Số Hoạt Động & Nhân Sự"
          subtitle="Số liệu thực tế về lực lượng nghệ sĩ và thành tích biểu diễn — nền tảng sức mạnh nội sinh của Nhà hát Chèo Quân đội."
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
              <div className="w-9 h-9 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: s.glow }}>
                <s.icon size={18} className={s.color} />
              </div>
              <div className={`text-3xl font-black ${s.color}`}>
                <AnimatedNumber target={s.value} suffix={s.suffix || ''} />
              </div>
              <div className="text-zinc-300 text-xs font-medium mt-1 leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decade timeline */}
        <Reveal>
          <div className="glass rounded-2xl p-8 mb-10">
            <div className="flex items-center gap-2.5 mb-8">
              <Calendar size={18} className="text-blue-400" />
              <h3 className="text-white font-bold text-lg">Mốc Thành Tựu Nổi Bật</h3>
              <span className="text-zinc-600 text-sm">— Lịch sử phát triển qua các thập niên</span>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {milestones.map((decade, di) => (
                <motion.div
                  key={decade.decade}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: di * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-xl overflow-hidden"
                  style={{ background: decade.hex + '08', border: `1px solid ${decade.hex}25` }}
                >
                  {/* Decade header */}
                  <div className="px-5 py-3.5 border-b" style={{ borderColor: decade.hex + '20', background: decade.hex + '12' }}>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: decade.hex }}>{decade.decade}</div>
                    <div className="text-white font-bold text-sm">{decade.label}</div>
                  </div>

                  {/* Events */}
                  <div className="p-4 space-y-4">
                    {decade.events.map((ev, ei) => (
                      <motion.div
                        key={ei}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: di * 0.12 + ei * 0.07 }}
                        className="flex gap-3"
                      >
                        <div className="mt-1.5 shrink-0">
                          <div className="w-2 h-2 rounded-full" style={{ background: decade.hex, boxShadow: `0 0 6px ${decade.hex}80` }} />
                        </div>
                        <div>
                          <div className="text-[10px] font-black tracking-wider mb-0.5" style={{ color: decade.hex }}>{ev.year}</div>
                          <div className="text-white font-semibold text-xs mb-0.5 leading-snug">{ev.event}</div>
                          <div className="text-zinc-500 text-[10px] leading-relaxed">{ev.detail}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
        {/* Part 1 Conclusion / Transition */}
        <Reveal>
          <div className="rounded-2xl overflow-hidden border border-white/8 bg-gradient-to-br from-white/3 to-transparent">
            <div className="flex items-center gap-2 px-7 py-4 border-b border-white/5">
              <div className="w-2 h-2 rounded-full" style={{ background: '#d0d09d' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#d0d09d' }}>Đánh giá — Kết luận Phần 1</span>
            </div>
            <div className="p-7 grid md:grid-cols-2 gap-6">
              <p className="text-zinc-300 leading-relaxed text-sm">
                Nhà hát Chèo Quân đội sở hữu lực lượng nghệ sĩ tinh hoa và vị thế chính trị vững chắc,
                nhưng đang đứng trước thách thức sinh tồn mang tính cấu trúc trong kỷ nguyên số:
                <strong className="text-white"> khán giả truyền thống già hóa, kênh tiếp cận lỗi thời
                và áp lực tự chủ tài chính ngày càng lớn.</strong>
              </p>
              <div className="border-l border-white/5 pl-6">
                <div className="text-zinc-500 text-xs uppercase tracking-wider mb-2 font-medium">Kết luận then chốt</div>
                <p className="text-white font-semibold leading-relaxed text-sm">
                  Thay đổi không còn là lựa chọn — đây là điều kiện tồn tại.
                  Câu hỏi đặt ra: khán giả tiềm năng của Nhà hát đang ở đâu và họ đang tìm kiếm gì?
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold" style={{ color: '#d0d09d' }}>
                  <ArrowRight size={14} />
                  <span>Phần 2 sẽ trả lời câu hỏi này</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
