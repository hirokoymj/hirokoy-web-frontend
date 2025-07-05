import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

import flagTX from "assets/flag_TX.png";
import flagCA from "assets/flag_CA.png";
import flagJP from "assets/flag_JP.png";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#002147",
    "&:hover": {
      color: "#bb133e",
    },
    "&.active": {
      color: "#bb133e",
      textDecoration: "underline #bb133e",
    },
  },
  stateFlag: {
    marginRight: theme.spacing(1),
  },
}));

export const WeatherLayout = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection={matches ? "column" : "row"}
        m={0}
        paddingBottom={2}
        paddingTop={2}
        justifyContent={matches ? "center" : "space-between"}
        alignItems="center">
        <Link
          component={NavLink}
          to="tokyo"
          variant="h5"
          className={classes.link}>
          <img
            src={flagJP}
            width="35"
            height="auto"
            alt="Tokyo"
            className={classes.stateFlag}
          />
          Tokyo
        </Link>
        <Link
          component={NavLink}
          to="dallas"
          variant="h5"
          className={classes.link}>
          <img
            src={flagTX}
            width="35"
            height="auto"
            alt="Dallas"
            className={classes.stateFlag}
          />
          Dallas, TX
        </Link>
        <Link
          component={NavLink}
          to="los angeles"
          variant="h5"
          className={classes.link}>
          <img
            src={flagCA}
            width="35"
            height="auto"
            alt="Los Angeles"
            className={classes.stateFlag}
          />
          Los Angeles, CA
        </Link>
      </Box>
      <Outlet />
    </Container>
  );
};
