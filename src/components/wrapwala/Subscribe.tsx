import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Subscribe() {
  const ref = useScrollReveal();

  return (
    <section className="py-20 bg-gradient-to-br from-rust/5 via-gold/10 to-rust/5">
      <div className="max-w-2xl mx-auto px-4 text-center" ref={ref}>
        <span className="reveal-item text-rust font-script text-lg">Don't Miss Out</span>
        <h2 className="reveal-item text-4xl md:text-5xl font-display font-bold text-deep-brown mt-2 mb-3" data-delay="50">
          Stay <span className="text-rust">Updated</span>
        </h2>
        <p className="reveal-item text-deep-brown/50 mb-8 max-w-md mx-auto" data-delay="100">
          Subscribe for offers, new flavours, and location drops straight to your inbox.
        </p>

        <div className="reveal-item flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" data-delay="200">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3.5 rounded-full bg-white border border-rust/20 text-deep-brown placeholder:text-deep-brown/30 focus:border-rust focus:ring-2 focus:ring-rust/20 outline-none transition font-body text-sm shadow-sm"
          />
          <button className="bg-rust text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-gold hover:text-deep-brown transition-all shadow-lg shadow-rust/20 hover:shadow-gold/20 whitespace-nowrap">
            Subscribe →
          </button>
        </div>

        <p className="reveal-item text-deep-brown/30 text-xs mt-4" data-delay="300">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}