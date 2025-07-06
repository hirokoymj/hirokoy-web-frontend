import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import { Theme } from '@mui/material/styles';

import { PageHeader } from 'pages/base/PageHeader';
import { PageFooter } from 'pages/base/PageFooter';

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  // 	appBarSpacer: {
  // 	  theme.mixins.toolbar
  //   },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export const RootLayout = () => {
  const { classes } = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <PageHeader open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div style={{ minHeight: '48px' }} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Outlet />
          </Grid>
          <Grid size={12}>
            <PageFooter />
          </Grid>
        </Container>
      </main>
    </div>
  );
};
