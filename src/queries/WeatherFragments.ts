import { gql } from '@apollo/client';

export const WeatherFragments = {
  temperature: gql`
    fragment temperature on Temperature {
      day
      min
      max
    }
  `,
  cityInfo: gql`
    fragment cityInfo on CityInfo {
      name
      country
      lat
      lon
    }
  `,
};
