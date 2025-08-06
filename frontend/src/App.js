import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TargetAudience from "./components/TargetAudience";
import SacredWaters from "./components/SacredWaters";
import Venue from "./components/Venue";
import SacredExperiences from "./components/SacredExperiences";
import Investment from "./components/Investment";
import MessageFromNikki from "./components/MessageFromNikki";
import Newsletter from "./components/Newsletter";
import { Toaster } from "./components/ui/toaster";

const EleveRetreat = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TargetAudience />
      <SacredWaters />
      <Venue />
      <SacredExperiences />
      <Investment />
      <MessageFromNikki />
      <Newsletter />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-2">
            <img 
              src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4" 
              alt="Emergent" 
              className="w-6 h-6"
            />
            <a
              href="https://app.emergent.sh/?utm_source=emergent-badge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Made with Emergent
            </a>
          </div>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EleveRetreat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
