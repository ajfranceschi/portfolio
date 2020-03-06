import React, { useState, useEffect } from 'react';
import './splash.styles.sass';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';

const Splash = () => {
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
    <section id='splash' className='jumbotron'>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={300} distance='30px'>
          <h1 className='splash-title'>
            Hi, my name is <span className='text-color-main'>Antonio Franceschi</span>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={300} distance='60px'>
          <h1 className='splash-subtitle'>Your Full Stack Web Developer</h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={300} distance='90px'>
          <p className='splash-cta'>
            <a href='#about' className='cta-btn cta-btn--hero'>
              Learn More
            </a>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

//           {/*<div className='col-12 d-flex flex-column justify-content-center align-items-center'>*/}
//           {/*  <div className='skills d-flex flex-row'>*/}
//           {/*    <p>HTML</p>*/}
//           {/*    <p>CSS</p>*/}
//           {/*    <p>JavaScript</p>*/}
//           {/*    <p>React</p>*/}
//           {/*    <p>NodeJS</p>*/}
//           {/*  </div>*/}
//           {/*  <div className='skills d-flex flex-row'>*/}
//           {/*    <p>ExpressJS</p>*/}
//           {/*    <p>React Redux</p>*/}
//           {/*    <p>React Router</p>*/}
//           {/*    <p>MongoDB</p>*/}
//           {/*    <p>FireBase</p>*/}
//           {/*  </div>*/}
//           {/*</div>*/}
//         </div>
//       </div>
//
//       <div className='container-fluid workContainer'>
//         <div className='row'>
//           <div className='sectionTitle col-12 mt-4'>
//             <h1 className='display-4'>Projects</h1>
//           </div>
//         </div>
//         <div className='row projectContainer'>
//           <div className='col-sm-6 projectImageContainer d-flex justify-content-center align-items-center'>
//             <div className='imageContainer'>
//               <img src={placeholderImage} alt='project' className='img-thumbnail projectImage' />
//             </div>
//           </div>
//           <div className='col-sm-6 projectTextContainer'>
//             <h3>Project Name</h3>
//             <p className='text-justify'>
//               <span className='h2'>S</span>ed quis libero vel odio tincidunt auctor. In a nisl id
//               elit imperdiet bibendum vel nec sem. Phasellus faucibus rhoncus ipsum. Morbi ultrices
//               risus urna, vel cursus massa volutpat vitae. Nulla congue ut risus sed varius. Etiam
//               finibus turpis maximus lorem venenatis, vitae aliquam erat volutpat. Duis tincidunt
//               lectus ut ligula venenatis interdum. Aenean pharetra mi egestas sapien pellentesque,
//               ut venenatis felis tincidunt. Proin ligula nisi, luctus ut euismod ac, tincidunt sed
//               dui. Proin lectus enim, fringilla ac hendrerit ut, aliquet nec ipsum.
//             </p>
//           </div>
//         </div>
//         <div className='row projectContainer'>
//           <div className='col-sm-6 projectImageContainer d-flex justify-content-center align-items-center'>
//             <div className='imageContainer'>
//               <img src={placeholderImage} alt='project' className='img-thumbnail projectImage' />
//             </div>
//           </div>
//           <div className='col-sm-6 projectTextContainer'>
//             <h3>Project Name</h3>
//             <p className='text-justify'>
//               <span className='h2'>S</span>ed quis libero vel odio tincidunt auctor. In a nisl id
//               elit imperdiet bibendum vel nec sem. Phasellus faucibus rhoncus ipsum. Morbi ultrices
//               risus urna, vel cursus massa volutpat vitae. Nulla congue ut risus sed varius. Etiam
//               finibus turpis maximus lorem venenatis, vitae aliquam erat volutpat. Duis tincidunt
//               lectus ut ligula venenatis interdum. Aenean pharetra mi egestas sapien pellentesque,
//               ut venenatis felis tincidunt. Proin ligula nisi, luctus ut euismod ac, tincidunt sed
//               dui. Proin lectus enim, fringilla ac hendrerit ut, aliquet nec ipsum.
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

export default Splash;
