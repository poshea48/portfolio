import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import { blues } from '../../styles/colors';
import Header from '../Header';
const projects = {
  beachCleanup: {
    name: 'Beach Cleanup Mobile App',
    description: [
      'This project is still in development',
      'Mobile app used to collect data during a beach cleanup',
      'Used in place of outdated paper data sheets that some organizations provide to collect data for ocean conservation research',
      'Keeps track of the amount and type of item picked up and beach location data',
      'GPS locational services to track distance traveled',
      'Submit data to organization of choice in csv file',
      'Built using React Native',
      'This link is to a snippet hosted on expo.io and does not contain all the apps functionality (unless you have the Expo app, this snippet does not work well on mobile devices)',
    ],
    img: 'beachCleanup',
    link: 'https://snack.expo.io/@osheapaulf/beach-cleanup',
  },
  sh: {
    name: 'Smart Highlights',
    description: [
      'This project was created from a contract position I was hired for by Smart Highlights, a company that creates NBA highlights using machine learning',
      'The contract ended just as the 2019-2020 season finished, so there are still some UI fixes that need to be done.',
      'The image carousel at the top of the homepage is created with videos that are pulled in from the database from the current week. If there hasn\'t been a video created in over a week, there will be a black background with just "Smart Hightlights" displayed',
      'The responsive website design was created from a general layout constructed by a graphic designer',
      'Frontend built using: Gatsby, React, TypeScript and GraphQL',
      'Collaboratively worked with the founder to develop the GraphQL backend using AWS Resources: Amplify, AppSync, Cognito, and DynamoDB',
    ],
    img: 'sh',
    link: 'https://stage.sportsalpha.io/',
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
