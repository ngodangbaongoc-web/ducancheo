import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Globe, Mic2, Users, BookOpen, Shield, AlertTriangle, Star, Video, Award, Heart, Sparkles, Zap, CheckCircle2, ArrowDown } from 'lucide-react'
import { SectionHeader, Reveal } from './ui'

const strategies = [
  {
    id: 'swot', num: '01', Icon: Target, color: '#3B82F6', border: 'border-blue-500/20', bg: 'from-blue-950/30',
    title: 'SWOT & Chiến lược Chuyển đổi', sub: 'Chuyển dịch tư duy quản trị: Từ cơ chế hành chính sang ưu tiên nền tảng số',
    desc: 'Trên cơ sở phân tích hệ thống các thế mạnh và hạn chế nội tại, định hướng phát triển của Nhà hát đòi hỏi một sự chuyển dịch căn bản về tư duy quản trị: chuyển từ mô hình vận hành mang tính hành chính, thụ động sang chiến lược "Digital-first" (Ưu tiên số hóa). Sự thay đổi này cấu thành nền tảng cốt lõi để đổi mới phương thức tiếp cận công chúng và tối ưu hóa hiệu quả hoạt động trong bối cảnh mới.',
    actions: [
      { Icon: Shield, title: 'Điểm mạnh (Strengths)', detail: 'Lực lượng nghệ sĩ tinh hoa (9 NSND, 27 NSƯT). Danh tiếng của Giám đốc — Đại tá, NSND Vũ Tự Long. Quy mô lớn và vị thế chính trị vững chắc.' },
      { Icon: AlertTriangle, title: 'Điểm yếu (Weaknesses)', detail: 'Phụ thuộc kênh truyền thông một chiều. Thiếu thư viện nội dung số. Quy trình bán vé thủ công. Thiếu không gian tương tác với khán giả trẻ.' },
      { Icon: Sparkles, title: 'Cơ hội (Opportunities)', detail: 'Lượng tìm kiếm "chèo" duy trì hơn 50.000 lượt/tháng — nhu cầu công chúng còn đó nhưng chưa được đáp ứng. Sự xuất hiện của NSND Vũ Tự Long trong "Anh trai vượt ngàn chông gai" mở ra cơ hội tiếp cận Gen Z quy mô lớn. Làn sóng phục hưng văn hóa truyền thống đang nổi lên trong giới trẻ.' },
      { Icon: Zap, title: 'Thách thức (Threats)', detail: 'Cạnh tranh từ giải trí hiện đại: streaming, K-pop, gaming chiếm đa số thời gian rảnh của giới trẻ. Cơ sở khán giả truyền thống già hóa trong khi chưa có chiến lược thu hút thế hệ kế tiếp. Áp lực tự chủ tài chính hạn chế ngân sách đầu tư nội dung số.' },
    ],
    kpis: ['Số hóa hệ sinh thái nội dung', 'Trẻ hóa đề tài đại chúng', 'Cá nhân hóa trải nghiệm O2O'],
  },
  {
    id: 'website', num: '02', Icon: Globe, color: '#d0d09d', border: 'border-[#d0d09d]/20', bg: 'from-[#d0d09d]/8',
    title: 'Website Thời Đại AI', sub: 'Smart Hub — Trung tâm dữ liệu thông minh',
    desc: 'Website của Nhà hát không chỉ là trang tin mà phải là một trung tâm dữ liệu thông minh (Smart Hub) phục vụ cả khán giả cá nhân lẫn đối tác doanh nghiệp.',
    actions: [
      { Icon: Star, title: 'Phân khúc B2B & Minh bạch hóa', detail: 'Xây dựng chuyên mục riêng cho đối tác thuê đoàn diễn: hồ sơ năng lực, danh mục vở diễn, thông số kỹ thuật sân khấu và form đăng ký hợp tác nhanh. Hệ thống hóa toàn bộ lịch sử, thành tích, danh hiệu và thư viện vở diễn để tạo niềm tin tuyệt đối.' },
      { Icon: Zap, title: 'Tích hợp AI Chatbot 24/7', detail: 'Sử dụng chatbot AI trên website để giải đáp thắc mắc về lịch diễn, tư vấn vở diễn phù hợp và hỗ trợ đặt vé tự động 24/7 — nâng cao trải nghiệm người dùng và tối ưu chuyển đổi.' },
    ],
    kpis: ['Tối ưu doanh thu thương mại B2B', 'Tạo niềm tin cho công chúng & nhà tài trợ', 'Đặt vé tự động 24/7'],
  },
  {
    id: 'pr', num: '03', Icon: Mic2, color: '#EF4444', border: 'border-red-500/20', bg: 'from-red-950/30',
    title: 'Khai thác Truyền thông Thế mạnh', sub: 'Thương hiệu "áo lính" — Khác biệt hóa',
    desc: 'Tận dụng uy tín của một đơn vị nghệ thuật "áo lính" để tạo khác biệt và thu hút truyền thông tự nhiên trên các nền tảng số.',
    actions: [
      { Icon: Video, title: 'Truyền thông "Người thật — Việc thật"', detail: 'Đẩy mạnh video hậu trường "live mộc", không chỉnh sửa để thể hiện nỗ lực của nghệ sĩ. Bài học thực tế: video tập mộc thu 2.262 reactions, 83 shares — cao hơn nhiều so với thông báo hành chính chính thức.' },
      { Icon: Star, title: 'Khai thác "Hiệu ứng NSND Vũ Tự Long"', detail: 'Dùng danh tiếng Giám đốc làm đòn bẩy truyền thông. Tổ chức chiến dịch tương tác Duet trên TikTok để thu hút Gen Z. Tôn vinh quy mô & cơ sở vật chất bằng hình ảnh/video chất lượng cao để khẳng định vị thế "đơn vị nghệ thuật hàng đầu".' },
    ],
    kpis: ['1M+ reach organic', 'Trending nghệ thuật truyền thống', 'Tăng tương tác thế hệ Gen Z'],
  },
  {
    id: 'partner', num: '04', Icon: Users, color: '#10B981', border: 'border-emerald-500/20', bg: 'from-emerald-950/30',
    title: 'Chiến lược Kết nối Học viện', sub: 'Phối hợp đối tác — Làn sóng trẻ hóa',
    desc: 'Thiết lập mối quan hệ chiến lược với Học viện Quân đội và các trường văn hóa nghệ thuật (như MUCA) để tạo làn sóng trẻ hóa bền vững.',
    actions: [
      { Icon: Users, title: 'Truyền thông chéo & Workshop "Chiếu chèo mở"', detail: 'Phối hợp với kênh truyền thông của Học viện để lan tỏa thông tin tới sinh viên. Tổ chức workshop trải nghiệm thực tế (gõ trống, múa quạt, thử trang phục) dành riêng cho sinh viên tại Học viện.' },
      { Icon: Award, title: 'Đại sứ thương hiệu sinh viên', detail: 'Mời sinh viên tiêu biểu của Học viện làm "đại sứ" để chia sẻ trải nghiệm trên mạng xã hội, tạo hiệu ứng lan tỏa tự nhiên trong cộng đồng trẻ.' },
    ],
    kpis: ['Tiếp cận cộng đồng sinh viên', 'UGC lan tỏa tự nhiên', 'Làn sóng trẻ hóa bền vững'],
  },
  {
    id: 'content', num: '05', Icon: BookOpen, color: '#8B5CF6', border: 'border-violet-500/20', bg: 'from-violet-950/30',
    title: 'Mở rộng Chủ đề Vở diễn', sub: 'Phá rào cản "chèo là lỗi thời"',
    desc: 'Để vượt qua rào cản nhận thức "chèo là lỗi thời", cần mở rộng đề tài vở diễn sang các chủ đề gần gũi với đời sống hiện đại trong khi vẫn giữ căn cốt dân tộc.',
    actions: [
      { Icon: Heart, title: 'Đề tài gần gũi đời sống', detail: 'Xây dựng kịch bản mới khai thác các vấn đề tâm lý, tình yêu đôi lứa, tình cảm gia đình hiện đại trong xã hội đương đại để tạo sự gần gũi, thay vì chỉ bó hẹp trong đề tài quân đội.' },
      { Icon: Sparkles, title: 'Cách tân sân khấu giữ "căn cốt"', detail: 'Giữ vững lề lối chèo cổ nhưng cách tân thiết kế sân khấu, ánh sáng và âm thanh để mang hơi thở thời đại, giúp khán giả trẻ dễ dàng đồng cảm mà không mất đi "căn cốt" dân tộc.' },
    ],
    kpis: ['Phá rào cản "chèo là lỗi thời"', 'Thu hút khán giả trẻ đô thị', 'Bảo tồn căn cốt dân tộc'],
  },
]

const funnelSteps = [
  { step: 'AWARENESS', label: 'Nhận biết', desc: 'TikTok, YouTube Shorts, Facebook Reels, Website Smart Hub', color: '#3B82F6' },
  { step: 'INTEREST',  label: 'Quan tâm',  desc: 'Video hậu trường live mộc, challenge duet, clip NSND Tự Long', color: '#8B5CF6' },
  { step: 'DESIRE',    label: 'Khao khát', desc: 'Workshop "Chiếu chèo mở", nội dung giải nghĩa chèo cổ', color: '#EF4444' },
  { step: 'ACTION',    label: 'Hành động', desc: 'Đặt vé online, mua vé workshop, chatbot AI hỗ trợ 24/7', color: '#10B981' },
  { step: 'ADVOCACY',  label: 'Lan tỏa',   desc: 'Check-in, tag bạn bè, đại sứ sinh viên tạo UGC tự nhiên', color: '#d0d09d' },
]

export default function OmnichannelStrategy() {
  const [active, setActive] = useState('swot')
  const strat = strategies.find(s => s.id === active)

  return (
    <section id="part4" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2b23]/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">

        {/* Part header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Phần 04</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <SectionHeader
          eyebrow="Giải pháp & Công cụ"
          title="Hệ Thống Giải Pháp Thực Thi"
          subtitle="Năm công cụ và phương thức cụ thể giúp Nhà hát Chèo Quân đội hiện thực hóa chiến lược Digital-first đã đề ra ở Phần 3."
        />

        {/* Strategy tabs */}
        <Reveal className="flex flex-wrap justify-center gap-3 mb-10">
          {strategies.map(s => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all border ${
                active === s.id
                  ? 'text-white border-transparent'
                  : 'glass text-zinc-400 border-white/8 hover:border-white/20 hover:text-white'
              }`}
              style={active === s.id ? {
                background: `linear-gradient(135deg, ${s.color}BB, ${s.color}66)`,
                boxShadow: `0 8px 24px ${s.color}30`,
              } : {}}
            >
              <s.Icon size={15} />
              <span className="font-black text-xs opacity-70">{s.num}</span>
              <span className="hidden sm:inline text-xs">{s.title}</span>
            </button>
          ))}
        </Reveal>

        {/* Active strategy detail */}
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
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-3 font-semibold">Mục tiêu cốt lõi</div>
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
            <h3 className="text-white font-bold text-xl mb-1">Phễu Chuyển Đổi Hành Trình Khán Giả</h3>
            <p className="text-zinc-500 text-sm mb-8">Mô hình O2O: Từ nhận biết trực tuyến → Hành động thực tế → Lan tỏa tự nhiên</p>
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
