export interface Property {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  description: string;
  acreage: number;
  county: string;
  zoning: string;
  access: string;
  elevation: number;
  amenities: string[];
  images: string[];
  location: {
    latitude: number;
    longitude: number;
  };
}