import { useState } from 'react';
import { Check, X, Zap, Star, ChevronDown, ChevronUp } from 'lucide-react';
import PaymentModal from '../../components/gym/PaymentModal';

const PLANS = [
  {
    id: 'basic',
    name: '基础版',
    price: 198,
    originalPrice: 298,
    period: '月',
    badge: null,
    description: '入门健身，掌握基础',
    color: 'border-white/20',
    headerColor: 'bg-white/5',
    features: [
      { label: '健身区域无限次使用', included: true },
      { label: '有氧区域无限次使用', included: true },
      { label: '淋浴更衣室', included: true },
      { label: '储物柜 (每日)', included: true },
      { label: '团体课程 (每月4次)', included: true },
      { label: '营养咨询 (每月1次)', included: false },
      { label: '私人教练课 (每月2节)', included: false },
      { label: '全国门店通用', included: false },
      { label: '专属会员礼遇', included: false },
    ],
  },
  {
    id: 'pro',
    name: '专业版',
    price: 398,
    originalPrice: 598,
    period: '月',
    badge: '最受欢迎',
    description: '全面提升，突破极限',
    color: 'border-orange-500',
    headerColor: 'bg-gradient-to-br from-orange-500/20 to-red-500/10',
    features: [
      { label: '健身区域无限次使用', included: true },
      { label: '有氧区域无限次使用', included: true },
      { label: '淋浴更衣室', included: true },
      { label: '储物柜 (专属)', included: true },
      { label: '团体课程 (无限次)', included: true },
      { label: '营养咨询 (每月2次)', included: true },
      { label: '私人教练课 (每月4节)', included: true },
      { label: '全国门店通用', included: false },
      { label: '专属会员礼遇', included: false },
    ],
  },
  {
    id: 'elite',
    name: '精英版',
    price: 698,
    originalPrice: 998,
    period: '月',
    badge: '顶级服务',
    description: '无限可能，尊享体验',
    color: 'border-purple-500',
    headerColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/10',
    features: [
      { label: '健身区域无限次使用', included: true },
      { label: '有氧区域无限次使用', included: true },
      { label: '淋浴更衣室', included: true },
      { label: '储物柜 (专属豪华)', included: true },
      { label: '团体课程 (无限次)', included: true },
      { label: '营养咨询 (每月4次)', included: true },
      { label: '私人教练课 (每月8节)', included: true },
      { label: '全国门店通用', included: true },
      { label: '专属会员礼遇', included: true },
    ],
  },
];

const FAQS = [
  {
    q: '可以随时取消会员吗？',
    a: '是的，您可以随时取消会员资格，无需任何违约金。取消后，您仍可使用至当前付费周期结束。',
  },
  {
    q: '首次体验有什么优惠？',
    a: '新会员注册即可享受首月5折优惠，同时提供7天免费体验卡，让您充分了解我们的服务。',
  },
  {
    q: '支持哪些付款方式？',
    a: '我们支持银行卡（Visa/Mastercard/银联）、支付宝、微信支付等多种付款方式，安全便捷。',
  },
  {
    q: '私人教练课如何预约？',
    a: '成为会员后，可通过APP或到前台直接预约。专业版和精英版会员享有优先预约权。',
  },
  {
    q: '健身房的设施有哪些？',
    a: '我们配备进口器械，包括史密斯架、哑铃区、综合训练器、跑步机、划船机、动感单车等，总面积超过3000平方米。',
  },
  {
    q: '年卡是否有更多折扣？',
    a: '购买年卡可享受额外8折优惠，相当于全年节省超过2个月费用。可在前台或APP内购买。',
  },
];

export default function GymMembership() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(null);

  const getPrice = (plan) => {
    if (billingPeriod === 'yearly') return Math.round(plan.price * 0.8);
    return plan.price;
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Header */}
      <div className="pt-28 pb-12 text-center px-4">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
          <Zap className="w-3.5 h-3.5 text-orange-400" />
          <span className="text-orange-400 text-sm font-medium">首月享5折优惠</span>
        </div>
        <h1 className="text-5xl font-black mb-4">选择您的会员方案</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          无论您的健身目标如何，我们都有适合您的方案。随时升级或取消。
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
            按月付款
          </span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              billingPeriod === 'yearly' ? 'bg-orange-500' : 'bg-white/20'
            }`}
          >
            <div
              className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                billingPeriod === 'yearly' ? 'left-8' : 'left-1'
              }`}
            />
          </button>
          <span className={`text-sm flex items-center gap-1.5 ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-500'}`}>
            按年付款
            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full border border-green-500/30">
              省20%
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative border-2 ${plan.color} rounded-2xl overflow-hidden transition-all hover:scale-[1.01] ${
                plan.badge === '最受欢迎' ? 'shadow-xl shadow-orange-500/20' : ''
              }`}
            >
              {plan.badge && (
                <div className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                  plan.badge === '最受欢迎'
                    ? 'bg-orange-500 text-white'
                    : 'bg-purple-500 text-white'
                }`}>
                  {plan.badge === '最受欢迎' && <Star className="w-3 h-3 inline mr-1" />}
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className={`${plan.headerColor} p-6 border-b border-white/10`}>
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">¥{getPrice(plan)}</span>
                  <span className="text-gray-400 text-sm">/{billingPeriod === 'yearly' ? '月（年付）' : '月'}</span>
                </div>
                {plan.originalPrice && (
                  <p className="text-gray-500 text-sm mt-1 line-through">
                    原价 ¥{plan.originalPrice}/月
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="p-6 bg-white/2">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {f.included ? (
                        <Check className="w-4 h-4 text-green-400 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-600 shrink-0" />
                      )}
                      <span className={`text-sm ${f.included ? 'text-gray-300' : 'text-gray-600'}`}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan({ ...plan, price: getPrice(plan) })}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${
                    plan.id === 'pro'
                      ? 'bg-orange-500 hover:bg-orange-400 text-white hover:shadow-lg hover:shadow-orange-500/30'
                      : plan.id === 'elite'
                      ? 'bg-purple-500 hover:bg-purple-400 text-white hover:shadow-lg hover:shadow-purple-500/30'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {plan.badge === '最受欢迎' ? '立即加入' : '选择此方案'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Comparison Table */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">方案详细对比</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium w-1/2">功能</th>
                  {PLANS.map((p) => (
                    <th key={p.id} className="py-3 px-4 text-center text-white font-bold">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PLANS[0].features.map((f, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-3 px-4 text-gray-300 text-sm">{f.label}</td>
                    {PLANS.map((plan) => (
                      <td key={plan.id} className="py-3 px-4 text-center">
                        {plan.features[i].included ? (
                          <Check className="w-4 h-4 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-gray-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="py-4 px-4 text-white font-semibold">每月价格</td>
                  {PLANS.map((plan) => (
                    <td key={plan.id} className="py-4 px-4 text-center font-bold text-lg">
                      <span className={
                        plan.id === 'pro' ? 'text-orange-400' :
                        plan.id === 'elite' ? 'text-purple-400' :
                        'text-white'
                      }>
                        ¥{getPrice(plan)}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">常见问题</h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-medium">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-orange-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {selectedPlan && (
        <PaymentModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
          onSuccess={() => setSelectedPlan(null)}
        />
      )}
    </div>
  );
}
