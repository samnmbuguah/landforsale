import PropertyHero from "@/components/PropertyHero";
import PropertyGallery from "@/components/PropertyGallery";
import PropertyMap from "@/components/PropertyMap";
import PropertyDetails from "@/components/PropertyDetails";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PropertyHero />
      
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <PropertyGallery />
            <PropertyMap />
          </div>
          
          <PropertyDetails />
        </div>
      </div>
    </div>
  );
};

export default Index;