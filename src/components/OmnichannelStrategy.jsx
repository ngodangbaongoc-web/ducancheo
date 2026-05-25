import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Star, RefreshCw, Music2, Smartphone, Ticket, Video, Mic2, ArrowDown, CheckCircle2 } from 'lucide-react'
import { SectionHeader, Reveal, scaleIn } from './ui'

const strategies = [
  {
    id: 'digital', num: '01', Icon: Globe, color: '#3B82F6', border: 'border-blue-500/20', bg: 'from-blue-950/30',
    title: 'Chiến dịch "Chiếng Chèo Số"', sub: 'Digital-first Content Ecosystem',
    desc: 'Chuyển đổi sang tư duy "Digital-first", lấy nội dung số hóa làm mũi nhọn tiếp cận công chúng trẻ.',
    actions: [
      { Icon: Music2, title: 'Phát hành Album & Backing Track', detail: 'Ghi âm chuyên nghiệp các làn điệu chèo cổ tiêu biểu. Phát hành trên Spotify, Apple Music, Zing MP3. Cung cấp miễn phí backing track chuẩn trên YouTube.' },
      { Icon: Smartphone, title: 'Sản xuất Micro-content TikTok', detail: 'Cắt lát vở diễn thành video 30-60 giây. Clip hậu trường trang điểm nghệ sĩ. Video giải nghĩa ngôn ngữ chèo cổ bằng ngôn ngữ Gen Z.' },
    ],
    kpis: ['100K+ streams trên nền tảng nhạc số', '10K+ followers TikTok trong 6 tháng', '50+ video Shorts mỗi tháng'],
  },
  {
    id: 'influencer', num: '02', Icon: Star, color: '#d0d09d', border: 'border-[#d0d09d]/20', bg: 'from-[#d0d09d]/8',
    title: 'Kích hoạt "Hiệu ứng Người ảnh hưởng"', sub: 'Influencer Marketing Strategy',
    desc: 'Sử dụng thương hiệu cá nhân NSND Vũ Tự Long làm đòn bẩy thu hút giới trẻ đến với nghệ thuật truyền thống.',
    actions: [
      { Icon: Mic2, title: 'Thử thách "Duet cùng NSND Tự Long"', detail: 'NSND Vũ Tự Long hát một vế điệu chèo cổ nổi tiếng. Kêu gọi người dùng TikTok "Duet" hát nối vế còn lại. Lan tỏa tự nhiên tận dụng lượng follower khổng lồ.' },
      { Icon: Video, title: 'Chuỗi "Hé lộ bức màn chiếu chèo"', detail: 'Video ghi lại nghệ sĩ luyện tập live mộc trong thường phục. Bài học thực tế: video tập mộc thu 2.262 reactions, 83 shares — cao hơn nhiều thông báo chính thức.' },
    ],
    kpis: ['500K+ lượt xem challenge', '1M+ reach organic', 'Top trending nghệ thuật truyền thống'],
  },
  {
    id: 'o2o', num: '03', Icon: RefreshCw, color: '#10B981', border: 'border-emerald-500/20', bg: 'from-emerald-950/30',
    title: 'Mô hình O2O', sub: 'Online-to-Offline Conversion',
    desc: 'Xây dựng phễu chuyển đổi chặt chẽ — đưa khán giả từ không gian số đến trải nghiệm trực tiếp tại rạp.',
    actions: [
      { Icon: Ticket, title: 'Số hóa quy trình phân phối vé', detail: 'Hợp tác TicketGO, Ticketbox. Chọn ghế, thanh toán không tiền mặt trên mobile. Chấm dứt hoàn toàn mô hình bán vé giấy tại quầy.' },
      { Icon: Star, title: 'Chuỗi "Chiếu chèo mở" & Điểm chạm vật lý', detail: 'Workshop <30 người tại V-Art Space (~300K/vé). Khu check-in kết hợp không gian sân đình xưa + ánh sáng hiện đại. Giao lưu hậu trường sau buổi diễn.' },
    ],
    kpis: ['Tăng 30% doanh thu bán vé số', 'CR online→offline đạt 5%+', '90% hài lòng trải nghiệm'],
  },
]

const funnelSteps = [
  { step: 'AWARENESS', label: 'Nhận biết', desc: 'TikTok, YouTube Shorts, Facebook Reels', color: '#3B82F6' },
  { step: 'INTEREST',  label: 'Quan tâm',  desc: 'Video hậu trường, challenge duet, clip nghệ sĩ', color: '#8B5CF6' },
  { step: 'DESIRE',    label: 'Khao khát', desc: 'Workshop mini, nội dung giải nghĩa chèo cổ', color: '#EF4444' },
  { step: 'ACTION',    label: 'Hành động', desc: 'Đặt vé online, mua vé workshop, chia sẻ', color: '#10B981' },
  { step: 'ADVOCACY',  label: 'Lan tỏa',   desc: 'Check-in, tag bạn bè, tạo UGC tự nhiên', color: '#d0d09d' },
]

export default function OmnichannelStrategy() {
  const [active, setActive] = useState('digital')
  const strat = strategies.find(s => s.id === active)

  return (
    <section id="strategy" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2b23]/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          eyebrow="Chiến lược Đa kênh"
          title="Chiến Lược Omnichannel"
          subtitle="Ba chiến lược tối ưu hóa giúp Nhà hát Chèo Quân đội chuyển đổi số và trẻ hóa công chúng bền vững."
        />

        {/* Strategy tabs */}
        <Reveal className="flex flex-wrap justify-center gap-3 mb-10">
          {strategies.map(s => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all border ${
                active === s.id
                  ? 'text-white border-transparent'
                  : 'glass text-zinc-400 border-white/8 hover:border-white/20 hover:text-white'
              }`}
              style={active === s.id ? {
                background: `linear-gradient(135deg, ${s.color}BB, ${s.color}66)`,
                boxShadow: `0 8px 24px ${s.color}30`,
              } : {}}
            >
              <s.Icon size={16} />
              <span className="font-black text-xs opacity-70">{s.num}</span>
              <span className="hidden sm:inline">{s.title.split('"')[0].trim() || s.title.split(' ').slice(0,3).join(' ')}</span>
            </button>
          ))}
        </Reveal>

        {/* Active strategy */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-2xl overflow-hidden border ${strat.border} bg-gradient-to-br ${strat.bg} to-transparent mb-8`}
          >
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: strat.color + '20' }}>
                  <strat.Icon size={28} style={{ color: strat.color }} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: strat.color }}>{strat.num}</div>
                  <h3 className="text-xl font-black text-white leading-tight">{strat.title}</h3>
                  <div className="text-zinc-400 text-sm mt-0.5">{strat.sub}</div>
                </div>
              </div>
              <p className="text-zinc-300 mb-8 leading-relaxed">{strat.desc}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {strat.actions.map(action => (
                  <div key={action.title} className="glass rounded-xl p-5 border border-white/8 hover:border-white/16 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: strat.color + '20' }}>
                        <action.Icon size={16} style={{ color: strat.color }} />
                      </div>
                      <h4 className="text-white font-bold text-sm">{action.title}</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed pl-10">{action.detail}</p>
                  </div>
                ))}
              </div>

              <div className="glass rounded-xl p-5 border border-white/8">
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-3 font-semibold">KPIs mục tiêu</div>
                <div className="flex flex-wrap gap-2">
                  {strat.kpis.map(kpi => (
                    <span key={kpi} className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg font-medium text-white" style={{ background: strat.color + '18', border: `1px solid ${strat.color}30` }}>
                      <CheckCircle2 size={12} style={{ color: strat.color }} /> {kpi}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Funnel */}
        <Reveal>
          <div className="glass rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-1">Phễu Chuyển Đổi Hành Trình Khách Hàng</h3>
            <p className="text-zinc-500 text-sm mb-8">Mô hình O2O: Từ nhận biết trực tuyến → Mua vé thực tế</p>
            <div className="flex flex-col gap-2">
              {funnelSteps.map((step, i) => {
                const width = `${100 - i * 10}%`
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, scaleX: 0.6 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto flex items-center gap-4 py-3.5 px-6 rounded-xl"
                    style={{
                      width,
                      background: step.color + '15',
                      border: `1px solid ${step.color}30`,
                      transformOrigin: 'center',
                    }}
                  >
                    <div className="shrink-0">
                      <div className="text-xs font-black tracking-widest uppercase mb-0.5" style={{ color: step.color }}>{step.step}</div>
                      <div className="text-white font-bold text-sm">{step.label}</div>
                    </div>
                    <div className="flex-1 border-l border-white/8 pl-4 text-zinc-400 text-xs">{step.desc}</div>
                    {i < funnelSteps.length - 1 && <ArrowDown size={14} style={{ color: step.color }} className="shrink-0 opacity-60" />}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
