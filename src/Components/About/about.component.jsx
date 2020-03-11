import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';
import './about.styles.sass';
import portrait from '../../assets/images/portrait.jpeg';
import Title from '../Title/title.component';
import StackList from "../StackList/stackList.component";
import resume from '../../assets/resume.pdf';

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsDesktop(false);
      setIsMobile(true);
    }
  }, []);

  return (
    <section id='about'>
      <Container>
        <Title title='About Me' />
        <Row className='about-wrapper'>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance='30px'>
              <div className='about-wrapper__image'>
                <img src={portrait} alt='Portrait' className='profileImg img-thumbnail' />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance={'30px'}>
              <div className='about-wrapper__info'>
                <p className='about-wrapper__info-text'>
                  With more than 15 years of experience in the IT Industry, late 2018 I decided to
                  change fields from IT Operations to Web Development. During this time I have taken
                  multiple courses focusing in Full Stack Web Development and tutored friends
                  through to their successful completion of the UCF Web Development Bootcamp.
                </p>
                <p className='about-wrapper__info-text'>
                  I have worked with HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB,
                  Firebase, PostgreSQL, Handlebars and Sass among others.
                </p>
                <p className='about-wrapper__info-text'>
                 Let me help your company fulfill its mission and increase its value.
                </p>
                <span className='d-flex mt-3'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    className='cta-btn cta-btn--resume'
                    href={resume}
                  >
                    Resume
                  </a>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    className='cta-btn cta-btn--resume linked-in-button'
                    href='https://linkedin.com/in/ajfranceschi'
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
          <Col>
            <Row>
              <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance={'60px'}>
                <div className="stackLogosWrapper">
                  <StackList/>
                </div>
              </Fade>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
