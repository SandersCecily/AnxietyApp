import React, { Component } from "react";

class Message extends Component {
    render() {
        return(
        <div>
            <div>{this.props.text}</div>
            <div>{this.props.senderId}</div>
        </div>
        );
    }
}

export default Message;