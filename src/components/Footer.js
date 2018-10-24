import React from 'react';

const Footer = props => {
  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-pb-sm">
              <div className="row">
                <div className="col-md-10">
                  <h2>Black Angus</h2>
                  <p>
                    Chicago musicians delivering the Bon Scott era AC/DC you
                    love, and deserve.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-pb-sm">
              <h2>Newsletter</h2>
              <p>
                Get the latest updates on Black Angus and rare, vintage AC/DC
                archives.
              </p>
              <div className="subscribe text-center">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder="Enter Email address"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="btn btn-primary btn-custom"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-pb-sm right-display">
              <h2>Follow Us</h2>
              <p className="colorlib-social-icons colorlib-social-icons2">
                <a href="https://www.facebook.com/Black-Angus-Chicago-117537881596118/">
                  <i className="icon-facebook4" />
                </a>
                <a href="#">
                  <i className="icon-twitter3" />
                </a>
                <a href="#">
                  <i className="icon-googleplus" />
                </a>
                <a href="#">
                  <i className="icon-dribbble2" />
                </a>
              </p>
              <p>
                <span className="block">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with
                  <i className="icon-heart2" aria-hidden="true" /> by
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
