import React, { Component } from "react";
import Message from "./Message";
import ReactDOM from 'react-dom';

class MessageList extends Component {
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this);
        this.shouldScrollBottom = node.scrollTop + node.clientHeight + 50 >= node.scrollHeight;
    }

    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            const node = ReactDOM.findDOMNode(this);
            node.scrollTop = node.scrollHeight
        }
    }
        
    render() { 
        return (
            <div id="messagelist">
                {this.props.messages.map((message, index) => {
                    return (
                        <Message key={index} username={message.senderId} text={message.text}/>
                    )
                })}
            </div>
        )
    }
}

export default MessageList;