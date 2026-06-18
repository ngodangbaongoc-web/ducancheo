import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts'
import { TrendingUp, TrendingDown, Minus, Rocket, Search, Music, Mic } from 'lucide-react'
import { SectionHeader, Reveal, GlassCard, stagger, scaleIn } from './ui'

const keywords = [
  { kw: 'hát chèo',                vol: 50000, yoy: 0,    trend: 'stable' },
  { kw: 'dân ca chèo',             vol: 5000,  yoy: 0,    trend: 'stable' },
  { kw: 'nhà hát chèo quân đội',   vol: 5000,  yoy: 0,    trend: 'stable' },
  { kw: 'nhà hát quân đội',        vol: 5000,  yoy: 0,    trend: 'stable' },
  { kw: 'hát chèo quân đội',       vol: 500,   yoy: 0,    trend: 'stable' },
  { kw: 'chèo cổ đào liễu',        vol: 500,   yoy: 0,    trend: 'stable' },
  { kw: 'chèo văn',                vol: 500,   yoy: 0,    trend: 'stable' },
  { kw: 'bài hát chèo',            vol: 500,   yoy: -90,  trend: 'down' },
  { kw: 'các làn điệu chèo',       vol: 500,   yoy: -90,  trend: 'down' },
  { kw: 'chèo quan họ bắc ninh',   vol: 50,    yoy: 900,  trend: 'up' },
  { kw: 'dân ca chèo cổ',          vol: 50,    yoy: 900,  trend: 'up' },
  { kw: 'cheo ka ra o ke',         vol: 50,    yoy: null,  trend: 'explosive' },
  { kw: 'chèo hồng ngát mp3',      vol: 50,    yoy: null,  trend: 'explosive' },
  { kw: 'bài hát chèo quê',        vol: 50,    yoy: 0,    trend: 'explosive' },
  { kw: 'chèo quân sự',            vol: 50,    yoy: null,  trend: 'explosive' },
  { kw: 'chèo quân đội',           vol: 50,    yoy: 0,    trend: 'stable' },
]

const colors = { stable: '#d0d09d', up: '#3B82F6', down: '#EF4444', explosive: '#10B981' }

const chartData = keywords.slice(0, 10).map(k => ({
  name: k.kw.length > 20 ? k.kw.slice(0, 20) + '…' : k.kw,
  fullName: k.kw, vol: k.vol, trend: k.trend,
}))

const wordCloudWords = [
  // Row 1 — small words across top
  { text: 'hề chèo',      size: 16, color: '#d0d09d', top: '2%',  left: '2%',  rotate: 10 },
  { text: 'mp3 chèo',     size: 20, color: '#10B981', top: '1%',  left: '20%', rotate: 8 },
  { text: 'quan họ',      size: 18, color: '#3B82F6', top: '2%',  left: '44%', rotate: -5 },
  { text: 'chèo quê',     size: 14, color: '#d0d09d', top: '3%',  left: '68%', rotate: 0 },
  // Row 2 — medium words
  { text: 'nhà hát',      size: 26, color: '#8B5CF6', top: '13%', left: '2%',  rotate: 0 },
  { text: 'dân ca chèo',  size: 30, color: '#d0d09d', top: '12%', left: '24%', rotate: 0 },
  // Row 3 — dominant word + accent
  { text: 'hát chèo',     size: 56, color: '#d0d09d', top: '28%', left: '12%', rotate: 0 },
  { text: 'quốc phòng',   size: 16, color: '#10B981', top: '30%', left: '73%', rotate: -10 },
  // Row 4 — large words
  { text: 'chèo quân đội',size: 34, color: '#EF4444', top: '52%', left: '2%',  rotate: 0 },
  { text: 'NSND Tự Long', size: 28, color: '#EF4444', top: '50%', left: '56%', rotate: 0 },
  // Row 5 — medium words
  { text: 'karaoke chèo', size: 24, color: '#10B981', top: '68%', left: '2%',  rotate: 0 },
  { text: 'đào liễu',     size: 22, color: '#3B82F6', top: '68%', left: '37%', rotate: -12 },
  { text: 'làn điệu',     size: 18, color: '#8B5CF6', top: '70%', left: '66%', rotate: 5 },
  { text: 'chèo cổ',      size: 22, color: '#d0d09d', top: '68%', left: '84%', rotate: -8 },
  // Row 6 — small words at bottom
  { text: 'chèo văn',     size: 16, color: '#d0d09d', top: '84%', left: '4%',  rotate: -5 },
  { text: 'dân ca cổ',    size: 14, color: '#71717A', top: '83%', left: '24%', rotate: -5 },
  { text: 'lưu diễn',     size: 14, color: '#71717A', top: '85%', left: '46%', rotate: 5 },
  { text: 'chiếu chèo',   size: 14, color: '#71717A', top: '83%', left: '66%', rotate: 0 },
]

const compareArts = [
  { art: 'Cải lương', vol: 120000, pct: 100, color: '#EF4444', note: 'Đứng đầu nghệ thuật truyền thống' },
  { art: 'Kịch nói',  vol: 80000,  pct: 67,  color: '#3B82F6', note: 'Nghệ thuật đương đại, phổ biến đô thị' },
  { art: 'Chèo ★',    vol: 50000,  pct: 42,  color: '#d0d09d', note: 'Tiềm năng lớn, chưa được khai thác số' },
  { art: 'Quan họ',   vol: 25000,  pct: 21,  color: '#10B981', note: 'Di sản UNESCO, tăng theo mùa lễ hội' },
  { art: 'Tuồng',     vol: 8000,   pct: 7,   color: '#8B5CF6', note: 'Nhóm nhỏ nhất trong nghệ thuật cổ truyền' },
]

const musicGenres = [
  { genre: 'Pop',                    pct: 68.4, color: '#3B82F6' },
  { genre: 'Ballad',                 pct: 60.9, color: '#8B5CF6' },
  { genre: 'Rap',                    pct: 45.4, color: '#EF4444' },
  { genre: 'R&B',                    pct: 41.2, color: '#F59E0B' },
  { genre: 'EDM',                    pct: 40.3, color: '#10B981' },
  { genre: 'Hip Hop',                pct: 34.8, color: '#06B6D4' },
  { genre: 'Bolero',                 pct: 22.1, color: '#d0d09d' },
  { genre: 'Rock',                   pct: 21.7, color: '#F97316' },
  { genre: 'Nhạc cách mạng ★',      pct: 17.6, color: '#d0d09d' },
  { genre: 'Nhạc dân ca truyền thống ★', pct: 15.1, color: '#d0d09d' },
  { genre: 'Khác',                   pct: 3.8,  color: '#52525B' },
]

const compareTheaters = [
  { name: 'Nhà hát Tuổi Trẻ',   fans: 450000, pct: 100, color: '#EF4444', note: 'Dẫn đầu sân khấu kịch Việt Nam' },
  { name: 'Kịch Việt Nam',       fans: 55000,  pct: 12,  color: '#3B82F6', note: 'Đơn vị nghệ thuật quốc gia' },
  { name: 'Chèo Việt Nam',       fans: 32000,  pct: 7,   color: '#10B981', note: 'Nhà hát chèo lớn nhất VN' },
  { name: 'NHCQD ★',             fans: 12000,  pct: 2.7, color: '#d0d09d', note: 'Tiềm năng tăng trưởng rất lớn' },
]

const TrendIcon = ({ trend }) => {
  if (trend === 'explosive') return <Rocket size={12} className="text-emerald-400" />
  if (trend === 'up')        return <TrendingUp size={12} className="text-blue-400" />
  if (trend === 'down')      return <TrendingDown size={12} className="text-red-400" />
  return <Minus size={12} className="text-zinc-500" />
}

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="glass rounded-xl px-4 py-3 text-sm text-white border border-white/12 max-w-[220px]">
      <div className="font-bold mb-1 text-xs" style={{ color: '#d0d09d' }}>{payload[0].payload.fullName}</div>
      <div>Lượt tìm kiếm: <strong>{payload[0].value.toLocaleString()}/tháng</strong></div>
    </div>
  )
}

const insights = [
  { icon: Search, title: 'Dịch chuyển tìm kiếm', color: 'text-[#d0d09d]', bg: 'from-[#d0d09d]/8', border: 'border-[#d0d09d]/15',
    text: '"hát chèo" giữ vững 50.000 lượt/tháng nhưng các từ khoá khái quát như "bài hát chèo" giảm -90% YoY. Khán giả tìm đến tác phẩm cụ thể, không còn tìm khái niệm chung.' },
  { icon: Mic, title: 'Bùng nổ nhu cầu cá nhân hóa', color: 'text-emerald-400', bg: 'from-emerald-950/30', border: 'border-emerald-500/15',
    text: '"cheo ka ra o ke" và "chèo hồng ngát mp3" tăng trưởng ∞ — công chúng muốn tự luyện tập và lưu trữ nhạc số chất lượng cao trên thiết bị cá nhân.' },
  { icon: Music, title: 'Tiềm năng yếu tố Quân đội', color: 'text-blue-400', bg: 'from-blue-950/30', border: 'border-blue-500/15',
    text: '"cheo co quoc phong" và "chèo quân sự" ghi nhận mức tăng ∞ trong 3 tháng — mảnh đất màu mỡ để định hình bản sắc thương hiệu riêng biệt.' },
]

export default function SearchData() {
  return (
    <section id="search" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2b23]/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          eyebrow="Insights thị trường"
          title="Nghiên Cứu Khán Giả & Thị Trường"
          subtitle='Đối chiếu vị thế cạnh tranh và phân tích hành vi tìm kiếm thực tế — dữ liệu làm căn cứ xây dựng chiến lược.'
        />

        {/* 2.2 Sub-section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-0.5 h-5 rounded-full bg-red-400" />
            <span className="text-xs font-black text-red-400">2.2</span>
            <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Đối Chiếu Thị Trường — So Sánh Với Các Đơn Vị Khác</span>
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Comparative Analysis */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {/* Music genre chart */}
          <Reveal>
            <div className="glass rounded-2xl p-7 h-full">
              <h3 className="text-white font-bold text-base mb-1">Xu Hướng Chọn Thể Loại Âm Nhạc Hiện Nay</h3>
              <p className="text-zinc-500 text-xs mb-5">Nguồn: Báo cáo từ RMIT University, dữ liệu ZingMP3 — % khán giả chọn thể loại yêu thích</p>
              <div className="space-y-2.5">
                {musicGenres.map((g, i) => (
                  <div key={g.genre}>
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-sm font-semibold ${g.genre.includes('★') ? '' : 'text-white'}`} style={g.genre.includes('★') ? { color: '#d0d09d' } : {}}>
                        {g.genre.replace(' ★', '')}
                      </span>
                      <span className="text-xs font-black tabular-nums" style={{ color: g.color }}>{g.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${g.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.05 }}
                        className="h-full rounded-full"
                        style={{ background: g.color + (g.genre.includes('★') ? 'FF' : 'BB') }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 text-zinc-600 text-[10px] leading-relaxed">
                ★ Nhạc cách mạng & dân ca truyền thống — phân khúc khán giả Nhà hát có thể khai thác trực tiếp
              </div>
            </div>
          </Reveal>

          {/* Search volume comparison */}
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-7 h-full">
              <h3 className="text-white font-bold text-base mb-1">Lượt Tìm Kiếm Theo Loại Hình Nghệ Thuật</h3>
              <p className="text-zinc-500 text-xs mb-5">Google Keyword Stats, tháng 3/2025–2/2026 (lượt/tháng)</p>
              <div className="space-y-3">
                {compareArts.map(a => (
                  <div key={a.art}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold" style={{ color: a.art.includes('★') ? '#d0d09d' : 'white' }}>{a.art}</span>
                      <span className="text-xs font-black" style={{ color: a.color }}>{a.vol.toLocaleString()}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${a.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: a.color + (a.art.includes('★') ? 'FF' : '99') }}
                      />
                    </div>
                    <div className="text-zinc-600 text-[10px] mt-0.5">{a.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>

        {/* 2.3 Sub-section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-0.5 h-5 rounded-full" style={{ background: '#d0d09d' }} />
            <span className="text-xs font-black" style={{ color: '#d0d09d' }}>2.3</span>
            <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Social Listening & Google Search Data</span>
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Bar chart */}
          <Reveal>
            <div className="glass rounded-2xl p-8 h-full">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-white font-bold text-lg">Lượt Tìm Kiếm/Tháng</h3>
                  <p className="text-zinc-500 text-sm">Top 10 từ khóa chủ đề chèo</p>
                </div>
                <div className="flex flex-col gap-1.5 text-xs">
                  {[['#d0d09d','Ổn định'],['#3B82F6','+900% YoY'],['#10B981','Bùng nổ ∞'],['#EF4444','-90% YoY']].map(([c,l]) => (
                    <div key={l} className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
                      <span className="text-zinc-400">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} layout="vertical" margin={{ left: 8, right: 48, top: 0, bottom: 0 }}>
                  <XAxis type="number" tick={{ fill: '#52525B', fontSize: 10 }} tickFormatter={v => v >= 1000 ? `${v/1000}K` : v} />
                  <YAxis type="category" dataKey="name" tick={{ fill: '#A1A1AA', fontSize: 10 }} width={145} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="vol" radius={[0, 6, 6, 0]}>
                    {chartData.map(e => <Cell key={e.name} fill={colors[e.trend]} />)}
                    <LabelList dataKey="vol" position="right" formatter={v => v >= 1000 ? `${v/1000}K` : v} style={{ fill: '#71717A', fontSize: 10 }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Reveal>

          {/* Word cloud */}
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-white font-bold text-lg mb-1">Word Cloud — Chủ đề Chèo</h3>
              <p className="text-zinc-500 text-sm mb-6">Kích thước phản ánh volume tìm kiếm</p>
              <div className="relative h-[360px] overflow-hidden">
                {wordCloudWords.map((word, i) => (
                  <motion.span
                    key={word.text}
                    className="word-item absolute font-black"
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 0.9, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, type: 'spring', stiffness: 180, damping: 14 }}
                    style={{
                      fontSize: word.size,
                      color: word.color,
                      top: word.top,
                      left: word.left,
                      transform: `rotate(${word.rotate}deg)`,
                      textShadow: `0 0 24px ${word.color}50`,
                      transformOrigin: 'center center',
                    }}
                  >
                    {word.text}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Insight cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          {insights.map(item => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${item.bg} to-transparent border ${item.border} transition-all`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4`} style={{ background: item.color.replace('text-', '') + '20' }}>
                <item.icon size={20} className={item.color} />
              </div>
              <div className={`font-bold text-base mb-2 ${item.color}`}>{item.title}</div>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Full table */}
        <Reveal>
          <div className="glass rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-2">
              <Search size={16} style={{ color: '#d0d09d' }} />
              <h3 className="text-white font-bold">Bảng dữ liệu đầy đủ — Google Keyword Stats</h3>
              <span className="ml-2 text-xs text-zinc-500">Dữ liệu tìm kiếm về từ khóa "chèo" trên Google trong thời gian Nguồn: 01/03/2025 – 28/02/2026</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5 text-zinc-500 text-xs uppercase tracking-wider">
                    {['Từ khóa','Lượt/tháng','YoY Change','Xu hướng'].map(h => (
                      <th key={h} className={`px-6 py-3 ${h === 'Từ khóa' ? 'text-left' : 'text-center'}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {keywords.map((k, i) => (
                    <motion.tr
                      key={k.kw}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="border-b border-white/5 hover:bg-white/3 transition-colors"
                    >
                      <td className="px-6 py-3 text-white font-medium">{k.kw}</td>
                      <td className="px-6 py-3 text-center font-bold" style={{ color: '#d0d09d' }}>{k.vol.toLocaleString()}</td>
                      <td className="px-6 py-3 text-center">
                        {k.yoy === null ? <span className="text-emerald-400 font-bold">∞</span>
                          : k.yoy > 0  ? <span className="text-blue-400">+{k.yoy}%</span>
                          : k.yoy < 0  ? <span className="text-red-400">{k.yoy}%</span>
                          : <span className="text-zinc-500">0%</span>}
                      </td>
                      <td className="px-6 py-3 text-center">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          k.trend === 'explosive' ? 'bg-emerald-500/15 text-emerald-400' :
                          k.trend === 'up'        ? 'bg-blue-500/15 text-blue-400' :
                          k.trend === 'down'      ? 'bg-red-500/15 text-red-400' :
                                                    'bg-[#d0d09d]/15 text-[#d0d09d]'
                        }`}>
                          <TrendIcon trend={k.trend} />
                          {k.trend === 'explosive' ? 'Bùng nổ' : k.trend === 'up' ? 'Tăng mạnh' : k.trend === 'down' ? 'Giảm' : 'Ổn định'}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
