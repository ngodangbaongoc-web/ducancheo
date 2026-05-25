import { motion } from 'framer-motion'
import { Radio, FileVideo, Sparkles, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from 'lucide-react'
import { SectionHeader, Reveal, stagger, scaleIn } from './ui'

const gaps = [
  {
    name: 'Lỗ hổng Kênh tiếp cận',
    Icon: Radio, color: '#EF4444', border: 'border-red-500/20', bg: 'from-red-950/25',
    asis:  ['Báo in quân đội', 'Phát sóng tivi (VTV1, QPVN)', 'Bán vé giấy tại quầy rạp', 'Phân phối thụ động một chiều'],
    tobe:  ['Nội dung TikTok & Facebook Reels', 'Đặt vé online không tiền mặt', 'Thuật toán mạng xã hội thông minh', 'Tương tác đa chiều với công chúng'],
    consequence: 'Bỏ lỡ khán giả trẻ đô thị năng động. Sụt giảm doanh thu bán vé số.',
  },
  {
    name: 'Lỗ hổng Nội dung số',
    Icon: FileVideo, color: '#d0d09d', border: 'border-[#d0d09d]/20', bg: 'from-[#d0d09d]/8',
    asis:  ['Chỉ phát sóng vở diễn dài trên TV', 'Không có thư viện nhạc số', 'Thiếu nội dung cho thế hệ trẻ', 'Không có backing track karaoke'],
    tobe:  ['Video trích đoạn 30-60 giây TikTok', 'Album mp3 chèo chất lượng cao', 'Backing track karaoke chuẩn', 'Micro-content giải nghĩa chèo cổ'],
    consequence: 'Khán giả tìm nguồn nhạc lậu kém chất lượng. Nhận diện thương hiệu số mờ nhạt.',
  },
  {
    name: 'Lỗ hổng Trải nghiệm',
    Icon: Sparkles, color: '#8B5CF6', border: 'border-violet-500/20', bg: 'from-violet-950/25',
    asis:  ['Khán giả thưởng thức thụ động', 'Không gian check-in thiếu', 'Không có giao lưu hậu trường', 'Hành trình khách hàng đứt đoạn'],
    tobe:  ['Workshop tương tác <30 người', 'Khu check-in chụp ảnh Instagram', 'Giao lưu nghệ sĩ sau buổi diễn', 'Trải nghiệm O2O hoàn chỉnh'],
    consequence: 'Không tạo gắn kết sâu sắc. Thiếu lan tỏa tự nhiên trên mạng xã hội.',
  },
]

const matrix = [
  { name: 'Kênh tiếp cận', impact: 'Cao',      difficulty: 'Trung bình',    priority: 'Ngay lập tức', pColor: 'text-red-400',    pBg: 'bg-red-500/15' },
  { name: 'Nội dung số',   impact: 'Rất cao',   difficulty: 'Thấp–Trung bình', priority: 'Ngay lập tức', pColor: 'text-red-400', pBg: 'bg-red-500/15' },
  { name: 'Trải nghiệm',   impact: 'Trung bình', difficulty: 'Thấp',           priority: 'Ngắn hạn',  pColor: 'text-[#d0d09d]',  pBg: 'bg-[#d0d09d]/15' },
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

        <div className="space-y-5 mb-10">
          {gaps.map((gap, idx) => (
            <Reveal key={gap.name} delay={idx * 0.08}>
              <div className={`rounded-2xl overflow-hidden border ${gap.border} bg-gradient-to-br ${gap.bg} to-transparent`}>
                {/* Header */}
                <div className="flex items-center gap-3 px-7 py-4 border-b border-white/5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: gap.color + '20' }}>
                    <gap.Icon size={18} style={{ color: gap.color }} />
                  </div>
                  <h3 className="text-white font-black text-base">{gap.name}</h3>
                </div>

                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                  {/* AS-IS */}
                  <div className="p-7">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Hiện trạng (AS-IS)</span>
                    </div>
                    <ul className="space-y-2.5">
                      {gap.asis.map(item => (
                        <li key={item} className="flex items-start gap-2.5">
                          <XCircle size={14} className="text-red-500/70 shrink-0 mt-0.5" />
                          <span className="text-zinc-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TO-BE */}
                  <div className="p-7 relative">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full hidden md:flex items-center justify-center text-white text-sm font-black shadow-lg"
                      style={{ background: gap.color }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">Kỳ vọng (TO-BE)</span>
                    </div>
                    <ul className="space-y-2.5">
                      {gap.tobe.map(item => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-zinc-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Consequence */}
                <div className="px-7 py-4 border-t border-white/5 bg-black/15 flex items-start gap-2">
                  <AlertTriangle size={14} style={{ color: '#d0d09d' }} className="shrink-0 mt-0.5" />
                  <p className="text-[#d0d09d]/80 text-xs">
                    <strong className="font-semibold">Hệ quả nếu không giải quyết:</strong> {gap.consequence}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Priority matrix */}
        <Reveal>
          <div className="glass rounded-2xl overflow-hidden">
            <div className="px-7 py-5 border-b border-white/5 flex items-center gap-2">
              <AlertTriangle size={16} style={{ color: '#d0d09d' }} />
              <h3 className="text-white font-bold">Ma trận Ưu tiên Giải quyết</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5 text-zinc-500 text-xs uppercase tracking-wider">
                    {['Lỗ hổng', 'Mức độ tác động', 'Độ khó triển khai', 'Ưu tiên'].map(h => (
                      <th key={h} className={`px-6 py-3 ${h === 'Lỗ hổng' ? 'text-left' : 'text-center'}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {matrix.map((row, i) => (
                    <motion.tr
                      key={row.name}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="border-b border-white/5 hover:bg-white/3 transition-colors"
                    >
                      <td className="px-6 py-4 text-white font-semibold">{row.name}</td>
                      <td className="px-6 py-4 text-center font-medium" style={{ color: '#d0d09d' }}>{row.impact}</td>
                      <td className="px-6 py-4 text-center text-zinc-300">{row.difficulty}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${row.pBg} ${row.pColor}`}>
                          {row.priority}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
