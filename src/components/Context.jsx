import { motion } from 'framer-motion'
import { TrendingDown, Zap, Users, DollarSign, Star, Shield, BookOpen, Smartphone, Clock, Monitor } from 'lucide-react'
import { SectionHeader, Reveal, GlassCard, stagger, scaleIn } from './ui'

const challenges = [
  { icon: TrendingDown, title: 'Suy giảm quy mô', desc: 'Đoàn chèo chuyên nghiệp toàn quốc còn dưới 20 đoàn. Nhiều đơn vị phải sáp nhập để tồn tại.', color: 'text-red-400', border: 'border-red-500/20', glow: 'rgba(239,68,68,0.15)' },
  { icon: Zap,          title: 'Cạnh tranh số hóa', desc: 'Nhạc trẻ, điện ảnh, hài kịch và nền tảng kỹ thuật số chiếm lĩnh thị phần giải trí hiện đại.', color: 'text-orange-400', border: 'border-orange-500/20', glow: 'rgba(249,115,22,0.15)' },
  { icon: Users,        title: 'Đứt gãy thế hệ', desc: 'Khán giả trung thành chủ yếu là người cao tuổi. Thế hệ trẻ xa lánh nghệ thuật truyền thống.', color: 'text-[#d0d09d]', border: 'border-[#d0d09d]/20', glow: 'rgba(208,208,157,0.15)' },
  { icon: DollarSign,   title: 'Áp lực tài chính', desc: 'Chuyển từ bao cấp sang tự chủ tài chính, ngân sách hạn hẹp khiến đầu tư tác phẩm lớn gặp khó.', color: 'text-violet-400', border: 'border-violet-500/20', glow: 'rgba(139,92,246,0.15)' },
]

const positions = [
  { icon: Shield,   title: 'Đơn vị duy nhất', desc: 'Đoàn chèo chuyên nghiệp duy nhất thuộc Quân đội nhân dân Việt Nam. Một trong 3 đơn vị nghệ thuật lớn nhất trong 13 đoàn toàn quân.', color: 'text-[#d0d09d]' },
  { icon: Star,     title: 'Hơn 70 năm lịch sử', desc: 'Thiết chế văn hóa - chính trị vững chắc, góp phần bồi đắp lòng yêu nước và lý tưởng cách mạng cho cán bộ, chiến sĩ.', color: 'text-blue-400' },
  { icon: BookOpen, title: 'Phương châm nghệ thuật', desc: 'Hiện đại hóa chèo trên nền tảng cổ điển vững chắc — di sản NSND Tào Mạt: không phá vỡ lề lối cổ khi tiến hành cách tân.', color: 'text-emerald-400' },
]

const digitalStats = [
  { Icon: Smartphone, value: '78%', label: 'dùng smartphone', detail: 'Người Việt tiêu thụ nội dung văn hóa qua điện thoại là chủ yếu — không phải tivi hay rạp hát (Statista, 2024)', color: '#3B82F6' },
  { Icon: Users,      value: '70M+', label: 'người dùng MXH', detail: 'Tương đương 70% dân số đang online hàng ngày — thị trường tiếp cận khán giả tiềm năng khổng lồ', color: '#10B981' },
  { Icon: Clock,      value: '3,5h', label: 'online mỗi ngày', detail: 'Thời gian trực tuyến vượt tivi — thói quen tiêu thụ văn hóa đã dịch chuyển hoàn toàn sang màn hình số', color: '#d0d09d' },
]

export default function Context() {
  return (
    <section id="part1" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Part header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Phần 01</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <SectionHeader
          eyebrow="Bối cảnh & Nội tại"
          title="Phân Tích Bối Cảnh & Thực Trạng"
          subtitle="Thị trường nghệ thuật truyền thống Việt Nam, tác động của cách mạng số và vị thế đặc thù của Nhà hát Chèo Quân đội."
        />

        {/* 1.1 Sub-section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-0.5 h-5 rounded-full" style={{ background: '#d0d09d' }} />
            <span className="text-xs font-black" style={{ color: '#d0d09d' }}>1.1</span>
            <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Bối Cảnh Chung — Nghệ Thuật Chèo & Thị Trường</span>
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Hero intro card */}
        <Reveal className="mb-10">
          <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-gradient-to-br from-white/5 to-transparent p-8 md:p-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg" style={{ background: 'linear-gradient(135deg, #d0d09d, #0c1009)', color: '#0c1009' }}>
                戲
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Di sản văn hóa phi vật thể</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Nghệ thuật chèo ra đời nhiều thế kỷ trước, đỉnh cao ở thế kỷ XVIII như vũ khí phản ánh mâu thuẫn xã hội phong kiến.
                  Sự chuyển dịch từ{' '}
                  <span className="text-white font-semibold">sân đình, bến nước</span> sang{' '}
                  <span className="text-white font-semibold">nhà hát hộp khép kín</span>{' '}
                  đặt chèo trước thách thức sinh tồn mang tính cấu trúc sâu sắc.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Challenge cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {challenges.map(c => (
            <GlassCard key={c.title} glowColor={c.glow} className={`p-6 border ${c.border}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${c.color}`}
                style={{ background: c.glow }}>
                <c.icon size={20} className={c.color} />
              </div>
              <h4 className="font-bold text-white text-base mb-2">{c.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
            </GlassCard>
          ))}
        </motion.div>

        {/* Theater position */}
        <Reveal className="mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d0d09d]/8 via-transparent to-[#d0d09d]/4 border border-[#d0d09d]/15 rounded-2xl" />
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(208,208,157,0.2)' }}>
                  <Star size={16} style={{ color: '#d0d09d' }} />
                </div>
                <h3 className="text-lg font-bold text-white">Vị thế đặc thù của Nhà hát Chèo Quân đội</h3>
                <span className="ml-2 text-xs text-zinc-500 font-medium">Xuân Đỉnh, Bắc Từ Liêm, Hà Nội</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {positions.map(p => (
                  <div key={p.title} className="glass rounded-xl p-5 hover:border-white/15 transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <p.icon size={16} className={p.color} />
                      <h4 className={`font-bold text-sm ${p.color}`}>{p.title}</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* 1.2 Sub-section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-0.5 h-5 rounded-full bg-blue-400" />
            <span className="text-xs font-black text-blue-400">1.2</span>
            <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Tác Động Cách Mạng Công Nghiệp 4.0 & 5.0</span>
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Digital stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-4 mb-6"
        >
          {digitalStats.map(s => (
            <motion.div
              key={s.label}
              variants={scaleIn}
              className="glass rounded-2xl p-6 border border-white/8 hover:border-white/16 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: s.color + '20' }}>
                  <s.Icon size={18} style={{ color: s.color }} />
                </div>
                <div className="text-3xl font-black" style={{ color: s.color }}>{s.value}</div>
              </div>
              <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
              <p className="text-zinc-500 text-xs leading-relaxed">{s.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 1.2 Insight block */}
        <Reveal>
          <div className="glass rounded-2xl p-7 border border-blue-500/15 bg-gradient-to-br from-blue-950/20 to-transparent">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#3B82F620' }}>
                <Monitor size={18} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Sân khấu truyền thống trong kỷ nguyên số</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Trong kỷ nguyên 4.0–5.0, thách thức không phải là khán giả hết yêu nghệ thuật dân tộc —
                  mà là họ đang tìm kiếm nó theo những cách hoàn toàn khác: qua{' '}
                  <strong className="text-white">TikTok, YouTube, Spotify</strong> thay vì biển quảng cáo và tờ rơi.
                  Nhà hát nào số hóa trước, nhà hát đó giành được thế hệ khán giả tiếp theo.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
