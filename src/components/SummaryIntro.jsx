import { motion } from 'framer-motion'
import { BarChart2, Users, Compass, Wrench, CheckSquare } from 'lucide-react'
import { Reveal } from './ui'

const parts = [
  { num: '01', title: 'Bối cảnh & Nội tại', desc: 'Thị trường, tác động số hóa và nguồn lực Nhà hát', Icon: BarChart2, color: '#3B82F6' },
  { num: '02', title: 'Nghiên cứu Khán giả', desc: 'Chân dung hành vi, đối chiếu và Social Listening', Icon: Users, color: '#10B981' },
  { num: '03', title: 'Định hướng Chiến lược', desc: 'Kim chỉ nam và phân kỳ mục tiêu ngắn–dài hạn', Icon: Compass, color: '#d0d09d' },
  { num: '04', title: 'Giải pháp & Công cụ', desc: 'Website AI, mạng xã hội và mô hình triển khai', Icon: Wrench, color: '#8B5CF6' },
  { num: '05', title: 'Kết luận & Kiến nghị', desc: 'Đánh giá tổng thể và khuyến nghị cho Ban Giám đốc', Icon: CheckSquare, color: '#EF4444' },
]

export default function SummaryIntro() {
  return (
    <section id="summary" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d0d09d]/6 via-transparent to-blue-950/20" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#d0d09d]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#d0d09d]" />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#d0d09d' }}>Tổng quan nghiên cứu • 2025–2026</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Mục Đích & Lộ Trình Báo Cáo</h2>
              <div className="h-0.5 w-16 rounded-full mb-8" style={{ background: '#d0d09d' }} />

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    Báo cáo này được thực hiện nhằm{' '}
                    <strong className="text-white">phân tích toàn diện thực trạng thị trường,
                    hành vi khán giả và cơ hội truyền thông số</strong>{' '}
                    của Nhà hát Chèo Quân đội — một trong những đơn vị nghệ thuật quân đội
                    tiêu biểu tại Việt Nam đang đứng trước thời điểm chuyển mình mang tính lịch sử.
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    Mọi nhận định trong báo cáo đều được xây dựng trên nền tảng dữ liệu thực —
                    không phải lý thuyết chung chung — để đảm bảo tính khoa học và khả năng
                    ứng dụng trực tiếp vào thực tiễn hoạt động của Nhà hát.
                  </p>
                </div>
                <div className="glass rounded-xl p-6 border border-white/8">
                  <div className="text-zinc-500 text-xs uppercase tracking-wider mb-4 font-semibold">Đối tượng & Phương pháp</div>
                  <div className="space-y-3">
                    {[
                      { label: 'Đối tượng', val: 'Nhà hát Chèo Quân đội (NHCQD)' },
                      { label: 'Phạm vi', val: 'Truyền thông số & Hành vi khán giả' },
                      { label: 'Công cụ', val: 'Google Keyword Stats · Social Listening · Facebook Analytics' },
                      { label: 'Mục tiêu', val: 'Chiến lược Omnichannel 2025–2027' },
                    ].map(item => (
                      <div key={item.label} className="flex gap-3 text-sm">
                        <span className="text-zinc-500 shrink-0 w-20">{item.label}</span>
                        <span className="text-white font-medium">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5-part roadmap */}
              <div className="text-zinc-500 text-xs uppercase tracking-wider mb-4 font-semibold">Lộ trình 5 phần</div>
              <div className="grid sm:grid-cols-5 gap-3">
                {parts.map((p, i) => (
                  <motion.a
                    key={p.num}
                    href={`#part${i === 0 ? 1 : i}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-xl p-4 border border-white/8 hover:border-white/16 transition-all cursor-pointer block"
                    style={{ background: p.color + '0E' }}
                  >
                    <div className="font-black text-xs uppercase tracking-widest mb-2" style={{ color: p.color }}>{p.num}</div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <p.Icon size={12} style={{ color: p.color }} />
                      <div className="text-white font-bold text-xs leading-snug">{p.title}</div>
                    </div>
                    <div className="text-zinc-500 text-[10px] leading-relaxed">{p.desc}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
