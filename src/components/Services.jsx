import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import content from '../data/content';

function ServiceRow({ service, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-colors ${
        isOpen
          ? 'bg-inkBlack border-inkBlack text-white'
          : 'bg-white border-inkBlack/10 text-inkBlack hover:border-inkBlack/30'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-4 sm:gap-6">
          <span
            className={`text-sm font-semibold ${
              isOpen ? 'text-brandOrange' : 'text-grayText'
            }`}
          >
            {service.number}
          </span>
          <span className="text-lg sm:text-xl font-semibold">{service.title}</span>
        </span>
        <ChevronDown
          size={22}
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-brandOrange' : 'text-inkBlack'
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (service.tags || service.description) && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="relative px-6 pb-6 sm:px-8 sm:pb-8">
              <div className="absolute top-0 right-6 sm:right-8 w-10 h-10 rounded-full bg-brandOrange flex items-center justify-center">
                <ArrowUpRight size={18} className="text-white" />
              </div>

              {service.tags && (
                <div className="flex flex-wrap gap-2 mb-4 pr-14">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {service.description && (
                <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Services() {
  const initiallyOpen = content.services.find((s) => s.expanded)?.number ?? null;
  const [openNumber, setOpenNumber] = useState(initiallyOpen);

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-6xl mx-auto px-6 py-20 sm:py-28"
    >
      <p className="text-brandOrange font-semibold mb-4">— My Specialization</p>

      <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
        <span className="text-inkBlack">Services </span>
        <span className="text-brandOrange">I Provide</span>
      </h2>

      <p className="text-grayText max-w-xl mb-12">
        4+ years of hands-on experience across paid ads, funnels, and content production.
      </p>

      <div className="flex flex-col gap-4">
        {content.services.map((service) => (
          <ServiceRow
            key={service.number}
            service={service}
            isOpen={openNumber === service.number}
            onToggle={() =>
              setOpenNumber((current) => (current === service.number ? null : service.number))
            }
          />
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 bg-inkBlack text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-brandOrange transition-colors"
        >
          View All Services <span aria-hidden="true">→</span>
        </a>
      </div>
    </motion.section>
  );
}

export default Services;
