import React, {Component} from 'react';
import Message from "./Message";
import PropTypes from "prop-types";


class MessageField extends Component {
    state = {
        messages: []
    }

    addMessage=() => {
        const {messages} = this.state;
        let newMessage = window.prompt("Enter a new message", "A new message");
        this.setState(({messages}) => ({ messages: [...messages, newMessage]}));
    }

    clearMessages = () => {
        const {messages} = this.state;
        this.setState(({messages}) => ({ messages: []}));        
    }

    render() {
        const {messages} = this.state; 
        return (
                <div>
                    <h3>Messages:</h3>
                    <ul>
                        {messages.map((item, index) => (
                                <Message key={index} message={item}/>
                        ))}
                    </ul>
                    <p>
                        Total messages: {messages.length}
                    </p>
                    <button onClick={this.addMessage}>Add Message</button><br/>
                    <button onClick={this.clearMessages}>Clear messages</button>
                
                </div>
            );
    }
}

MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string).isRequired,
    addMessage: PropTypes.func,
    clearMessages: PropTypes.func
}

export default MessageField;

