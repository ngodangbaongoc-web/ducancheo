import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { UserCheck, GraduationCap, Shield, Tv, Smartphone, Radio, CreditCard, Heart } from 'lucide-react'
import { SectionHeader, Reveal, stagger, scaleIn } from './ui'

const segments = [
  {
    id: 'traditional', label: 'Khán giả truyền thống', age: '50+ tuổi',
    Icon: UserCheck, color: '#d0d09d', bg: 'from-[#d0d09d]/8 to-[#d0d09d]/2', border: 'border-[#d0d09d]/20',
    demo: 'Đồng bằng Bắc Bộ, nông thôn, nghỉ hưu',
    motivation: 'Hoài niệm, bảo tồn lề lối chèo cổ nguyên bản',
    channels: [{ icon: Tv, label: 'VTV1, QPVN' }, { icon: Radio, label: 'VOV Radio' }],
    habit: 'Xem trực tiếp tại sân đình, lễ hội, rạp hát',
    paying: 'Trung bình thấp', loyalty: 'Tuyệt đối',
    persona: 'Bác Minh, 65 tuổi, cựu chiến binh',
    radar: [90, 30, 20, 85, 95],
  },
  {
    id: 'young', label: 'Khán giả trẻ', age: 'Dưới 30 tuổi',
    Icon: GraduationCap, color: '#3B82F6', bg: 'from-blue-950/40 to-blue-900/10', border: 'border-blue-500/20',
    demo: 'Học sinh, sinh viên, lao động trẻ đô thị',
    motivation: 'Khám phá văn hóa độc lạ, trải nghiệm tương tác xã hội',
    channels: [{ icon: Smartphone, label: 'TikTok, YouTube' }, { icon: Smartphone, label: 'App đặt vé' }],
    habit: 'Clip ngắn online, workshop tương tác quy mô nhỏ',
    paying: '~300K/vé workshop', loyalty: 'Tiềm năng cao',
    persona: 'Khánh Linh, 21 tuổi, sinh viên KHXH',
    radar: [20, 90, 75, 40, 60],
  },
  {
    id: 'military', label: 'Khán giả Quân đội', age: 'Mọi lứa tuổi',
    Icon: Shield, color: '#10B981', bg: 'from-emerald-950/40 to-emerald-900/10', border: 'border-emerald-500/20',
    demo: 'Sĩ quan, quân nhân, chiến sĩ nghĩa vụ',
    motivation: 'Giải trí lành mạnh, tự hào binh chủng',
    channels: [{ icon: Tv, label: 'Tivi đơn vị' }, { icon: Radio, label: 'Lưu diễn nội bộ' }],
    habit: 'Xem lưu diễn tại đơn vị, màn hình tivi chung',
    paying: 'Phục vụ chính trị (miễn phí)', loyalty: 'Gắn kết tập thể rất cao',
    persona: 'Binh nhất Tuấn, 20 tuổi, nghĩa vụ QS',
    radar: [70, 45, 30, 95, 80],
  },
]

const axes = ['Tiếp cận số', 'Sáng tạo', 'Chi trả', 'Tập thể', 'Trung thành']

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="glass rounded-xl px-3 py-2 text-xs text-white border border-white/12">
      {payload[0].value}/100
    </div>
  )
}

export default function AudienceSegments() {
  const [active, setActive] = useState('traditional')
  const seg = segments.find(s => s.id === active)
  const radarData = axes.map((a, i) => ({ subject: a, value: seg.radar[i] }))

  return (
    <section id="part2" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Part header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Phần 02</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Sub-section 2.1 label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-0.5 h-5 rounded-full bg-emerald-400" />
            <span className="text-xs font-black text-emerald-400">2.1</span>
            <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Chân Dung & Hành Vi Khán Giả</span>
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <SectionHeader
          eyebrow="Nghiên cứu Khán giả"
          title="Ba Nhóm Khán Giả Cốt Lõi"
          subtitle="Phân tích nhân khẩu học và hành vi tiêu dùng văn hóa của từng nhóm công chúng mục tiêu."
        />

        {/* Tab selector */}
        <Reveal className="flex flex-wrap justify-center gap-3 mb-10">
          {segments.map(s => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all border ${
                active === s.id
                  ? 'text-white border-transparent shadow-lg'
                  : 'glass text-zinc-400 border-white/8 hover:border-white/20 hover:text-white'
              }`}
              style={active === s.id ? { background: `linear-gradient(135deg, ${s.color}CC, ${s.color}88)`, borderColor: 'transparent', boxShadow: `0 8px 24px ${s.color}30` } : {}}
            >
              <s.Icon size={16} />
              {s.label}
              <span className="text-xs opacity-70 font-normal">{s.age}</span>
            </button>
          ))}
        </Reveal>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-2xl overflow-hidden border ${seg.border} bg-gradient-to-br ${seg.bg}`}
          >
            <div className="grid md:grid-cols-2">
              {/* Left */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: seg.color + '20' }}>
                    <seg.Icon size={28} style={{ color: seg.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{seg.label}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: seg.color + '20', color: seg.color }}>
                      {seg.age}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: UserCheck, label: 'Nhân khẩu học', val: seg.demo },
                    { icon: Heart,     label: 'Động cơ', val: seg.motivation },
                    { icon: Tv,        label: 'Kênh tiếp cận', val: seg.channels.map(c => c.label).join(', ') },
                    { icon: Smartphone,label: 'Thói quen', val: seg.habit },
                    { icon: CreditCard,label: 'Chi trả', val: seg.paying },
                  ].map(item => (
                    <div key={item.label} className="flex gap-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: seg.color + '15' }}>
                        <item.icon size={14} style={{ color: seg.color }} />
                      </div>
                      <div>
                        <div className="text-zinc-500 text-xs uppercase tracking-wider font-medium mb-0.5">{item.label}</div>
                        <div className="text-white text-sm">{item.val}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-4 rounded-xl border border-white/8 bg-white/3">
                  <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Persona đại diện</div>
                  <div className="text-white font-semibold text-sm">{seg.persona}</div>
                </div>
              </div>

              {/* Right: radar */}
              <div className="p-8 flex flex-col border-l border-white/5">
                <h4 className="text-white font-bold text-base mb-1">Hồ sơ hành vi số</h4>
                <p className="text-zinc-500 text-sm mb-4">Đánh giá theo 5 tiêu chí</p>
                <ResponsiveContainer width="100%" height={280}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="rgba(255,255,255,0.08)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717A', fontSize: 11 }} />
                    <Radar dataKey="value" stroke={seg.color} fill={seg.color} fillOpacity={0.2} strokeWidth={2} dot={{ fill: seg.color, r: 3 }} />
                    <Tooltip content={<CustomTooltip />} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Comparison row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          className="mt-6 glass rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-4 border-b border-white/5 text-xs uppercase tracking-wider text-zinc-500 font-medium">
            <div className="px-6 py-3">Tiêu chí</div>
            {segments.map(s => <div key={s.id} className="px-4 py-3 text-center font-bold" style={{ color: s.color }}>{s.label.split(' ').slice(-1)}</div>)}
          </div>
          {[
            ['Độ tuổi', '50+ tuổi', 'Dưới 30', 'Mọi lứa'],
            ['Kênh chính', 'TV, Radio', 'TikTok, YT', 'Nội bộ đơn vị'],
            ['Chi trả', 'Thấp', '~300K/vé', 'Miễn phí'],
            ['Trung thành', 'Tuyệt đối', 'Tiềm năng', 'Tập thể cao'],
          ].map(([label, ...vals]) => (
            <motion.div key={label} variants={scaleIn} className="grid grid-cols-4 border-b border-white/5 hover:bg-white/3 transition-colors">
              <div className="px-6 py-3 text-zinc-400 text-sm font-medium">{label}</div>
              {vals.map((v, i) => <div key={i} className="px-4 py-3 text-center text-white text-sm">{v}</div>)}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
