import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Hero = () => {
  const { retreat } = mockData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1707782441431-8cc9867cd1d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxUdWx1bSUyMGNlbm90ZXxlbnwwfHx8fDE3NTQ1MDE3NjB8MA&ixlib=rb-4.1.0&q=85')`
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-wide">
          {retreat.title}
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-light italic mb-8 text-sage-200">
          {retreat.subtitle}
        </h2>
        
        {/* Date */}
        <p className="text-xl md:text-2xl mb-6 font-light">
          {retreat.dates}
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl italic mb-6 max-w-3xl mx-auto leading-relaxed text-gray-200">
          {retreat.description}
        </p>
        
        {/* Instructor */}
        <p className="text-lg mb-4 font-medium">
          {retreat.instructor}
        </p>
        
        {/* Location */}
        <p className="text-base mb-8 underline decoration-sage-400 underline-offset-4">
          {retreat.location}
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
          onClick={() => scrollToSection('target-audience')}
        >
          Begin Your Journey
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;