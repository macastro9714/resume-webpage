import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0rem',
  },
  cardContainer: {
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    width: '90%',
    borderRadius: 0,
    flexDirection: 'column',
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      width: '75%',
      minHeight: '30vh',
    },
  },
  leftSection: {
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    minHeight: '20vh',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 0,
    [theme.breakpoints.up('sm')]: {
      width: '20%',
      height: '100%',
      minHeight: '1vh',
    },
  },
  profileImageContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '80%',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('sm')]: {
      height: '80%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
  },
  profileImage: {
    height: '23vw',
    width: '23vw',
    borderRadius: '50%',
    [theme.breakpoints.up('sm')]: {
      height: '7vw',
      width: '7vw',
    },
  },
  profileCV: {
    backgroundColor: '#424242',
    display: 'flex',
    width: '100%',
    height: '30%',
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      height: '20%',
    },
  },
  profileCVButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    width: '100%',
    padding: 0,
    height: '100%',
    fontSize: '1vh',
    fontFamily: 'Roboto',
    textDecoration: 'none',
  },
  rightSection: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    borderRadius: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      alignItems: 'center',
    },
  },
  titleDescription: {
    fontSize: '10vw',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '6vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3vw',
    },
  },
  description: {
    maxWidth: '50%',
    fontSize: '3vw',
    textAlign: 'justify',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '90%',
      fontSize: '2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
    },
  },
  imgDescription: {
    maxWidth: '50%',
    fontSize: '3vw',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '90%',
      fontSize: '1.5vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '0.7vw',
    },
  },
}));

const PresentationCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.cardContainer}>
        <Card className={classes.leftSection}>
          <div className={classes.profileImageContainer}>
            <CardMedia
              className={classes.profileImage}
              image="https://lh6.googleusercontent.com/i99mwXQHvFrEHOt-LCp1wQBTasK2_DeIOvl6c_o8HD6k3RYM4EPMm-2Q9OLng7ephaPhPPRx14ok7He2Y7dN=w1919-h1006"
            />
            <Typography className={classes.imgDescription} variant="subtitle1">
              Systems Engineer | Software Developer
            </Typography>
          </div>
          <CardContent style={{ padding: 0 }} className={classes.profileCV}>
            <Button
              target="_blank"
              href="https://drive.google.com/file/d/121dq6juF_Cz-J7gcSbFbTQBTOVYb9YsF/view?usp=sharing"
              className={classes.profileCVButton}
            >
              Download Resume
            </Button>
          </CardContent>
        </Card>
        <CardContent style={{ padding: 0 }} className={classes.rightSection}>
          <Typography className={classes.titleDescription} variant="h2">
            Hi, I'm Miguel Ángel Castro!
          </Typography>
          <Typography className={classes.description} variant="body1">
            I am loyal to the people who trust me and I try to make the people
            around me successful because it is the only way I know how to grow
            and lead. I don't believe in the quick or easy ways, I believe that
            everything worthwhile requires effort. Also, that you can't be good
            at everything. It is the logic of teamwork, it is the way to cover
            every job and every strength.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PresentationCard;
