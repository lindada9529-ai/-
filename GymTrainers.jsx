import { useState } from 'react';
import { Star, Award, Clock, Users, Instagram, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const TRAINERS = [
  {
    id: 1,
    name: '陈 刚',
    title: '首席力量训练教练',
    specialty: ['力量训练', '体能塑形', '运动康复'],
    experience: 12,
    rating: 4.9,
    students: 320,
    sessions: 5200,
    avatar: 'CG',
    color: 'from-orange-600 to-red-700',
    cert: ['NSCA-CPT', 'CSCS', 'FMS'],
    bio: '曾任国家级举重队体能教练，擅长科学力量训练方法，帮助超过300名会员实现增肌塑形目标。注重动作模式和力量基础的建立，让训练既安全又高效。',
    classes: ['午间力量', '自由重量', '力量综合'],
  },
  {
    id: 2,
    name: '林 美玲',
    title: '资深瑜伽导师',
    specialty: ['哈他瑜伽', '流动瑜伽', '冥想正念'],
    experience: 8,
    rating: 5.0,
    students: 280,
    sessions: 4100,
    avatar: 'LM',
    color: 'from-purple-600 to-pink-700',
    cert: ['RYT-500', 'YAI', '正念冥想认证'],
    bio: '印度里希克什深修返回后创立独特的"动禅"瑜伽体系，融合东方哲学与现代运动科学。擅长帮助都市人群缓解压力，在繁忙生活中找到身心平衡。',
    classes: ['晨间瑜伽', '流动瑜伽', '冥想瑜伽'],
  },
  {
    id: 3,
    name: '王 强',
    title: 'HIIT 训练专家',
    specialty: ['HIIT', '代谢训练', '减脂塑身'],
    experience: 7,
    rating: 4.8,
    students: 250,
    sessions: 3800,
    avatar: 'WQ',
    color: 'from-yellow-600 to-orange-700',
    cert: ['ACE-CPT', 'HIIT Level 3', '运动营养师'],
    bio: '前职业铁人三项运动员，深度研究高强度间歇训练对人体代谢的影响。独创的"IGNITE方法"被证明能在12周内帮助学员平均减脂8公斤，全网拥有50万健身粉丝。',
    classes: ['HIIT 燃脂', '核心训练', 'HIIT X'],
  },
  {
    id: 4,
    name: '刘 威',
    title: '搏击健身教练',
    specialty: ['泰拳', 'MMA体能', '搏击操'],
    experience: 10,
    rating: 4.9,
    students: 190,
    sessions: 4500,
    avatar: 'LW',
    color: 'from-red-600 to-rose-800',
    cert: ['WBC Muay Thai', 'ISSA', '运动急救'],
    bio: '前职业泰拳选手，8年搏击健身教学经验。将竞技格斗技术与健身相结合，让搏击训练更安全、更有趣。课堂充满活力，深受会员喜爱，年年荣获"最受欢迎教练"称号。',
    classes: ['搏击健身', '周末搏击', '搏击综合'],
  },
  {
    id: 5,
    name: '张 晓',
    title: '普拉提与康复教练',
    specialty: ['临床普拉提', '姿势矫正', '产后恢复'],
    experience: 6,
    rating: 4.9,
    students: 160,
    sessions: 2900,
    avatar: 'ZX',
    color: 'from-pink-600 to-fuchsia-700',
    cert: ['STOTT Pilates', '物理治疗助理', '女性健康认证'],
    bio: '拥有运动医学背景，专注于核心力量与姿势改善。尤其擅长产后恢复和慢性腰背疼痛的运动康复，曾帮助数十名运动损伤患者重返运动场。',
    classes: ['普拉提塑形', '普拉提进阶', '周日放松'],
  },
  {
    id: 6,
    name: '李 娜',
    title: '有氧健身教练',
    specialty: ['动感单车', '有氧舞蹈', '功能性训练'],
    experience: 5,
    rating: 4.7,
    students: 220,
    sessions: 2600,
    avatar: 'LN',
    color: 'from-green-600 to-teal-700',
    cert: ['ACE Group Fitness', 'SPINNING®', '儿童健身认证'],
    bio: '毕业于上海体育大学，擅长调动课堂氛围，让每位学员都能在音乐与运动中享受减压的乐趣。主理的"有氧派对"课程成为本馆最受欢迎的团体课之一。',
    classes: ['全身有氧', '动感单车', '有氧派对'],
  },
];

export default function GymTrainers() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Header */}
      <div className="pt-28 pb-12 text-center px-4">
        <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
          专业团队
        </p>
        <h1 className="text-5xl font-black mb-4">明星教练团队</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          每位教练都经过严格筛选，拥有国际认证资质和丰富教学经验，为您的健身之旅保驾护航。
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:scale-[1.01] cursor-pointer"
              onClick={() => setSelected(trainer)}
            >
              {/* Avatar Area */}
              <div className={`bg-gradient-to-br ${trainer.color} p-8 text-center`}>
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl font-black text-white">
                  {trainer.avatar}
                </div>
                <h3 className="text-white font-bold text-xl">{trainer.name}</h3>
                <p className="text-white/70 text-sm mt-1">{trainer.title}</p>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {trainer.specialty.map((s) => (
                    <span
                      key={s}
                      className="bg-white/5 border border-white/10 text-gray-400 text-xs px-2.5 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="flex items-center justify-center gap-1 text-yellow-400 mb-0.5">
                      <Star className="w-3.5 h-3.5 fill-yellow-400" />
                      <span className="font-bold text-sm">{trainer.rating}</span>
                    </div>
                    <p className="text-gray-500 text-xs">评分</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="font-bold text-sm text-white">{trainer.experience}年</div>
                    <p className="text-gray-500 text-xs">经验</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="font-bold text-sm text-white">{trainer.students}+</div>
                    <p className="text-gray-500 text-xs">学员</p>
                  </div>
                </div>

                <button
                  className="w-full py-2.5 rounded-xl bg-white/8 hover:bg-white/15 text-white text-sm font-medium transition-colors border border-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(trainer);
                  }}
                >
                  查看详情 & 预约
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Trainer CTA */}
        <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 text-center">
          <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">加入我们的教练团队</h3>
          <p className="text-gray-400 mb-5 max-w-md mx-auto">
            我们持续招募优秀的健身教练。如果您拥有专业资质和热情，欢迎投递简历！
          </p>
          <Link
            to="/gym/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            申请加入
          </Link>
        </div>
      </div>

      {/* Trainer Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-2xl w-full border border-white/10 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selected.color} p-8 relative`}>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl font-black text-white shrink-0">
                  {selected.avatar}
                </div>
                <div>
                  <h2 className="text-white font-black text-2xl">{selected.name}</h2>
                  <p className="text-white/80 text-sm mt-1">{selected.title}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-semibold">{selected.rating}</span>
                    <span className="text-white/60 text-sm">· {selected.students}+ 学员 · {selected.sessions}+ 课时</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5">
              {/* Bio */}
              <div>
                <h3 className="text-white font-semibold mb-2">教练简介</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{selected.bio}</p>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-orange-400" /> 专业认证
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selected.cert.map((c) => (
                    <span key={c} className="bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs px-3 py-1.5 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Classes */}
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" /> 授课课程
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selected.classes.map((c) => (
                    <span key={c} className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <Users className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                  <div className="text-white font-bold">{selected.students}+</div>
                  <div className="text-gray-500 text-xs">服务学员</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <Clock className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-bold">{selected.sessions}+</div>
                  <div className="text-gray-500 text-xs">授课课时</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <Award className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-bold">{selected.experience}年</div>
                  <div className="text-gray-500 text-xs">教学经验</div>
                </div>
              </div>

              <Link
                to="/gym/membership"
                className="block w-full text-center bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3.5 rounded-xl transition-colors"
                onClick={() => setSelected(null)}
              >
                预约私教课
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
