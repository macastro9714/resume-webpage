import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'none',
    justifyContent: 'center',
    height: '15vh',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33.3333%',
    backgroundColor: theme.palette.primary.contrastText,
    color: 'white',
    borderRadius: 0,
    fontFamily: 'Roboto',
    fontSize: '2vw',
    textAlign: 'center',
    padding: '0vw 5vw',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '90%',
      fontSize: '1.5vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.0vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '0.7vw',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.item}>
        <p>
          I developed these projects together with my friend Arkai Julián Ariza,
          through pair programming we both got motivated and completed this
          portfolio of projects.
        </p>
      </Paper>
      <Paper className={classes.item}>
        <p>
          These pages are based on React, each highlighting different
          functionalities. We create diagrams in the initial stages of the
          design of each project{' '}
          <Link
            style={{ color: '#1de8b5', textDecoration: 'none' }}
            href="https://drive.google.com/drive/folders/1jY_yZw6WQ35OKyDBEzSPXxVwzibdgEBC?usp=sharing"
            target="blank_"
          >
            (you can check them here).
          </Link>{' '}
          Also,{' '}
          <Link
            style={{ color: '#1de8b5', textDecoration: 'none' }}
            href="https://github.com/ArkaiAriza?tab=repositories"
            target="blank_"
          >
            (here)
          </Link>{' '}
          you can find the project repositories.
        </p>
      </Paper>
      <Paper className={classes.item}>
        <p>
          We also developed a mobile application in React Native{' '}
          <Link
            style={{ color: '#1de8b5', textDecoration: 'none' }}
            href="https://expo.io/artifacts/594359c3-bfed-4e06-bcd7-a97bb3efd4d2"
            target="blank_"
          >
            (here you can download the apk)
          </Link>{' '}
          . The Back End was developed using ExpressJS, Stripe, PassportJS and
          Mongodb.
        </p>
      </Paper>
    </div>
  );
};

export default Footer;
