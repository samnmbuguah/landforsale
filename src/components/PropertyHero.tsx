import React from 'react';

const PropertyHero = () => {
  return (
    <div className="relative h-[70vh] w-full">
      <img
        src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
        alt="Beautiful property landscape"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4">Mountain View Estate</h1>
        <p className="text-xl mb-6">40 Acres of Pristine Mountain Property</p>
        <p className="text-3xl font-semibold">$450,000</p>
      </div>
    </div>
  );
};

export default PropertyHero;