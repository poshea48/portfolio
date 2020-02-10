import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import Project from "./Project"
import AirportBackground from "../AirportBackground"
import { palette } from "../../styles/colors"

const projects = {
  // beachCleanup: {
  //   name: "Beach Cleanup App",
  //   img: "beachCleanup",
  //   link: "https://marine-debris-cleanup.herokuapp.com/"
  // }
  rbPhotos: {
    name: "Photo Gallery",
    description:
      "E-commerce site for a local photographer to showcase and sell their work.",
    img: "rbPhotos",
    link: "https://ryanbrewerphotography.now.sh",
  },
  hoursTracker: {
    name: "Hours Tracker",
    description:
      "App that keeps track of a user’s hours worked daily with ability to view cumulative hours worked over each week and month.",
    img: "hoursTracker",
    link: "https://po-hours-tracker.herokuapp.com",
  },
  mockDraft: {
    name: "Mock Draft",
    description:
      "Create and control a mock draft for any NFL team or your own Fantasy Football team",
    img: "mockDraft",
    link: "https://mock-it-up.netlify.com/",
  },
  tournTracker: {
    name: "Tournament Tracker",
    description:
      "Create and track Volleyball Tournaments.  With in-game functionality",
    img: "tournTracker",
    link: "https://po-tournament-tracker.herokuapp.com",
  },
}

const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  z-index: 20;
`
const ProjectTitle = styled.header`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${palette.lightGray};
  align-self: center;
  top: 0;
  height: 55px;
  width: 100%;
  z-index: 20;
  opacity: 0.9;
  h1 {
    font-weight: 900;
    font-size: 2em;
    text-align: center;
    margin: 0;
    color: ${palette.darkGray};
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.8em;
    }
  }
`
//! Need a better element for accessiblity
const ScrollUp = styled.div`
  position: absolute;
  width: 120px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  top: 0.5em;
  left: 1.5em;
  span {
    display: block;
    margin-left: 0.4em;
  }
  .icon {
    transform: rotate(90deg);
    font-size: 30px;
  }
  @media (max-width: 480px) {
    span {
      display: none;
    }
  }
`
const ProjectsContainer = styled.div`
  position: relative;
  align-self: center;
  width: 100%;
`

const Projects = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 1em;
`
const ProjectsHome = () => {
  return (
    <Container>
      <AirportBackground />
      <ProjectTitle id="projects">
        <ScrollUp onClick={() => scrollTo("#home")}>
          <div className="icon">❮</div>
          <span>Home</span>
        </ScrollUp>
        <h1>My Projects</h1>
      </ProjectTitle>
      <ProjectsContainer>
        <Projects>
          {Object.keys(projects).map((project, i) => (
            <Project key={i} image={projects[project]} />
          ))}
        </Projects>
      </ProjectsContainer>
    </Container>
  )
}

export default ProjectsHome
