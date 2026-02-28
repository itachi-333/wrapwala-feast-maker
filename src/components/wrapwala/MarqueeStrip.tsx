const dishes = [
  'Paneer Tikka', 'Falafel Wrap', 'Chilli Paneer', 'Butter Bliss',
  'Masala Fries', 'Loaded Fries', 'Peri Peri Burger', 'Quarter Pounder',
  'Achari Paneer', 'Bhurji Blast', 'Broadway Bhuna', 'Cheesy Fries',
];

export default function MarqueeStrip() {
  const content = dishes.map((d) => `${d}  ✦  `).join('');
  return (
    <div className="gradient-rust overflow-hidden py-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-rust via-transparent to-rust z-10 pointer-events-none" />
      <div className="marquee-scroll whitespace-nowrap text-primary-foreground/90 font-body font-semibold text-sm tracking-wider">
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}