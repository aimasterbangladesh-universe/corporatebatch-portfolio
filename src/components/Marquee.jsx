const MARQUEE_ITEMS = [
  'Facebook Ads',
  'Video Editing',
  'Graphics Design',
  'Sales Funnel',
  'Business Growth',
];

function MarqueeContent({ ariaHidden }) {
  return (
    <div className="flex items-center shrink-0" aria-hidden={ariaHidden}>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="text-white font-bold uppercase text-lg sm:text-xl tracking-wide mx-4 sm:mx-6">
            {item}
          </span>
          <span className="text-brandOrange font-bold text-lg sm:text-xl">+</span>
        </span>
      ))}
    </div>
  );
}

function Marquee() {
  return (
    <div className="w-full bg-inkBlack py-5 sm:py-6 overflow-hidden group">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <MarqueeContent />
        <MarqueeContent ariaHidden="true" />
      </div>
    </div>
  );
}

export default Marquee;
