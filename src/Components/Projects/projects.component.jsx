import React from 'react';
import './projects.styles.sass';
import { Container } from 'react-bootstrap';
import Title from '../Title/title.component';
import Project from "../Project/project.component";
import FriendMatch from '../../assets/images/projects/friendmatch.gif'

const Projects = () => {
  return (
    <section id='projects'>
      <Container>
        <div className="project-wrapper">
          <Title title='Projects'/>
          <Project title='FriendMatch' info={`Technologies Used: HTML, CSS, JavaScript, Bootstrap, ExpressJS`} projectImage={FriendMatch} repo='http://github.com/francofle/friendMatch.git' url='https://portfolio-friend-match.herokuapp.com/' />
          <hr/>
        </div>
      </Container>
    </section>
  )
};

export default Projects;