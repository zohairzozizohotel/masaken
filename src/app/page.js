import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import UnitModels from '@/components/UnitModels';
import Contact from '@/components/Contact';
import SecretLoginTrigger from '@/components/SecretLoginTrigger';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, YoutubeIcon } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <UnitModels />
      <Timeline />
      <Contact />
      
      {/* Company Location Map Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              موقعنا على الخريطة
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
            <p className="text-secondary-text max-w-2xl mx-auto">
              تفضل بزيارتنا في مقر الشركة. نحن بانتظارك لتقديم أفضل الخدمات العقارية.
            </p>
          </div>

          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden group">
            {/* Faded Edges Mask */}
            <div className="absolute inset-0 pointer-events-none z-10" 
                 style={{
                   boxShadow: 'inset 0 0 150px 100px rgba(255,255,255,1)'
                 }}
            />
            
            <iframe 
              src="https://maps.google.com/maps?q=إدارة+شركة+مساكن+الرفاهية+للمقاولات+العامة&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              title="موقع شركة مساكن الرفاهية"
            ></iframe>

            {/* Overlay Title Card */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-xs z-20 border border-white/50 hidden md:block transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">مقر الشركة</h4>
                  <p className="text-xs text-secondary-text">حي النزهة، جدة</p>
                </div>
              </div>
              <a 
                href="https://maps.app.goo.gl/pVDXxh6RvbsfU6QY7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline flex items-center gap-1 mt-2 font-medium"
              >
                عرض في خرائط جوجل
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111] text-white pt-20 pb-10 border-t border-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center p-4 mb-6">
                <img src="/images/logo.png" alt="صفوة عنو" className="w-full h-full object-contain opacity-90" />
              </div>
              <p className="text-gray-400 text-sm leading-loose mb-6">
                شريكك الموثوق في عالم الاستثمار والتطوير العقاري. نقدم حلولاً مبتكرة تجمع بين الفخامة والعملية.
              </p>
              <div className="flex gap-4">
                {/* TikTok */}
                <a href="https://www.tiktok.com/@masaken.rc?_r=1&_t=ZS-92tZShcL68e" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-accent hover:text-white transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                </a>
                
                {/* Snapchat */}
                <a href="https://snapchat.com/t/v6JmTc9D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-accent hover:text-white transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M12 4C12 4 15.3 4 15.3 7.8C15.3 9.1 14.9 9.5 14.2 9.8C14.2 9.8 13.9 9.9 13.9 10.4C13.9 10.8 14.3 11.1 14.5 11.2C14.5 11.2 15.5 11.9 15.5 14.1C15.5 15.9 14.5 16.3 13.4 16.3C13.4 16.3 13.1 16.3 13.1 16.8C13.1 17.3 14.1 17.4 14.9 17.7C15.6 18.1 16.6 18.9 15.5 20C14.5 21.1 12.6 20.4 12 20.4C11.4 20.4 9.5 21.1 8.5 20C7.4 18.9 8.4 18.1 9.1 17.7C9.9 17.4 10.9 17.3 10.9 16.8C10.9 16.3 10.6 16.3 9.5 16.3C8.5 16.3 7.5 15.9 7.5 14.1C7.5 11.9 8.5 11.2 8.5 11.2C8.7 11.1 9.1 10.8 9.1 10.4C9.1 9.9 8.8 9.8 8.8 9.8C8.1 9.5 7.7 9.1 7.7 7.8C7.7 4 11 4 11 4H12Z" /></svg>
                </a>

                {/* YouTube */}
                <a href="https://youtube.com/@masaken-rc?si=24kG80SWwJql-69B" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-accent hover:text-white transition-all duration-300">
                  <YoutubeIcon size={18} />
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/masaken_rc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-accent hover:text-white transition-all duration-300">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-accent rounded-full"></span>
                خريطة الموقع
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-[-5px] transition-transform">الرئيسية</span>
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-[-5px] transition-transform">من نحن</span>
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-[-5px] transition-transform">خدماتنا</span>
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-[-5px] transition-transform">مشاريعنا</span>
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-[-5px] transition-transform">تواصل معنا</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-accent rounded-full"></span>
                معلومات التواصل
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">الموقع</h4>
                    <p className="text-gray-400 text-sm">المملكة العربية السعودية، جدة,النزهه,شارع حراء</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">الهاتف</h4>
                    <p className="text-gray-400 text-sm dir-ltr text-right">+966 57 010 9444</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">البريد الإلكتروني</h4>
                    <p className="text-gray-400 text-sm">MSC22@OUTLOOK.SA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} مساكن الرفاهية للتطوير العقاري. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-accent transition-colors">سياسة الخصوصية</Link>
              <Link href="#" className="hover:text-accent transition-colors">الشروط والأحكام</Link>
            </div>
          </div>
        </div>
      </footer>
      <SecretLoginTrigger />
    </main>
  );
}
