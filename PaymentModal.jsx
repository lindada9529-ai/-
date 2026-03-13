import { useState } from 'react';
import { X, CreditCard, Check, Shield, Lock, Loader2, QrCode, Smartphone } from 'lucide-react';

const PAYMENT_METHODS = [
  { id: 'card', label: '银行卡', icon: CreditCard },
  { id: 'alipay', label: '支付宝', icon: QrCode },
  { id: 'wechat', label: '微信支付', icon: Smartphone },
];

export default function PaymentModal({ plan, onClose, onSuccess }) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [step, setStep] = useState('form'); // form | processing | success
  const [form, setForm] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const formatCardNumber = (val) =>
    val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();

  const formatExpiry = (val) => {
    const clean = val.replace(/\D/g, '').slice(0, 4);
    return clean.length >= 2 ? `${clean.slice(0, 2)}/${clean.slice(2)}` : clean;
  };

  const handleChange = (field, value) => {
    let formatted = value;
    if (field === 'cardNumber') formatted = formatCardNumber(value);
    if (field === 'expiry') formatted = formatExpiry(value);
    if (field === 'cvv') formatted = value.replace(/\D/g, '').slice(0, 3);
    setForm((prev) => ({ ...prev, [field]: formatted }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.email.includes('@')) errs.email = '请输入有效邮箱';
    if (paymentMethod === 'card') {
      if (form.name.trim().length < 2) errs.name = '请输入持卡人姓名';
      if (form.cardNumber.replace(/\s/g, '').length !== 16) errs.cardNumber = '请输入16位卡号';
      if (form.expiry.length < 5) errs.expiry = '请输入有效期';
      if (form.cvv.length < 3) errs.cvv = '请输入CVV';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep('processing');
    await new Promise((r) => setTimeout(r, 2200));
    setStep('success');
  };

  const monthlyPrice = plan?.price;
  const tax = Math.round(monthlyPrice * 0.06);
  const total = monthlyPrice + tax;

  if (step === 'success') {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full text-center border border-white/10">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
            <Check className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">支付成功！</h2>
          <p className="text-gray-400 mb-1">
            欢迎加入 IRONFIT 健身房
          </p>
          <p className="text-orange-400 font-semibold text-lg mb-6">{plan?.name} 会员</p>
          <div className="bg-white/5 rounded-xl p-4 mb-6 text-left">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">订单号</span>
              <span className="text-white font-mono">IF{Date.now().toString().slice(-8)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">会员类型</span>
              <span className="text-white">{plan?.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">实付金额</span>
              <span className="text-orange-400 font-semibold">¥{total}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-6">确认邮件已发送至您的邮箱，请查收。</p>
          <button
            onClick={onSuccess || onClose}
            className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            开始我的健身之旅
          </button>
        </div>
      </div>
    );
  }

  if (step === 'processing') {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-2xl p-10 max-w-sm w-full text-center border border-white/10">
          <Loader2 className="w-14 h-14 text-orange-500 animate-spin mx-auto mb-5" />
          <h2 className="text-xl font-bold text-white mb-2">处理中...</h2>
          <p className="text-gray-400 text-sm">请稍候，正在安全处理您的支付</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-2xl w-full border border-white/10 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-white font-bold text-xl">完成支付</h2>
            <p className="text-gray-400 text-sm mt-0.5">安全加密结账</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {/* Order Summary */}
          <div className="md:col-span-2 bg-white/3 p-6 border-r border-white/10">
            <h3 className="text-white font-semibold mb-4">订单摘要</h3>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-xl p-4 border border-orange-500/30 mb-4">
              <p className="text-orange-400 text-xs font-medium uppercase tracking-wider mb-1">
                {plan?.name}
              </p>
              <p className="text-white text-2xl font-bold">
                ¥{plan?.price}
                <span className="text-gray-400 text-sm font-normal">/月</span>
              </p>
              {plan?.originalPrice && (
                <p className="text-gray-500 text-sm line-through">原价 ¥{plan.originalPrice}</p>
              )}
            </div>
            <div className="space-y-2 text-sm">
              {plan?.features?.slice(0, 5).map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  <span className="text-gray-300">{f}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">套餐费用</span>
                <span className="text-white">¥{monthlyPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">服务税 (6%)</span>
                <span className="text-white">¥{tax}</span>
              </div>
              <div className="flex justify-between font-semibold text-base pt-2 border-t border-white/10">
                <span className="text-white">合计</span>
                <span className="text-orange-400">¥{total}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-gray-500 text-xs">
              <Shield className="w-3.5 h-3.5" />
              <span>256位SSL加密保护</span>
            </div>
          </div>

          {/* Payment Form */}
          <div className="md:col-span-3 p-6">
            {/* Payment Method Selector */}
            <div className="flex gap-2 mb-5">
              {PAYMENT_METHODS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setPaymentMethod(id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                    paymentMethod === id
                      ? 'bg-orange-500/20 border-orange-500 text-orange-400'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="text-gray-400 text-sm mb-1.5 block">邮箱地址</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full bg-white/5 border rounded-lg px-3 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {paymentMethod === 'card' && (
                <>
                  <div>
                    <label className="text-gray-400 text-sm mb-1.5 block">持卡人姓名</label>
                    <input
                      type="text"
                      placeholder="张三"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full bg-white/5 border rounded-lg px-3 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-1.5 block">
                      <span className="flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5" />
                        卡号
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={form.cardNumber}
                      onChange={(e) => handleChange('cardNumber', e.target.value)}
                      className={`w-full bg-white/5 border rounded-lg px-3 py-2.5 text-white placeholder-gray-600 text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors ${
                        errors.cardNumber ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-400 text-xs mt-1">{errors.cardNumber}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-gray-400 text-sm mb-1.5 block">有效期</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={form.expiry}
                        onChange={(e) => handleChange('expiry', e.target.value)}
                        className={`w-full bg-white/5 border rounded-lg px-3 py-2.5 text-white placeholder-gray-600 text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors ${
                          errors.expiry ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.expiry && (
                        <p className="text-red-400 text-xs mt-1">{errors.expiry}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm mb-1.5 flex items-center gap-1">
                        CVV
                        <Lock className="w-3 h-3 text-gray-500" />
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        value={form.cvv}
                        onChange={(e) => handleChange('cvv', e.target.value)}
                        className={`w-full bg-white/5 border rounded-lg px-3 py-2.5 text-white placeholder-gray-600 text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors ${
                          errors.cvv ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.cvv && <p className="text-red-400 text-xs mt-1">{errors.cvv}</p>}
                    </div>
                  </div>
                </>
              )}

              {(paymentMethod === 'alipay' || paymentMethod === 'wechat') && (
                <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
                  <div className="w-32 h-32 bg-white rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <div className="grid grid-cols-5 gap-0.5">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-5 h-5 rounded-sm ${
                            [0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,6,12,18].includes(i)
                              ? 'bg-gray-800'
                              : 'bg-white'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-white font-medium mb-1">
                    扫码支付 ¥{total}
                  </p>
                  <p className="text-gray-500 text-xs">
                    使用{paymentMethod === 'alipay' ? '支付宝' : '微信'}扫描上方二维码完成支付
                  </p>
                  <p className="text-orange-400 text-xs mt-2 animate-pulse">等待扫码中...</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                立即支付 ¥{total}
              </button>

              <p className="text-gray-600 text-xs text-center">
                点击支付即表示您同意我们的服务条款和隐私政策
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
