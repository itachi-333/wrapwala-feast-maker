import { useScrollReveal } from '@/hooks/useScrollReveal';
import storyAssembly from '@/assets/story-assembly.webp';
import storySpices from '@/assets/story-spices.webp';
import heroWrap from '@/assets/hero-wrap.webp';

const pillars = [
  { icon: '🌿', title: 'Always Fresh', desc: 'Every ingredient sourced daily' },
  { icon: '🌶️', title: 'Bold Flavours', desc: 'Authentic spice blends from South Asia' },
  { icon: '🥗', title: 'Veg Heaven', desc: 'Huge range for vegetarian lovers' },
  { icon: '🇬🇧', title: 'London Proud', desc: 'Born and made in the city we love' },
];

export default function OurStory() {
  const ref = useScrollReveal();

  return (
    <section id="story" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
        {/* Left images */}
        <div className="reveal-item relative grid grid-cols-2 gap-4" data-delay="0">
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden h-80">
            <img src={storyAssembly} alt="Wrap being assembled" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden h-36">
            <img src={storySpices} alt="Spice bowls" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden h-36">
            <img src={heroWrap} alt="Chargrilled paneer" className="w-full h-full object-cover" />
          </div>

          {/* Rotating stamp */}
          <div className="absolute -bottom-8 -right-4 w-24 h-24 rotate-stamp">
            <div className="w-full h-full rounded-full border-2 border-dashed border-gold flex items-center justify-center bg-deep-brown/80 backdrop-blur-sm">
              <span className="text-[10px] font-bold text-gold text-center leading-tight">100%<br/>FRESH<br/>DAILY</span>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div>
          <span className="reveal-item text-gold font-script text-lg" data-delay="50">Who We Are</span>
          <h2 className="reveal-item text-4xl md:text-5xl font-display font-bold text-warm-cream mb-6 mt-2" data-delay="100">
            Our <span className="font-script text-rust">Story</span>
          </h2>
          <p className="reveal-item text-warm-cream/50 mb-4 leading-relaxed" data-delay="200">
            WrapWala was born from late-night memories of Mumbai's bustling street stalls and Kolkata's legendary kathi rolls. We brought those bold, unapologetic flavours to the streets of London.
          </p>
          <p className="reveal-item text-warm-cream/50 mb-8 leading-relaxed" data-delay="300">
            Every wrap is rolled with passion, every burger stacked with purpose. We believe great street food doesn't need a Michelin star — it just needs heart, fire, and the freshest ingredients.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="reveal-item bg-dark-card rounded-xl p-4 hover:bg-dark-card/80 transition-colors border border-warm-cream/5"
                data-delay={`${300 + i * 100}`}
              >
                <span className="text-2xl">{p.icon}</span>
                <h4 className="font-display font-bold text-warm-cream mt-2 text-sm">{p.title}</h4>
                <p className="text-xs text-warm-cream/40 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
