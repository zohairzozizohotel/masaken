'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "خدمات التسويق",
    description: "تسويق احترافي للوحدات والمشاريع عبر قنوات رقمية وميدانية لتحقيق أفضل وصول وطلبات فعلية.",
    features: ["حملات رقمية", "تصوير عقاري", "إدارة الاستفسارات"],
    action: "اطلب الخدمة"
  },
  {
    title: "خدمات فندقة",
    description: "يتوفر لدينا 4 فنادق لتقديم خدمات الضيافة والحجز وإقامة الفعاليات والعروض الخاصة.",
    features: ["حجوزات", "فعاليات", "عروض خاصة"],
    action: "استكشف الفنادق"
  },
  {
    title: "شقق تمليك",
    description: "تشكيلة متنوعة من الشقق بمساحات وأسعار تنافسية وتشطيبات فاخرة مع خيارات دفع مرنة.",
    features: ["مساحات متعددة", "تشطيبات فاخرة", "تقسيط مرن"],
    action: "اطلب التفاصيل"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-[120px] bg-background relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[32px] font-extralight tracking-wide text-primary mb-2">
            خدماتنا <span className="text-accent font-medium">الاحترافية</span>
          </h2>
          <div className="w-[60px] h-[2px] bg-accent/50" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-[40px] border border-border-light hover:border-accent/30 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative flex flex-col justify-between min-h-[320px]"
            >
              {/* Card Content */}
              <div>
                {/* Icon Placeholder or Decorative Number */}
                <div className="text-[40px] font-thin text-accent/20 mb-6 font-serif">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                <h3 className="text-[20px] font-medium mb-4 text-primary group-hover:text-accent transition duration-300">
                  {service.title}
                </h3>
                <p className="text-secondary-text text-[15px] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                {service.features && (
                  <ul className="mb-8 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-[14px] text-gray-500">
                        <span className="w-1.5 h-1.5 bg-accent/40 rounded-full ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action Button */}
              <a 
                href={`https://wa.me/966509996115?text=أهلاً، أرغب في الاستفسار عن ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[14px] text-primary font-medium group-hover:text-accent transition-colors duration-300 mt-auto"
              >
                <span>{service.action || "طلب الخدمة"}</span>
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
              </a>
              
              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
