import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const menuOptions = [
  'OG Paneer Tikka', 'Falafel Special', 'Chilli Paneer', 'Achari Paneer',
  'Paneer Makhni (Butter)', 'The Bhurji Blast', 'The Butter Bliss (Chicken)',
  'The Achari Crunch', 'The Broadway Bhuna', 'Chicken/Lamb Kabab',
  'Marinated Onion Egg Wrap', 'Peri Peri Chicken Burger', 'Cheeseburger',
  'Quarter Pounder', 'Half Pounder', 'Masala Fries', 'Loaded Fries', 'Cheesy Fries',
];

export default function FeedbackForm() {
  const ref = useScrollReveal();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="feedback" className="py-20 bg-deep-brown">
      <div className="max-w-2xl mx-auto px-4" ref={ref}>
        <div className="text-center mb-10 reveal-item">
          <span className="text-gold font-script text-lg">We'd Love to Hear</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-cream mt-2">
            Your <span className="text-rust">Feedback</span>
          </h2>
          <p className="text-warm-cream/40 mt-3">Tell us what you loved (or what we can do better)</p>
        </div>

        {submitted ? (
          <div className="reveal-item text-center bg-olive/10 rounded-2xl p-12 border border-olive/20">
            <span className="text-6xl">🎉</span>
            <h3 className="font-display text-2xl font-bold text-warm-cream mt-4">Thank you!</h3>
            <p className="text-warm-cream/50 mt-2">Your feedback means the world to us. Keep wrapping!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal-item space-y-6" data-delay="100">
            {/* Star rating */}
            <div className="text-center">
              <p className="text-sm font-semibold text-warm-cream mb-2">Rate your experience</p>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className={`text-3xl transition-transform hover:scale-125 ${
                      star <= (hover || rating) ? 'text-gold' : 'text-warm-cream/20'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-card border border-warm-cream/10 text-warm-cream placeholder:text-warm-cream/30 focus:border-rust focus:ring-1 focus:ring-rust outline-none transition font-body text-sm"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-card border border-warm-cream/10 text-warm-cream placeholder:text-warm-cream/30 focus:border-rust focus:ring-1 focus:ring-rust outline-none transition font-body text-sm"
              />
            </div>

            <select
              required
              className="w-full px-4 py-3 rounded-xl bg-dark-card border border-warm-cream/10 text-warm-cream/50 focus:border-rust focus:ring-1 focus:ring-rust outline-none transition font-body text-sm"
            >
              <option value="">What did you try?</option>
              {menuOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>

            <textarea
              placeholder="Tell us more..."
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl bg-dark-card border border-warm-cream/10 text-warm-cream placeholder:text-warm-cream/30 focus:border-rust focus:ring-1 focus:ring-rust outline-none transition font-body text-sm resize-none"
            />

            <button
              type="submit"
              className="w-full bg-rust text-primary-foreground py-3.5 rounded-xl font-semibold hover:bg-gold hover:text-deep-brown transition-colors"
            >
              Submit Feedback →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
