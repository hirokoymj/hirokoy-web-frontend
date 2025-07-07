import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Theme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

import { DailyForecast } from 'pages/weather/DailyForcast';
import { CurrentWeatherInfo } from 'pages/weather/CurrentWeatherInfo';

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export const WeatherView = () => {
  const { classes } = useStyles();
  const params = useParams();
  const city = params.city || 'dallas';
  const unit = 'imperial';

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid size={12}>
          <CurrentWeatherInfo city={city} unit={unit} />
        </Grid>
        <Grid size={12}>
          <DailyForecast city={city} unit={unit} />
        </Grid>
      </Grid>
    </>
  );
};
