import React, { Component } from 'react';
// import Form from "../../Form";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Submit your Ideas!</h2>
        </div>
        <div className="row">
          <div className="col s10">
            <h5>This is a form to make suggestions for our database of immediate fixes.
              Feel free to fill it out and maybe you'll see your suggestion on our website!
          </h5>
            <br />
            {/* <Form/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;