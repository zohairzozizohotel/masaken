'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Star, Award, TrendingUp, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

const timelineData = [
  { 
    year: "2010", 
    title: "التأسيس والانطلاق", 
    description: "تأسيس الشركة في مدينة جدة، وانطلاقة برؤية طموحة في السوق العقاري.", 
    icon: Star 
  },
  { 
    year: "2020", 
    title: "مراحل التطور", 
    description: "توسع عمليات الشركة ونمو قاعدة العملاء لتشمل قطاعات متنوعة.", 
    icon: TrendingUp 
  },
  { 
    year: "2025", 
    title: "توسيع المجالات", 
    description: "إطلاق خدمات جديدة وتوسيع نطاق الأعمال لتشمل حلولاً عقارية وفندقية متكاملة.", 
    icon: Award 
  },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-[150px] bg-gradient-to-b from-white via-[#FAF9F6] to-white relative overflow-hidden">
      {/* Background Decors - Luxury Touches */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] md:text-[40px] font-extralight tracking-wide text-primary mb-4">
              مسيرة <span className="text-accent font-serif font-medium">التميز</span>
            </h2>
            <div className="w-[60px] h-[2px] bg-accent/50 mx-auto" />
            <p className="mt-6 text-secondary-text max-w-2xl mx-auto font-light leading-relaxed">
              محطات مضيئة صنعت تاريخنا وشكلت مستقبلنا في عالم التطوير العقاري وإدارة الأملاك
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 transform -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }} 
              className="w-full h-full bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_15px_rgba(39,122,138,0.6)]" 
            />
          </div>

          <div className="space-y-24 md:space-y-32">
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
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Content Side */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'} text-center z-10`}>
        <div className="group relative">
            <div className={`absolute -inset-4 bg-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            <div className="relative bg-white p-8 rounded-none border border-border-light/50 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-accent/30 transition-all duration-500">
                <span className="text-[60px] leading-none font-thin text-accent/10 absolute top-4 right-4 select-none font-serif">
                    {item.year}
                </span>
                
                <div className={`inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-accent/5 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500 ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <Icon size={24} strokeWidth={1.5} />
                </div>

                <h3 className="text-[22px] font-medium text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                </h3>
                <p className="text-secondary-text text-[15px] leading-relaxed">
                    {item.description}
                </p>
                
                {/* Decorative corner */}
                <div className={`absolute bottom-0 w-0 h-[2px] bg-accent transition-all duration-700 group-hover:w-full ${isEven ? 'right-0' : 'left-0'}`} />
            </div>
        </div>
      </div>

      {/* Center Node */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex justify-center items-center z-20">
        <div className="w-4 h-4 rounded-full bg-white border-2 border-accent shadow-[0_0_0_4px_rgba(255,255,255,0.8)] relative group cursor-pointer">
            <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
            <div className="absolute -inset-4 rounded-full border border-accent/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
        </div>
      </div>

      {/* Empty Side (Spacer) */}
      <div className="w-full md:w-5/12 hidden md:block" />
    </motion.div>
  );
}
