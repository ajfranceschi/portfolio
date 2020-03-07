import React from 'react';
import './stackList.styles.sass';
import { Container, Row } from 'react-bootstrap';

//images
import css from '../../assets/images/css.png';
import express from '../../assets/images/express.png';
import html from '../../assets/images/html.png';
import js from '../../assets/images/js.png';
import mongo from '../../assets/images/mongo.svg';
import psql from '../../assets/images/postgresql.png';
import nodejs from '../../assets/images/nodejs.png';
import react from '../../assets/images/react.png';
import handlebars from '../../assets/images/handlebars.png';
import firebase from '../../assets/images/firebase.png';
import sass from '../../assets/images/sass.png';

const StackList = () => {
  return (
    <Container>
      <Row>
        <div className='stackLogos'>
          <div className='logoCard'>
            <img src={html} alt='' className='logo' />
            <p>HTML</p>
          </div>
          <div className='logoCard'>
            <img src={css} alt='' className='logo' />
            <p>CSS</p>
          </div>
          <div className='logoCard'>
            <img src={js} alt='' className='logo' />
            <p>JavaScript</p>
          </div>
          <div className='logoCard'>
            <img src={react} alt='' className='logo' />
            <p>React</p>
          </div>
          <div className='logoCard'>
            <img src={nodejs} alt='' className='logo' />
            <p>NodeJS</p>
          </div>
          <div className='logoCard'>
            <img src={express} alt='' className='logo' />
            <p>ExpressJS</p>
          </div>
        </div>
        <div className='stackLogos'>
          <div className='logoCard'>
            <img src={mongo} alt='' className='logo' />
            <p>MongoDB</p>
          </div>
          <div className='logoCard'>
            <img src={firebase} alt='' className='logo' />
            <p>Firebase</p>
          </div>
          <div className='logoCard'>
            <img src={psql} alt='' className='logo' />
            <p>PostgreSQL</p>
          </div>
          <div className='logoCard'>
            <img src={handlebars} alt='' className='logo' />
            <p>Handlebars</p>
          </div>
          <div className='logoCard'>
            <img src={sass} alt='' className='logo' />
            <p>Sass</p>
          </div>
        </div>
      </Row>
    </Container>

    // <div className='stackLogos'>
    //
    // </div>
  );
};

export default StackList;
