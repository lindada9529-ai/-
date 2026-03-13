import { Link } from 'react-router-dom';
import {
  ChevronRight, Dumbbell, Users, Trophy, Clock, Star,
  Zap, Heart, Shield, ArrowRight, Play, Check
} from 'lucide-react';

const STATS = [
  { number: '5000+', label: '活跃会员' },
  { number: '50+', label: '专业教练' },
  { number: '100+', label: '课程种类' },
  { number: '10年', label: '行业经验' },
];

const FEATURES = [
  {
    icon: Dumbbell,
    title: '专业器械',
    desc: '配备进口高端健身器械，涵盖力量、有氧全系列设备，满足各种训练需求。',
    color: 'from-orange-500/20 to-red-500/10',
    border: 'border-orange-500/30',
    iconColor: 'text-orange-500',
  },
  {
    icon: Users,
    title: '明星教练',
    desc: '50+ 持证专业教练，拥有国际认证资质，为您提供个性化训练计划。',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Trophy,
    title: '团体课程',
    desc: '每天超过20节团体课程，HIIT、瑜伽、搏击操等多样选择，活力互动。',
    color: 'from-purple-500/20 to-pink-500/10',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Clock,
    title: '全天开放',
    desc: '工作日6:00-23:00，周末7:00-22:00，灵活营业时间适配您的生活节奏。',
    color: 'from-green-500/20 to-teal-500/10',
    border: 'border-green-500/30',
    iconColor: 'text-green-400',
  },
  {
    icon: Heart,
    title: '营养方案',
    desc: '专业营养师为您定制膳食计划，科学搭配，让训练效果事半功倍。',
    color: 'from-rose-500/20 to-pink-500/10',
    border: 'border-rose-500/30',
    iconColor: 'text-rose-400',
  },
  {
    icon: Shield,
    title: '安全保障',
    desc: '全场24小时安保监控，专业救护设备，让您运动更安心、更放心。',
    color: 'from-amber-500/20 to-yellow-500/10',
    border: 'border-amber-500/30',
    iconColor: 'text-amber-400',
  },
];

const TESTIMONIALS = [
  {
    name: '李明',
    role: '上班族 · 会员2年',
    text: '加入IRONFIT后，我在6个月内减重15公斤！教练非常专业，制定的计划完全符合我的需求，强烈推荐！',
    rating: 5,
    avatar: 'LM',
    color: 'bg-orange-500',
  },
  {
    name: '王小燕',
    role: '学生 · 会员1年',
    text: '这里的团体课太棒了！HIIT课程让我既能减脂又能认识志同道合的朋友，每次来都很期待！',
    rating: 5,
    avatar: 'WX',
    color: 'bg-purple-500',
  },
  {
    name: '张建国',
    role: '企业家 · 会员3年',
    text: '器械设施一流，私教服务超棒。经常出差的我选择了年卡，在城市各分店都能健身，非常方便！',
    rating: 5,
    avatar: 'ZJ',
    color: 'bg-blue-500',
  },
];

const PROGRAMS = [
  { name: '力量训练', icon: '🏋️', desc: '增肌塑形' },
  { name: '有氧燃脂', icon: '🔥', desc: '减脂塑身' },
  { name: '瑜伽冥想', icon: '🧘', desc: '身心平衡' },
  { name: '搏击操', icon: '🥊', desc: '释放压力' },
  { name: '普拉提', icon: '💪', desc: '柔韧塑形' },
  { name: 'HIIT 训练', icon: '⚡', desc: '高效燃烧' },
];

export default function GymHome() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">上海首家 24H 智能健身房</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
              锻造你的
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                极限体魄
              </span>
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed mb-8 max-w-2xl">
              专业器械 · 明星教练 · 科学方案。无论您是健身新手还是资深运动达人，IRONFIT 都能帮您突破极限，成就更好的自己。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/gym/membership"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                免费试用7天 <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/gym/classes"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all hover:-translate-y-0.5"
              >
                <Play className="w-4 h-4" /> 查看课程表
              </Link>
            </div>

            {/* Quick Trust Signals */}
            <div className="flex flex-wrap items-center gap-6">
              {['无合同束缚', '随时可取消', '首月半价优惠'].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-orange-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-white/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-orange-400 mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
              为什么选择我们
            </p>
            <h2 className="text-4xl font-black mb-4">全方位健身体验</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              我们致力于为每位会员提供专业、安全、愉悦的健身环境，助您实现健康生活目标。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className={`bg-gradient-to-br ${f.color} border ${f.border} rounded-2xl p-6 hover:scale-[1.02] transition-transform cursor-default`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-black/30 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${f.iconColor}`} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-white/2 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
              热门项目
            </p>
            <h2 className="text-4xl font-black mb-4">多样化训练课程</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROGRAMS.map((p) => (
              <Link
                key={p.name}
                to="/gym/classes"
                className="group bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/40 rounded-2xl p-5 text-center transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="text-white font-semibold text-sm mb-1">{p.name}</div>
                <div className="text-gray-500 text-xs">{p.desc}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/gym/classes"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
            >
              查看完整课程表 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
              会员心声
            </p>
            <h2 className="text-4xl font-black mb-4">真实的蜕变故事</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-12 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
            <div className="relative">
              <h2 className="text-4xl font-black text-white mb-4">
                今天就开始改变
              </h2>
              <p className="text-orange-100 text-lg mb-8">
                注册即享首月5折优惠 · 7天无理由退款保障
              </p>
              <Link
                to="/gym/membership"
                className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition-colors text-lg"
              >
                立即加入 <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
