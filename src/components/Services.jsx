'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, Megaphone, Hotel, Home, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: "خدمات التسويق",
    description: "نقدم حلولاً تسويقية مبتكرة تشمل الحملات الرقمية وإدارة منصات التواصل الاجتماعي لضمان وصول مشاريعك للجمهور المستهدف بكفاءة عالية.",
    features: ["حملات إعلانية موجهة", "تصوير وإنتاج مرئي", "إدارة علاقات العملاء"],
    action: "ابدأ حملتك الآن"
  },
  {
    icon: Hotel,
    title: "خدمات فندقة",
    description: "تجربة ضيافة استثنائية في فنادقنا المجهزة بأحدث وسائل الراحة، مع خدمات حجز مرنة وخيارات تناسب الأفراد والعائلات.",
    features: ["حجوزات فورية", "خدمة غرف 24/7", "قاعات مناسبات"],
    action: "احجز إقامتك"
  },
  {
    icon: Home,
    title: "شقق تمليك",
    description: "فرص تمليك عقارية مميزة في أرقى الأحياء، بتصاميم عصرية وتشطيبات فاخرة، مع خيارات تقسيط ميسرة تناسب ميزانيتك.",
    features: ["مواقع استراتيجية", "تشطيبات سوبر ديلوكس", "ضمانات شاملة"],
    action: "تصفح الوحدات"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            خدماتنا <span className="text-accent">المتكاملة</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            نقدم مجموعة شاملة من الخدمات العقارية والفندقية المصممة لتلبية احتياجاتك بأعلى معايير الجودة والاحترافية.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-500 relative flex flex-col h-full overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:via-accent group-hover:to-accent/50 transition-all duration-700" />
              
              <div className="mb-6 relative">
                <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <div className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-accent/60" />
                    {feature}
                  </div>
                ))}
              </div>

              <a 
                href={`https://wa.me/966509996115?text=أهلاً، أرغب في الاستفسار عن ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-6 py-3 rounded-xl bg-gray-50 text-primary font-medium group-hover:bg-accent group-hover:text-white transition-all duration-300 mt-auto"
              >
                <span>{service.action}</span>
                <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
