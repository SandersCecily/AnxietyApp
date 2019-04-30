import React, { Component } from "react";
import Chatkit from "@pusher/chatkit";
import MessageList from "./MessageList";

class Chatbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: ["hello"]
        }
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: "v1:us1:5e63b8ba-6245-4e8e-b012-620880114b6c",
            userId: "admin",
            tokenProvider: new Chatkit.TokenProvider({
                url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/5e63b8ba-6245-4e8e-b012-620880114b6c/token"
                //add your own url
            })
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
                <form id="message-form">
                    <input type='text' id='message-text' />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Chatbox;