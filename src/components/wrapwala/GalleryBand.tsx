import galleryMarination from '@/assets/gallery-marination.webp';
import heroFries from '@/assets/hero-fries.webp';
import galleryIngredients from '@/assets/gallery-ingredients.webp';
import galleryBhurji from '@/assets/gallery-bhurji.webp';
import galleryCart from '@/assets/gallery-cart.webp';

const items = [
  { label: 'Paneer Marination', image: galleryMarination },
  { label: 'Loaded Fries', image: heroFries },
  { label: 'Fresh Ingredients', image: galleryIngredients },
  { label: 'The Bhurji Blast', image: galleryBhurji },
  { label: 'Street Cart Vibes', image: galleryCart },
];

export default function GalleryBand() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 w-full">
      {items.map((item, i) => (
        <div
          key={i}
          className="relative h-[200px] md:h-[340px] overflow-hidden group cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.label}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-deep-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-warm-cream font-display font-bold text-lg text-center px-2">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
