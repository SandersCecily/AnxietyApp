import React, { Component } from "react";

class SendMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  }

  onChange(event) {
    this.setState({ text: event.target.value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render() {
    return (
      <div >
        <div>
          <form onSubmit={this.onSubmit} >
            <input
              type="text"
              placeholder="Type a message here then hit ENTER"
              onChange={this.onChange}
              value={this.state.text}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default SendMessageForm;