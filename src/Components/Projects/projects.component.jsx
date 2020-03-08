import React from 'react';
import './projects.styles.sass';
import { Container } from 'react-bootstrap';
import Title from '../Title/title.component';
import Project from "../Project/project.component";
import FriendMatch from '../../assets/images/projects/friendMatch.png'
import EatTheBurger from '../../assets/images/projects/eatTheBurger.png'

const Projects = () => {
  return (
    <section id='projects'>
      <Container>
        <div className="project-wrapper">
          <Title title='Projects'/>
          <Project title='Eat The Burger' info={`Technologies Used: HTML, CSS, JavaScript, Handlebars, ExpressJS, MySQL.`} projectImage={EatTheBurger} repo='http://github.com/francofle/eat-the-burger' url='https://eat-da-burger-hdlbrs-xprs-sql.herokuapp.com/' />
          <Project title='FriendMatch' info={`Technologies Used: HTML, CSS, JavaScript, Bootstrap, ExpressJS`} projectImage={FriendMatch} repo='http://github.com/francofle/friendMatch' url='https://portfolio-friend-match.herokuapp.com/' />
          <hr/>
        </div>
      </Container>
    </section>
  )
};

export default Projects;