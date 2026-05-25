import { motion } from 'framer-motion'
import { UserCheck, GraduationCap, Shield } from 'lucide-react'
import { SectionHeader, Reveal, scaleIn } from './ui'

const segments = [
  {
    id: 'traditional', label: 'Khán giả truyền thống', shortLabel: 'Truyền thống', age: '50+ tuổi',
    Icon: UserCheck, color: '#d0d09d',
  },
  {
    id: 'young', label: 'Khán giả trẻ', shortLabel: 'Trẻ', age: 'Dưới 30 tuổi',
    Icon: GraduationCap, color: '#3B82F6',
  },
  {
    id: 'military', label: 'Khán giả Quân đội', shortLabel: 'Quân đội', age: 'Mọi lứa tuổi',
    Icon: Shield, color: '#10B981',
  },
]

export default function AudienceSegments() {
  return (
    <section id="audience" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Phân khúc khán giả"
          title="Ba Nhóm Khán Giả Cốt Lõi"
          subtitle="Phân tích nhân khẩu học và hành vi tiêu dùng văn hóa của từng nhóm công chúng mục tiêu."
        />

        <Reveal>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            className="glass rounded-2xl overflow-hidden"
          >
            {/* Header row */}
            <div className="grid grid-cols-4 border-b border-white/5 text-xs uppercase tracking-wider">
              <div className="px-6 py-4 text-zinc-500 font-medium">Tiêu chí</div>
              {segments.map(s => (
                <div key={s.id} className="px-4 py-4 text-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: s.color + '20' }}>
                      <s.Icon size={15} style={{ color: s.color }} />
                    </div>
                    <span className="font-black text-sm" style={{ color: s.color }}>{s.shortLabel}</span>
                    <span className="text-zinc-600 text-[10px] normal-case tracking-normal">{s.age}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Data rows */}
            {[
              ['Nhân khẩu', 'Đồng bằng Bắc Bộ, nông thôn, nghỉ hưu', 'Học sinh, sinh viên, lao động trẻ đô thị', 'Sĩ quan, quân nhân, chiến sĩ nghĩa vụ'],
              ['Động cơ', 'Hoài niệm, bảo tồn lề lối chèo cổ nguyên bản', 'Khám phá văn hóa độc lạ, trải nghiệm tương tác', 'Giải trí lành mạnh, tự hào binh chủng'],
              ['Kênh chính', 'VTV1, QPVN, VOV Radio', 'TikTok, YouTube, App đặt vé', 'Tivi đơn vị, lưu diễn nội bộ'],
              ['Thói quen', 'Xem trực tiếp sân đình, lễ hội, rạp hát', 'Clip ngắn online, workshop tương tác nhỏ', 'Xem lưu diễn tại đơn vị, màn hình tivi chung'],
              ['Chi trả', 'Trung bình thấp', '~300K/vé workshop', 'Phục vụ chính trị (miễn phí)'],
              ['Trung thành', 'Tuyệt đối', 'Tiềm năng cao', 'Gắn kết tập thể rất cao'],
            ].map(([label, ...vals]) => (
              <motion.div key={label} variants={scaleIn} className="grid grid-cols-4 border-b border-white/5 hover:bg-white/3 transition-colors">
                <div className="px-6 py-3.5 text-zinc-400 text-sm font-medium">{label}</div>
                {vals.map((v, i) => (
                  <div key={i} className="px-4 py-3.5 text-center text-white text-sm">{v}</div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
