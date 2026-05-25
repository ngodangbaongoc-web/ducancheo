import { motion } from 'framer-motion'
import {
  Smile, Globe, Shield,
  BookOpen, Ticket, MapPin,
  Flame, Clock, Eye,
  Music2, Theater, Smartphone,
  Wrench, Video, Bus,
  Zap, Mic2, Disc3,
  Target, ArrowRight, Users, Lightbulb,
} from 'lucide-react'
import { SectionHeader, Reveal } from './ui'

// ── Data ──────────────────────────────────────────────────────────────
const rows = [
  {
    id: 'jobs-products',
    customer: {
      label: 'Công việc của khán giả',
      badge: 'Customer Jobs',
      color: '#3B82F6',
      bg: 'from-blue-950/50 to-blue-950/20',
      border: 'border-blue-500/25',
      items: [
        { Icon: Smile,   text: 'Giải trí lành mạnh, giải tỏa áp lực' },
        { Icon: Globe,   text: 'Khám phá bản sắc văn hóa dân tộc' },
        { Icon: Shield,  text: 'Thể hiện tinh thần yêu nước, tự hào binh chủng' },
      ],
    },
    connector: { label: 'được đáp ứng bởi', arrow: '→' },
    value: {
      label: 'Sản phẩm & Dịch vụ',
      badge: 'Products',
      color: '#d0d09d',
      bg: 'from-[#d0d09d]/8 to-[#d0d09d]/3',
      border: 'border-[#d0d09d]/25',
      items: [
        { Icon: Theater,    text: 'Vở chèo kinh điển + tác phẩm đương đại thời sự' },
        { Icon: BookOpen,   text: 'Workshop "Làm quen với chèo" tương tác' },
        { Icon: Music2,     text: 'Hệ sinh thái nội dung số: video, mp3, karaoke' },
      ],
    },
  },
  {
    id: 'pains-relievers',
    customer: {
      label: 'Nỗi đau của khán giả',
      badge: 'Pains',
      color: '#EF4444',
      bg: 'from-red-950/50 to-red-950/20',
      border: 'border-red-500/25',
      items: [
        { Icon: BookOpen, text: 'Ngôn ngữ cổ ước lệ, ca từ bác học khó hiểu' },
        { Icon: Ticket,   text: 'Đặt vé thủ công, quy trình rườm rà' },
        { Icon: Eye,      text: 'Nghệ thuật truyền thống bị cảm nhận là "lỗi thời"' },
        { Icon: MapPin,   text: 'Khoảng cách địa lý xa rạp hát' },
      ],
    },
    connector: { label: 'được giải quyết bởi', arrow: '⟶' },
    value: {
      label: 'Thuốc giảm đau nghệ thuật',
      badge: 'Pain Relievers',
      color: '#F97316',
      bg: 'from-orange-950/50 to-orange-950/20',
      border: 'border-orange-500/25',
      items: [
        { Icon: Smartphone, text: 'Video ngắn giải nghĩa ngôn ngữ chèo cổ trên MXH' },
        { Icon: Ticket,     text: 'Đặt vé điện tử, thanh toán không tiền mặt' },
        { Icon: Wrench,     text: 'Micro-content hài hước, gần gũi cho Gen Z' },
        { Icon: Bus,        text: 'Lưu diễn lưu động tại đơn vị quân đội toàn quốc' },
      ],
    },
  },
  {
    id: 'gains-creators',
    customer: {
      label: 'Lợi ích mong đợi',
      badge: 'Gains',
      color: '#10B981',
      bg: 'from-emerald-950/50 to-emerald-950/20',
      border: 'border-emerald-500/25',
      items: [
        { Icon: Flame, text: 'Khoảnh khắc thăng hoa cảm xúc từ nghệ thuật đỉnh cao' },
        { Icon: Mic2,  text: 'Tương tác, đồng sáng tạo cùng nghệ sĩ nổi tiếng' },
        { Icon: Globe, text: 'Tiếp cận văn hóa cổ truyền qua điểm chạm số hiện đại' },
      ],
    },
    connector: { label: 'được tạo ra bởi', arrow: '→' },
    value: {
      label: 'Thiết lập yếu tố lợi ích',
      badge: 'Gain Creators',
      color: '#8B5CF6',
      bg: 'from-violet-950/50 to-violet-950/20',
      border: 'border-violet-500/25',
      items: [
        { Icon: Zap,        text: 'Công nghệ ánh sáng, âm thanh lập thể hiện đại' },
        { Icon: Video,      text: 'Thử thách "Duet cùng NSND Vũ Tự Long" trên TikTok' },
        { Icon: Disc3,      text: 'Album nhạc chèo chất lượng cao, backing track chuẩn' },
      ],
    },
  },
]

// ── Sub-components ────────────────────────────────────────────────────
function SideCard({ side, index, isLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`flex-1 rounded-2xl border ${side.border} bg-gradient-to-br ${side.bg} overflow-hidden`}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-white/6">
        <span
          className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: side.color + '22', color: side.color }}
        >
          {side.badge}
        </span>
        <span className="text-white font-semibold text-sm">{side.label}</span>
      </div>

      {/* Items as visual chips */}
      <div className="p-4 flex flex-col gap-2.5">
        {side.items.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + i * 0.06 + 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-start gap-3 rounded-xl p-3 transition-all cursor-default group"
            style={{ background: side.color + '0D', border: `1px solid ${side.color}20` }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all group-hover:scale-110"
              style={{ background: side.color + '25' }}
            >
              <item.Icon size={15} style={{ color: side.color }} />
            </div>
            <span className="text-zinc-200 text-sm leading-snug">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function Connector({ data, color1, color2, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 + 0.2, type: 'spring', stiffness: 200 }}
      className="flex flex-col items-center justify-center gap-2 shrink-0 w-28 lg:w-36"
    >
      {/* Animated arrow line */}
      <div className="flex items-center gap-1 w-full">
        <div className="h-px flex-1 rounded-full" style={{ background: `linear-gradient(90deg, ${color1}, ${color2})` }} />
        <ArrowRight size={14} style={{ color: color2 }} />
      </div>
      <span
        className="text-[10px] font-semibold uppercase tracking-wider text-center leading-tight px-2 py-1 rounded-lg"
        style={{ background: color2 + '18', color: color2 }}
      >
        {data.label}
      </span>
      <div className="flex items-center gap-1 w-full opacity-30">
        <div className="h-px flex-1 rounded-full" style={{ background: `linear-gradient(90deg, ${color1}, ${color2})` }} />
        <ArrowRight size={14} style={{ color: color2 }} />
      </div>
    </motion.div>
  )
}

// ── Column headers ────────────────────────────────────────────────────
function ColumnHeader({ icon: Icon, title, subtitle, color }) {
  return (
    <div className="flex items-center gap-3 flex-1">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: color + '20' }}>
        <Icon size={20} style={{ color }} />
      </div>
      <div>
        <div className="text-white font-bold text-base">{title}</div>
        <div className="text-xs font-semibold uppercase tracking-wider" style={{ color }}>{subtitle}</div>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────
export default function ValueProposition() {
  return (
    <section id="value" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Value Proposition Canvas"
          title="Sơ Đồ Khớp Nối Giá Trị"
          subtitle="Mỗi hàng thể hiện sự khớp nối trực tiếp giữa nhu cầu khán giả và giải pháp của Nhà hát Chèo Quân đội."
        />

        {/* Column headers */}
        <Reveal className="flex items-center gap-4 mb-5 px-1">
          <ColumnHeader icon={Users}     title="Hồ sơ Khán giả"   subtitle="Customer Profile" color="#3B82F6" />
          <div className="w-28 lg:w-36 shrink-0" /> {/* spacer for connector column */}
          <ColumnHeader icon={Lightbulb} title="Giải pháp Giá trị" subtitle="Value Map"        color="#d0d09d" />
        </Reveal>

        {/* Canvas rows */}
        <div className="flex flex-col gap-4">
          {rows.map((row, i) => (
            <div key={row.id} className="flex items-stretch gap-4">
              <SideCard side={row.customer} index={i} isLeft={true} />
              <Connector
                data={row.connector}
                color1={row.customer.color}
                color2={row.value.color}
                index={i}
              />
              <SideCard side={row.value} index={i} isLeft={false} />
            </div>
          ))}
        </div>

        {/* Fit banner */}
        <Reveal className="mt-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(245,158,11,0.08) 50%, rgba(139,92,246,0.1) 100%)',
            }} />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
            <div className="relative p-7 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              {/* Score indicators */}
              <div className="flex gap-4 shrink-0">
                {[
                  { label: 'Jobs khớp', val: '3/3', color: '#3B82F6' },
                  { label: 'Pains xử lý', val: '4/4', color: '#EF4444' },
                  { label: 'Gains tạo ra', val: '3/3', color: '#10B981' },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-black" style={{ color: s.color }}>{s.val}</div>
                    <div className="text-zinc-500 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />
              <div>
                <div className="flex items-center gap-2 justify-center md:justify-start mb-1.5">
                  <Target size={18} style={{ color: '#d0d09d' }} />
                  <h4 className="text-white font-bold text-base">Product-Market Fit Đạt Được</h4>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                  Khi{' '}
                  <span className="font-semibold" style={{ color: '#d0d09d' }}>Giải pháp Giá trị</span>{' '}
                  khớp hoàn toàn với{' '}
                  <span className="font-semibold" style={{ color: '#3B82F6' }}>Hồ sơ Khán giả</span>,
                  nhà hát không chỉ cung cấp sản phẩm nghệ thuật mà còn giải quyết đúng
                  nỗi đau và tạo ra đúng lợi ích từng nhóm công chúng tìm kiếm.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
