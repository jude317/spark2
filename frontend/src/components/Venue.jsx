import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Venue = () => {
  const { venue } = mockData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="venue" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 tracking-wide">
            <a href={venue.website} className="hover:text-sage-700 transition-colors underline decoration-sage-400 underline-offset-8">
              {venue.name}
            </a>
          </h2>
          <p className="text-xl text-gray-600 mb-2">{venue.location}</p>
          <p className="text-lg italic text-sage-600 mb-8">{venue.translation}</p>
          <div className="w-24 h-1 bg-sage-500 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div 
              className="rounded-lg overflow-hidden shadow-2xl h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/33326668/pexels-photo-33326668.jpeg')`
              }}
            >
              <div className="h-full bg-black/20 flex items-end p-6">
                <p className="text-white text-lg font-medium">Experience Earth's Origin</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <blockquote className="text-xl md:text-2xl italic text-gray-700 leading-relaxed">
              "{venue.description}"
            </blockquote>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {venue.tagline}
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {venue.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-sage-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
            Experience Earth's Origin
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Kaaba Luum is the perfect property for the Élevé Retreat - where luxury meets nature, 
            and transformation meets tranquility.
          </p>
          <Button 
            size="lg" 
            className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('sacred-experiences')}
          >
            Explore the Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Venue;