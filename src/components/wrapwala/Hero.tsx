import { useScrollReveal } from '@/hooks/useScrollReveal';
import heroBg from '@/assets/hero-bg.webp';
import heroWrap from '@/assets/hero-wrap.webp';
import heroFries from '@/assets/hero-fries.webp';
import heroBurger from '@/assets/hero-burger.webp';

const floatingEmojis = ['🌯', '🍟', '🌶️', '🧀', '🍔', '🥬', '🫓'];

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep-brown/70" />
      </div>

      {/* Floating emojis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingEmojis.map((emoji, i) => (
          <span
            key={i}
            className="absolute text-3xl float-up opacity-20"
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
          <div className="reveal-item inline-flex items-center gap-2 bg-rust/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-gold/20" data-delay="0">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            🌯 Fast · Fresh · Flavourful
          </div>

          <h1 className="reveal-item text-5xl md:text-7xl font-display font-bold text-warm-cream leading-[1.1] mb-4" data-delay="150">
            Wraps That<br />
            <span className="text-rust">Hit Different</span><br />
            <span className="font-script text-gold">every single time</span>
          </h1>

          <div className="reveal-item flex items-center gap-3 mb-6" data-delay="300">
            <span className="h-px w-12 bg-rust" />
            <span className="text-rust font-semibold tracking-widest text-sm uppercase">Fast · Fresh · Flavourful</span>
            <span className="h-px w-12 bg-rust" />
          </div>

          <p className="reveal-item text-warm-cream/60 text-lg max-w-md mb-8 font-body" data-delay="400">
            London's favourite Indian-inspired street food. Bold flavours, fresh ingredients, and wraps made with love — from our cart to your hands.
          </p>

          <div className="reveal-item flex flex-wrap gap-4" data-delay="500">
            <a href="#menu" className="bg-rust text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-rust/30 transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-deep-brown">
              See Full Menu →
            </a>
            <a href="#findus" className="border-2 border-warm-cream/40 text-warm-cream px-8 py-3.5 rounded-full font-semibold hover:bg-warm-cream hover:text-deep-brown transition-all">
              Find Us Today
            </a>
          </div>
        </div>

        {/* Right - Food cards */}
        <div className="reveal-item relative" data-delay="300">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            <img src={heroWrap} alt="OG Paneer Tikka Wrap" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-olive/80 text-warm-cream text-xs font-bold px-3 py-1 rounded-full mb-2">VEG • BESTSELLER</span>
              <h3 className="font-display text-warm-cream text-2xl font-bold">OG Paneer Tikka Wrap</h3>
              <p className="text-warm-cream/60 text-sm mt-1">Cubes of paneer marinated in yogurt, kashmiri red chilli, ginger-garlic paste</p>
              <div className="mt-2 text-gold font-bold text-xl">£7.00 <span className="text-warm-cream/40 text-sm font-normal">/ Meal £8.50</span></div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl overflow-hidden shadow-xl shadow-black/40 w-32">
            <img src={heroBurger} alt="Peri Peri Burger" className="w-full h-24 object-cover" />
            <div className="bg-deep-brown/90 p-2">
              <p className="text-warm-cream text-xs font-bold">Peri Peri Burger</p>
              <p className="text-gold text-xs">£4.50</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 rounded-2xl overflow-hidden shadow-xl shadow-black/40 w-32">
            <img src={heroFries} alt="Masala Fries" className="w-full h-24 object-cover" />
            <div className="bg-deep-brown/90 p-2">
              <p className="text-warm-cream text-xs font-bold">Loaded Fries</p>
              <p className="text-gold text-xs">£4.00</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-10 justify-center">
            <div className="text-center bg-deep-brown/60 backdrop-blur-sm rounded-xl px-5 py-3 border border-warm-cream/10">
              <p className="text-2xl font-bold text-gold">15+</p>
              <p className="text-xs text-warm-cream/50">Menu Items</p>
            </div>
            <div className="text-center bg-deep-brown/60 backdrop-blur-sm rounded-xl px-5 py-3 border border-warm-cream/10">
              <p className="text-2xl font-bold text-olive">100%</p>
              <p className="text-xs text-warm-cream/50">Fresh Daily</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
        <span className="text-warm-cream/40 text-xs font-body">Scroll</span>
        <div className="w-5 h-8 border-2 border-warm-cream/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
