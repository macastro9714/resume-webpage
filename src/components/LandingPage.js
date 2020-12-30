import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import PresentationCard from './PresentationCard';
import SectionsGrid from './SectionsGrid';
import PageDemos from './PageDemos';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
    minHeight: '100vh',
  },
  demosText: {
    maxWidth: '90%',
    textAlign: 'justify',
    margin: '4rem 0rem',
    fontSize: '4vw',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '90%',
      fontSize: '3vw',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%',
      fontSize: '2vw',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '70%',
      fontSize: '1.5vw',
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <Grid>
        <Grid item xs={12}>
          <PresentationCard />
        </Grid>
        <Grid item xs={12}>
          <SectionsGrid />
        </Grid>
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
          item
          xs={12}
        >
          <Typography
            id="textInfoDemoPages"
            className={classes.demosText}
            variant="h5"
          >
            In the following section you can find three projects based on React.
            These are websites with different themes: films, news and podcasts,
            respectively. By hovering over each option you can find more
            information. Also, all pages (including this one) are totally
            responsive.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <PageDemos />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default LandingPage;
