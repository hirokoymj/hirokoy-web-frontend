import React, { FC } from 'react';
import GoogleMapReact from 'google-map-react';

//import { config } from 'config/config';
import { config } from '../../config/config';

interface MarkerProps {
  center: { lat: number; lng: number };
  zoom: number;
  geo_lat: number;
  geo_lon: number;
  children: React.ReactNode;
}

export const GoogleMap: FC<MarkerProps> = ({
  center,
  zoom = 10,
  geo_lat = config.geoLocation.LOS_ANGELES.lat,
  geo_lon = config.geoLocation.LOS_ANGELES.lon,
  children,
}) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyAPKgh62z98ndo0oHyZF6SqNb-2EsxwmHI',
      }}
      defaultCenter={center}
      defaultZoom={zoom}
      center={{ lat: geo_lat, lng: geo_lon }}
      zoom={zoom}
    >
      {children}
    </GoogleMapReact>
  );
};
