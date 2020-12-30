import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0rem 0rem',
    height: '30vh',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      height: '40vh',
    },
    [theme.breakpoints.up('md')]: {
      height: '50vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '60vh',
    },
  },
  title: {
    position: 'relative',
    fontSize: '5vw',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3vw',
    },
  },
  body: {
    position: 'relative',
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
}));

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  width: 100%;
  background-color: grey;
`;

const Item = styled.div`
  position: absolute;
  background-color: ${(props) => props.background};
  transform: skewY(${(props) => props.degree}deg);
  height: ${(props) => props.height}%;
  width: ${(props) => props.width}%;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  color: white;
  text-align: center;
  z-index: ${(props) => props.zindex};
  &:hover {
    position: absolute;
    z-index: 5;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: 0.5s;
    transform: skewY(0deg);
    cursor: pointer;
  }
  transition: 0.5s;
`;

const items = [
  {
    top: 40,
    left: 0,
    height: 440,
    width: 70,
    degree: 40,
    zindex: 3,
    background: '#1de8b5',
    styleItem: {
      opt1: {
        transform: `skewY(-40deg)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'start',
        marginLeft: '5vw',
      },
      opt2: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
    },
    title: 'Movies Demo',
    info: 'Movies Demo Info',
    url: 'https://movieinfodemo.macastro9714.vercel.app/',
  },
  {
    top: 0,
    left: 10,
    height: 79,
    width: 100,
    degree: 0,
    zindex: 1,
    background: '#424242',
    styleItem: {
      opt1: {
        transform: 'skewY(0deg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '5vh',
        marginRight: '25vw',
      },
      opt2: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
    },
    title: 'News Demo',
    info: 'News Demo Info',
    url: 'https://newsdemo.macastro9714.vercel.app/',
  },
  {
    top: 0,
    left: 42,
    height: 300,
    width: 60,
    degree: -40,
    zindex: 2,
    background: '#42a5f5',
    styleItem: {
      opt1: {
        transform: 'skewY(40deg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        alignItems: 'center',
        marginTop: '15vh',
      },
      opt2: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
    },
    title: 'Podcast Demo',
    info: 'Podcast Demo Info',
    url: 'https://podcastdemo.macastro9714.vercel.app/',
  },
];

const itemsSmall = [
  {
    top: 0,
    left: 0,
    height: 33.3333,
    width: 100,
    degree: 0,
    zindex: 3,
    background: '#1de8b5',
    styleItem: {
      opt1: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      opt2: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
    },
    title: 'Movies Demo',
    info: 'Movies Demo Info',
  },
  {
    top: 33.3333,
    left: 0,
    height: 33.3333,
    width: 100,
    degree: 0,
    zindex: 1,
    background: '#424242',
    styleItem: {
      opt1: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      opt2: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
    },
    title: 'News Demo',
    info: 'News Demo Info',
  },
  {
    top: 66.6666,
    left: 0,
    height: 33.3333,
    width: 100,
    degree: 0,
    zindex: 2,
    background: '#42a5f5',
    styleItem: {
      opt1: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      opt2: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
    },
    title: 'Podcast Demo',
    info: 'Podcast Demo Info',
  },
];

const PageDemos = () => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);

  const renderItems = () => {
    const selectedArray = window.innerWidth <= 865 ? itemsSmall : items;
    return selectedArray.map(
      ({
        top,
        left,
        height,
        width,
        degree,
        zindex,
        background,
        styleItem,
        title,
        info,
        url,
      }) => {
        return (
          <Item
            key={title + top + left}
            top={top}
            left={left}
            height={height}
            width={width}
            degree={degree}
            zindex={zindex}
            background={background}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            onClick={() => window.open(url)}
          >
            {!isHover ? (
              <div style={styleItem.opt1}>
                <Typography className={classes.title} variant="h2">
                  {title}
                </Typography>
              </div>
            ) : (
              <div style={styleItem.opt2}>
                <Typography className={classes.title} variant="h2">
                  {title}
                </Typography>
                <Typography className={classes.body} variant="body1">
                  {info}
                </Typography>
              </div>
            )}
          </Item>
        );
      }
    );
  };

  return (
    <div className={classes.container}>
      <InnerContainer>{renderItems()}</InnerContainer>
    </div>
  );
};

export default PageDemos;
