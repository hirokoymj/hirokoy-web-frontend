import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { DailyForecast } from "pages/weather/DailyForcast";
import { CurrentWeatherInfo } from "pages/weather/CurrentWeatherInfo";

const useStyles = makeStyles((theme) => ({
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
  const classes = useStyles();
  const params = useParams();
  const city = params.city || "dallas";
  const unit = "imperial";

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <CurrentWeatherInfo city={city} unit={unit} />
        </Grid>
        <Grid item xs={12}>
          <DailyForecast city={city} unit={unit} />
        </Grid>
      </Grid>
    </>
  );
};
