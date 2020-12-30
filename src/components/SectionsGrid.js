import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import styled, { css } from 'styled-components';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0rem',
    height: '40vh',
  },
  gridSection: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    height: '100%',
  },
  title: {
    position: 'relative',
    fontSize: '4.5vw',
    fontWeight: 'bold',
    textShadow: '1px 1px black',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '90%',
      fontSize: '4vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2vw',
    },
  },
  body: {
    position: 'relative',
    fontSize: '3.5vw',
    textShadow: '1px 1px black',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '90%',
      fontSize: '2.7vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.2vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.8vw',
    },
  },
  expanded: {
    position: 'relative',
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}));

const sections = [
  {
    name: 'Front End',
    top: 0,
    left: 0,
    imageUrl: 'https://i.imgur.com/J1Oioug.png',
    hoverColor: '#1de8b5',
  },
  {
    name: 'Full Stack',
    top: 0,
    left: 33.3333333,
    imageUrl: 'https://i.imgur.com/bOoEINR.jpg',
    hoverColor: '#7986cb',
  },
  {
    name: 'Education',
    top: 0,
    left: 66.6666666,
    imageUrl: 'https://i.imgur.com/RyXLFAo.png',
    hoverColor: '#ffca28',
  },
  {
    name: 'Experience',
    top: 50,
    left: 0,
    imageUrl: 'https://i.imgur.com/LZ8QLyD.jpg',
    hoverColor: '#ef5350',
  },
  {
    name: 'Languages',
    top: 50,
    left: 33.3333333,
    imageUrl: 'https://i.imgur.com/IqnFtrg.jpg',
    hoverColor: '#42a5f5',
  },
  {
    name: 'Other Technologies',
    top: 50,
    left: 66.6666666,
    imageUrl: 'https://i.imgur.com/akDtEfZ.png',
    hoverColor: '#ff8a80',
  },
];

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
  height: 50%;
  width: 33.333333%;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  background-color: #424242;
  color: white;
  text-align: center;
  z-index: 1;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverColor};
  }
  ${(props) =>
    props.isOpening &&
    css`
      position: absolute;
      z-index: 5;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: #424242;
      transition: 0.5s;
      &:hover {
        filter: brightness(100%);
        cursor: pointer;
      }
    `}
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionsGrid = () => {
  const classes = useStyles();

  const [selectedSection, setSelectedSection] = useState('none');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');

  useEffect(() => {
    if (selectedSection !== 'none') renderSelectedSection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSection]);

  const renderSelectedSection = () => {
    var titleOpt = '';
    var infoOpt = '';
    switch (selectedSection) {
      case 'Front End':
        titleOpt = 'Front End';
        infoOpt =
          'I have done several courses of React and in my studies I have focused mainly on the development of Front End by this means. Therefore I am also familiar with Redux, HTML, CSS, Javascript and different React libraries.';
        break;
      case 'Full Stack':
        titleOpt = 'Full Stack';
        infoOpt =
          'Although my strong point is Front End, I have also developed web applications focusing on the Back End. Among the technologies I have used are Mongodb, ExpressJS, GraphQL and mySQL.';
        break;
      case 'Education':
        titleOpt = 'Education';
        infoOpt =
          'I studied at the National University of Colombia, and graduated as a systems engineer in 2020. I have published works and done several independent courses focused on software development and Front End development in React.';
        break;
      case 'Experience':
        titleOpt = 'Experience';
        infoOpt =
          'I worked as a website administrator for Exturiscol, a transportation company, for over two years. I have developed different projects and a portfolio which can be seen below on the page.';
        break;
      case 'Languages':
        titleOpt = 'Languages';
        infoOpt =
          'My native language is Spanish, however I am also fluent in English and certified at c1 level by the IBT Toefl and IELTS.';
        break;
      case 'Other Technologies':
        titleOpt = 'Other Technologies';
        infoOpt =
          'Other technologies and methods I have handled are React Native, AWS, docker, Rancher, LDAP and reverse proxy. I have also worked in SCRUM mode.';
        break;
      default:
        break;
    }
    setTitle(titleOpt);
    setInfo(infoOpt);
  };

  const handleSection = (section) => {
    if (!isOpen) {
      setSelectedSection(section);
      setIsOpening(true);
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
    } else {
      setSelectedSection('none');
      setIsOpening(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  };

  const renderItems = () => {
    return sections.map((section) => {
      return (
        <Item
          key={section.name + section.top + section.hoverColor}
          isOpening={isOpening && selectedSection === section.name}
          onClick={() => handleSection(section.name)}
          top={section.top}
          left={section.left}
          hoverColor={section.hoverColor}
        >
          {!isOpen ? (
            isOpening ? null : (
              <Typography className={classes.title} variant="h2">
                {section.name}
              </Typography>
            )
          ) : selectedSection === section.name ? (
            <div className={classes.expanded}>
              <img
                alt={section.name}
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  objectFit: 'cover',
                  opacity: '0.5',
                }}
                src={section.imageUrl}
              />
              <Typography className={classes.title} variant="h2">
                {title}
              </Typography>
              <Typography className={classes.body} variant="body1">
                {info}
              </Typography>
            </div>
          ) : (
            <div />
          )}
        </Item>
      );
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.gridSection}>
        <InnerContainer>{renderItems()}</InnerContainer>
      </div>
    </div>
  );
};

export default SectionsGrid;
