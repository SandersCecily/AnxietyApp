import React, { Component } from "react";
import Chatkit from "@pusher/chatkit";
import MessageList from "./MessageList";
import CaptureField from "./CaptureField";

class Chatbox extends Component {
    constructor() {
        super();
        this.state = {
            currentRoomId: 19393759,
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    }

    sendMessage(text) {
        this.currentUser.sendMessage({text, roomId: this.state.currentRoomId});
    }

    componentDidMount() {
        const tokenProvider = new Chatkit.TokenProvider({
            url: "http://localhost:3000/account?"
          });
          
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: "v1:us1:5e63b8ba-6245-4e8e-b012-620880114b6c",
            userId: "admin",
            tokenProvider: tokenProvider
        });

        chatManager.connect()
            .then(currentUser => {
                currentUser.subscribeToRoom({
                    roomId: 19393759,
                    hooks: {
                        onNewMessage: message => {
                            console.log(message.text);
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        }
                    }
                })
            })
    }

    render() {
        return (
            <div id="chatroom">
                <MessageList messages={this.state.messages} />
                <CaptureField sendMessage={this.sendMessage}/>
            </div>
        )
    }
}

export default Chatbox;