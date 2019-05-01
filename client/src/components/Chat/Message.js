import React from "react";

function Message(props) {
        return(
        <div>
            <div>{this.props.text}</div>
            <div>{this.props.senderId}</div>
        </div>
        );
}

export default Message;