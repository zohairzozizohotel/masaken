'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-[120px] bg-gradient-to-b from-white via-[#FAF9F6] to-white relative overflow-hidden">
      
      {/* Secret Luxury Layer: Golden Glow Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[420px] h-[420px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Visual Element: Vertical Gradient Line */}
          <motion.div 
            initial={{ scaleY: 0 }} 
            whileInView={{ scaleY: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            viewport={{ once: true }}
            className="w-[2px] h-[90px] mb-10 bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          />
          
          <h2 className="text-[32px] font-extralight tracking-wide mb-8 text-primary">
            من <span className="text-accent font-medium">نحن</span>
          </h2>
          
          <div className="text-[16px] text-secondary-text leading-[2.2] max-w-[800px] flex flex-col gap-4">
            <h3 className="text-primary font-medium text-[20px]">شركة مساكن الرفاهية للتطوير العقاري</h3>
            <p>
              تأسست الشركة عام 2010م، واكتسبت الأفضلية والتميز بين الشركات الأخرى، وبشهادة استدامتها في السوق العقاري والتطويري إلى يومنا هذا.
            </p>
          </div>

          {/* Bottom Gold Separator */}
          <div className="mt-10 w-[40px] h-[1px] bg-accent/60" />

        </motion.div>
      </div>
    </section>
  );
}
