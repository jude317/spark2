import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const TargetAudience = () => {
  const { targetAudience, testimonial } = mockData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="target-audience" className="py-20 bg-gradient-to-br from-gray-50 to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            The Perfect Human for Our Retreat
          </h2>
          <div className="w-24 h-1 bg-sage-500 mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {targetAudience.map((item) => (
            <Card key={item.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 rounded-lg overflow-hidden group">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-12 h-1 bg-sage-500 mx-auto mb-6 transition-all duration-300 group-hover:w-16"></div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <blockquote className="text-xl md:text-2xl italic text-gray-600 leading-relaxed mb-8">
            "{testimonial}"
          </blockquote>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('sacred-waters')}
          >
            Find Your Sacred Space
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;