import React from 'react';
import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { makeStyles } from 'tss-react/mui';

import { DAILY_FORECAST } from 'queries/Weather';
import { DailyForecastSkeleton } from 'components/Skeleton/WeatherSkeleton';

const useStyles = makeStyles()(() => ({
  forecastDate: {
    width: '20%',
    textAlign: 'center',
  },
  weather: {
    width: '20%',
    textAlign: 'center',
  },
  tempHigh: {
    width: '10%',
    textAlign: 'center',
    color: '#f44336',
  },
  tempLow: {
    width: '10%',
    textAlign: 'center',
    color: '#1976D2',
  },
  rain: {
    width: '10%',
    textAlign: 'center',
  },
  humidity: {
    width: '15%',
    textAlign: 'center',
  },
}));

interface DailyForecastProps {
  city: string;
  unit: string;
}

type CityInfo = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};
type Temperature = {
  day: number;
  min: number;
  max: number;
};
type Forecast = {
  dt: number;
  condition: string;
  icon: string;
  temperature: Temperature;
  humidity: number;
  wind: number;
  rain: number;
};
interface DailyForcastResponse {
  dailyForecast: {
    id: string;
    cityInfo: CityInfo;
    forecastList: Forecast[];
  };
}

export const DailyForecast: React.FC<DailyForecastProps> = ({ city, unit }) => {
  const { classes } = useStyles();
  const { data, loading } = useQuery<DailyForcastResponse>(DAILY_FORECAST, {
    variables: {
      city,
      unit,
    },
  });

  //!loading && console.log(data);
  const { forecastList } = !loading && data?.dailyForecast ? data.dailyForecast : { forecastList: [] };
  const unit_format = unit === 'imperial' ? 'F' : 'C';

  return (
    <>
      {loading ? (
        <DailyForecastSkeleton />
      ) : (
        <div>
          <Grid size={12}>
            <Grid container justifyContent="space-between" alignItems="baseline">
              <Typography component="h2" variant="h5" gutterBottom>
                7 days forecast{' '}
              </Typography>
              <span>
                <Typography variant="body1" component="span" gutterBottom>
                  Source:{' '}
                </Typography>
                <Link href="https://openweathermap.org/api" variant="body1" target="_blank" rel="noreferrer">
                  OpenWeather
                </Link>
              </span>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Paper>
              <List>
                <ListItem dense divider>
                  <ListItemText primary="Date" className={classes.forecastDate} />
                  <ListItemText primary="Weather" className={classes.weather} />
                  <ListItemText primary="High" className={classes.tempHigh} />
                  <ListItemText primary="Low" className={classes.tempLow} />
                  <ListItemText primary="Rain" className={classes.rain} />
                  <ListItemText primary="Humidity" className={classes.humidity} />
                </ListItem>
                {forecastList.map(({ dt, condition, icon, temperature: { min, max }, rain, humidity }) => {
                  return (
                    <ListItem divider dense key={dt}>
                      <ListItemText
                        primary={format(new Date(dt * 1000), 'iii, MM/dd')}
                        className={classes.forecastDate}
                      />
                      <ListItemText className={classes.weather}>
                        {icon && (
                          <img
                            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                            width="50"
                            height="50"
                            alt={condition}
                          />
                        )}
                        <Typography variant="body1">{condition}</Typography>
                      </ListItemText>
                      <ListItemText className={classes.tempHigh}>
                        {Math.round(max)}&deg;{unit_format}
                      </ListItemText>
                      <ListItemText className={classes.tempLow}>
                        {Math.round(min)}&deg;{unit_format}
                      </ListItemText>
                      <ListItemText className={classes.rain}>{Math.round(rain)}&#37;</ListItemText>
                      <ListItemText className={classes.humidity}>{humidity} %</ListItemText>
                    </ListItem>
                  );
                })}
              </List>
            </Paper>
          </Grid>
        </div>
      )}
    </>
  );
};
