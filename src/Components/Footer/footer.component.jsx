import React from 'react';
import './footer.styles.sass';
import { Container} from 'react-bootstrap';
import SocialNetwork from '../SocialNetwork/socialNetwork.component';

const Footer = () => {
  return (
    <footer className='footerWrapper navbar-static-bottom'>
      <Container>
        <a href='#top' aria-label='Back To Top' className='backToTop'>
          <i className='fa fa-angle-up fa-2x' aria-hidden='true' />
        </a>

        <div className='socialLinks'>
          <SocialNetwork name={'linkedin'} url={'https://www.linkedin.com/in/ajfranceschi/'} />
          <SocialNetwork name={'github'} url={'https://github.com/ajfranceschi'} />
        </div>
        <hr />
        <p className='footerWrapper__text'>Antonio J. Franceschi © {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
};

export default Footer;
