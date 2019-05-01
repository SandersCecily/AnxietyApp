import React from "react"

class SendMessageForm extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = event => {
        this.setState({
            message: event.target.value
        });
    }
    
    handleSubmit=event=> {
        event.preventDefault();
        this.props.sendMessage(this.state.message);
        this.setState({
            message: ""
        })
    }
    
    render() {
        return (
            <form >
                <input
                    placeholder="Type your message here..."
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.message}
                    disabled={this.props.disabled} />
                    <button onSubmit={this.handleSubmit}>Send!</button>
            </form>
        )
    }
}

export default SendMessageForm