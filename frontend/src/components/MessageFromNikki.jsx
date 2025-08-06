import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Play, ExternalLink } from 'lucide-react';
import { mockData } from '../mock';

const MessageFromNikki = () => {
  const { instructor } = mockData;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openVideo = () => {
    // In a real implementation, this would open a video modal
    setIsVideoOpen(true);
    console.log('Opening video:', instructor.videoId);
  };

  return (
    <section id="message" className="py-20 bg-gradient-to-br from-sage-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            A Message from {instructor.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover why the Élevé Leadership Retreat was created and how it can transform 
            your leadership journey in this personal message from our founder.
          </p>
          <div className="w-24 h-1 bg-sage-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Video */}
          <div className="order-2 lg:order-1">
            <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div 
                  className="relative h-80 bg-gradient-to-br from-sage-600 to-sage-800 flex items-center justify-center cursor-pointer group"
                  onClick={openVideo}
                >
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">{instructor.name}</h3>
                    <p className="text-sage-200">Personal Message Video</p>
                    <p className="text-sm text-sage-300 mt-2">Coming Soon</p>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 rounded-full p-4">
                        <Play className="w-6 h-6 text-sage-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6 bg-white">
                  <div className="text-center text-gray-500 mb-4">
                    <span className="inline-flex items-center space-x-2 text-sm">
                      <Play className="w-4 h-4" />
                      <span>Personal video message coming soon</span>
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 text-center">
                    To add your video: Update the videoId in mock.js with your YouTube, Vimeo, or direct video URL
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Main Message */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                "{instructor.message}"
              </blockquote>
            </div>

            {/* Key Points */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Why Élevé Was Created</h4>
                <p className="text-gray-600">
                  Discover the inspiration behind this transformative retreat and how it addresses 
                  the unique challenges facing today's leaders.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Community as Medicine</h4>
                <p className="text-gray-600">
                  Learn how connecting with fellow leaders in a sacred space can heal leadership 
                  fatigue and reignite your passion.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Your Leadership Recalibration</h4>
                <p className="text-gray-600">
                  Understand how lifestyle disruption combined with enriched experiences can 
                  transform your approach to leadership.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('newsletter')}
              >
                Ready to Begin Your Journey?
              </Button>
            </div>
          </div>
        </div>

        {/* About Nikki Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
              About {instructor.name}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {instructor.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-2 border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                onClick={() => window.open(instructor.website, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More About Nikki
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                onClick={() => window.open(instructor.project, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                The Statements Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromNikki;