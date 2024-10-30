import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "mountain-view-estate",
    title: "Mountain View Estate",
    subtitle: "40 Acres of Pristine Mountain Property",
    price: 450000,
    description: "Discover this breathtaking 40-acre mountain property offering the perfect blend of accessibility and privacy. Situated in the heart of the Rocky Mountains, this pristine land features dramatic mountain views, a year-round stream, and abundant wildlife. The property includes a cleared building site with electricity available at the lot line, making it ready for your dream mountain home.",
    acreage: 40,
    county: "Mountain County",
    zoning: "Agricultural/Residential",
    access: "Year-round",
    elevation: 8500,
    amenities: [
      "Mountain Views",
      "Stream Access",
      "Electricity Available",
      "Road Access",
      "Building Site Ready",
      "Hunting Rights",
      "Mineral Rights Included",
      "No HOA Restrictions"
    ],
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed"
    ],
    location: {
      latitude: 39.123456,
      longitude: -106.123456
    }
  }
  // Add more properties here as needed
];