import React from "react";
import MailChimpSignupForm from "./MailChimpSignupForm";
import SocialMedia from "./SocialMedia";

const styles = {
  socialMediaIcon: {
    marginRight: "10px"
  }
};

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
              <MailChimpSignupForm />
            </div>
            <div className="col-md-4 col-pb-sm right-display">
              <h2>Follow Us</h2>
              <SocialMedia />
              <p>
                <span className="block">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with
                  <i className="icon-heart2" aria-hidden="true" /> by{" "}
                  <a href="http://adamarling.com">Adam Arling</a> and
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp; Colorlib
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
