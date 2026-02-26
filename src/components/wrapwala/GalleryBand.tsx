const items = [
  { label: 'Paneer Marination', emoji: '🧈', bg: 'from-rust/80 to-deep-brown' },
  { label: 'Loaded Fries', emoji: '🍟', bg: 'from-gold/80 to-deep-brown' },
  { label: 'Fresh Ingredients', emoji: '🥬', bg: 'from-olive/80 to-deep-brown' },
  { label: 'The Bhurji Blast', emoji: '🥚', bg: 'from-rust/80 to-dark-surface' },
  { label: 'Street Cart Vibes', emoji: '🛒', bg: 'from-gold/80 to-dark-surface' },
];

export default function GalleryBand() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 w-full">
      {items.map((item, i) => (
        <div
          key={i}
          className={`relative h-[200px] md:h-[340px] bg-gradient-to-br ${item.bg} overflow-hidden group cursor-pointer`}
        >
          <div className="absolute inset-0 flex items-center justify-center text-7xl md:text-8xl transition-transform duration-500 group-hover:scale-125">
            {item.emoji}
          </div>
          <div className="absolute inset-0 bg-deep-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-warm-cream font-display font-bold text-lg">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
