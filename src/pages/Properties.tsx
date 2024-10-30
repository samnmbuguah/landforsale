import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { properties } from '@/data/properties';

const Properties = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Available Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-2xl font-semibold">${property.price.toLocaleString()}</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{property.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{property.acreage} acres • {property.county}</p>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{property.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;