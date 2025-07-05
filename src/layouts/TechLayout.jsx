import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveTab } from '../redux/techTabSlice';
import { config } from 'config/config';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const { TabNames } = config;

export const TechLayout = () => {
  const classes = useStyles();
  const tab = useSelector((state) => state.tab.value);
  const dispatch = useDispatch();

  const handleTabChange = (event, newValue) => {
    dispatch(dispatch(setActiveTab(newValue)));
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={tab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered>
        <Tab label={TabNames.React} component={Link} to="react" value={0} />
        <Tab label={TabNames.JavaScript} component={Link} to="js" value={1} />
        <Tab label={TabNames.ts} component={Link} to="ts" value={2} />
        <Tab label={TabNames.Git} component={Link} to="git" value={3} />
        <Tab label={TabNames.express} component={Link} to="express" value={4} />
        <Tab label={TabNames.GraphQL} component={Link} to="graphQL" value={5} />
        {/* <Tab label={TabNames.HTMLCSS} component={Link} to="html" value={5} /> */}
      </Tabs>
      <Outlet />
    </Paper>
  );
};
