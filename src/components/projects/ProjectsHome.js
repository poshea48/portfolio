import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import { blues } from '../../styles/colors';
import Header from '../Header';
const projects = {
  beachCleanup: {
    name: 'Beach Cleanup',
    description: [
      'Mobile app used to collect data during a beach cleanup',
      'Used in place of outdated paper data sheets that some organizations provide to collect data for ocean conservation research',
      'Keeps track of the amount and type of item picked up and beach location data',
      'Coming Soon:',
      'GPS locational services to track distance traveled',
      'Submit data to organization of choice in csv file',
    ],
    img: 'beachCleanup',
    link: 'https://marine-debris-cleanup.herokuapp.com/',
    dev: true,
  },
  mockDraft: {
    name: 'Mock Draft',
    description: [
      'Create and control a mock draft for any NFL team or your own Fantasy Football team',
      'Custom-made algorithms used to create a realistic drafting experience',
      'User customizations to allow multiple outcomes',
      'Built using Gatsby and React with React Context API for state management',
    ],
    img: 'mockDraft',
    link: 'https://mock-it-up.netlify.com/',
  },
  hoursTracker: {
    name: 'Hours Tracker',
    description: [
      'App that keeps track of a user’s hours worked daily with ability to view cumulative hours worked over each week and month.',
      'Create and track individual projects alongside your total hours',
      'The Frontend was built using React and Redux for state management',
      'The Backend RESTful API was built using Node/Express with a PostgreSQL database',
    ],
    img: 'hoursTracker',
    link: 'https://po-hours-tracker.herokuapp.com',
  },
  rbPhotos: {
    name: 'Photo Gallery',
    description: [
      'E-commerce site for a local photographer to showcase and sell their work.',
      'The Frontend was built with Next, React, and Apollo to handle state management and GraphQL queries/mutations',
      'The Backend GraphQL API was built using Node/Express(Graphql Yoga) with a PostgreSQL database',
    ],
    img: 'rbPhotos',
    link: 'https://ryanbrewerphotography.now.sh',
  },
  tournTracker: {
    name: 'Tournament Tracker',
    description: [
      'Create and track Volleyball King of the Beach Tournaments.  ',
      'Keeps track of scores, and individual players records and point differentials.',
      'Automatically creates a Championship and Consolation court based on players record and point differential',
      'Built using Ruby on Rails',
    ],
    img: 'tournTracker',
    link: 'https://po-tournament-tracker.herokuapp.com',
  },
};

const Container = styled.main`
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${blues.dark};
  z-index: 20;
  width: 100vw;
  min-height: 100vh;
`;

const Projects = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 2em 2em 2em;
  margin: 0;
  height: 100%;
  @media screen and (max-width: 768px) {
    padding: 1em;
  }
`;
const ProjectsHome = () => {
  return (
    <Container>
      <Header page="projects" />
      <Projects>
        {Object.keys(projects).map((project, i) => (
          <Project key={i} image={projects[project]} />
        ))}
      </Projects>
    </Container>
  );
};

export default ProjectsHome;
