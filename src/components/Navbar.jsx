import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-bgLight transition-shadow duration-300 ${
        scrolled ? 'shadow-md border-b border-inkBlack/10' : 'border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="text-xl font-bold text-inkBlack"
        >
          Piash<span className="text-brandOrange">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="text-sm font-medium text-inkBlack hover:text-brandOrange transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-flex items-center bg-inkBlack text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brandOrange transition-colors"
        >
          Hire Me
        </button>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden text-inkBlack"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden w-full bg-bgLight border-t border-inkBlack/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="block text-base font-medium text-inkBlack hover:text-brandOrange transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-center bg-inkBlack text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brandOrange transition-colors"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
