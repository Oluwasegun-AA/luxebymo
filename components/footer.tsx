import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ]
};

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-light tracking-widest uppercase mb-4">LUXEBYMO</h3>
            <p className="text-sm opacity-70 font-light">
              Redefining luxury for the modern world.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-light tracking-wide uppercase text-xs mb-4 opacity-70">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm opacity-60 hover:opacity-100 transition-opacity font-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm opacity-60 font-light">
            © 2025 Luxebymo. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
