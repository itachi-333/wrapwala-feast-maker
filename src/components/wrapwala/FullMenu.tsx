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
}

const menuItems: MenuItem[] = [
  { name: 'Plain/Masala Fries', cat: 'fries', badge: 'Veg', badgeColor: 'bg-olive/20 text-olive', desc: 'Classic or spiced — your call', price: '£2.00', meal: '£2.50', emoji: '🍟' },
  { name: 'Cheesy Fries', cat: 'fries', badge: 'Veg', badgeColor: 'bg-olive/20 text-olive', desc: 'Loaded with melted cheese', price: '£2.50', meal: '£3.00', emoji: '🧀' },
  { name: 'Loaded Fries', cat: 'fries', badge: 'Veg · Popular', badgeColor: 'bg-rust/20 text-rust', desc: 'The works — cheese, jalapeños, sauces', price: '£4.00', meal: '£4.50', emoji: '🍟' },
  { name: 'Marinated Onion Egg Wrap', cat: 'wraps', badge: 'Veg', badgeColor: 'bg-olive/20 text-olive', desc: 'Tangy marinated onions with fluffy egg', price: '£5.00', meal: '£6.50', emoji: '🥚', note: 'Egg-Maha Roll +£1' },
  { name: 'Falafel Special', cat: 'wraps', badge: 'Veg', badgeColor: 'bg-olive/20 text-olive', desc: 'Crispy falafel, hummus & tahini', price: '£5.00', meal: '£6.50', emoji: '🧆' },
  { name: 'OG Paneer Tikka', cat: 'wraps', badge: 'Veg · Bestseller', badgeColor: 'bg-olive/20 text-olive', desc: 'Grilled paneer with signature spices', price: '£7.00', meal: '£8.50', emoji: '🌯' },
  { name: 'Achari Paneer', cat: 'wraps', badge: 'Veg', badgeColor: 'bg-olive/20 text-olive', desc: 'Pickle-spiced paneer — tangy & bold', price: '£7.00', meal: '£8.50', emoji: '🫙' },
  { name: 'Paneer Makhni (Butter)', cat: 'wraps', badge: 'Veg', badgeColor: 'bg-olive/20 text-olive', desc: 'Creamy makhani-style paneer wrap', price: '£7.00', meal: '£8.50', emoji: '🧈' },
  { name: 'Chilli Paneer', cat: 'wraps', badge: 'Veg · Popular', badgeColor: 'bg-rust/20 text-rust', desc: 'Indo-Chinese fusion — spicy & tangy', price: '£7.00', meal: '£8.50', emoji: '🌶️' },
  { name: 'The Bhurji Blast', cat: 'wraps', badge: 'Veg', badgeColor: 'bg-olive/20 text-olive', desc: 'Spiced scrambled paneer bhurji', price: '£7.00', meal: '£8.50', emoji: '🥘' },
  { name: 'The Achari Crunch (Chicken)', cat: 'wraps', badge: 'Chicken', badgeColor: 'bg-gold/20 text-gold', desc: 'Pickle-spiced chicken with crunch', price: '£7.00', meal: '£8.50', emoji: '🍗' },
  { name: 'The Butter Bliss (Chicken)', cat: 'wraps', badge: 'Chicken', badgeColor: 'bg-gold/20 text-gold', desc: 'Butter chicken-inspired wrap', price: '£7.00', meal: '£8.50', emoji: '🍗' },
  { name: 'The Broadway Bhuna (Chicken)', cat: 'wraps', badge: 'Chicken', badgeColor: 'bg-gold/20 text-gold', desc: 'Rich bhuna-spiced chicken wrap', price: '£7.00', meal: '£8.50', emoji: '🍗' },
  { name: 'Chicken/Lamb Kabab', cat: 'wraps', badge: 'Popular', badgeColor: 'bg-rust/20 text-rust', desc: 'Juicy seekh kabab in a warm wrap', price: '£6.50', meal: '£8.00', emoji: '🥩' },
  { name: 'Peri Peri Chicken Burger', cat: 'burgers', badge: 'Popular', badgeColor: 'bg-rust/20 text-rust', desc: 'Flame-grilled with spicy peri peri', price: '£4.50', meal: '£6.00', emoji: '🍔' },
  { name: 'Cheeseburger', cat: 'burgers', badge: 'Classic', badgeColor: 'bg-gold/20 text-gold', desc: 'Juicy beef patty with melted cheese', price: '£4.50', meal: '£6.00', emoji: '🍔' },
  { name: 'Quarter Pounder', cat: 'burgers', badge: 'Popular', badgeColor: 'bg-rust/20 text-rust', desc: 'Thick-cut quarter pound beef patty', price: '£5.00', meal: '£6.50', emoji: '🍔' },
  { name: 'Half Pounder', cat: 'burgers', badge: 'Beast Mode', badgeColor: 'bg-rust/20 text-rust', desc: 'For the truly hungry — half pound beef', price: '£6.00', meal: '£7.50', emoji: '🍔' },
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
    <section id="menu" className="py-20 bg-deep-brown">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <div className="text-center mb-12 reveal-item">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-cream">
            Full <span className="text-gold">Menu</span>
          </h2>
          <p className="text-warm-cream/50 mt-3">Everything we serve, all in one place</p>
        </div>

        <div className="reveal-item flex flex-wrap justify-center gap-3 mb-10" data-delay="100">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                active === tab.value
                  ? 'bg-rust text-primary-foreground'
                  : 'bg-warm-cream/10 text-warm-cream/70 hover:bg-warm-cream/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.name}
              className="bg-dark-card rounded-xl p-5 hover:bg-dark-card/80 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{item.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-display font-bold text-warm-cream text-sm">{item.name}</h4>
                  </div>
                  <span className={`inline-block ${item.badgeColor} text-[10px] font-bold px-2 py-0.5 rounded-full mb-1`}>
                    {item.badge}
                  </span>
                  <p className="text-warm-cream/40 text-xs">{item.desc}</p>
                  {item.note && <p className="text-gold/60 text-[10px] mt-1">↗ {item.note}</p>}
                </div>
                <div className="text-right">
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
