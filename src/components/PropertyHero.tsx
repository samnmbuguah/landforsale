import React from 'react';
import { Property } from '@/types/property';

interface PropertyHeroProps {
  property: Property;
}

const PropertyHero = ({ property }: PropertyHeroProps) => {
  return (
    <div className="relative h-[70vh] w-full">
      <img
        src={property.images[0]}
        alt={property.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4">{property.title}</h1>
        <p className="text-xl mb-6">{property.subtitle}</p>
        <p className="text-3xl font-semibold">${property.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PropertyHero;