import React from "react";
import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import get from "lodash/get";
import map from "lodash/map";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import { DAILY_FORECAST } from "queries/Weather.js";
import { DailyForecastSkeleton } from "components/Skeleton/WeatherSkeleton";

const useStyles = makeStyles(() => ({
  forecastDate: {
    width: "20%",
    textAlign: "center",
  },
  weather: {
    width: "20%",
    textAlign: "center",
  },
  tempHigh: {
    width: "10%",
    textAlign: "center",
    color: red[500],
  },
  tempLow: {
    width: "10%",
    textAlign: "center",
    color: blue[700],
  },
  rain: {
    width: "10%",
    textAlign: "center",
  },
  humidity: {
    width: "15%",
    textAlign: "center",
  },
}));

export const DailyForecast = ({ city, unit }) => {
  const classes = useStyles();
  const { data, loading } = useQuery(DAILY_FORECAST, {
    variables: {
      city,
      unit,
    },
  });
  const { forecastList } = !loading && get(data, "dailyForecast", {});
  console.log(data);
  const mappedData = map(forecastList, (forecast) => {
    const {
      dt,
      condition,
      icon,
      temperature: { min, max },
      rain,
      humidity,
    } = forecast;

    return {
      dt,
      condition,
      icon,
      min,
      max,
      rain,
      humidity,
    };
  });
  const unit_format = unit === "imperial" ? "F" : "C";
  const mappedDataLen = mappedData.length;

  return (
    <>
      {loading ? (
        <DailyForecastSkeleton />
      ) : (
        <div>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="baseline">
              <Typography component="h2" variant="h5" gutterBottom>
                7 days forecast{" "}
              </Typography>
              <span>
                <Typography variant="body1" component="span" gutterBottom>
                  Source:{" "}
                </Typography>
                <Link
                  href="https://openweathermap.org/api"
                  variant="body1"
                  target="_blank"
                  rel="noreferrer">
                  OpenWeather
                </Link>
              </span>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <List>
                <ListItem dense divider>
                  <ListItemText
                    primary="Date"
                    className={classes.forecastDate}
                  />
                  <ListItemText primary="Weather" className={classes.weather} />
                  <ListItemText primary="High" className={classes.tempHigh} />
                  <ListItemText primary="Low" className={classes.tempLow} />
                  <ListItemText primary="Rain" className={classes.rain} />
                  <ListItemText
                    primary="Humidity"
                    className={classes.humidity}
                  />
                </ListItem>
                {mappedData.map(
                  (
                    { dt, condition, icon, min, max, rain, humidity },
                    index
                  ) => {
                    return (
                      <ListItem
                        divider={index !== mappedDataLen - 1 ? true : false}
                        dense
                        key={dt}>
                        <ListItemText
                          primary={format(new Date(dt * 1000), "iii, MM/dd")}
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
                        <ListItemText className={classes.rain}>
                          {Math.round(rain)}&#37;
                        </ListItemText>
                        <ListItemText className={classes.humidity}>
                          {humidity} %
                        </ListItemText>
                      </ListItem>
                    );
                  }
                )}
              </List>
            </Paper>
          </Grid>
        </div>
      )}
    </>
  );
};
