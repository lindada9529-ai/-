import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check, MessageSquare } from 'lucide-react';

const INFO_CARDS = [
  {
    icon: MapPin,
    title: '健身房地址',
    lines: ['上海市浦东新区陆家嘴环路100号', '健身广场 B1层（近2号线陆家嘴站）'],
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
  {
    icon: Phone,
    title: '联系电话',
    lines: ['客服热线：400-888-8888', '微信号：IRONFIT-GYM'],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Mail,
    title: '电子邮件',
    lines: ['会员服务：hello@ironfit.cn', '合作招募：join@ironfit.cn'],
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
  },
  {
    icon: Clock,
    title: '营业时间',
    lines: ['周一至周五：06:00 - 23:00', '周六及周日：07:00 - 22:00'],
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
];

export default function GymContact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field, val) => setForm((prev) => ({ ...prev, [field]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Header */}
      <div className="pt-28 pb-12 text-center px-4">
        <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
          联系我们
        </p>
        <h1 className="text-5xl font-black mb-4">随时为您服务</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          有任何问题或建议，请随时联系我们。我们的客服团队将在24小时内回复您。
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {INFO_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className={`border ${card.bg} rounded-xl p-5`}>
                <Icon className={`w-8 h-8 ${card.color} mb-3`} />
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="text-gray-400 text-sm">{line}</p>
                ))}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-orange-400" />
              发送消息
            </h2>
            <p className="text-gray-400 text-sm mb-6">填写表单，我们将尽快联系您</p>

            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">消息已发送！</h3>
                <p className="text-gray-400 text-sm">感谢您的联系，我们将在24小时内回复您。</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                  className="mt-5 text-orange-400 hover:text-orange-300 text-sm transition-colors"
                >
                  再次发送
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-1.5 block">姓名 *</label>
                    <input
                      required
                      type="text"
                      placeholder="您的姓名"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-1.5 block">电话</label>
                    <input
                      type="tel"
                      placeholder="手机号码"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-1.5 block">邮箱 *</label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-1.5 block">主题</label>
                  <select
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="" className="bg-gray-900">请选择主题</option>
                    <option value="membership" className="bg-gray-900">会员咨询</option>
                    <option value="class" className="bg-gray-900">课程预约</option>
                    <option value="trainer" className="bg-gray-900">私教咨询</option>
                    <option value="complaint" className="bg-gray-900">意见反馈</option>
                    <option value="cooperation" className="bg-gray-900">商务合作</option>
                    <option value="other" className="bg-gray-900">其他问题</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-1.5 block">消息内容 *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="请详细描述您的问题或需求..."
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      发送中...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      发送消息
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map + Additional Info */}
          <div className="space-y-5">
            {/* Mock Map */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-64 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-full h-full opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="absolute flex flex-col items-center">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-xl shadow-orange-500/50">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="mt-2 bg-black/80 rounded-lg px-3 py-1 text-white text-xs border border-orange-500/40">
                    IRONFIT 健身房
                  </div>
                </div>
              </div>
              <div className="absolute bottom-3 right-3">
                <a
                  href="#"
                  className="bg-black/70 text-orange-400 text-xs px-3 py-1.5 rounded-lg border border-white/10 hover:bg-black/90 transition-colors"
                >
                  在地图中打开 →
                </a>
              </div>
            </div>

            {/* How to Reach */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">交通指引</h3>
              <div className="space-y-3">
                {[
                  { icon: '🚇', title: '地铁', desc: '2号线陆家嘴站A出口，步行约5分钟' },
                  { icon: '🚌', title: '公交', desc: '陆家嘴站下，可乘829、976、张江2路' },
                  { icon: '🚗', title: '自驾', desc: '地下停车场提供300个停车位（前2小时免费）' },
                ].map((t) => (
                  <div key={t.title} className="flex items-start gap-3">
                    <span className="text-xl">{t.icon}</span>
                    <div>
                      <p className="text-white text-sm font-medium">{t.title}</p>
                      <p className="text-gray-400 text-sm">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trial CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-center">
              <h3 className="text-white font-bold text-xl mb-2">想先亲身体验？</h3>
              <p className="text-orange-100 text-sm mb-4">
                预约免费体验课，无需付款，来感受 IRONFIT 的魅力！
              </p>
              <a
                href="tel:400-888-8888"
                className="inline-block bg-white text-orange-600 font-bold px-6 py-2.5 rounded-xl hover:bg-orange-50 transition-colors"
              >
                📞 立即电话预约
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
