import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FindUs() {
  const ref = useScrollReveal();

  return (
    <section id="findus" className="py-20 bg-deep-brown">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12" ref={ref}>
        <div>
          <span className="reveal-item text-gold font-script text-lg">Come Visit</span>
          <h2 className="reveal-item text-4xl md:text-5xl font-display font-bold text-warm-cream mb-8 mt-2" data-delay="50">
            Find <span className="text-rust">Us</span>
          </h2>

          <div className="space-y-4">
            {[
              { icon: '📍', title: 'Location', text: 'London Street Food Markets — follow us on socials for live locations' },
              { icon: '🕐', title: 'Hours', text: 'Thurs–Sun: 11AM – 9PM\nSpecial events: Check Instagram' },
              { icon: '📸', title: 'Instagram', text: '@WrapWala — daily updates, location drops & behind the scenes' },
              { icon: '🎉', title: 'Catering', text: 'Private events, corporate lunches & parties — DM us to book!' },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal-item flex gap-4 bg-dark-card rounded-xl p-5 hover:bg-dark-card/80 transition-colors border border-warm-cream/5"
                data-delay={`${i * 100}`}
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h4 className="font-display font-bold text-warm-cream">{item.title}</h4>
                  <p className="text-warm-cream/50 text-sm whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-item" data-delay="200">
          <a
            href="https://maps.google.com/?q=London+Street+Food"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full min-h-[400px] bg-gradient-to-br from-dark-card to-dark-surface rounded-2xl overflow-hidden relative group border border-warm-cream/5"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-6xl mb-4">📍</span>
              <p className="font-display text-2xl font-bold text-warm-cream">London</p>
              <p className="text-warm-cream/40 text-sm mt-2">Click to open in Google Maps</p>
              <div className="mt-4 bg-rust text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold group-hover:bg-gold group-hover:text-deep-brown transition-colors">
                Get Directions →
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
