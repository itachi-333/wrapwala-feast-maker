const dishes = [
  'Paneer Tikka', 'Falafel Special', 'Chilli Paneer', 'Butter Bliss',
  'Masala Fries', 'Loaded Fries', 'Peri Peri Burger', 'Quarter Pounder',
  'Achari Paneer', 'Bhurji Blast', 'Broadway Bhuna', 'Cheesy Fries',
];

export default function MarqueeStrip() {
  const content = dishes.map((d) => `${d} · `).join('');
  return (
    <div className="bg-rust overflow-hidden py-4">
      <div className="marquee-scroll whitespace-nowrap text-primary-foreground font-body font-semibold text-sm tracking-wider">
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}
