import React from 'react';
import './projects.styles.sass';
import { Container } from 'react-bootstrap';
import Title from '../Title/title.component';
import Project from "../Project/project.component";
import FriendMatch from '../../assets/images/projects/friendMatch.png'
import EatTheBurger from '../../assets/images/projects/eatTheBurger.png'
import ReactMemoryGame from '../../assets/images/projects/reactMemoryGame.png'
import NewsScraper from '../../assets/images/projects/newsScraper.png'

const Projects = () => {
  return (
    <section id='projects'>
      <Container>
        <div className="project-wrapper">
          <Title title='Projects'/>
          <Project title='React Memory Game' info={`Technologies Used: React, JavaScript, HTML, CSS`} projectImage={ReactMemoryGame} repo='http://github.com/francofle/react-memory-game' url='https://react-memory-game.ajfranceschi.com/' />
          <Project title='Eat The Burger' info={`Technologies Used: MySQL, ExpressJS, Handlebars, JavaScript, HTML, CSS.`} projectImage={EatTheBurger} repo='http://github.com/francofle/eat-the-burger' url='https://eat-da-burger-hdlbrs-xprs-sql.herokuapp.com/' />
          <Project title='Technology News Scraper' info={`Technologies Used: MongoDb, ExpressJS, Handlebars, Cheerio, Axios, MomentJS, JavaScript, HTML, CSS.`} projectImage={NewsScraper} repo='https://github.com/francofle/scrape-mongo-news' url='https://news-scraper-mdb-hdlbrs-xprs.herokuapp.com/' />
          <Project title='FriendMatch' info={`Technologies Used: ExpressJS, JavaScript, HTML, CSS,  Bootstrap.`} projectImage={FriendMatch} repo='http://github.com/francofle/friendMatch' url='https://portfolio-friend-match.herokuapp.com/' />
        </div>
      </Container>
    </section>
  )
};

export default Projects;