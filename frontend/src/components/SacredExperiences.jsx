import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const SacredExperiences = () => {
  const { sacredExperiences } = mockData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sacred-experiences" className="py-20 bg-gradient-to-br from-gray-50 to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Three Sacred Experiences
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Transform, inspire, and activate your leadership through immersive experiences 
            designed to reconnect you with your authentic power.
          </p>
          <div className="w-24 h-1 bg-sage-500 mx-auto"></div>
        </div>

        {/* Experiences Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {sacredExperiences.map((experience) => (
            <Card key={experience.id} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden group">
              {/* Image */}
              <div 
                className="h-64 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url('${experience.image}')` }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                    {experience.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                  {experience.description}
                </p>
                
                <blockquote className="text-sage-700 italic font-medium text-center border-t border-sage-200 pt-6">
                  "{experience.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            "Ready to dance with your destiny?"
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            These three transformative experiences await you in the sacred spaces of Tulum. 
            Your leadership evolution begins here.
          </p>
          <Button 
            size="lg" 
            className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('investment')}
          >
            Begin Your Transformation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SacredExperiences;