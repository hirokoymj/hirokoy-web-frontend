import React from 'react';
import GoogleMapReact from 'google-map-react';
//import { config } from 'config/config';
import { config } from '../../config/config';

interface GoogleMapProps {
  lat: number;
  lng: number;
  children: React.ReactNode;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({
  lat = config.geoLocation.LOS_ANGELES.lat,
  lng = config.geoLocation.LOS_ANGELES.lon,
  children,
}) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyAPKgh62z98ndo0oHyZF6SqNb-2EsxwmHI',
      }}
      defaultCenter={{ lat, lng }}
      defaultZoom={10}
      center={{ lat, lng }}
      zoom={10}
    >
      {children}
    </GoogleMapReact>
  );
};
