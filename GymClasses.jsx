import { useState } from 'react';
import { Clock, Users, Flame, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const DAYS = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

const CATEGORIES = ['全部', '力量', '有氧', '瑜伽', '搏击', 'HIIT', '普拉提'];

const CLASSES = [
  // 周一
  { day: '周一', time: '07:00', name: '晨间瑜伽', trainer: '林美玲', duration: 60, level: '初级', spots: 15, category: '瑜伽', color: 'bg-purple-500/20 border-purple-500/40 text-purple-300' },
  { day: '周一', time: '09:30', name: 'HIIT 燃脂', trainer: '王强', duration: 45, level: '中级', spots: 3, category: 'HIIT', color: 'bg-orange-500/20 border-orange-500/40 text-orange-300' },
  { day: '周一', time: '12:00', name: '午间力量', trainer: '陈刚', duration: 60, level: '中级', spots: 10, category: '力量', color: 'bg-blue-500/20 border-blue-500/40 text-blue-300' },
  { day: '周一', time: '17:30', name: '搏击健身', trainer: '刘威', duration: 60, level: '中级', spots: 8, category: '搏击', color: 'bg-red-500/20 border-red-500/40 text-red-300' },
  { day: '周一', time: '19:00', name: '普拉提塑形', trainer: '张晓', duration: 55, level: '初级', spots: 12, category: '普拉提', color: 'bg-pink-500/20 border-pink-500/40 text-pink-300' },
  { day: '周一', time: '20:30', name: '全身有氧', trainer: '李娜', duration: 45, level: '初级', spots: 20, category: '有氧', color: 'bg-green-500/20 border-green-500/40 text-green-300' },
  // 周二
  { day: '周二', time: '06:30', name: '晨跑训练', trainer: '赵杰', duration: 45, level: '初级', spots: 0, category: '有氧', color: 'bg-green-500/20 border-green-500/40 text-green-300' },
  { day: '周二', time: '10:00', name: '深度伸展', trainer: '林美玲', duration: 60, level: '初级', spots: 15, category: '瑜伽', color: 'bg-purple-500/20 border-purple-500/40 text-purple-300' },
  { day: '周二', time: '12:30', name: '核心训练', trainer: '王强', duration: 45, level: '中级', spots: 8, category: 'HIIT', color: 'bg-orange-500/20 border-orange-500/40 text-orange-300' },
  { day: '周二', time: '18:00', name: '哑铃训练', trainer: '陈刚', duration: 60, level: '进阶', spots: 6, category: '力量', color: 'bg-blue-500/20 border-blue-500/40 text-blue-300' },
  { day: '周二', time: '20:00', name: '搏击体能', trainer: '刘威', duration: 50, level: '中级', spots: 10, category: '搏击', color: 'bg-red-500/20 border-red-500/40 text-red-300' },
  // 周三
  { day: '周三', time: '07:30', name: '动感单车', trainer: '李娜', duration: 45, level: '初级', spots: 18, category: '有氧', color: 'bg-green-500/20 border-green-500/40 text-green-300' },
  { day: '周三', time: '09:00', name: 'HIIT X', trainer: '赵杰', duration: 60, level: '进阶', spots: 0, category: 'HIIT', color: 'bg-orange-500/20 border-orange-500/40 text-orange-300' },
  { day: '周三', time: '11:30', name: '冥想瑜伽', trainer: '林美玲', duration: 60, level: '初级', spots: 14, category: '瑜伽', color: 'bg-purple-500/20 border-purple-500/40 text-purple-300' },
  { day: '周三', time: '17:00', name: '自由重量', trainer: '陈刚', duration: 75, level: '进阶', spots: 5, category: '力量', color: 'bg-blue-500/20 border-blue-500/40 text-blue-300' },
  { day: '周三', time: '19:30', name: '普拉提进阶', trainer: '张晓', duration: 55, level: '中级', spots: 9, category: '普拉提', color: 'bg-pink-500/20 border-pink-500/40 text-pink-300' },
  // 周四
  { day: '周四', time: '08:00', name: '流动瑜伽', trainer: '林美玲', duration: 60, level: '中级', spots: 12, category: '瑜伽', color: 'bg-purple-500/20 border-purple-500/40 text-purple-300' },
  { day: '周四', time: '12:00', name: 'HIIT 燃脂', trainer: '王强', duration: 45, level: '中级', spots: 4, category: 'HIIT', color: 'bg-orange-500/20 border-orange-500/40 text-orange-300' },
  { day: '周四', time: '18:30', name: '搏击初级', trainer: '刘威', duration: 60, level: '初级', spots: 15, category: '搏击', color: 'bg-red-500/20 border-red-500/40 text-red-300' },
  { day: '周四', time: '20:00', name: '全身塑形', trainer: '李娜', duration: 50, level: '中级', spots: 7, category: '有氧', color: 'bg-green-500/20 border-green-500/40 text-green-300' },
  // 周五
  { day: '周五', time: '07:00', name: '早晨 HIIT', trainer: '赵杰', duration: 40, level: '进阶', spots: 2, category: 'HIIT', color: 'bg-orange-500/20 border-orange-500/40 text-orange-300' },
  { day: '周五', time: '10:30', name: '修复瑜伽', trainer: '林美玲', duration: 75, level: '初级', spots: 16, category: '瑜伽', color: 'bg-purple-500/20 border-purple-500/40 text-purple-300' },
  { day: '周五', time: '17:00', name: '力量综合', trainer: '陈刚', duration: 60, level: '进阶', spots: 6, category: '力量', color: 'bg-blue-500/20 border-blue-500/40 text-blue-300' },
  { day: '周五', time: '19:00', name: '周末搏击', trainer: '刘威', duration: 60, level: '中级', spots: 11, category: '搏击', color: 'bg-red-500/20 border-red-500/40 text-red-300' },
  // 周六
  { day: '周六', time: '08:00', name: '精华瑜伽', trainer: '林美玲', duration: 90, level: '初级', spots: 20, category: '瑜伽', color: 'bg-purple-500/20 border-purple-500/40 text-purple-300' },
  { day: '周六', time: '10:00', name: 'HIIT 挑战', trainer: '王强', duration: 60, level: '进阶', spots: 0, category: 'HIIT', color: 'bg-orange-500/20 border-orange-500/40 text-orange-300' },
  { day: '周六', time: '14:00', name: '亲子健身', trainer: '李娜', duration: 60, level: '初级', spots: 8, category: '有氧', color: 'bg-green-500/20 border-green-500/40 text-green-300' },
  { day: '周六', time: '16:30', name: '力量对决', trainer: '陈刚', duration: 75, level: '进阶', spots: 4, category: '力量', color: 'bg-blue-500/20 border-blue-500/40 text-blue-300' },
  // 周日
  { day: '周日', time: '09:00', name: '周日放松', trainer: '张晓', duration: 60, level: '初级', spots: 18, category: '普拉提', color: 'bg-pink-500/20 border-pink-500/40 text-pink-300' },
  { day: '周日', time: '11:00', name: '搏击综合', trainer: '刘威', duration: 90, level: '中级', spots: 7, category: '搏击', color: 'bg-red-500/20 border-red-500/40 text-red-300' },
  { day: '周日', time: '15:00', name: '有氧派对', trainer: '李娜', duration: 60, level: '初级', spots: 25, category: '有氧', color: 'bg-green-500/20 border-green-500/40 text-green-300' },
];

const LEVEL_COLORS = {
  初级: 'bg-green-500/20 text-green-400',
  中级: 'bg-yellow-500/20 text-yellow-400',
  进阶: 'bg-red-500/20 text-red-400',
};

export default function GymClasses() {
  const [selectedDay, setSelectedDay] = useState('周一');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filtered = CLASSES.filter(
    (c) =>
      c.day === selectedDay &&
      (selectedCategory === '全部' || c.category === selectedCategory)
  );

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Header */}
      <div className="pt-28 pb-10 text-center px-4">
        <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
          本周课程
        </p>
        <h1 className="text-5xl font-black mb-4">课程表</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          每天超过20节专业课程，总有一节适合您。立即预约，开启燃烧之旅！
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Day Selector */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`shrink-0 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                selectedDay === day
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 text-gray-500 shrink-0" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm transition-all border ${
                selectedCategory === cat
                  ? 'bg-white/10 border-white/40 text-white'
                  : 'border-white/10 text-gray-500 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">该时段暂无此类课程</p>
            <p className="text-sm mt-2">请尝试其他分类或日期</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((cls, i) => (
                <div
                  key={i}
                  className={`border ${cls.color} rounded-xl p-5 hover:scale-[1.01] transition-all`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-white font-bold text-lg">{cls.name}</p>
                      <p className="text-gray-400 text-sm mt-0.5">
                        教练：{cls.trainer}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${LEVEL_COLORS[cls.level]}`}>
                      {cls.level}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {cls.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5" />
                      {cls.duration}分钟
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {cls.spots === 0 ? (
                        <span className="text-red-400">已满</span>
                      ) : (
                        <span>{cls.spots} 名额</span>
                      )}
                    </span>
                  </div>

                  {cls.spots === 0 ? (
                    <button
                      disabled
                      className="w-full py-2 rounded-lg bg-white/5 text-gray-600 text-sm cursor-not-allowed"
                    >
                      名额已满
                    </button>
                  ) : (
                    <Link
                      to="/gym/membership"
                      className="block w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm text-center font-medium transition-colors"
                    >
                      预约课程
                    </Link>
                  )}
                </div>
              ))}
          </div>
        )}

        {/* Note */}
        <div className="mt-10 bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
          <p className="text-orange-300 font-medium mb-1">📌 预约须知</p>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• 课程预约需成为正式会员，<Link to="/gym/membership" className="text-orange-400 hover:underline">立即加入</Link></li>
            <li>• 请提前10分钟到达场馆，逾期15分钟视为缺席</li>
            <li>• 可在课程开始前2小时内免费取消预约</li>
            <li>• 如课程显示"已满"，可加入等待名单</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
