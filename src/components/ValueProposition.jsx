import { motion } from 'framer-motion'
import { Users, Lightbulb, Wrench, Sparkles, Package, ChevronRight, CheckCircle2, XCircle, Target } from 'lucide-react'
import { SectionHeader, Reveal, stagger, scaleIn } from './ui'

const customerProfile = {
  jobs: ['Tìm hoạt động giải trí lành mạnh, giải tỏa áp lực', 'Khám phá giá trị bản sắc văn hóa dân tộc', 'Thể hiện tinh thần yêu nước, tự hào binh chủng'],
  pains: ['Ngôn ngữ cổ ước lệ, ca từ bác học khó hiểu', 'Quy trình đặt vé thủ công, rườm rà', 'Nghệ thuật truyền thống bị cảm nhận là "lỗi thời"', 'Khoảng cách địa lý xa rạp hát'],
  gains: ['Khoảnh khắc thăng hoa cảm xúc từ nghệ thuật đỉnh cao', 'Tương tác, đồng sáng tạo cùng nghệ sĩ nổi tiếng', 'Tiếp cận văn hóa cổ truyền qua điểm chạm số hiện đại'],
}

const valueSolution = {
  products: ['Vở chèo kinh điển + tác phẩm đương đại thời sự', 'Chuỗi workshop "Làm quen với chèo" tương tác', 'Hệ sinh thái nội dung số: video, mp3, karaoke chèo'],
  painRelievers: ['Đặt vé điện tử, thanh toán không tiền mặt', 'Video ngắn giải nghĩa ngôn ngữ chèo cổ trên MXH', 'Lưu diễn lưu động tại đơn vị quân đội toàn quốc'],
  gainCreators: ['Công nghệ ánh sáng, âm thanh lập thể hiện đại', 'Thử thách "Duet cùng NSND Vũ Tự Long" trên TikTok', 'Album nhạc chèo chất lượng cao, backing track chuẩn'],
}

export default function ValueProposition() {
  return (
    <section id="value" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Value Proposition Canvas"
          title="Sơ Đồ Khớp Nối Giá Trị"
          subtitle="Phân tích sự khớp nối giữa hồ sơ khán giả và giải pháp giá trị của Nhà hát Chèo Quân đội."
        />

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Customer Profile */}
          <Reveal>
            <div className="h-full rounded-2xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-transparent">
              <div className="flex items-center gap-3 px-7 py-5 border-b border-blue-500/15">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Users size={18} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">Hồ sơ Khán giả</h3>
                  <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider">Customer Profile</p>
                </div>
              </div>
              <div className="p-7 space-y-6">
                {/* Jobs */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-4 rounded-full bg-blue-400" />
                    <h4 className="text-blue-400 font-semibold text-xs uppercase tracking-wider">Công việc của khán giả</h4>
                  </div>
                  <ul className="space-y-2">
                    {customerProfile.jobs.map(j => (
                      <li key={j} className="flex items-start gap-2 text-sm text-zinc-300">
                        <ChevronRight size={14} className="text-blue-400 shrink-0 mt-0.5" /> {j}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Pains */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-4 rounded-full bg-red-400" />
                    <h4 className="text-red-400 font-semibold text-xs uppercase tracking-wider">Nỗi đau</h4>
                  </div>
                  <ul className="space-y-2">
                    {customerProfile.pains.map(pain => (
                      <li key={pain} className="flex items-start gap-2 text-sm text-zinc-300">
                        <XCircle size={13} className="text-red-400 shrink-0 mt-0.5" /> {pain}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Gains */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-4 rounded-full bg-emerald-400" />
                    <h4 className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">Lợi ích mong đợi</h4>
                  </div>
                  <ul className="space-y-2">
                    {customerProfile.gains.map(g => (
                      <li key={g} className="flex items-start gap-2 text-sm text-zinc-300">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" /> {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Value Map */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl overflow-hidden border border-amber-500/20 bg-gradient-to-br from-amber-950/25 to-transparent">
              <div className="flex items-center gap-3 px-7 py-5 border-b border-amber-500/15">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Lightbulb size={18} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">Giải pháp Giá trị</h3>
                  <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Value Map</p>
                </div>
              </div>
              <div className="p-7 space-y-6">
                {/* Products */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-4 rounded-full bg-amber-400" />
                    <h4 className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Sản phẩm & Dịch vụ</h4>
                  </div>
                  <ul className="space-y-2">
                    {valueSolution.products.map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-zinc-300">
                        <Package size={13} className="text-amber-400 shrink-0 mt-0.5" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Pain relievers */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-4 rounded-full bg-orange-400" />
                    <h4 className="text-orange-400 font-semibold text-xs uppercase tracking-wider">Thuốc giảm đau</h4>
                  </div>
                  <ul className="space-y-2">
                    {valueSolution.painRelievers.map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-zinc-300">
                        <Wrench size={13} className="text-orange-400 shrink-0 mt-0.5" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Gain creators */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-4 rounded-full bg-violet-400" />
                    <h4 className="text-violet-400 font-semibold text-xs uppercase tracking-wider">Thiết lập lợi ích</h4>
                  </div>
                  <ul className="space-y-2">
                    {valueSolution.gainCreators.map(g => (
                      <li key={g} className="flex items-start gap-2 text-sm text-zinc-300">
                        <Sparkles size={13} className="text-violet-400 shrink-0 mt-0.5" /> {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Fit banner */}
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.12), rgba(245,158,11,0.08), rgba(139,92,246,0.12))' }} />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
            <div className="relative p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target size={28} className="text-amber-400" />
                <h4 className="text-xl font-bold text-white">Product-Market Fit Đạt Được</h4>
              </div>
              <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Khi <strong className="text-amber-400">Giải pháp Giá trị</strong> khớp hoàn toàn với{' '}
                <strong className="text-blue-400">Hồ sơ Khán giả</strong>, nhà hát không chỉ cung cấp
                sản phẩm nghệ thuật mà còn giải quyết đúng nỗi đau và tạo ra đúng lợi ích mà
                từng nhóm công chúng mục tiêu đang tìm kiếm.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
