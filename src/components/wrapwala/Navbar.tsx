import { useState, useEffect } from 'react';

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
            ? 'bg-warm-cream/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-rust flex items-center justify-center text-primary-foreground font-bold text-sm">
              WW
            </div>
            <span className="font-display text-xl font-bold text-deep-brown">
              WrapWala
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-deep-brown/80 hover:text-rust transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#menu"
              className="bg-rust text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-rust/90 transition-colors"
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
        <div className="fixed inset-0 z-[100] bg-deep-brown flex flex-col items-center justify-center gap-6 animate-fade-in">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-warm-cream text-3xl"
            aria-label="Close menu"
          >
            ✕
          </button>
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
