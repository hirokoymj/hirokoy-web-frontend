import React, { FC } from 'react';
import GoogleMapReact from 'google-map-react';

//import { config } from 'config/config';
import { config } from '../../config/config';

interface MarkerProps {
  geo_lat: number;
  geo_lon: number;
  children: React.ReactNode;
}

export const GoogleMap: FC<MarkerProps> = ({
  geo_lat = config.geoLocation.LOS_ANGELES.lat,
  geo_lon = config.geoLocation.LOS_ANGELES.lon,
  children,
}) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyAPKgh62z98ndo0oHyZF6SqNb-2EsxwmHI',
      }}
      center={{ lat: geo_lat, lng: geo_lon }}
      zoom={10}
    >
      {children}
    </GoogleMapReact>
  );
};

// const MyComponent = () => {
//   render(
//     <Grid size={{ xs: 12, md: 7 }}>
//       <div
//         style={{
//           height: '100%',
//           width: '100%',
//         }}
//       >
//         <GoogleMap geo_lat={123} geo_lon={123}>
//           <RoomIcon color="error" fontSize="large" lat={lat} lng={lon} />
//         </GoogleMap>
//       </div>
//     </Grid>,
//   );
// };
