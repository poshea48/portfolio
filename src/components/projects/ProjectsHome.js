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
  mockDraft: {
    name: 'Mock Draft',
    description:
      'Create and control a mock draft for any NFL team or your own Fantasy Football team',
    img: 'mockDraft',
    link: 'https://mock-it-up.netlify.com/',
  },
  hoursTracker: {
    name: 'Hours Tracker',
    description:
      'App that keeps track of a user’s hours worked daily with ability to view cumulative hours worked over each week and month.',
    img: 'hoursTracker',
    link: 'https://po-hours-tracker.herokuapp.com',
  },
  rbPhotos: {
    name: 'Photo Gallery',
    description:
      'E-commerce site for a local photographer to showcase and sell their work.',
    img: 'rbPhotos',
    link: 'https://ryanbrewerphotography.now.sh',
  },
  tournTracker: {
    name: 'Tournament Tracker',
    description:
      'Create and track Volleyball Tournaments.  With in-game functionality',
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
  justify-content: flex-start;
  padding: 2em;
  margin: 0;
  height: 100%;
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
