import React from 'react';
import './projects.styles.sass';
import { Container } from 'react-bootstrap';
import Title from '../Title/title.component';
import Project from "../Project/project.component";
import projectPlaceholder from '../../assets/images/project-placeholder-image.jpg'

const Projects = () => {
  return (
    <section id='projects'>
      <Container>
        <div className="project-wrapper">
          <Title title='Projects'/>
          <Project title='TrackSactions' info='MERN, MomentJS, etc.' projectImage={projectPlaceholder} repo='http://github.com' url='http://ajfranceschi.com' />
        </div>
      </Container>
    </section>
  )
};

export default Projects;