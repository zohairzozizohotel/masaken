'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'عن الشركة', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'المشاريع', href: '#projects' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 h-[80px] flex items-center bg-white/80 backdrop-blur-md border-b border-border-light`}>
      <div className="container-custom w-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="مساكن الرفاهية" className="h-16 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-[40px] items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[14px] font-medium text-primary hover:text-accent transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a 
          href="https://wa.me/966509996115" 
          className="hidden md:block px-[24px] py-[10px] border border-primary text-[14px] text-primary hover:bg-accent hover:border-accent hover:text-white transition duration-300"
        >
          تواصل عبر واتساب
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary hover:text-accent transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-[80px] left-0 w-full border-t border-border-light shadow-lg">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[14px] font-medium text-primary hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
