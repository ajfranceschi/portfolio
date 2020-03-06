import React from 'react';
import Fade from 'react-reveal/Fade';
import './title.styles.sass';

const Title = ({ title }) => (
  <Fade cascade duration={1000} delay={300}>
    <h2 className='section-title text-center'>{title}</h2>
  </Fade>
);

export default Title;
