import { useScrollReveal } from '@/hooks/useScrollReveal';

const reviews = [
  { name: 'Gnana Vardhan', location: 'East London · Google', text: 'The OG Paneer Tikka Wrap is genuinely one of the best things I\'ve eaten on a London street. The spice balance, the freshness, the crunch — absolutely unmatched. I\'m a regular now and I don\'t see that changing anytime soon.', featured: true },
  { name: 'Karthik Singh', location: 'Southall · Instagram', text: 'The Butter Bliss wrap tastes like my mum\'s butter chicken but in a wrap. Pure comfort food with bold Punjabi flavours.' },
  { name: 'Thrisha', location: 'Camden · Google', text: 'As a vegetarian, I\'m always let down by street food — but WrapWala has SO many options. The Chilli Paneer and Falafel are incredible.' },
  { name: 'Omar Abdullah', location: 'Whitechapel · TripAdvisor', text: 'The Chilli Paneer wrap is seriously addictive. Perfect blend of Indo-Chinese heat and freshness.' },
  { name: 'Sophie Williams', location: 'Shoreditch · Google', text: 'The Falafel Special with a side of Masala Fries is my go-to Friday lunch. Fresh, filling, and SO flavourful.' },
  { name: 'Emily Clarke', location: 'Brixton · Instagram', text: 'Tried the Quarter Pounder with Masala Fries on a whim — now I\'m obsessed. Best street burger in London, hands down.' },
];

const stats = [
  { value: '4.9 ⭐', label: 'Avg Rating' },
  { value: '500+', label: 'Happy Customers' },
  { value: '100%', label: 'Fresh Daily' },
  { value: '15+', label: 'Menu Items' },
];

export default function Reviews() {
  const ref = useScrollReveal();

  return (
    <section id="reviews" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <div className="text-center mb-12 reveal-item">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-cream">
            What People <span className="text-gold">Say</span>
          </h2>
          <p className="text-warm-cream/50 mt-3">Real reviews from real food lovers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`reveal-item bg-dark-card rounded-2xl p-6 hover:shadow-xl transition-shadow ${
                r.featured ? 'md:row-span-2 flex flex-col justify-between' : ''
              }`}
              data-delay={`${i * 100}`}
            >
              <div>
                <span className="text-4xl text-rust/50 font-display">"</span>
                <div className="text-gold text-sm mb-3">★★★★★</div>
                <p className={`text-warm-cream/80 ${r.featured ? 'text-lg leading-relaxed' : 'text-sm'}`}>
                  {r.text}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-rust/20 flex items-center justify-center text-rust font-bold text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-warm-cream font-semibold text-sm">{r.name}</p>
                  <p className="text-warm-cream/40 text-xs">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="reveal-item grid grid-cols-2 md:grid-cols-4 gap-6 bg-dark-card rounded-2xl p-8" data-delay="200">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold text-gold">{s.value}</p>
              <p className="text-warm-cream/50 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
