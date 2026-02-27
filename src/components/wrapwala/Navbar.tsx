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
           ? 'bg-deep-brown/95 backdrop-blur-md shadow-lg py-3'
: 'bg-deep-brown/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
           <img 
  src={logo} 
  alt="WrapWala logo" 
  className="h-16 md:h-20 w-auto object-contain"
/>
            <span className="font-display text-xl font-bold text-warm-cream">
              WrapWala
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-warm-cream/70 hover:text-gold transition-colors"
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
            <span className="w-6 h-0.5 bg-warm-cream" />
            <span className="w-6 h-0.5 bg-warm-cream" />
            <span className="w-4 h-0.5 bg-warm-cream" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-deep-brown flex flex-col items-center justify-center gap-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-warm-cream text-3xl"
            aria-label="Close menu"
          >
            ✕
          </button>
          <img src={logo} alt="WrapWala" className="w-20 h-20 rounded-full mb-4 border-2 border-gold/30" />
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-warm-cream text-2xl font-display hover:text-gold transition-colors"
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
