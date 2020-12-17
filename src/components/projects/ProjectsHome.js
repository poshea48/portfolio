import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import { blues } from '../../styles/colors';
import Header from '../Header';
const projects = {
  // beachCleanup: {
  //   name: "Beach Cleanup App",
  //   img: "beachCleanup",
  //   link: "https://marine-debris-cleanup.herokuapp.com/"
  // }
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
