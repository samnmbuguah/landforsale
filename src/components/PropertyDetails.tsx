import React from 'react';
import { Check } from 'lucide-react';
import { Property } from '@/types/property';

interface PropertyDetailsProps {
  property: Property;
}

const PropertyDetails = ({ property }: PropertyDetailsProps) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold mb-4">Property Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {property.description}
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4">Property Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="flex justify-between text-gray-700">
              <span>Price:</span>
              <span className="font-semibold">${property.price.toLocaleString()}</span>
            </p>
            <p className="flex justify-between text-gray-700">
              <span>Acreage:</span>
              <span className="font-semibold">{property.acreage} acres</span>
            </p>
            <p className="flex justify-between text-gray-700">
              <span>County:</span>
              <span className="font-semibold">{property.county}</span>
            </p>
          </div>
          <div className="space-y-2">
            <p className="flex justify-between text-gray-700">
              <span>Zoning:</span>
              <span className="font-semibold">{property.zoning}</span>
            </p>
            <p className="flex justify-between text-gray-700">
              <span>Access:</span>
              <span className="font-semibold">{property.access}</span>
            </p>
            <p className="flex justify-between text-gray-700">
              <span>Elevation:</span>
              <span className="font-semibold">{property.elevation} ft</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4">Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {property.amenities.map((amenity, index) => (
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