import { motion } from 'framer-motion'
import { Music2, Smartphone, Ticket, Sparkles } from 'lucide-react'
import { SectionHeader, Reveal, stagger, scaleIn } from './ui'

const recommendations = [
  { Icon: Music2,    title: 'Số hóa tài nguyên âm nhạc',  color: '#3B82F6', border: 'border-blue-500/20',    bg: 'from-blue-950/30',    priority: '01', desc: 'Phát hành album mp3 chèo cổ + backing track karaoke trên Spotify, Zing MP3, YouTube — đáp ứng nhu cầu tìm kiếm tăng ∞.' },
  { Icon: Smartphone, title: 'Tối ưu hóa điểm chạm số',   color: '#d0d09d', border: 'border-[#d0d09d]/20',   bg: 'from-[#d0d09d]/8',   priority: '02', desc: 'Kênh TikTok chính thức với micro-content 30-60s. Chiến dịch "Duet cùng NSND Tự Long" khai thác lượng follower khổng lồ.' },
  { Icon: Ticket,    title: 'Chuyển hóa O2O',              color: '#10B981', border: 'border-emerald-500/20', bg: 'from-emerald-950/30', priority: '03', desc: 'Tích hợp TicketGO/Ticketbox + workshop "Chiếu chèo mở" + không gian check-in vật lý để tạo vòng lặp lan tỏa tự nhiên.' },
]

const hashtags = ['#ChèoQuânĐội', '#DigitalFirst', '#OmnichannelArts', '#TrẻHóaKhánGiả', '#DiSảnSống']

export default function Conclusion() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent mb-20" />

        <SectionHeader
          eyebrow="Kết luận & Khuyến nghị"
          title="Lối Thoát Cho Sân Khấu Chèo"
        />

        {/* Main quote */}
        <Reveal className="mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 p-8 md:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d0d09d]/6 via-transparent to-[#d0d09d]/3" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Kết luận nghiên cứu</span>
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                Nghệ thuật chèo đang đối mặt với khủng hoảng cấu trúc, nhưng{' '}
                <strong style={{ color: '#d0d09d' }}>dữ liệu Internet Listening chứng minh sự quan tâm của công chúng vẫn rất mạnh mẽ</strong>.
                Lối thoát không nằm ở cách tân hời hợt, mà nằm ở việc{' '}
                <strong className="text-white">thay đổi tư duy tiếp cận khán giả</strong> —
                từ thụ động sang chủ động, từ một chiều sang omnichannel.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Nhà hát Chèo Quân đội, với vị thế đặc thù và lực lượng nghệ sĩ tinh hoa, cần đi đầu xây dựng
                hệ sinh thái tiếp cận đa kênh tích hợp — số hóa tài nguyên, tối ưu hóa điểm chạm trực tuyến,
                và chuyển hóa hành vi thưởng thức qua mô hình O2O.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Recommendation cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {recommendations.map(r => (
            <motion.div
              key={r.title}
              variants={scaleIn}
              whileHover={{ y: -6, boxShadow: `0 24px 48px ${r.color}20` }}
              className={`rounded-2xl p-7 bg-gradient-to-br ${r.bg} to-transparent border ${r.border} transition-all text-center`}
            >
              <div className="text-xs font-black tracking-widest mb-4 opacity-60" style={{ color: r.color }}>{r.priority}</div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: r.color + '20' }}>
                <r.Icon size={24} style={{ color: r.color }} />
              </div>
              <h4 className="text-white font-bold text-base mb-3">{r.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final banner */}
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, #7F1D1D 0%, #451A03 35%, #1E1B4B 100%)',
            }} />
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />

            <div className="relative p-10 md:p-14 text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto text-3xl font-black shadow-2xl" style={{ background: 'linear-gradient(135deg, #d0d09d, #22372f)', color: '#22372f', boxShadow: '0 24px 48px rgba(208,208,157,0.2)' }}>
                  戲
                </div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                "Giữ Cho Điệu Chèo Cổ Mãi Ngân Vang
                <br />
                <span className="shimmer-text">Trong Lòng Thế Hệ Hôm Nay Và Mai Sau"</span>
              </h3>

              <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                Bằng cách số hóa tài nguyên, tối ưu hóa điểm chạm trực tuyến và chuyển hóa thành công
                hành vi thưởng thức qua mô hình O2O — Nhà hát Chèo Quân đội không chỉ hoàn thành
                nhiệm vụ chính trị mà còn giải quyết triệt để bài toán trẻ hóa công chúng.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {hashtags.map(tag => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.08 }}
                    className="text-sm px-4 py-1.5 rounded-full font-semibold bg-white/10 text-white/80 border border-white/15 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Footer */}
        <div className="mt-10 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
          <div className="flex items-center justify-center gap-2 mb-2">
            <Music2 size={14} className="text-zinc-600" />
            <p className="text-zinc-600 text-sm">Nghiên cứu Chân dung, Hành vi Khán giả — Nhà hát Chèo Quân đội</p>
          </div>
          <p className="text-zinc-700 text-xs">
            Dữ liệu: Google Keyword Stats (03/2025–02/2026) • Fanpage MUCA.NTQD & MSO 2026 • Báo Quân đội Nhân dân
          </p>
        </div>
      </div>
    </section>
  )
}
