import React from "react";
import './footer.styles.sass'

const Footer = () => {
  return (
    <div className="footerContainer container-fluid">
      <div className="row">
        <div className="col-sm-6 socialLinksContainer d-flex flex-row justify-content-around">
          <p>LinkedIn</p>
          <p>GitHub</p>
          <p>Email</p>
        </div>
        <div className="col-sm-6 contactContainer">

        </div>
        <div className="col-12">
          <p className='text-muted'>Copyright 2020 © Antonio J. Franceschi</p>
        </div>
      </div>
    </div>
  )
};

export default Footer;