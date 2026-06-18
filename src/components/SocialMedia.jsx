import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts'
import { Heart, MessageCircle, Share2, Flame, Video, Mic2, BookOpen, Megaphone, Ticket, Star, ArrowRight } from 'lucide-react'
import { SectionHeader, Reveal, stagger, scaleIn } from './ui'

const posts = [
  { title: 'Tuyển sinh năng khiếu & Teaser minigame', date: '08/03/2026', reactions: 4899, comments: 26, shares: 24, insight: 'Khán giả trẻ quan tâm đặc biệt đến cơ hội học nghệ thuật và hoạt động nhận quà.', type: 'viral', Icon: Flame },
  { title: 'Video tập luyện live mộc dàn hợp xướng', date: '12/02/2026', reactions: 2262, comments: 74, shares: 83, insight: 'Nội dung hậu trường chân thực thu hút hơn nhiều so với thông báo chính thức.', type: 'authentic', Icon: Video },
  { title: 'Giới thiệu "Người chiến sĩ ấy" – Hoàng Viết Danh', date: '23/03/2026', reactions: 523, comments: 28, shares: 27, insight: 'Giọng ca nổi tiếng + giao hưởng tạo thảo luận tích cực về kỹ thuật thanh nhạc.', type: 'artist', Icon: Mic2 },
  { title: 'Thông báo tuyển sinh hệ Đại học Thanh nhạc', date: '17/03/2026', reactions: 553, comments: 42, shares: 45, insight: 'Khán giả chủ động đặt câu hỏi chi tiết về quy chế thi tuyển.', type: 'recruitment', Icon: BookOpen },
  { title: 'Giao hưởng đến với chiến sĩ tại đơn vị', date: '24/03/2026', reactions: 247, comments: 0, shares: 2, insight: 'Bài đăng thông báo hành chính — ít tương tác, lòng tự hào nhẹ.', type: 'announcement', Icon: Megaphone },
  { title: 'Minigame tương tác tặng vé công diễn', date: '26/02/2026', reactions: 87, comments: 34, shares: 27, insight: 'Tỷ lệ chuyển đổi cao: tương tác số → mua vé trực tiếp.', type: 'conversion', Icon: Ticket },
]

const typeStyle = {
  viral:       { color: '#EF4444', label: 'Viral',    bg: 'bg-red-500/15' },
  authentic:   { color: '#10B981', label: 'Hậu trường', bg: 'bg-emerald-500/15' },
  artist:      { color: '#8B5CF6', label: 'Nghệ sĩ', bg: 'bg-violet-500/15' },
  recruitment: { color: '#3B82F6', label: 'Tuyển sinh', bg: 'bg-blue-500/15' },
  announcement:{ color: '#71717A', label: 'Thông báo', bg: 'bg-zinc-500/15' },
  conversion:  { color: '#d0d09d', label: 'Chuyển đổi', bg: 'bg-[#d0d09d]/15' },
}

const chartData = posts.map(p => ({
  name: p.title.length > 20 ? p.title.slice(0,20)+'…' : p.title,
  fullName: p.title, reactions: p.reactions, comments: p.comments, shares: p.shares,
}))

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl px-4 py-3 text-sm text-white border border-blue-400/30 max-w-[260px]" style={{ background: 'rgba(59,130,246,0.25)', backdropFilter: 'blur(12px)' }}>
      <div className="font-bold mb-1.5 text-xs text-white">{payload[0]?.payload?.fullName}</div>
      {payload.map(p => (
        <div key={p.dataKey} className="flex justify-between gap-6 text-xs">
          <span className="text-white/80">{p.name}</span>
          <strong className="text-white">{p.value.toLocaleString()}</strong>
        </div>
      ))}
    </div>
  )
}

export default function SocialMedia() {
  return (
    <section id="social" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Mạng xã hội"
          title="Phân Tích Tương Tác Facebook"
          subtitle="Dữ liệu thực từ fanpage Đại học Văn hóa Nghệ thuật Quân đội - fanpage duy nhất đang tải thông tin chính thống của Nhà hát Chèo Quân đội hiện tại."
        />

        {/* Bar chart */}
        <Reveal className="glass rounded-2xl p-8 mb-8">
          <h3 className="text-white font-bold text-lg mb-1">So Sánh Engagement Theo Bài Đăng</h3>
          <p className="text-zinc-500 text-sm mb-6">Nguồn: Fanpage MUCA.NTQD & MSO 2026</p>
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={chartData} margin={{ top: 0, right: 16, left: 0, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="name" tick={{ fill: '#52525B', fontSize: 10 }} angle={-28} textAnchor="end" interval={0} />
              <YAxis tick={{ fill: '#52525B', fontSize: 11 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ color: '#A1A1AA', paddingTop: 16 }} />
              <Bar name="Reactions" dataKey="reactions" fill="#d0d09d" radius={[4,4,0,0]} />
              <Bar name="Comments"  dataKey="comments"  fill="#3B82F6" radius={[4,4,0,0]} />
              <Bar name="Shares"    dataKey="shares"    fill="#10B981" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Reveal>

        {/* Post cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {posts.map(p => {
            const ts = typeStyle[p.type]
            return (
              <motion.div
                key={p.title}
                variants={scaleIn}
                whileHover={{ y: -5, boxShadow: `0 20px 40px ${ts.color}25` }}
                className="glass rounded-2xl p-5 border border-white/8 hover:border-white/16 transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg ${ts.bg} flex items-center justify-center shrink-0`}>
                      <p.Icon size={15} style={{ color: ts.color }} />
                    </div>
                    <h4 className="text-white font-semibold text-sm leading-snug">{p.title}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4 ml-10">
                  <span className="text-zinc-500 text-xs">{p.date}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${ts.bg}`} style={{ color: ts.color }}>{ts.label}</span>
                </div>

                <div className="flex gap-3 mb-4">
                  {[
                    { icon: Heart,          val: p.reactions, label: 'Reactions', color: '#EF4444' },
                    { icon: MessageCircle,  val: p.comments,  label: 'Comments',  color: '#3B82F6' },
                    { icon: Share2,         val: p.shares,    label: 'Shares',    color: '#10B981' },
                  ].map(m => (
                    <div key={m.label} className="flex-1 glass rounded-xl py-2 text-center">
                      <m.icon size={12} className="mx-auto mb-1" style={{ color: m.color }} />
                      <div className="text-white font-black text-sm">{m.val.toLocaleString()}</div>
                      <div className="text-zinc-600 text-xs">{m.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-zinc-400 text-xs leading-relaxed border-t border-white/5 pt-3">{p.insight}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Key takeaways */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          <Reveal>
            <div className="rounded-2xl p-7 bg-gradient-to-br from-emerald-950/40 to-transparent border border-emerald-500/20 h-full">
              <div className="flex items-center gap-2 mb-3">
                <Video size={20} className="text-emerald-400" />
                <h4 className="text-emerald-400 font-bold text-base">Nội dung hậu trường thu hút sự quan tâm.</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Video tập luyện "live mộc", không autotune thu hút{' '}
                <strong className="text-white">2.262 reactions, 83 shares</strong>, cao hơn nhiều so với những bài thông báo hành chính thông thường.
                Điều này cho thấy công chúng quan tâm sự chân thực, gần gũi, sự nỗ lực của người nghệ sĩ sau ánh đèn.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl p-7 bg-gradient-to-br from-[#d0d09d]/8 to-transparent border border-[#d0d09d]/20 h-full">
              <div className="flex items-center gap-2 mb-3">
                <Star size={20} style={{ color: '#d0d09d' }} />
                <h4 className="font-bold text-base" style={{ color: '#d0d09d' }}>Hiệu ứng NSND Vũ Tự Long</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Từ hào quang vị thế sẵn có trong suốt 2 thập kỷ đối với khán giả truyền thống cùng khán giả trẻ qua show{' '}
                <strong className="text-white">"Anh trai vượt ngàn chông gai"</strong>.
                Thương hiệu cá nhân của Giám đốc Nhà hát là đòn bẩy truyền thông giúp kéo gần Gen Z với chiếu chèo truyền thống.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Part 2 Conclusion / Transition */}
        <Reveal>
          <div className="rounded-2xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-transparent">
            <div className="flex items-center gap-2 px-7 py-4 border-b border-white/5">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Insight cốt lõi — Kết luận Phần 2</span>
            </div>
            <div className="p-7 grid md:grid-cols-2 gap-6">
              <p className="text-zinc-300 leading-relaxed text-sm">
                Theo dữ liệu thống kê, nhu cầu của khán giả đối với nghệ thuật chèo hiện duy trì ở mức tương đối cao với khoảng{' '}
                <strong className="text-white">50.000 lượt tìm kiếm mỗi tháng</strong>.
                Tuy nhiên, phần lớn lượng quan tâm này tập trung vào các nội dung số hóa như karaoke, định dạng mp3 và video ngắn — những sản phẩm hiện chưa được Nhà hát cung cấp.
                Bên cạnh đó, quy mô cộng đồng người theo dõi trên nền tảng Facebook của đơn vị còn hạn chế, hiện chỉ tương đương <strong className="text-white">2,7%</strong> so với Nhà hát Tuổi Trẻ.
              </p>
              <div className="border-l border-white/5 pl-6">
                <div className="text-zinc-500 text-xs uppercase tracking-wider mb-2 font-medium">Insight chiến lược</div>
                <p className="text-white font-semibold leading-relaxed text-sm">
                  Thực tế cho thấy nhu cầu của công chúng đối với nghệ thuật chèo vẫn hiện hữu; vấn đề nằm ở sự thiếu hụt các kênh tiếp cận và định dạng nội dung phù hợp với xu hướng hiện nay. Tình thế này mở ra cơ hội tăng trưởng và mở rộng tệp khán giả thông qua việc tối ưu hóa kênh truyền thông, thay vì phản ánh một cuộc khủng hoảng suy thoái không thể chuyển biến.
                </p>
                <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-semibold">
                  <ArrowRight size={14} />
                  <span>Phần 3: Định hướng chiến lược</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
