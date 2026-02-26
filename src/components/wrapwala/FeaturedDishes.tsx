import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Dish {
  name: string;
  tag: string;
  tagColor: string;
  desc: string;
  price: string;
  meal: string;
  emoji: string;
  tall?: boolean;
}

const dishes: Dish[] = [
  { name: 'OG Paneer Tikka Wrap', tag: 'Veg · Bestseller', tagColor: 'bg-olive/20 text-olive', desc: 'Grilled paneer, fresh salad, tangy chutney & spices in a warm wrap', price: '£7.00', meal: '£8.50', emoji: '🌯', tall: true },
  { name: 'Falafel Special', tag: 'Veg', tagColor: 'bg-olive/20 text-olive', desc: 'Crispy falafel with hummus, pickled onions & tahini', price: '£5.00', meal: '£6.50', emoji: '🧆' },
  { name: 'Chilli Paneer Wrap', tag: 'Veg · Popular', tagColor: 'bg-rust/20 text-rust', desc: 'Indo-Chinese fusion — fiery, tangy, irresistible', price: '£7.00', meal: '£8.50', emoji: '🌶️' },
  { name: 'The Butter Bliss', tag: 'Chicken', tagColor: 'bg-gold/20 text-gold', desc: 'Butter chicken-inspired wrap with creamy makhani sauce', price: '£7.00', meal: '£8.50', emoji: '🍗' },
  { name: 'Peri Peri Chicken Burger', tag: 'Popular', tagColor: 'bg-rust/20 text-rust', desc: 'Flame-grilled peri peri chicken with spicy mayo', price: '£4.50', meal: '£6.00', emoji: '🍔' },
];

export default function FeaturedDishes() {
  const ref = useScrollReveal();
  const [added, setAdded] = useState<Set<number>>(new Set());

  const handleAdd = (i: number) => {
    setAdded((prev) => new Set(prev).add(i));
    setTimeout(() => {
      setAdded((prev) => {
        const next = new Set(prev);
        next.delete(i);
        return next;
      });
    }, 1500);
  };

  return (
    <section id="dishes" className="py-20 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <div className="text-center mb-12 reveal-item">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-deep-brown">
            Our Most <span className="text-rust">Loved</span> Dishes
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">Fan favourites that keep London coming back for more</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, i) => (
            <div
              key={i}
              className={`reveal-item group relative bg-gradient-to-br from-deep-brown to-dark-surface rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                dish.tall ? 'md:row-span-2 flex flex-col justify-between' : ''
              }`}
              data-delay={`${i * 100}`}
            >
              <div>
                <div className={`text-center mb-4 ${dish.tall ? 'text-9xl py-8' : 'text-6xl py-4'}`}>
                  {dish.emoji}
                </div>
                <span className={`inline-block ${dish.tagColor} text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                  {dish.tag}
                </span>
                <h3 className="font-display text-warm-cream text-xl font-bold mb-2">{dish.name}</h3>
                <p className="text-warm-cream/50 text-sm">{dish.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-gold font-bold text-lg">{dish.price}</span>
                  <span className="text-warm-cream/40 text-xs ml-2">Meal {dish.meal}</span>
                </div>
                <button
                  onClick={() => handleAdd(i)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all ${
                    added.has(i)
                      ? 'bg-olive text-primary-foreground scale-110'
                      : 'bg-warm-cream/10 text-warm-cream hover:bg-rust hover:text-primary-foreground'
                  }`}
                >
                  {added.has(i) ? '✓' : '+'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
