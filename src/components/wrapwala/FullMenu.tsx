import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Category = 'all' | 'fries' | 'wraps' | 'burgers';

interface MenuItem {
  name: string;
  cat: 'fries' | 'wraps' | 'burgers';
  badge: string;
  badgeColor: string;
  desc: string;
  price: string;
  meal: string;
  emoji: string;
  note?: string;
  colLabel?: string;
}

const menuItems: MenuItem[] = [
  // Fries (Medium / Large)
  { name: 'Plain/Masala Fries', cat: 'fries', badge: 'Veg', badgeColor: 'bg-olive/30 text-olive', desc: 'Classic or spiced — your call', price: '£2.00', meal: '£2.50', emoji: '🍟', colLabel: 'Medium / Large' },
  { name: 'Cheesy Fries', cat: 'fries', badge: 'Veg', badgeColor: 'bg-olive/30 text-olive', desc: 'Loaded with melted cheese', price: '£2.50', meal: '£3.00', emoji: '🧀' },
  { name: 'Loaded Fries', cat: 'fries', badge: 'Veg · Popular', badgeColor: 'bg-rust/30 text-rust', desc: 'The works — cheese, jalapeños, sauces', price: '£4.00', meal: '£4.50', emoji: '🍟' },
  // Wraps (Single / Meal)
  { name: 'Marinated Onion Egg Wrap', cat: 'wraps', badge: 'Egg', badgeColor: 'bg-gold/30 text-gold', desc: 'Egg wrap, marinated onion in lemon juice, fresh salad', price: '£5.00', meal: '£6.50', emoji: '🥚', note: 'Upgrade to Egg-Maha Roll +£1' },
  { name: 'Falafel Special', cat: 'wraps', badge: 'Veg', badgeColor: 'bg-olive/30 text-olive', desc: 'Crispy falafel with hummus & tahini', price: '£5.00', meal: '£6.50', emoji: '🧆' },
  { name: 'The OG Paneer Tikka Wrap', cat: 'wraps', badge: 'Veg · Bestseller', badgeColor: 'bg-olive/30 text-olive', desc: 'Cubes of paneer marinated in yogurt, kashmiri red chilli, ginger-garlic paste', price: '£7.00', meal: '£8.50', emoji: '🌯' },
  { name: 'Achari Paneer Wrap', cat: 'wraps', badge: 'Veg', badgeColor: 'bg-olive/30 text-olive', desc: 'Paneer marinated in pickling spices and mango pickle oil', price: '£7.00', meal: '£8.50', emoji: '🫙' },
  { name: 'Paneer Makhni (Butter) Wrap', cat: 'wraps', badge: 'Veg', badgeColor: 'bg-olive/30 text-olive', desc: 'Paneer, tomato makhni sauce, fresh cream, butter, onions, lettuce', price: '£7.00', meal: '£8.50', emoji: '🧈' },
  { name: 'Chilli Paneer Wrap', cat: 'wraps', badge: 'Veg · Popular', badgeColor: 'bg-rust/30 text-rust', desc: 'Batter-fried paneer tossed in a dark soy sauce, vinegar and green chilli glaze', price: '£7.00', meal: '£8.50', emoji: '🌶️' },
  { name: 'The Bhurji Blast', cat: 'wraps', badge: 'Veg', badgeColor: 'bg-olive/30 text-olive', desc: 'Fresh crumbled paneer, tadka with onion, green chilli, tomatoes', price: '£7.00', meal: '£8.50', emoji: '🥘' },
  { name: 'The Achari Crunch', cat: 'wraps', badge: 'Chicken', badgeColor: 'bg-gold/30 text-gold', desc: 'Chicken with pickling spices and fresh salad', price: '£7.00', meal: '£8.50', emoji: '🍗', note: 'Upgrade to Egg-Maha Roll +£1' },
  { name: 'The Butter Bliss', cat: 'wraps', badge: 'Chicken', badgeColor: 'bg-gold/30 text-gold', desc: 'A creamy, mild butter chicken wrap', price: '£7.00', meal: '£8.50', emoji: '🍗' },
  { name: 'The Broadway Bhuna', cat: 'wraps', badge: 'Chicken', badgeColor: 'bg-gold/30 text-gold', desc: 'A rich, slow cooked chicken wrap', price: '£7.00', meal: '£8.50', emoji: '🍗' },
  { name: 'Chicken/Lamb Kabab', cat: 'wraps', badge: 'Popular', badgeColor: 'bg-rust/30 text-rust', desc: 'Juicy seekh kabab in a warm wrap', price: '£6.50', meal: '£8.00', emoji: '🥩' },
  // Burgers
  { name: 'Peri Peri Chicken Burger', cat: 'burgers', badge: 'Popular', badgeColor: 'bg-rust/30 text-rust', desc: 'Flame-grilled with spicy peri peri', price: '£4.50', meal: '£6.00', emoji: '🍔' },
  { name: 'Cheeseburger', cat: 'burgers', badge: 'Classic', badgeColor: 'bg-gold/30 text-gold', desc: 'Juicy beef patty with melted cheese', price: '£4.50', meal: '£6.00', emoji: '🍔' },
  { name: 'Quarter Pounder', cat: 'burgers', badge: 'Popular', badgeColor: 'bg-rust/30 text-rust', desc: 'Thick-cut quarter pound beef patty', price: '£5.00', meal: '£6.50', emoji: '🍔' },
  { name: 'Half Pounder', cat: 'burgers', badge: 'Beast Mode', badgeColor: 'bg-rust/30 text-rust', desc: 'For the truly hungry — half pound beef', price: '£6.00', meal: '£7.50', emoji: '🍔' },
];

const tabs: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: '🍟 Fries', value: 'fries' },
  { label: '🌯 Wraps', value: 'wraps' },
  { label: '🍔 Burgers', value: 'burgers' },
];

export default function FullMenu() {
  const [active, setActive] = useState<Category>('all');
  const ref = useScrollReveal();

  const filtered = active === 'all' ? menuItems : menuItems.filter((m) => m.cat === active);

  return (
    <section id="menu" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <div className="text-center mb-12 reveal-item">
          <span className="text-gold font-script text-lg">Everything We Serve</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-cream mt-2">
            Full <span className="text-gold">Menu</span>
          </h2>
          <p className="text-warm-cream/40 mt-3">All prices shown as Single / Meal</p>
        </div>

        <div className="reveal-item flex flex-wrap justify-center gap-3 mb-10" data-delay="100">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                active === tab.value
                  ? 'bg-rust text-primary-foreground shadow-lg shadow-rust/20'
                  : 'bg-warm-cream/5 text-warm-cream/60 hover:bg-warm-cream/10 border border-warm-cream/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="bg-dark-card rounded-xl p-5 hover:bg-dark-card/80 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 border border-warm-cream/5"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-warm-cream text-sm">{item.name}</h4>
                  <span className={`inline-block ${item.badgeColor} text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 mb-1`}>
                    {item.badge}
                  </span>
                  <p className="text-warm-cream/40 text-xs leading-relaxed">{item.desc}</p>
                  {item.note && <p className="text-gold/50 text-[10px] mt-1">↗ {item.note}</p>}
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-gold font-bold text-sm">{item.price}</p>
                  <p className="text-warm-cream/30 text-[10px]">Meal {item.meal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
