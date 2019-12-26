import React from "react"
import Project from "./Project"
import AirportBackground from "../AirportBackground"

const projects = {
  // beachCleanup: {
  //   name: "Beach Cleanup App",
  //   img: "beachCleanup",
  //   link: "https://marine-debris-cleanup.herokuapp.com/"
  // }
  rbPhotos: {
    name: "Photography Gallery",
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
    name: "NFL/Fantasy Football Mock Draft",
    description:
      "Create and control a mock draft for any NFL team or your own Fantasy Football team",
    img: "mockDraft",
    link: "https://mock-it-up.netlify.com/",
  },
  tournTracker: {
    name: "Volleyball Tournament Tracker",
    description:
      "Create and track Volleyball Tournaments.  With in-game functionality",
    img: "tournTracker",
    link: "https://po-tournament-tracker.herokuapp.com",
  },
}
const ProjectsHome = () => {
  return (
    <AirportBackground>
      {Object.keys(projects).map((project, i) => (
        <Project key={i} image={projects[project]} />
      ))}
    </AirportBackground>
  )
}

export default ProjectsHome
