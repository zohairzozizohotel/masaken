'use client';
import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen bg-background overflow-hidden flex items-center">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/images/23.png"
          alt="Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        {/* Dark Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }} // Slide from right
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-1"
          >
            <h1 className="text-[40px] md:text-[64px] font-extralight leading-[1.1] tracking-tight text-white">
              مرحبًا بكم في
              <span className="block mt-2 font-semibold text-[#37aac2]">مساكن الرفاهية</span>
            </h1>

            <p className="mt-4 text-[20px] font-light text-white/90">
                نبني المستقبل بلمسة فخامة
            </p>

            {/* Gold Separator */}
            <div className="mt-6 w-[48px] h-[2px] bg-accent" />

            <p className="mt-6 text-white/90 text-[15px] leading-[1.9] max-w-[380px]">
              نُحوّل الرؤية إلى واقع حيّ من الابتكار والجمال — حيث يلتقي التصميم الراقي مع جودة الحياة.
            </p>

            <div className="mt-14 flex gap-6">
              <a href="#services" className="h-[52px] px-[36px] flex items-center justify-center bg-white text-primary text-[14px] tracking-wide cursor-pointer hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-black/10 rounded-none">
                استعرض خدماتنا
              </a>
              <a href="#contact" className="h-[52px] px-[36px] flex items-center justify-center bg-accent text-white text-[14px] tracking-wide cursor-pointer hover:bg-accent/90 transition-all duration-300 rounded-none shadow-lg shadow-accent/20">
                تواصل معنا
              </a>
            </div>

            <div className="mt-10 flex gap-4">
              {/* TikTok */}
              <a href="https://www.tiktok.com/@masaken.rc?_r=1&_t=ZS-92tZShcL68e" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
              
              {/* Snapchat */}
              <a href="https://snapchat.com/t/v6JmTc9D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]"><path d="M12 4C12 4 15.3 4 15.3 7.8C15.3 9.1 14.9 9.5 14.2 9.8C14.2 9.8 13.9 9.9 13.9 10.4C13.9 10.8 14.3 11.1 14.5 11.2C14.5 11.2 15.5 11.9 15.5 14.1C15.5 15.9 14.5 16.3 13.4 16.3C13.4 16.3 13.1 16.3 13.1 16.8C13.1 17.3 14.1 17.4 14.9 17.7C15.6 18.1 16.6 18.9 15.5 20C14.5 21.1 12.6 20.4 12 20.4C11.4 20.4 9.5 21.1 8.5 20C7.4 18.9 8.4 18.1 9.1 17.7C9.9 17.4 10.9 17.3 10.9 16.8C10.9 16.3 10.6 16.3 9.5 16.3C8.5 16.3 7.5 15.9 7.5 14.1C7.5 11.9 8.5 11.2 8.5 11.2C8.7 11.1 9.1 10.8 9.1 10.4C9.1 9.9 8.8 9.8 8.8 9.8C8.1 9.5 7.7 9.1 7.7 7.8C7.7 4 11 4 11 4H12Z" /></svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com/@masaken-rc?si=24kG80SWwJql-69B" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/10">
                <Youtube size={20} />
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/masaken_rc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/10">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Empty column to balance grid, image is visible here */}
          <div className="md:col-span-1" />
          
        </div>
      </div>
    </section>
  );
}
