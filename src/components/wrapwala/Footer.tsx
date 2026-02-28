import logo from '@/assets/wrapwala-logo.jpeg';

const navLinks = ['Home', 'Dishes', 'Menu', 'Our Story', 'Find Us', 'Reviews', 'Feedback'];
const topPicks = ['OG Paneer Tikka', 'Chilli Paneer', 'Butter Bliss', 'Peri Peri Burger', 'Loaded Fries'];

export default function Footer() {
  return (
    <footer className="bg-deep-brown pt-16 pb-8 border-t border-warm-cream/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="WrapWala" className="h-14 w-auto object-contain" />
              <div>
                <span className="font-display text-xl font-bold text-warm-cream block">WrapWala</span>
                <span className="text-xs text-gold font-body">Fast · Fresh · Flavourful</span>
              </div>
            </div>
            <p className="text-warm-cream/40 text-sm leading-relaxed">
              London's favourite Indian-inspired street food. Bold flavours, fresh ingredients, rolled with love.
            </p>
            <div className="flex gap-3 mt-4">
              {['📸', '🐦', '📘'].map((icon, i) => (
                <span key={i} className="w-9 h-9 rounded-full bg-warm-cream/5 flex items-center justify-center text-lg cursor-pointer hover:bg-rust transition-colors border border-warm-cream/10">
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-display font-bold text-warm-cream mb-4">Navigate</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-warm-cream/40 text-sm hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Picks */}
          <div>
            <h4 className="font-display font-bold text-warm-cream mb-4">Top Picks</h4>
            <ul className="space-y-2">
              {topPicks.map((pick) => (
                <li key={pick}>
                  <span className="text-warm-cream/40 text-sm">{pick}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-warm-cream mb-4">Contact</h4>
            <ul className="space-y-2 text-warm-cream/40 text-sm">
              <li>📍 London Street Food Markets</li>
              <li>📸 @WrapWala</li>
              <li>📧 hello@wrapwala.co.uk</li>
              <li>🕐 Thurs–Sun: 11AM – 9PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-cream/20 text-xs">© 2024 WrapWala. All rights reserved.</p>
          <p className="text-warm-cream/20 text-xs">Made with ♥ for London's food lovers</p>
        </div>
      </div>
    </footer>
  );
}