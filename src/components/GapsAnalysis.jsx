import { motion } from 'framer-motion'
import { Radio, FileVideo, Sparkles, CheckCircle2, XCircle, AlertTriangle, ArrowDown } from 'lucide-react'
import { SectionHeader, Reveal } from './ui'

const gaps = [
  {
    name: 'Lỗ hổng Kênh tiếp cận',
    Icon: Radio, color: '#EF4444', border: 'border-red-500/20', bg: 'from-red-950/25',
    asis:  ['Báo in quân đội', 'Phát sóng tivi (VTV1, QPVN)', 'Bán vé giấy tại quầy rạp', 'Phân phối thụ động một chiều'],
    tobe:  ['Nội dung TikTok & Facebook Reels', 'Đặt vé online không tiền mặt', 'Thuật toán mạng xã hội thông minh', 'Tương tác đa chiều với công chúng'],
    consequence: 'Bỏ lỡ khán giả trẻ đô thị. Sụt giảm doanh thu bán vé số.',
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
                className={`rounded-2xl overflow-hidden border ${gap.border} bg-gradient-to-br ${gap.bg} to-transparent flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-center gap-2.5 px-5 py-4 border-b border-white/5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: gap.color + '20' }}>
                    <gap.Icon size={16} style={{ color: gap.color }} />
                  </div>
                  <h3 className="text-white font-black text-sm leading-snug">{gap.name}</h3>
                </div>

                {/* AS-IS */}
                <div className="px-5 pt-5 pb-3">
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-red-400 font-semibold text-[10px] uppercase tracking-widest">Hiện trạng</span>
                  </div>
                  <ul className="space-y-2">
                    {gap.asis.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <XCircle size={12} className="text-red-500/70 shrink-0 mt-0.5" />
                        <span className="text-zinc-300 text-xs leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow divider */}
                <div className="flex items-center gap-2 px-5 py-2">
                  <div className="h-px flex-1 bg-white/8" />
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: gap.color }}>
                    <ArrowDown size={12} className="text-white" />
                  </div>
                  <div className="h-px flex-1 bg-white/8" />
                </div>

                {/* TO-BE */}
                <div className="px-5 pb-4">
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-emerald-400 font-semibold text-[10px] uppercase tracking-widest">Kỳ vọng</span>
                  </div>
                  <ul className="space-y-2">
                    {gap.tobe.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-zinc-300 text-xs leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consequence */}
                <div className="mt-auto px-5 py-3 border-t border-white/5 bg-black/15 flex items-start gap-2">
                  <AlertTriangle size={12} style={{ color: '#d0d09d' }} className="shrink-0 mt-0.5" />
                  <p className="text-[#d0d09d]/70 text-[10px] leading-relaxed">
                    <strong className="font-semibold">Hệ quả:</strong> {gap.consequence}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
