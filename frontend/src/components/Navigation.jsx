import React from 'react';
import { Button } from './ui/button';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">NLC</span>
            </div>
            <div className="text-white">
              <div className="font-semibold">Nikki Le Consultancy</div>
              <div className="text-xs opacity-75">Statements Strong Academy</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-sage-200 transition-colors text-sm">
              Return to TheStatementsProject.com
            </a>
            <a href="#" className="text-white hover:text-sage-200 transition-colors text-sm">
              Learn about Nikki Le
            </a>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-sage-600/80 hover:bg-sage-600 border-sage-500 text-white"
              >
                Login
              </Button>
              <Button 
                size="sm" 
                className="bg-sage-600 hover:bg-sage-700 text-white"
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white"
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;