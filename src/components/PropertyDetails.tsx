import React from 'react';
import { Check } from 'lucide-react';

const amenities = [
  "Mountain Views",
  "Stream Access",
  "Electricity Available",
  "Road Access",
  "Building Site Ready",
  "Hunting Rights",
  "Mineral Rights Included",
  "No HOA Restrictions"
];

const PropertyDetails = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold mb-4">Property Description</h2>
        <p className="text-gray-700 leading-relaxed">
          Discover this breathtaking 40-acre mountain property offering the perfect blend of accessibility and privacy. 
          Situated in the heart of the Rocky Mountains, this pristine land features dramatic mountain views, a year-round 
          stream, and abundant wildlife. The property includes a cleared building site with electricity available at the lot line, 
          making it ready for your dream mountain home.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4">Property Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="flex justify-between text-gray-700">
              <span>Price:</span>
              <span className="font-semibold">$450,000</span>
            </p>
            <p className="flex justify-between text-gray-700">
              <span>Acreage:</span>
              <span className="font-semibold">40 acres</span>
            </p>
            <p className="flex justify-between text-gray-700">
              <span>County:</span>
              <span className="font-semibold">Mountain County</span>
            </p>
          </div>
          <div className="space-y-2">
            <p className="flex justify-between text-gray-700">
              <span>Zoning:</span>
              <span className="font-semibold">Agricultural/Residential</span>
            </p>
            <p className="flex justify-between text-gray-700">
              <span>Access:</span>
              <span className="font-semibold">Year-round</span>
            </p>
            <p className="flex justify-between text-gray-700">
              <span>Elevation:</span>
              <span className="font-semibold">8,500 ft</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4">Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="text-secondary" size={20} />
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;