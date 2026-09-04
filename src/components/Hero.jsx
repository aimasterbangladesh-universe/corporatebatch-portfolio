import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import content from '../data/content';

// lucide-react dropped brand/logo icons (Linkedin, Twitter, etc.); this is a
// stand-in drawn in the same style so it matches the rest of the icon set.
function LinkedinIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
    </svg>
  );
}

const badgeColors = ['bg-inkBlack', 'bg-brandOrange'];

const badgePositions = [
  'top-2 -left-6 md:-left-10',
  'top-1/4 -right-6 md:-right-12',
  'top-1/2 -left-10 md:-left-16',
  'bottom-10 -right-4 md:-right-10',
  'bottom-0 left-1/4',
];

function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        {/* Text column */}
        <div className="order-2 md:order-1">
          <p className="text-brandOrange font-semibold mb-4">— Hello There!</p>

          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-inkBlack">I'm </span>
            <span className="text-brandOrange">{content.shortName}</span>
          </h1>

          <p className="text-lg text-grayText mb-3">{content.tagline}</p>
          <p className="text-sm text-grayText mb-8">{content.heroCredibility}</p>

          {/* Stats callout */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-white border border-inkBlack/10 rounded-2xl px-6 py-4 shadow-sm">
              <p className="text-2xl font-extrabold text-inkBlack">
                {content.stats.campaigns}
              </p>
              <p className="text-xs text-grayText mt-1">{content.stats.campaignsLabel}</p>
            </div>
            <div className="bg-white border border-inkBlack/10 rounded-2xl px-6 py-4 shadow-sm">
              <p className="text-2xl font-extrabold text-inkBlack">
                {content.stats.adSpend}
              </p>
              <p className="text-xs text-grayText mt-1">{content.stats.adSpendLabel}</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-brandOrange text-white text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              View Services <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center bg-white border border-inkBlack text-inkBlack text-sm font-semibold px-6 py-3 rounded-full hover:bg-inkBlack hover:text-white transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Follow us */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-grayText uppercase tracking-wide">
              Follow Us On
            </span>
            <a
              href={content.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-inkBlack/20 text-inkBlack hover:bg-inkBlack hover:text-white transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>

        {/* Photo column */}
        <div className="order-1 md:order-2 flex flex-col items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Photo placeholder: to use a real photo, replace the <User> icon block
                below with `<img src="/profile.png" alt={content.name} className="w-full h-full object-cover rounded-full" />` */}
            <div className="w-full h-full rounded-full bg-brandOrange flex items-center justify-center overflow-hidden">
              <User size={140} className="text-white/90" strokeWidth={1.5} />
            </div>

            {/* Available for Work badge */}
            <div className="absolute -top-2 -right-2 md:top-0 md:-right-6 w-24 h-24 rounded-full bg-white border-2 border-inkBlack flex items-center justify-center text-center p-2">
              <span className="text-[11px] font-bold text-inkBlack leading-tight">
                Available for Work
              </span>
            </div>

            {/* Floating skill badges - desktop */}
            <div className="hidden md:block">
              {content.skillTags.map((tag, i) => (
                <span
                  key={tag}
                  className={`absolute ${badgePositions[i % badgePositions.length]} ${
                    badgeColors[i % badgeColors.length]
                  } text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md whitespace-nowrap`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Floating skill badges - mobile, wrapped row below photo */}
          <div className="md:hidden flex flex-wrap justify-center gap-2 mt-8 px-4">
            {content.skillTags.map((tag, i) => (
              <span
                key={tag}
                className={`${badgeColors[i % badgeColors.length]} text-white text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
