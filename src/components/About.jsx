'use client';
import { motion } from 'framer-motion';
import { Building2, Award, Users, Trophy } from 'lucide-react';

const stats = [
  { label: "سنوات خبرة", value: "+14", icon: Trophy },
  { label: "مشروع مكتمل", value: "+50", icon: Building2 },
  { label: "عميل سعيد", value: "+1000", icon: Users },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-accent"></span>
              <span className="text-accent font-medium tracking-wide">قصتنا</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
              شركة مساكن الرفاهية <br />
              <span className="text-accent">للتطوير العقاري</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                تأسست شركة مساكن الرفاهية في عام 2010م، لتكون علامة فارقة في عالم التطوير العقاري بالمملكة. نتميز برؤية عصرية تجمع بين جودة البناء وجمال التصميم، لنقدم حلولاً سكنية واستثمارية ترتقي بجودة الحياة.
              </p>
              <p>
                نفخر بسجل حافل من الإنجازات والنمو المستمر، حيث نضع رضا عملائنا في مقدمة أولوياتنا، ونلتزم بأعلى معايير الاستدامة والابتكار في كل مشروع نحمل توقيعه.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-lg border border-gray-100">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-primary font-medium">جودة معتمدة</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-lg border border-gray-100">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-primary font-medium">فريق محترف</span>
              </div>
            </div>
          </motion.div>

          {/* Stats & Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 ${index === 2 ? 'col-span-2 md:col-span-1 md:translate-x-1/2 lg:translate-x-0' : ''}`}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-3xl font-bold text-primary mb-2 block">{stat.value}</span>
                  <span className="text-gray-500 text-sm">{stat.label}</span>
                </div>
              ))}
              
              {/* Decorative Box */}
              <div className="bg-primary p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <h4 className="text-xl font-bold mb-2 relative z-10">رؤيتنا</h4>
                <p className="text-white/80 text-sm relative z-10">
                  أن نكون الخيار الأول للباحثين عن التميز والرفاهية في السوق العقاري.
                </p>
              </div>
            </div>

            {/* Back Pattern */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent/10 rounded-full animate-spin-slow opacity-50" />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-accent/5 rounded-full animate-spin-slow opacity-30" style={{ animationDirection: 'reverse' }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
