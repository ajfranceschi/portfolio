import React from 'react';
import './contact.styles.sass'
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/title.component';

const Contact = () => {
  return (
    <section id='contactSection' className='text-center'>
      <Container>
        <Title title='Contact' />
        <Fade bottom duration={1000} delay={700} distance='30px'>
          <div className='contactWrapper'>
            <p className='contactWrapper__text'>Interested in learning more? Awesome!</p>
            <a
              href='mailto:antonio@ajfranceschi.com'
              target='_blank'
              rel='noopener noreferrer'
              className='cta-btn cta-btn--resume'
            >Contact Me</a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};
export default Contact;
