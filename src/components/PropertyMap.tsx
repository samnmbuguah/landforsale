import React from 'react';

interface PropertyMapProps {
  location: {
    latitude: number;
    longitude: number;
  };
}

const PropertyMap = ({ location }: PropertyMapProps) => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d${location.longitude}!3d${location.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA3JzM0LjQiTiAxMDbCsDA3JzM0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890`;

  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default PropertyMap;