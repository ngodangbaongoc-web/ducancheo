import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UserCheck, GraduationCap, Shield, Tv, Smartphone, Radio, CreditCard, Heart, MapPin, CheckCircle2, XCircle, Target } from 'lucide-react'
import { SectionHeader, Reveal } from './ui'

const personas = [
  {
    name: 'Bác Minh', age: 65, role: 'Cựu chiến binh • Nghỉ hưu',
    Icon: UserCheck, color: '#F59E0B', location: 'Ngoại thành Hà Nội', segment: 'Truyền thống',
    quote: '"Tôi yêu những điệu chèo nguyên bản mà tôi đã nghe từ thuở thơ ấu tại quê nhà."',
    channels: [{ icon: Tv, label: 'VTV1' }, { icon: Radio, label: 'VOV' }, { icon: Tv, label: 'QPVN' }],
    habits: ['Xem trực tiếp tại sân đình', 'Xem tại rạp hát chính quy', 'Tivi buổi tối thường xuyên'],
    motivations: ['Hoài niệm ký ức tuổi thơ', 'Bảo tồn lề lối chèo cổ', 'Yêu nước, tự hào dân tộc'],
    pains: ['Sức khỏe hạn chế di chuyển xa', 'Lúng túng với đặt vé online', 'Khó tìm lịch biểu diễn'],
    gains: ['Vở chèo giữ đúng lề lối cổ', 'Ca ngợi hình tượng người lính', 'Tình yêu quê hương đất nước'],
    tags: ['50+ tuổi', 'Loyal', 'Offline-first', 'TV & Radio'],
  },
  {
    name: 'Khánh Linh', age: 21, role: 'Sinh viên Khoa học Xã hội',
    Icon: GraduationCap, color: '#3B82F6', location: 'Nội thành Hà Nội', segment: 'Khám phá',
    quote: '"Tôi muốn trải nghiệm chèo theo cách của thế hệ mình — tương tác, sáng tạo và chia sẻ lên mạng."',
    channels: [{ icon: Smartphone, label: 'TikTok' }, { icon: Smartphone, label: 'YouTube' }, { icon: Smartphone, label: 'App vé' }],
    habits: ['Xem clip ngắn TikTok', 'Workshop tương tác nhỏ', 'Dự án cộng đồng Chèo 48H'],
    motivations: ['Khám phá văn hóa độc lạ', 'Tương tác xã hội', 'Nội dung chia sẻ mạng'],
    pains: ['Thiếu kiến thức nền về chèo cổ', 'Khó thấu cảm tác phẩm dài', 'Format biểu diễn thụ động'],
    gains: ['Kết hợp chèo cổ với thiết kế hiện đại', 'Đồng sáng tạo cùng nghệ sĩ', 'Trải nghiệm độc đáo để chia sẻ'],
    tags: ['Gen Z', 'Digital Native', '~300K/vé', 'TikTok user'],
  },
  {
    name: 'Binh nhất Tuấn', age: 20, role: 'Nghĩa vụ quân sự',
    Icon: Shield, color: '#10B981', location: 'Đơn vị Quân khu', segment: 'Quân đội',
    quote: '"Xem chèo cùng đồng đội sau giờ huấn luyện là những khoảnh khắc thư giãn tôi trân trọng nhất."',
    channels: [{ icon: Tv, label: 'Tivi đơn vị' }, { icon: Radio, label: 'Lưu diễn' }],
    habits: ['Xem tivi tập thể cuối tuần', 'Xem lưu diễn tại đơn vị', 'Sinh hoạt văn nghệ định kỳ'],
    motivations: ['Giải trí lành mạnh', 'Tự hào binh chủng', 'Gắn kết tình đồng đội'],
    pains: ['Phụ thuộc lịch đơn vị', 'Không có cơ hội trải nghiệm cá nhân', 'Quỹ thời gian tự do hạn hẹp'],
    gains: ['Vở diễn nhanh, hóm hỉnh', 'Hình tượng người lính gần gũi', 'Giao lưu tập thể vui vẻ'],
    tags: ['18-25 tuổi', 'Tập thể cao', 'Miễn phí', 'Gắn kết mạnh'],
  },
]

export default function Personas() {
  const [active, setActive] = useState(0)
  const p = personas[active]

  return (
    <section id="personas" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          eyebrow="Audience Personas"
          title="Chân Dung Khán Giả Mục Tiêu"
          subtitle="Ba nhân vật đại diện được xây dựng từ dữ liệu thực — nền tảng cho mọi quyết định truyền thông và sản phẩm nghệ thuật."
        />

        {/* Tab selector */}
        <Reveal className="flex flex-wrap justify-center gap-3 mb-10">
          {personas.map((per, i) => (
            <button
              key={per.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all border ${
                active === i
                  ? 'text-white border-transparent'
                  : 'glass text-zinc-400 border-white/8 hover:border-white/20 hover:text-white'
              }`}
              style={active === i ? {
                background: `linear-gradient(135deg, ${per.color}BB, ${per.color}55)`,
                boxShadow: `0 8px 24px ${per.color}30`,
              } : {}}
            >
              <per.Icon size={16} />
              <span>{per.name}</span>
              <span className="text-xs opacity-60 font-normal">{per.age}t</span>
            </button>
          ))}
        </Reveal>

        {/* Persona card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: p.color + '30', background: `linear-gradient(135deg, ${p.color}08, transparent)` }}
          >
            <div className="grid md:grid-cols-3">
              {/* Avatar col */}
              <div className="p-8 flex flex-col items-center text-center md:border-r border-white/5" style={{ background: p.color + '08' }}>
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-24 h-24 rounded-3xl flex items-center justify-center mb-4 text-white"
                  style={{ background: `linear-gradient(135deg, ${p.color}44, ${p.color}22)`, border: `2px solid ${p.color}50` }}
                >
                  <p.Icon size={42} style={{ color: p.color }} />
                </motion.div>

                <h3 className="text-2xl font-black text-white">{p.name}</h3>
                <div className="text-sm font-medium mt-1 mb-0.5" style={{ color: p.color }}>{p.age} tuổi • {p.role}</div>
                <div className="flex items-center gap-1 text-zinc-500 text-xs mb-3">
                  <MapPin size={11} /> {p.location}
                </div>
                <span className="text-xs px-3 py-1 rounded-full font-semibold" style={{ background: p.color + '20', color: p.color }}>
                  {p.segment}
                </span>

                {/* Quote */}
                <div className="mt-5 p-4 rounded-xl border border-white/8 bg-white/3 text-left">
                  <p className="text-zinc-300 text-sm italic leading-relaxed">{p.quote}</p>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full glass border border-white/8 text-zinc-300">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="md:col-span-2 p-8">
                {/* Channels */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tv size={14} style={{ color: p.color }} />
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Kênh tiếp cận</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.channels.map(c => (
                      <div key={c.label} className="flex items-center gap-1.5 glass rounded-lg px-3 py-1.5 border border-white/8 text-sm text-zinc-200">
                        <c.icon size={13} style={{ color: p.color }} /> {c.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  {/* Motivations */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Heart size={14} style={{ color: p.color }} />
                      <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Động cơ</span>
                    </div>
                    <ul className="space-y-2">
                      {p.motivations.map(m => (
                        <li key={m} className="flex items-start gap-2 text-sm text-zinc-300">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" /> {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Habits */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Smartphone size={14} style={{ color: p.color }} />
                      <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Thói quen</span>
                    </div>
                    <ul className="space-y-2">
                      {p.habits.map(h => (
                        <li key={h} className="flex items-start gap-2 text-sm text-zinc-300">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: p.color }} /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pains */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle size={14} className="text-red-400" />
                      <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Rào cản</span>
                    </div>
                    <ul className="space-y-2">
                      {p.pains.map(pain => (
                        <li key={pain} className="flex items-start gap-2 text-sm text-zinc-300">
                          <XCircle size={13} className="text-red-400 shrink-0 mt-0.5" /> {pain}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gains */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target size={14} className="text-violet-400" />
                      <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Lợi ích mong đợi</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.gains.map(g => (
                        <span key={g} className="text-xs px-2.5 py-1 rounded-lg font-medium text-white" style={{ background: p.color + '18', border: `1px solid ${p.color}30` }}>
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
