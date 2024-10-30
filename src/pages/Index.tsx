import { useParams, useNavigate } from "react-router-dom";
import PropertyHero from "@/components/PropertyHero";
import PropertyGallery from "@/components/PropertyGallery";
import PropertyMap from "@/components/PropertyMap";
import PropertyDetails from "@/components/PropertyDetails";
import { properties } from "@/data/properties";
import { useEffect } from "react";

const Index = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === id);

  useEffect(() => {
    if (!property) {
      navigate('/');
    }
  }, [property, navigate]);

  if (!property) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <PropertyHero property={property} />
      
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <PropertyGallery images={property.images} />
            <PropertyMap location={property.location} />
          </div>
          
          <PropertyDetails property={property} />
        </div>
      </div>
    </div>
  );
};

export default Index;