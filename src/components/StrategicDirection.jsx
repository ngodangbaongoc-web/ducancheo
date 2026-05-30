import { motion } from 'framer-motion'
import { Target, Database, Users, RefreshCw, CheckCircle2, ArrowRight, Clock } from 'lucide-react'
import { SectionHeader, Reveal, scaleIn } from './ui'

const pillars = [
  {
    num: '01', Icon: Database, title: 'Số hóa Hệ sinh thái',
    desc: 'Biến toàn bộ tài nguyên nghệ thuật (làn điệu, vở diễn, nghệ sĩ) thành nội dung số dễ tiếp cận trên mọi nền tảng.',
    color: '#3B82F6', border: 'border-blue-500/20', bg: 'from-blue-950/30',
  },
  {
    num: '02', Icon: Users, title: 'Trẻ hóa Khán giả',
    desc: 'Mở rộng tệp công chúng sang thế hệ trẻ qua nội dung ngắn, tương tác và trải nghiệm workshop thực tế.',
    color: '#10B981', border: 'border-emerald-500/20', bg: 'from-emerald-950/30',
  },
  {
    num: '03', Icon: RefreshCw, title: 'Chuyển hóa O2O',
    desc: 'Xây dựng phễu Online-to-Offline: đưa khán giả từ mạng xã hội vào rạp hát và tạo vòng lặp lan tỏa tự nhiên.',
    color: '#8B5CF6', border: 'border-violet-500/20', bg: 'from-violet-950/30',
  },
]

const phases = [
  {
    phase: 'Giai đoạn 1', period: 'Q1–Q2 · 2025', label: 'Nền Tảng', tagline: 'Chuyển đổi số căn bản',
    color: '#EF4444',
    actions: [
      'Ra mắt kênh TikTok & YouTube Shorts chính thức',
      'Ghi âm & phát hành album mp3/backing track chèo cổ',
      'Nâng cấp website tích hợp đặt vé online & chatbot AI',
      'Sản xuất 20+ micro-content/tháng hậu trường nghệ sĩ',
    ],
  },
  {
    phase: 'Giai đoạn 2', period: 'Q3–Q4 · 2025', label: 'Tăng Tốc', tagline: 'Xây dựng hệ sinh thái',
    color: '#d0d09d',
    actions: [
      'Triển khai mô hình O2O với TicketGO / Ticketbox',
      'Chuỗi workshop "Chiếu chèo mở" dành cho sinh viên',
      'Xây dựng cổng B2B cho đối tác thuê đoàn diễn',
      'Kích hoạt chương trình đại sứ thương hiệu sinh viên',
    ],
  },
  {
    phase: 'Giai đoạn 3', period: '2026 & sau', label: 'Bền Vững', tagline: 'Mở rộng & Củng cố',
    color: '#10B981',
    actions: [
      'Hệ sinh thái số hoàn chỉnh & tự vận hành',
      'Mạng lưới đại sứ thương hiệu toàn quốc',
      'Dẫn đầu xu hướng số hóa nghệ thuật truyền thống VN',
      'Tự chủ tài chính qua doanh thu số & dịch vụ B2B',
    ],
  },
]

export default function StrategicDirection() {
  return (
    <section id="part3" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a2218]/40 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">

        {/* Part header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Phần 03</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <SectionHeader
          eyebrow="Định hướng chiến lược"
          title="Kim Chỉ Nam & Phân Kỳ Mục Tiêu"
          subtitle="Chiến lược được xây dựng trực tiếp từ thách thức nội tại (Phần 1) và insight khán giả (Phần 2) — không phải lý thuyết chung chung."
        />

        {/* 3.1 North Star */}
        <Reveal className="mb-10">
          <div className="relative rounded-2xl overflow-hidden border border-[#d0d09d]/20 p-8 md:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d0d09d]/8 via-transparent to-emerald-950/20" />
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-bold uppercase tracking-widest" style={{ background: 'rgba(208,208,157,0.12)', color: '#d0d09d', border: '1px solid rgba(208,208,157,0.2)' }}>
                <Target size={12} /> 3.1 — Mục tiêu chiến lược
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                "Đánh chắc tiến chắc — Digital-first"
              </h3>
              <p className="text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Không theo đuổi "quick wins" nhỏ lẻ mà xây dựng{' '}
                <strong className="text-white">hệ sinh thái số bền vững</strong> —
                biến tài nguyên nghệ thuật thành nội dung số dễ tiếp cận,
                đưa khán giả từ mạng xã hội vào rạp hát theo mô hình O2O.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-zinc-400 border border-white/8 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Giải quyết đồng thời: kênh lỗi thời (Phần 1) + nhu cầu số hóa chưa được đáp ứng (Phần 2)
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3 Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-4 mb-10"
        >
          {pillars.map(p => (
            <motion.div
              key={p.num}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className={`rounded-2xl p-7 border ${p.border} bg-gradient-to-br ${p.bg} to-transparent transition-all`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: p.color + '20' }}>
                  <p.Icon size={20} style={{ color: p.color }} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest" style={{ color: p.color }}>{p.num}</span>
              </div>
              <h4 className="text-white font-black text-base mb-2">{p.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 3.2 Timeline */}
        <Reveal className="mb-10">
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-8">
              <Clock size={16} style={{ color: '#d0d09d' }} />
              <h3 className="text-white font-bold text-lg">3.2 — Phân Kỳ Mục Tiêu</h3>
              <span className="text-zinc-600 text-sm ml-1">Lộ trình 3 giai đoạn</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {phases.map((ph, i) => (
                <motion.div
                  key={ph.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="rounded-xl overflow-hidden"
                  style={{ background: ph.color + '0D', border: `1px solid ${ph.color}28` }}
                >
                  <div className="px-5 py-4 border-b" style={{ borderColor: ph.color + '20', background: ph.color + '15' }}>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: ph.color }}>{ph.phase} · {ph.period}</div>
                    <div className="text-white font-black text-base">{ph.label}</div>
                    <div className="text-zinc-400 text-xs mt-0.5">{ph.tagline}</div>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2.5">
                      {ph.actions.map(a => (
                        <li key={a} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="shrink-0 mt-0.5" style={{ color: ph.color }} />
                          <span className="text-zinc-300 text-xs leading-snug">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Part 3 Conclusion / Transition */}
        <Reveal>
          <div className="rounded-2xl overflow-hidden border border-white/8 bg-gradient-to-br from-white/3 to-transparent">
            <div className="flex items-center gap-2 px-7 py-4 border-b border-white/5">
              <div className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="text-violet-400 text-xs font-bold uppercase tracking-widest">Kết luận Phần 3 — Liên kết chiến lược</span>
            </div>
            <div className="p-7 grid md:grid-cols-2 gap-6">
              <p className="text-zinc-300 leading-relaxed text-sm">
                Chiến lược "Đánh chắc tiến chắc — Digital-first" được thiết kế để trả lời trực tiếp cho{' '}
                <strong className="text-white">thách thức kênh lỗi thời & tài chính</strong> (Phần 1) và{' '}
                <strong className="text-white">nhu cầu số hóa chưa được đáp ứng</strong> (Phần 2).
                Lộ trình 3 giai đoạn đảm bảo không bước đi nào bị bỏ qua.
              </p>
              <div className="border-l border-white/5 pl-6">
                <div className="text-zinc-500 text-xs uppercase tracking-wider mb-2 font-medium">Dẫn sang Phần 4</div>
                <p className="text-white font-semibold leading-relaxed text-sm">
                  Với định hướng rõ ràng, câu hỏi tiếp theo là: dùng công cụ nào,
                  triển khai thế nào để hiện thực hóa từng giai đoạn?
                </p>
                <div className="mt-4 flex items-center gap-2 text-violet-400 text-sm font-semibold">
                  <ArrowRight size={14} />
                  <span>Phần 4: Giải pháp & Công cụ thực thi</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
