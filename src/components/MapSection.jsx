'use client';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MapSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              موقعنا على <span className="text-accent">الخريطة</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              تفضل بزيارتنا في مقر الشركة. نحن بانتظارك لتقديم أفضل الخدمات العقارية ومناقشة طموحاتك السكنية.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] rounded-[2rem] overflow-hidden group shadow-2xl border border-gray-100"
        >
          {/* Faded Edges Mask - CRITICAL: Keeping this as requested */}
          <div className="absolute inset-0 pointer-events-none z-10" 
               style={{
                 boxShadow: 'inset 0 0 150px 100px rgba(255,255,255,0.0)' // Reduced opacity for better visibility while keeping the concept, or can be adjusted
               }}
          >
             {/* Gradient Overlay for better text readability if needed, but keeping the requested style */}
             <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
          </div>
          
          <iframe 
            src="https://maps.google.com/maps?q=إدارة+شركة+مساكن+الرفاهية+للمقاولات+العامة&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
            title="موقع شركة مساكن الرفاهية"
          ></iframe>

          {/* Overlay Title Card with Fade/Blur Effect */}
          <div className="absolute bottom-8 right-8 z-20 hidden md:block">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/50 max-w-xs transform transition-transform duration-500 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">مقر الشركة</h4>
                  <p className="text-sm text-gray-500">حي النزهة، جدة</p>
                </div>
              </div>
              
              <div className="h-px bg-gray-100 my-3" />
              
              <a 
                href="https://maps.app.goo.gl/pVDXxh6RvbsfU6QY7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 flex items-center justify-between gap-2 font-bold group/link"
              >
                <span>عرض في خرائط جوجل</span>
                <ArrowRight size={16} className="transform group-hover/link:-translate-x-1 transition-transform rtl:rotate-180" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
