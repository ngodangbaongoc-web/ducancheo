import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts'
import { Heart, MessageCircle, Share2, Flame, Video, Mic2, BookOpen, Megaphone, Ticket, Star } from 'lucide-react'
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
  conversion:  { color: '#F59E0B', label: 'Chuyển đổi', bg: 'bg-amber-500/15' },
}

const chartData = posts.map(p => ({
  name: p.title.length > 20 ? p.title.slice(0,20)+'…' : p.title,
  fullName: p.title, reactions: p.reactions, comments: p.comments, shares: p.shares,
}))

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="glass rounded-xl px-4 py-3 text-sm text-white border border-white/12 max-w-[260px]">
      <div className="font-bold text-amber-400 mb-1.5 text-xs">{payload[0]?.payload?.fullName}</div>
      {payload.map(p => (
        <div key={p.dataKey} className="flex justify-between gap-6 text-xs">
          <span style={{ color: p.fill }}>{p.name}</span>
          <strong>{p.value.toLocaleString()}</strong>
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
          subtitle="Dữ liệu thực từ fanpage MUCA & MSO 2026 — bài học chiến lược nội dung số cho Nhà hát Chèo Quân đội."
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
              <Bar name="Reactions" dataKey="reactions" fill="#F59E0B" radius={[4,4,0,0]} />
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
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal>
            <div className="rounded-2xl p-7 bg-gradient-to-br from-emerald-950/40 to-transparent border border-emerald-500/20 h-full">
              <div className="flex items-center gap-2 mb-3">
                <Video size={20} className="text-emerald-400" />
                <h4 className="text-emerald-400 font-bold text-base">Nội dung hậu trường thắng thế</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Video tập luyện "live mộc" không autotune thu{' '}
                <strong className="text-white">2.262 reactions, 83 shares</strong> — cao hơn nhiều các bài thông báo hành chính.
                Công chúng khao khát sự chân thực và nỗ lực của người nghệ sĩ phía sau ánh đèn sân khấu.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl p-7 bg-gradient-to-br from-amber-950/40 to-transparent border border-amber-500/20 h-full">
              <div className="flex items-center gap-2 mb-3">
                <Star size={20} className="text-amber-400" />
                <h4 className="text-amber-400 font-bold text-base">Hiệu ứng NSND Vũ Tự Long</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Từ sân khấu chèo đến gameshow{' '}
                <strong className="text-white">"Anh trai vượt ngàn chông gai"</strong>,
                thương hiệu cá nhân của Giám đốc Nhà hát là đòn bẩy truyền thông vô song —
                kéo gần Gen Z với chiếu chèo truyền thống.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
