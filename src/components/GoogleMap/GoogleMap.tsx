import React from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';

//import { config } from 'config/config';
import { config } from '../../config/config';

interface MarkerProps {
  geo_lat: number;
  geo_lon: number;
  //children: React.ReactNode;
}

export const GoogleMap: React.FC<MarkerProps> = ({
  geo_lat = config.geoLocation.LOS_ANGELES.lat,
  geo_lon = config.geoLocation.LOS_ANGELES.lon,
  //children,
}) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyAPKgh62z98ndo0oHyZF6SqNb-2EsxwmHI',
      }}
      center={{ lat: geo_lat, lng: geo_lon }}
      zoom={10}
    >
      <RoomIcon />
    </GoogleMapReact>
  );
};
