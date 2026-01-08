'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Link from 'next/link';
import GlobalSearch from './GlobalSearch';

export default function Header({ breadcrumb }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  const breadcrumbItems = Array.isArray(breadcrumb) ? breadcrumb : null;
  const hasBreadcrumb = Boolean(breadcrumbItems && breadcrumbItems.length >= 2);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 h-[80px] flex items-center bg-white/80 backdrop-blur-md border-b border-border-light`}>
      <div className="container-custom w-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="مساكن الرفاهية" className="h-16 w-auto object-contain" />
        </Link>

        {hasBreadcrumb ? (
          <nav className="flex-1 mx-4 min-w-0">
            <div className="flex items-center gap-2 text-[13px] text-gray-500 truncate">
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;
                return (
                  <div key={`${item.href || item.label}-${index}`} className="flex items-center gap-2 min-w-0">
                    {isLast ? (
                      <span className="text-primary font-medium truncate">{item.label}</span>
                    ) : (
                      <Link href={item.href} className="hover:text-accent transition truncate">
                        {item.label}
                      </Link>
                    )}
                    {!isLast && <span className="text-gray-300">›</span>}
                  </div>
                );
              })}
            </div>
          </nav>
        ) : (
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
        )}

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-primary hover:text-accent hover:bg-gray-50 rounded-full transition-all"
            aria-label="بحث"
          >
            <Search size={20} />
          </button>
          
          <a 
            href="https://wa.me/966509996115" 
            className="px-[24px] py-[10px] border border-primary text-[14px] text-primary hover:bg-accent hover:border-accent hover:text-white transition duration-300"
          >
            تواصل عبر واتساب
          </a>
        </div>

        {/* Mobile Menu Button & Search */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-primary hover:text-accent transition p-2"
          >
            <Search size={24} />
          </button>
          {!hasBreadcrumb && (
            <button className="text-primary hover:text-accent transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {!hasBreadcrumb && isMenuOpen && (
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

      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
