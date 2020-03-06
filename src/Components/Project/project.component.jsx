import React, { useState, useEffect } from 'react';
import './project.styles.sass';
import { Container, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Project = ({ title, info, info2, url, repo, projectImage }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsDesktop(false);
      setIsDesktop(true);
    }
  }, []);

  return (
    <Row class='project-row'>
      <Col lg={4} sm={12}>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance={'30px'}>
          <div className='project-wrapper__text'>
            <h3 className='project-wrapper__text-title'>{title || 'Project Title'}</h3>
            <div>
              <p>{info}</p>
              <p className='mb-4'>{info2 || ''}</p>
            </div>

          <a
            href={url || '#!'}
            className='cta-btn cta-btn--hero'
            target='_blank'
            rel='noopener noreferrer'
          >
            See Live
          </a>
          {repo && (
            <a
              href={repo}
              target="_blank"
              className='cta-btn text-color-main'
              rel='noopener noreferrer'
            >Source Code</a>
          )}
          </div>
        </Fade>
      </Col>
      <Col lg={8} sm={12}>
        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500} distance={'60px'}>
          <div className="project-wrapper__image">
            <a
              href={url || '#!'}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Project Link'
            >
              <div className="image-wrapper rounded">
                <img src={projectImage} alt="Project" className='project-image rounded img-thumbnail'/>
              </div>
            </a>
          </div>
        </Fade>
      </Col>
    </Row>
  );
};

export default Project;
