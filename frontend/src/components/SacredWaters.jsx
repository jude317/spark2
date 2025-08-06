import React from 'react';
import { Button } from './ui/button';

const SacredWaters = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="sacred-waters"
      className="relative py-20 bg-sage-700 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white/30 rounded-full"></div>
        <div className="absolute top-20 right-12 w-12 h-12 border-2 border-white/20 rounded-full"></div>
        <div className="absolute bottom-16 left-16 w-16 h-16 border-2 border-white/25 rounded-full"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 border-2 border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Wave Icon */}
        <div className="mb-8 opacity-60">
          <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-center">
          The Sacred Waters of Tulum
        </h2>
        
        {/* Divider */}
        <div className="w-24 h-1 bg-white/60 mx-auto mb-12"></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            Hidden beneath the lush jungle canopy of Tulum lies one of nature's most breathtaking gifts—the cenotes. 
            These crystal-clear, freshwater pools are more than just natural wonders; they are sacred spaces long 
            revered by the Mayans as portals to the spiritual world and sources of profound renewal.
          </p>

          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            Immersing yourself in a cenote is like stepping into a living meditation—where time slows, the noise quiets, 
            and the energy around you begins to shift. With every gentle ripple, these healing waters invite you to 
            release, reconnect, and realign with your truest self.
          </p>

          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            At our retreat, the cenote experience is not just a swim—it's a ritual of rebirth. You'll be guided into 
            the serenity of stillness, surrounded by ancient limestone walls and dappled sunlight, as you let the 
            waters cleanse more than just your skin.
          </p>

          {/* Highlighted Statements */}
          <div className="my-12 space-y-4">
            <h3 className="text-2xl md:text-3xl font-light">This is where clarity surfaces.</h3>
            <h3 className="text-2xl md:text-3xl font-light">Where transformation begins.</h3>
            <h3 className="text-2xl md:text-3xl font-light">Where your leadership spirit remembers its rhythm.</h3>
          </div>

          <blockquote className="text-xl md:text-2xl italic opacity-95 max-w-3xl mx-auto leading-relaxed">
            "Join us in Tulum—and let the cenotes hold space for your healing, your elevation, and your return to self."
          </blockquote>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-sage-700 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('venue')}
          >
            Discover Your Sacred Journey
          </Button>
        </div>
      </div>

      {/* Decorative Sun Icon */}
      <div className="absolute top-8 right-8 opacity-30">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
        </svg>
      </div>
    </section>
  );
};

export default SacredWaters;