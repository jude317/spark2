import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { subscribeToNewsletter } from '../mock';
import { useToast } from '../hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !consent) {
      toast({
        title: "Required Fields Missing",
        description: "Please enter your email and accept the privacy policy.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const result = await subscribeToNewsletter(email);
      toast({
        title: "Subscribed!",
        description: result.message,
      });
      setEmail('');
      setConsent(false);
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-sage-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Let's Keep in Touch
          </h2>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Subscribe to our mailing list and receive the latest updates about the Élevé retreat, 
            leadership insights, and exclusive content from Nikki Le.
          </p>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
          <div className="mb-6">
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 px-6 text-lg rounded-full border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:border-white focus:bg-white/20 transition-all duration-300"
              required
            />
          </div>

          <div className="flex items-start space-x-3 mb-8 text-left">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={setConsent}
              className="mt-1 border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-sage-700"
            />
            <label htmlFor="consent" className="text-sm opacity-90 leading-relaxed cursor-pointer">
              By clicking this checkbox, you consent to receiving emails from this school or course. 
              We respect your privacy and will never share your information.
            </label>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="bg-white text-sage-700 hover:bg-gray-100 px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
          >
            {loading ? 'Subscribing...' : 'Subscribe to Updates'}
          </Button>
        </form>

        {/* Additional Info */}
        <div className="space-y-4 opacity-75 max-w-3xl mx-auto">
          <p className="text-sm">
            We respect your privacy and will only send you relevant updates about the retreat.
          </p>
          <p className="text-base">
            Join our community of transformational leaders who are committed to elevating their 
            leadership practice and creating positive impact in their organizations and communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;