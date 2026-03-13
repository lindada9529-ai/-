import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Instagram, Youtube, Facebook } from 'lucide-react';

export default function GymFooter() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/gym" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                IRON<span className="text-orange-500">FIT</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              专业健身，改变生活。我们提供最优质的健身环境和专业教练团队，帮助您实现健身目标。
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速导航</h3>
            <ul className="space-y-2">
              {[
                { label: '首页', href: '/gym' },
                { label: '会员方案', href: '/gym/membership' },
                { label: '课程表', href: '/gym/classes' },
                { label: '教练团队', href: '/gym/trainers' },
                { label: '联系我们', href: '/gym/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">服务项目</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>私人教练课</li>
              <li>团体课程</li>
              <li>力量训练</li>
              <li>有氧健身</li>
              <li>瑜伽 / 普拉提</li>
              <li>营养咨询</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">上海市浦东新区陆家嘴环路100号 健身广场B1</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-gray-400 text-sm">400-888-8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-gray-400 text-sm">hello@ironfit.cn</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-white/5 rounded-lg">
              <p className="text-gray-400 text-xs">营业时间</p>
              <p className="text-white text-sm font-medium mt-1">周一至周五 06:00 - 23:00</p>
              <p className="text-white text-sm font-medium">周末 07:00 - 22:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2024 IRONFIT 健身房. 保留所有权利.</p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-gray-300 transition-colors">服务条款</a>
            <a href="#" className="hover:text-gray-300 transition-colors">退款政策</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
