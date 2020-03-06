import React from 'react';
import './header.styles.sass';

const Header = ({onRouteChange, currentPage}) => {
  return (
    <div className='headerContainer position-sticky'>
      <div className='navbar navbar-expand-lg navbar-light'>
        <button className='navbar-brand linkButton'>Antonio J. Franceschi</button>
        <button className="navbar-toggler" type='button' data-toggle='collapse' data-target='#navbarContent'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className="collapse navbar-collapse" id='navbarContent'>
          <ul className="navbar-nav w-100 d-flex justify-content-end">
            <li className={`nav-item ${currentPage === 'About' ? 'active' : ''}`}>
              <button className="nav-link linkButton" onClick={() => onRouteChange('About')}>About</button>
            </li>
            <li className={`nav-item ${currentPage === 'Contact' ? 'active' : ''}`}>
              <button className="nav-link linkButton" onClick={() => onRouteChange('About')}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
