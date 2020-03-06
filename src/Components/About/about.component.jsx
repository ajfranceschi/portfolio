import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';
import './about.styles.sass';
import portrait from '../../assets/images/portrait.jpeg';
import Title from '../Title/title.component';

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
        <Title title='About Me'/>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor
                  pellentesque libero. Aenean enim mauris, ultricies vitae leo vitae, mollis
                  ultricies nisl. Donec lorem ligula, cursus vitae auctor eget, tincidunt at eros.
                  Morbi justo augue, sagittis nec felis vitae, rhoncus lobortis felis. Aenean quis
                  urna ex. Donec eu cursus mi, at hendrerit nibh. Curabitur in finibus sem, ac
                  sodales lacus. Duis porta tellus lectus, pharetra volutpat lectus efficitur eget.
                  In libero nibh, tincidunt vitae tellus porta, aliquam fermentum ante. Quisque
                  malesuada lectus in faucibus euismod.
                </p>
                <p className='about-wrapper__info-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor
                  pellentesque libero. Aenean enim mauris, ultricies vitae leo vitae, mollis
                  ultricies nisl. Donec lorem ligula, cursus vitae auctor eget, tincidunt at eros.
                  Morbi justo augue, sagittis nec felis vitae, rhoncus lobortis felis. Aenean quis
                  urna ex. Donec eu cursus mi, at hendrerit nibh. Curabitur in finibus sem, ac
                  sodales lacus. Duis porta tellus lectus, pharetra volutpat lectus efficitur eget.
                  In libero nibh, tincidunt vitae tellus porta, aliquam fermentum ante. Quisque
                  malesuada lectus in faucibus euismod.
                </p>
                <span className='d-flex mt-3'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    className='cta-btn cta-btn--resume'
                    href='#resume'
                  >Resume</a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
