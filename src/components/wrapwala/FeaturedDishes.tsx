import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import heroWrap from '@/assets/hero-wrap.webp';
import heroFries from '@/assets/hero-fries.webp';
import heroBurger from '@/assets/hero-burger.webp';
import galleryBhurji from '@/assets/gallery-bhurji.webp';
import galleryMarination from '@/assets/gallery-marination.webp';

interface Dish {
  name: string;
  tag: string;
  tagColor: string;
  desc: string;
  price: string;
  meal: string;
  image: string;
  tall?: boolean;
}

const dishes: Dish[] = [
  { name: 'OG Paneer Tikka Wrap', tag: 'Veg · Bestseller', tagColor: 'bg-olive/30 text-olive', desc: 'Cubes of paneer marinated in yogurt, kashmiri red chilli, ginger-garlic paste', price: '£7.00', meal: '£8.50', image: heroWrap, tall: true },
  { name: 'Falafel Special', tag: 'Veg', tagColor: 'bg-olive/30 text-olive', desc: 'Crispy falafel with hummus, pickled onions & tahini', price: '£5.00', meal: '£6.50', image: galleryMarination },
  { name: 'Chilli Paneer Wrap', tag: 'Veg · Popular', tagColor: 'bg-rust/30 text-rust', desc: 'Batter-fried paneer tossed in dark soy sauce, vinegar and green chilli glaze', price: '£7.00', meal: '£8.50', image: galleryBhurji },
  { name: 'The Butter Bliss', tag: 'Chicken', tagColor: 'bg-gold/30 text-gold', desc: 'A creamy, mild butter chicken wrap', price: '£7.00', meal: '£8.50', image: heroBurger },
  { name: 'Peri Peri Chicken Burger', tag: 'Popular', tagColor: 'bg-rust/30 text-rust', desc: 'Flame-grilled peri peri chicken with spicy mayo', price: '£4.50', meal: '£6.00', image: heroFries },
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
    <section id="dishes" className="py-20 bg-deep-brown">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <div className="text-center mb-12 reveal-item">
          <span className="text-gold font-script text-lg">Fan Favourites</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-cream mt-2">
            Our Most <span className="text-rust">Loved</span> Dishes
          </h2>
          <p className="text-warm-cream/40 mt-3 max-w-md mx-auto">The dishes that keep London coming back for more</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, i) => (
            <div
              key={i}
              className={`reveal-item group relative rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                dish.tall ? 'md:row-span-2' : ''
              }`}
              data-delay={`${i * 100}`}
            >
              <img
                src={dish.image}
                alt={dish.name}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${dish.tall ? 'h-full min-h-[400px]' : 'h-64'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-deep-brown/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className={`inline-block ${dish.tagColor} text-xs font-bold px-3 py-1 rounded-full mb-3 backdrop-blur-sm`}>
                  {dish.tag}
                </span>
                <h3 className="font-display text-warm-cream text-xl font-bold mb-1">{dish.name}</h3>
                <p className="text-warm-cream/50 text-sm">{dish.desc}</p>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <span className="text-gold font-bold text-lg">{dish.price}</span>
                    <span className="text-warm-cream/30 text-xs ml-2">Meal {dish.meal}</span>
                  </div>
                  <button
                    onClick={() => handleAdd(i)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all ${
                      added.has(i)
                        ? 'bg-olive text-primary-foreground scale-110'
                        : 'bg-warm-cream/10 text-warm-cream hover:bg-rust hover:text-primary-foreground backdrop-blur-sm'
                    }`}
                  >
                    {added.has(i) ? '✓' : '+'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
