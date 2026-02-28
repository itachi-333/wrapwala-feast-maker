import { useState, useEffect } from 'react';
import logo from '@/assets/wrapwala-logo.jpeg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Dishes', href: '#dishes' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Find Us', href: '#findus' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Feedback', href: '#feedback' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-body ${
          scrolled
  ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
  : 'bg-white/90 backdrop-blur-sm py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="WrapWala logo" 
              className="h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl font-bold text-deep-brown">
                WrapWala
              </span>
             <span className="text-xs md:text-sm font-body text-orange-600 font-semibold tracking-wide">
                Fast · Fresh · Flavourful
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-deep-brown/70 hover:text-rust transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#menu"
              className="bg-rust text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold hover:text-deep-brown transition-all"
            >
              Order Now
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex flex-col gap-1.5"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-deep-brown" />
            <span className="w-6 h-0.5 bg-deep-brown" />
            <span className="w-4 h-0.5 bg-deep-brown" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-deep-brown text-3xl"
            aria-label="Close menu"
          >
            ✕
          </button>
          <img src={logo} alt="WrapWala" className="h-20 w-auto object-contain mb-2" />
          <span className="text-sm font-body text-gold font-medium">Fast · Fresh · Flavourful</span>
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-deep-brown text-2xl font-display hover:text-rust transition-colors"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#menu"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-rust text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold"
          >
            Order Now
          </a>
        </div>
      )}
    </>
  );
}
