import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import PropertyHero from "@/components/PropertyHero";
import PropertyGallery from "@/components/PropertyGallery";
import PropertyMap from "@/components/PropertyMap";
import PropertyDetails from "@/components/PropertyDetails";
import { properties } from "@/data/properties";

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
      <div className="container mx-auto px-4 py-4">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-4"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Properties
        </Button>
      </div>

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