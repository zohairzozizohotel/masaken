'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Star, Award, TrendingUp, Flag, Target, Lightbulb } from 'lucide-react';

const timelineData = [
  { 
    year: "2010", 
    title: "التأسيس والانطلاق", 
    description: "تأسيس شركة مساكن الرفاهية في جدة، وبدء رحلتنا برؤية طموحة لإعادة تعريف مفهوم السكن الراقي.", 
    icon: Flag 
  },
  { 
    year: "2015", 
    title: "التوسع والنمو", 
    description: "توسيع نطاق مشاريعنا ليشمل مناطق جديدة، مع التركيز على الجودة والابتكار في التصميم والتنفيذ.", 
    icon: TrendingUp 
  },
  { 
    year: "2020", 
    title: "التحول الرقمي", 
    description: "إطلاق منصاتنا الرقمية وتطوير خدماتنا لتواكب أحدث التقنيات وتسهيل تجربة العملاء.", 
    icon: Lightbulb 
  },
  { 
    year: "2025", 
    title: "رؤية المستقبل", 
    description: "إطلاق مشاريع نوعية متكاملة الخدمات، وتوسيع شراكاتنا الاستراتيجية لتحقيق استدامة ونمو طويل الأمد.", 
    icon: Target 
  },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              مسيرة <span className="text-accent">التميز</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              محطات مضيئة صنعت تاريخنا وشكلت مستقبلنا في عالم التطوير العقاري.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          {/* Central Line (Desktop) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 transform md:-translate-x-1/2">
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }} 
              className="w-full h-full bg-gradient-to-b from-accent/20 via-accent to-accent/20" 
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;
  const Icon = item.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Content Side */}
      <div className={`w-full md:w-[calc(50%-40px)] pl-16 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
        <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-500">
            {/* Year Badge */}
            <div className={`absolute -top-4 ${isEven ? 'md:right-8' : 'md:left-8'} left-8 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-accent/20`}>
                {item.year}
            </div>

            <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {item.title}
                </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
            </p>
        </div>
      </div>

      {/* Center Node */}
      <div className="absolute left-8 md:left-1/2 top-8 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex justify-center items-center z-20">
        <div className="w-4 h-4 rounded-full bg-white border-4 border-gray-100 group-hover:border-accent transition-colors duration-500 relative">
            <div className="absolute inset-0 bg-accent rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
        </div>
      </div>

      {/* Spacer for Desktop Layout */}
      <div className="w-full md:w-[calc(50%-40px)] hidden md:block" />
    </motion.div>
  );
}
