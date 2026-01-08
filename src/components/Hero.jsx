'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Youtube, ArrowDown, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen bg-background overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          src="/images/23.png"
          alt="Luxury Architecture"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
      </motion.div>

      {/* Floating Particles/Decorations */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white/90 text-sm font-medium tracking-wide">الريادة في التطوير العقاري</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                <span className="block overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                    className="block"
                  >
                    نصنع
                  </motion.span>
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                    className="block"
                  >
                     المستقبل
                  </motion.span>
                </span>
                <span className="block text-accent overflow-hidden font-light">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                    className="block"
                  >
                     بلمسة فخامة
                  </motion.span>
                </span>
              </h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10 border-r-2 border-accent pr-6"
              >
                في مساكن الرفاهية، نُحوّل الرؤية إلى واقع حيّ من الابتكار والجمال. نبتكر مساحات سكنية تتجاوز التوقعات وتلهم أسلوب حياة استثنائي.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-wrap gap-5"
              >
                <a href="#projects" className="group relative px-8 py-4 bg-accent overflow-hidden rounded-full flex items-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(55,170,194,0.5)]">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  <span className="text-white font-bold text-lg relative z-10">استكشف مشاريعنا</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform relative z-10 rtl:rotate-180" />
                </a>
                
                <a href="#contact" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white font-medium hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                  <span>تواصل معنا</span>
                  <div className="w-2 h-2 rounded-full bg-accent group-hover:bg-primary transition-colors" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Social Links Side - Vertical on Desktop */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center h-full gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              {[
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>, href: "https://www.tiktok.com/@masaken.rc?_r=1&_t=ZS-92tZShcL68e", label: "TikTok" },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 4C12 4 15.3 4 15.3 7.8C15.3 9.1 14.9 9.5 14.2 9.8C14.2 9.8 13.9 9.9 13.9 10.4C13.9 10.8 14.3 11.1 14.5 11.2C14.5 11.2 15.5 11.9 15.5 14.1C15.5 15.9 14.5 16.3 13.4 16.3C13.4 16.3 13.1 16.3 13.1 16.8C13.1 17.3 14.1 17.4 14.9 17.7C15.6 18.1 16.6 18.9 15.5 20C14.5 21.1 12.6 20.4 12 20.4C11.4 20.4 9.5 21.1 8.5 20C7.4 18.9 8.4 18.1 9.1 17.7C9.9 17.4 10.9 17.3 10.9 16.8C10.9 16.3 10.6 16.3 9.5 16.3C8.5 16.3 7.5 15.9 7.5 14.1C7.5 11.9 8.5 11.2 8.5 11.2C8.7 11.1 9.1 10.8 9.1 10.4C9.1 9.9 8.8 9.8 8.8 9.8C8.1 9.5 7.7 9.1 7.7 7.8C7.7 4 11 4 11 4H12Z" /></svg>, href: "https://snapchat.com/t/v6JmTc9D", label: "Snapchat" },
                { icon: <Youtube size={20} />, href: "https://youtube.com/@masaken-rc?si=24kG80SWwJql-69B", label: "Youtube" },
                { icon: <Instagram size={20} />, href: "https://instagram.com/masaken_rc", label: "Instagram" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300 group relative"
                >
                  {social.icon}
                  <span className="absolute right-14 bg-white text-primary text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {social.label}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">اكتشف المزيد</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/30 flex justify-center p-1"
        >
          <motion.div 
            animate={{ height: ["20%", "80%", "20%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 bg-accent rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
