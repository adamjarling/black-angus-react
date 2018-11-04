import React, { Component } from 'react';

class MailChimpSignupForm extends Component {
  state = {
    email: ''
  };

  styles = {
    response: {
      display: 'none'
    },
    offScreen: {
      position: 'absolute',
      left: '-5000px'
    }
  };

  handleChange = e => {
      this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div id="mc_embed_signup">
        <form
          action="https://blackangusrock.us19.list-manage.com/subscribe/post?u=657f236efbf2acbd41450a192&amp;id=1e9b8bede0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group form-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
                name="EMAIL"
                className="required email form-control text-center"
                id="mce-EMAIL"
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={this.styles.response}
              />
              <div
                className="response"
                id="mce-success-response"
                style={this.styles.response}
              />
            </div>
            <div style={this.styles.offScreen} aria-hidden="true">
              <input
                type="text"
                name="b_657f236efbf2acbd41450a192_1e9b8bede0"
                tabIndex="-1"
                value=""
                readOnly
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button btn btn-primary btn-custom"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default MailChimpSignupForm;
