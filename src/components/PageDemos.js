import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
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
    zIndex: '-1',
    textShadow: '1px 1px black',
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
    maxWidth: '95%',
    zIndex: '-1',
    textShadow: '1px 1px black',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '90%',
      fontSize: '2.5vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.2vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2vw',
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
  ${(props) =>
    props.hover &&
    css`
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
    `}

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
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
      },
    },
    title: 'Movies Demo',
    info: `In this project we use the API of themoviedb. On this page you will find a list of movies, each movie has information and you can click on it to see even more about it. The main features of this page are the movie grid, the info animations, the info modal, the pagination, the movie search, the genre filter and the menu.`,
    url: 'https://movieinfodemo.macastro9714.vercel.app/',
    imageUrl: 'https://i.imgur.com/6kFDoia.png',
  },
  {
    top: 0,
    left: 0,
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
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
      },
    },
    title: 'News Demo',
    info:
      'In this project we use the GNews API. In this page we find a series of news, each news redirects to its page of origin. The main features of this page are the news layout, the news carousel, the dark/normal mode, the search and advanced news search, the filter by type, the filter by country, and the menu.',
    url: 'https://newsdemo.macastro9714.vercel.app/',
    imageUrl: 'https://i.imgur.com/8QRCzrj.png',
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
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
      },
    },
    title: 'Podcast Demo',
    info:
      'In this project we use the listennotes API. On this page you will find a variety of podcasts, each with its own series of episodes that can be played. The main features of this page are the podcast grid, the episode list by podcast, the audio player, the infinite scroll, the podcast and episode search, and the genre filter.',
    url: 'https://podcastdemo.macastro9714.vercel.app/',
    imageUrl: 'https://i.imgur.com/46VYEQI.png',
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
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
      },
    },
    title: 'Movies Demo',
    info: `In this project we use the API of themoviedb. On this page you will find a list of movies, each movie has information and you can click on it to see even more about it. The main features of this page are the movie grid, the info animations, the info modal, the pagination, the movie search, the genre filter and the menu.`,
    url: 'https://movieinfodemo.macastro9714.vercel.app/',
    imageUrl: 'https://i.imgur.com/6kFDoia.png',
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
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
      },
    },
    title: 'News Demo',
    info:
      'In this project we use the GNews API. In this page we find a series of news, each news redirects to its page of origin. The main features of this page are the news layout, the news carousel, the dark/normal mode, the search and advanced news search, the filter by type, the filter by country, and the menu.',
    url: 'https://newsdemo.macastro9714.vercel.app/',
    imageUrl: 'https://i.imgur.com/8QRCzrj.png',
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
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
      },
    },
    title: 'Podcast Demo',
    info:
      'In this project we use the listennotes API. On this page you will find a variety of podcasts, each with its own series of episodes that can be played. The main features of this page are the podcast grid, the episode list by podcast, the audio player, the infinite scroll, the podcast and episode search, and the genre filter.',
    url: 'https://podcastdemo.macastro9714.vercel.app/',
    imageUrl: 'https://i.imgur.com/46VYEQI.png',
  },
];

const PageDemos = () => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  const [indicator, setIndicator] = useState('none'); //none, Movies Demo, News Demo, Podcast Demo

  const focusAway = (url) => {
    setIsHover(false);
    window.open(url);
  };

  const mouseIn = (title) => {
    if (window.innerWidth > 865) setIsHover(true);
    setIndicator(title);
  };

  const mouseOff = () => {
    if (window.innerWidth > 865) setIsHover(false);
    setIndicator('none');
  };

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
        imageUrl,
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
            onMouseOver={() => mouseIn(title)}
            onMouseOut={() => mouseOff()}
            onClick={() => {
              window.innerWidth <= 865
                ? setIsHover(!isHover)
                : window.open(url);
            }}
            hover={isHover}
          >
            {!isHover ? (
              <div style={styleItem.opt1}>
                <Typography className={classes.title} variant="h2">
                  {title}
                </Typography>
              </div>
            ) : indicator === title ? (
              <div
                style={styleItem.opt2}
                onClick={() =>
                  window.innerWidth <= 865 ? focusAway(url) : null
                }
                onMouseOut={() => setIsHover(false)}
              >
                <img
                  alt={title}
                  style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    objectFit: 'cover',
                    opacity: '0.5',
                    zIndex: '-1',
                  }}
                  src={imageUrl}
                />
                <Typography className={classes.title} variant="h2">
                  {title}
                </Typography>
                <Typography className={classes.body} variant="body1">
                  {info}
                </Typography>
              </div>
            ) : null}
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
