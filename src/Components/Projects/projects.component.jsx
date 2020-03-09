import React from 'react';
import './projects.styles.sass';
import { Container } from 'react-bootstrap';
import Title from '../Title/title.component';
import Project from '../Project/project.component';
import FriendMatch from '../../assets/images/projects/friendMatch.png';
import EatTheBurger from '../../assets/images/projects/eatTheBurger.png';
import ReactMemoryGame from '../../assets/images/projects/reactMemoryGame.png';
import NewsScraper from '../../assets/images/projects/newsScraper.png';
import TriviaGame from '../../assets/images/projects/triviaGame.png';
import FaceDetection from '../../assets/images/projects/faceDetection.png';

const Projects = () => {
  return (
    <section id='projects'>
      <Container>
        <div className='project-wrapper'>
          <Title title='Projects' />
          <Project
            title='Face Detection'
            info={
              <p>
                <strong>Technologies Used:</strong> &ensp; React, PostgreSQL, NodeJS, ExpressJS,
                HTML, CSS.
              </p>
            }
            projectImage={FaceDetection}
            repo='https://github.com/francofle/face-detection'
            url='https://face-detection-kenobi.herokuapp.com/'
          />
          <Project
            title='React Memory Game'
            info={
              <p>
                <strong>Technologies Used:</strong> &ensp; React, JavaScript, HTML, CSS
              </p>
            }
            projectImage={ReactMemoryGame}
            repo='https://github.com/francofle/react-memory-game'
            url='https://react-memory-game.ajfranceschi.com/'
          />
          <Project
            title='Eat The Burger'
            info={
              <p>
                <strong>Technologies Used:</strong> &ensp; MySQL, ExpressJS, Handlebars, JavaScript,
                HTML, CSS.
              </p>
            }
            projectImage={EatTheBurger}
            repo='https://github.com/francofle/eat-the-burger'
            url='https://eat-da-burger-hdlbrs-xprs-sql.herokuapp.com/'
          />
          <Project
            title='Technology News Scraper'
            info={
              <p>
                <strong>Technologies Used:</strong> &ensp; MongoDb, ExpressJS, Handlebars, Cheerio,
                Axios, MomentJS, JavaScript, HTML, CSS.
              </p>
            }
            projectImage={NewsScraper}
            repo='https://github.com/francofle/scrape-mongo-news'
            url='https://news-scraper-mdb-hdlbrs-xprs.herokuapp.com/'
          />
          <Project
            title='FriendMatch'
            info={
              <p>
                <strong>Technologies Used:</strong> &ensp; ExpressJS, JavaScript, HTML, CSS,
                Bootstrap.
              </p>
            }
            projectImage={FriendMatch}
            repo='https://github.com/francofle/friendMatch'
            url='https://portfolio-friend-match.herokuapp.com/'
          />
          <Project
            title='Star Wars Trivia Game'
            info={
              <p>
                <strong>Technologies Used:</strong> &ensp; JavaScript, HTML, CSS, Bootstrap.
              </p>
            }
            projectImage={TriviaGame}
            repo='https://github.com/francofle/trivia'
            url='https://sw-trivia.ajfranceschi.com/'
          />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
