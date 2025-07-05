import React from "react";
import { useQuery } from "@apollo/client";
import get from "lodash/get";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";

import { CURRENT_WEATHER_BY_CITY } from "queries/Weather";
import { GoogleMap } from "components/GoogleMap/GoogleMap";
import { CurrentWeatherSkeleton } from "components/Skeleton/WeatherSkeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    padding: "32px !important",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: "16px !important",
    },
  },
  weatherIcon: {
    marginRight: theme.spacing(1),
  },
  cityCountry: {
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
  weatherInfo: {
    height: "auto",
    padding: theme.spacing(3),
    textAlign: "center",
  },
}));

export const CurrentWeatherInfo = ({ city, unit }) => {
  const classes = useStyles();
  const { data, loading } = useQuery(CURRENT_WEATHER_BY_CITY, {
    variables: {
      city,
      unit,
    },
  });

  const { cityInfo, weather } =
    !loading && get(data, "currentWeatherByCity", {});
  const lat = parseFloat(get(cityInfo, "lat", 0));
  const lon = parseFloat(get(cityInfo, "lon", 0));
  const cityCountry = get(cityInfo, "name") + ", " + get(cityInfo, "country");
  const icon = get(weather, "icon");
  const temperature = Math.round(get(weather, "temperature.day"));
  const feelslike = Math.ceil(get(weather, "feelsLike", 0));
  const description = get(weather, "description");
  const humidity = `Humidity: ${get(weather, "humidity")}%`;
  const unit_format = unit === "metric" ? "C" : "F";

  return (
    <>
      {loading ? (
        <CurrentWeatherSkeleton />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Paper className={classes.weatherInfo}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.cityCountry}>
                    {cityCountry}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "16px",
                      justifyContent: "center",
                    }}>
                    <img
                      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                      width="50"
                      height="50"
                      alt=""
                      className={classes.weatherIcon}
                    />
                    <Typography variant="h4">
                      {temperature}&deg;{unit_format}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    Feels like {feelslike}&deg;{unit_format}. {description}
                  </Typography>
                  <Typography variant="body1">{humidity}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <div
              style={{
                height: "100%",
                width: "100%",
              }}>
              <GoogleMap geo_lat={lat} geo_lon={lon}>
                <RoomIcon color="error" fontSize="large" lat={lat} lng={lon} />
              </GoogleMap>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};
