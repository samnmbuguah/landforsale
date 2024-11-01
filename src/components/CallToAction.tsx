import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import siteConfig from '@/config/site.json';

const CallToAction = () => {
  const { phoneNumber } = siteConfig.contact;

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Button 
      onClick={handleCall}
      className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
      size="lg"
    >
      <Phone className="h-5 w-5" />
      <span>Call {phoneNumber}</span>
    </Button>
  );
};

export default CallToAction;