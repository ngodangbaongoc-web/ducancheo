import { motion } from 'framer-motion'
import { Music2, Smartphone, Ticket } from 'lucide-react'
import { SectionHeader, Reveal, scaleIn } from './ui'

const recommendations = [
  { Icon: Music2,    title: 'Số hóa tài nguyên âm nhạc',  color: '#3B82F6', border: 'border-blue-500/20',    bg: 'from-blue-950/30',    priority: '01', desc: 'Phát hành album mp3 chèo cổ + backing track karaoke trên Spotify, Zing MP3, YouTube — đáp ứng nhu cầu tìm kiếm tăng ∞.' },
  { Icon: Smartphone, title: 'Tối ưu hóa điểm chạm số',   color: '#d0d09d', border: 'border-[#d0d09d]/20',   bg: 'from-[#d0d09d]/8',   priority: '02', desc: 'Hệ sinh thái số của Nhà hát được vận hành tập trung trên các nền tảng Website, Fanpage, YouTube và TikTok. Trong đó, kênh TikTok chính thức sẽ ưu tiên các định dạng nội dung ngắn từ 30 đến 60 giây nhằm tối ưu hóa khả năng tiếp cận nhóm công chúng trẻ. Chiến dịch trọng điểm "Duet cùng NSND Tự Long" được triển khai nhằm khai thác tệp người theo dõi sẵn có của nghệ sĩ, tạo hiệu ứng lan tỏa tự nhiên và gia tăng mức độ nhận diện thương hiệu trên không gian số.' },
  { Icon: Ticket,    title: 'Chuyển hóa O2O',              color: '#10B981', border: 'border-emerald-500/20', bg: 'from-emerald-950/30', priority: '03', desc: 'Chiến lược đồng bộ hóa giải pháp công nghệ và không gian vật lý nhằm tạo vòng lặp lan tỏa tự nhiên. Chiến lược mở rộng và hiện thực hóa trải nghiệm nhằm tăng tương tác, giúp công chúng trải nghiệm nghệ thuật nguyên bản và kết nối với nghệ sĩ. Không gian check-in tại thực địa sẽ kích thích khán giả chia sẻ nội dung tự tạo lên mạng xã hội, chuyển dịch hiệu quả nhận thức trực tuyến thành hành vi đến rạp.' },
]

const hashtags = ['#ChèoQuânĐội', '#DigitalFirst', '#OmnichannelArts', '#TrẻHóaKhánGiả', '#DiSảnSống']

export default function Conclusion() {
  return (
    <section id="part5" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent mb-20" />

        {/* Part header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Phần 05</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <SectionHeader
          eyebrow="Kết luận & Kiến nghị"
          title="Phương Hướng Khắc Phục Hạn Chế Và Phát Triển Sân Khấu Chèo Trong Bối Cảnh Số"
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
                Mặc dù nghệ thuật chèo đang đối mặt với những thách thức mang tính cấu trúc, số liệu từ các công cụ lắng nghe trực tuyến (Social Listening) cho thấy mức độ quan tâm của công chúng đối với loại hình này vẫn được duy trì ổn định. Do đó, định hướng phát triển không nằm ở những thay đổi hình thức mang tính bề nổi, mà đòi hỏi một sự chuyển dịch căn bản trong tư duy tiếp cận khán giả: từ phương thức thụ động sang chủ động, và từ tương tác đơn kênh sang đa kênh tích hợp (Omnichannel).
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Với vị thế đặc thù và nền tảng lực lượng nhân sự chuyên môn cao, Nhà hát Chèo Quân đội sở hữu những điều kiện tiên quyết để tiên phong xây dựng một hệ sinh thái tiếp cận đa thành phần. Chiến lược này bao gồm việc số hóa hệ tài nguyên nghệ thuật hiện có, tối ưu hóa các điểm chạm trên không gian mạng, và ứng dụng mô hình O2O (Online-to-Offline) nhằm chuyển hóa hiệu quả tương tác trực tuyến thành hành vi thưởng thức trực tiếp tại rạp.
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
              background: 'linear-gradient(135deg, #0a2218 0%, #0f1d35 45%, #1a0d38 80%, #071e2a 100%)',
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
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto text-3xl font-black shadow-2xl" style={{ background: 'linear-gradient(135deg, #d0d09d, #0c1009)', color: '#0c1009', boxShadow: '0 24px 48px rgba(208,208,157,0.2)' }}>
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
