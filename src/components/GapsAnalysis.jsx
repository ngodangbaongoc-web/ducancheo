import { motion } from 'framer-motion'
import { Radio, FileVideo, Sparkles } from 'lucide-react'
import { SectionHeader, Reveal } from './ui'

const gaps = [
  { name: 'Lỗ hổng Kênh tiếp cận', Icon: Radio,     color: '#EF4444', border: 'border-red-500/20',        bg: 'from-red-950/25' },
  { name: 'Lỗ hổng Nội dung số',   Icon: FileVideo,  color: '#d0d09d', border: 'border-[#d0d09d]/20',      bg: 'from-[#d0d09d]/8' },
  { name: 'Lỗ hổng Trải nghiệm',   Icon: Sparkles,   color: '#8B5CF6', border: 'border-violet-500/20',     bg: 'from-violet-950/25' },
]

export default function GapsAnalysis() {
  return (
    <section id="gaps" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2b23]/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          eyebrow="Gaps Analysis"
          title="Phân Tích Lỗ Hổng Đa Kênh"
          subtitle="Ba lỗ hổng cốt lõi cần lấp đầy để Nhà hát Chèo Quân đội chuyển đổi từ truyền thông cũ sang chiến lược omnichannel."
        />

        <Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {gaps.map((gap, idx) => (
              <motion.div
                key={gap.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl border ${gap.border} bg-gradient-to-br ${gap.bg} to-transparent`}
              >
                <div className="flex items-center gap-3 px-6 py-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: gap.color + '20' }}>
                    <gap.Icon size={20} style={{ color: gap.color }} />
                  </div>
                  <h3 className="text-white font-black text-base">{gap.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
