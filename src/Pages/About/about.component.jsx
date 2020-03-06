import React from 'react';
import './about.styles.sass';
import portrait from '../../assets/images/portrait.jpeg';
import placeholderImage from '../../assets/images/project-placeholder-image.jpg';
import Footer from '../../Components/Footer/footer.component';

const About = () => {
  return (
    <div className='aboutPage vh-100 text-center'>
      <div className='jumbotron'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12'>
            <h2>
              Hi, my name is <span className='name'>Antonio J. Franceschi</span>
            </h2>
            <h2>Your Full Stack Web Developer</h2>
          </div>
          <div className="col-8 d-flex flex-row justify-content-around pt-5">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>NodeJS</p>
          </div>
          <div className="col-8 d-flex flex-row justify-content-around">
            <p>ExpressJS</p>
            <p>React Redux</p>
            <p>React Router</p>
            <p>MongoDB</p>
            <p>FireBase</p>
          </div>
        </div>
      </div>
      <div className='container-fluid aboutMeContainer'>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center align-items-center'>
            <div className='imageContainer'>
              <img src={portrait} alt='portrait' className='portrait img-thumbnail' />
            </div>
          </div>
          <div className='col-md-6'>
            <h1 className='display-4'>About Me</h1>
            <p className='text-justify'>
              <span className='h2'>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque porttitor pellentesque libero. Aenean enim mauris, ultricies vitae leo
              vitae, mollis ultricies nisl. Donec lorem ligula, cursus vitae auctor eget, tincidunt
              at eros. Morbi justo augue, sagittis nec felis vitae, rhoncus lobortis felis. Aenean
              quis urna ex. Donec eu cursus mi, at hendrerit nibh. Curabitur in finibus sem, ac
              sodales lacus. Duis porta tellus lectus, pharetra volutpat lectus efficitur eget. In
              libero nibh, tincidunt vitae tellus porta, aliquam fermentum ante. Quisque malesuada
              lectus in faucibus euismod.
            </p>

            <p className='text-justify'>
              <span className='h2'>S</span>ed quis libero vel odio tincidunt auctor. In a nisl id
              elit imperdiet bibendum vel nec sem. Phasellus faucibus rhoncus ipsum. Morbi ultrices
              risus urna, vel cursus massa volutpat vitae. Nulla congue ut risus sed varius. Etiam
              finibus turpis maximus lorem venenatis, vitae aliquam erat volutpat. Duis tincidunt
              lectus ut ligula venenatis interdum. Aenean pharetra mi egestas sapien pellentesque,
              ut venenatis felis tincidunt. Proin ligula nisi, luctus ut euismod ac, tincidunt sed
              dui. Proin lectus enim, fringilla ac hendrerit ut, aliquet nec ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className='container-fluid workContainer'>
        <div className='row'>
          <div className='sectionTitle col-12 mt-4'>
            <h1 className='display-4'>Projects</h1>
          </div>
        </div>
        <div className='row projectContainer'>
          <div className='col-sm-6 projectImageContainer d-flex justify-content-center align-items-center'>
            <div className='imageContainer'>
              <img src={placeholderImage} alt='project' className='img-thumbnail projectImage' />
            </div>
          </div>
          <div className='col-sm-6 projectTextContainer'>
            <h3>Project Name</h3>
            <p className='text-justify'>
              <span className='h2'>S</span>ed quis libero vel odio tincidunt auctor. In a nisl id
              elit imperdiet bibendum vel nec sem. Phasellus faucibus rhoncus ipsum. Morbi ultrices
              risus urna, vel cursus massa volutpat vitae. Nulla congue ut risus sed varius. Etiam
              finibus turpis maximus lorem venenatis, vitae aliquam erat volutpat. Duis tincidunt
              lectus ut ligula venenatis interdum. Aenean pharetra mi egestas sapien pellentesque,
              ut venenatis felis tincidunt. Proin ligula nisi, luctus ut euismod ac, tincidunt sed
              dui. Proin lectus enim, fringilla ac hendrerit ut, aliquet nec ipsum.
            </p>
          </div>
        </div>
        <div className='row projectContainer'>
          <div className='col-sm-6 projectImageContainer d-flex justify-content-center align-items-center'>
            <div className='imageContainer'>
              <img src={placeholderImage} alt='project' className='img-thumbnail projectImage' />
            </div>
          </div>
          <div className='col-sm-6 projectTextContainer'>
            <h3>Project Name</h3>
            <p className='text-justify'>
              <span className='h2'>S</span>ed quis libero vel odio tincidunt auctor. In a nisl id
              elit imperdiet bibendum vel nec sem. Phasellus faucibus rhoncus ipsum. Morbi ultrices
              risus urna, vel cursus massa volutpat vitae. Nulla congue ut risus sed varius. Etiam
              finibus turpis maximus lorem venenatis, vitae aliquam erat volutpat. Duis tincidunt
              lectus ut ligula venenatis interdum. Aenean pharetra mi egestas sapien pellentesque,
              ut venenatis felis tincidunt. Proin ligula nisi, luctus ut euismod ac, tincidunt sed
              dui. Proin lectus enim, fringilla ac hendrerit ut, aliquet nec ipsum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
