import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { mockData, selectPlan } from '../mock';
import { useToast } from '../hooks/use-toast';

const Investment = () => {
  const { pricingPlans } = mockData;
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSelectPlan = async (planId) => {
    setLoading(true);
    try {
      const result = await selectPlan(planId);
      setSelectedPlan(planId);
      toast({
        title: "Plan Selected!",
        description: result.message,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to select plan. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="investment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Investment Options
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Choose your path to transformation. Every option includes the complete Élevé experience 
            with accommodations, meals, and your personal Leadership Legacy Video Series.
          </p>
          <div className="w-24 h-1 bg-sage-500 mx-auto"></div>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative shadow-lg hover:shadow-2xl transition-all duration-300 border-2 rounded-2xl overflow-hidden ${
                selectedPlan === plan.id ? 'border-sage-500 ring-2 ring-sage-200' : 'border-gray-200 hover:border-sage-300'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge 
                    className={`${
                      plan.badge === 'Most Popular' 
                        ? 'bg-orange-500 hover:bg-orange-600' 
                        : plan.badge === 'Best Value'
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-sage-500 hover:bg-sage-600'
                    } text-white`}
                  >
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold text-sage-600 mb-1">
                    {plan.price}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {plan.payments} • Total: {plan.total}
                  </p>
                  {plan.savings && (
                    <p className="text-green-600 text-sm font-medium mt-2">
                      {plan.savings}
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Select Button */}
                <Button 
                  className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-sage-700 hover:bg-sage-800 text-white'
                      : 'bg-sage-600 hover:bg-sage-700 text-white hover:scale-105'
                  }`}
                  onClick={() => handleSelectPlan(plan.id)}
                  disabled={loading}
                >
                  {selectedPlan === plan.id ? 'Selected ✓' : 'Select This Plan'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Included */}
        <div className="bg-sage-50 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-8 text-center">
            What's Included in Every Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "5-Night/6 day immersive experience in all-inclusive luxury",
              "Accommodations: designer villas with private spaces",
              "Deeply Spiritual retreat spaces under the jungle canopy",
              "Curated group adventures and excursions",
              "Designer leadership activations for breakthroughs",
              "Immersive workshops to heal, renew & forge a new way forward",
              "Daily mind-body-heart experiences",
              "Daily world class cuisine experiences",
              "The culminating pinnacle of our Retreat: your own personal Leadership Legacy Video Series in evocative Leadership Brand videos revealing your evolved leadership brilliance in an heirloom quality, cinematic brand asset"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <blockquote className="text-2xl md:text-3xl italic text-gray-700 mb-8">
            "Ready to invest in your leadership transformation?"
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('message')}
            >
              I'm Ready to Transform
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
              onClick={() => scrollToSection('message')}
            >
              Learn More About Nikki
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;