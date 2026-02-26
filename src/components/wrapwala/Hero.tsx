import { useScrollReveal } from '@/hooks/useScrollReveal';

const floatingEmojis = ['🌯', '🍟', '🌶️', '🧀', '🍔', '🥬', '🫓'];

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-warm-cream pt-20">
      {/* Floating emojis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingEmojis.map((emoji, i) => (
          <span
            key={i}
            className="absolute text-3xl float-up opacity-30"
            style={{
              left: `${10 + i * 13}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10" ref={ref}>
        {/* Left */}
        <div>
          <div className="reveal-item inline-flex items-center gap-2 bg-rust/10 text-rust px-4 py-2 rounded-full text-sm font-medium mb-6" data-delay="0">
            <span className="w-2 h-2 rounded-full bg-rust animate-pulse" />
            🌯 Fast · Fresh · Flavourful
          </div>

          <h1 className="reveal-item text-5xl md:text-7xl font-display font-bold text-deep-brown leading-[1.1] mb-4" data-delay="150">
            Wraps That<br />
            <span className="text-rust">Hit Different</span><br />
            <span className="font-script text-gold">every single time</span>
          </h1>

          <div className="reveal-item flex items-center gap-3 mb-6" data-delay="300">
            <span className="h-px w-12 bg-rust" />
            <span className="text-rust font-semibold tracking-widest text-sm uppercase">Fast · Fresh · Flavourful</span>
            <span className="h-px w-12 bg-rust" />
          </div>

          <p className="reveal-item text-muted-foreground text-lg max-w-md mb-8 font-body" data-delay="400">
            London's favourite Indian-inspired street food. Bold flavours, fresh ingredients, and wraps made with love — from our cart to your hands.
          </p>

          <div className="reveal-item flex flex-wrap gap-4" data-delay="500">
            <a href="#menu" className="bg-rust text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-rust/30 transition-all hover:-translate-y-0.5">
              See Full Menu →
            </a>
            <a href="#findus" className="border-2 border-deep-brown text-deep-brown px-8 py-3.5 rounded-full font-semibold hover:bg-deep-brown hover:text-warm-cream transition-all">
              Find Us Today
            </a>
          </div>
        </div>

        {/* Right - Food cards */}
        <div className="reveal-item relative" data-delay="300">
          <div className="relative bg-gradient-to-br from-deep-brown to-dark-surface rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <div className="text-8xl mb-4">🌯</div>
              <span className="inline-block bg-olive/20 text-olive text-xs font-bold px-3 py-1 rounded-full mb-2">VEG • BESTSELLER</span>
              <h3 className="font-display text-warm-cream text-2xl font-bold">OG Paneer Tikka Wrap</h3>
              <p className="text-warm-cream/60 text-sm mt-2">Grilled paneer, crunchy lettuce, tomato, chutney drizzle & spices</p>
              <div className="mt-4 text-gold font-bold text-xl">£7.00 <span className="text-warm-cream/40 text-sm font-normal">/ Meal £8.50</span></div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-rust to-gold rounded-2xl p-4 shadow-xl">
            <div className="text-4xl mb-1">🍔</div>
            <p className="text-primary-foreground text-xs font-bold">Peri Peri Burger</p>
            <p className="text-primary-foreground/70 text-xs">£4.50</p>
          </div>

          <div className="absolute -top-4 -right-4 bg-gradient-to-br from-olive to-accent rounded-2xl p-4 shadow-xl">
            <div className="text-4xl mb-1">🍟</div>
            <p className="text-primary-foreground text-xs font-bold">Masala Fries</p>
            <p className="text-primary-foreground/70 text-xs">£2.50</p>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-10 justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-rust">15+</p>
              <p className="text-xs text-muted-foreground">Menu Items</p>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-olive">100%</p>
              <p className="text-xs text-muted-foreground">Fresh Daily</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
        <span className="text-muted-foreground text-xs font-body">Scroll</span>
        <div className="w-5 h-8 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-rust rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
