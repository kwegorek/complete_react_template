import React from 'react'

export default class ContactForm extends React.Component {
  constructor() {
    super()

    this.state = {}
  }


  render() {
    return (
      <React.Fragment>
        <div id="contact" className="contact-grid-container container-uni">
          <div className="row">
            <div className="col-12">
              <h2>CONTACT ME</h2>
            </div>
          </div>
          <div id="contact-wrapper" className="row">
            <p className="contact-text">
              Do you have any questions or comments? Please, share!
            </p>
            <div className="col-12  media-col">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Name"
              />
            </div>
            <div className="col-12  media-col">
              <input type="text" id="email" name="email" placeholder="Email" />
            </div>
            <div className="col-12  media-col">
              <textarea className="user-message" placeholder="Message"></textarea>
            </div>
            <div className="col-12  media-col">
              <button type="submit" id="send-btn">
                Send now
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
