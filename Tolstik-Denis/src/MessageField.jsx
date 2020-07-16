import React, {Component} from 'react';
import { v4 as uuidv4 } from "uuid";
import Message from "./Message";
import PropTypes from "prop-types";
import FormMessage from "./FormMessage"
import { withStyles } from "@material-ui/core/styles";


const styles = {
    messageArea: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    }
};

class MessageField extends Component {
    state = {
        messages: []
    };
    timer = null;

    addMessage=(autor, message) => {
        const {messages} = this.state;
        let newMessage = {author: autor, message: message, id: uuidv4()};    
        this.setState(({messages}) => ({ messages: [...messages, newMessage]})); 
    };

    componentDidUpdate() {
        const { messages } = this.state;
        if (messages.length > 0) {
            clearTimeout(this.timer);
            if (messages[messages.length - 1].author !== "bot") {
              this.timer = setTimeout(() => {
                this.setState(({ messages }) => ({
                  messages: [
                    ...messages,
                    { author: "bot", message: "Hi there!!!", id: uuidv4() },
                  ],
                }));
              }, 1000);
            }        
        }
    }
    
    clearMessages = () => {
        const {messages} = this.state;
        this.setState(({messages}) => ({ messages: []}));        
    }

    render() {
        const {messages} = this.state; 
        const {classes} = this.props;
        return (
                <div>
                    <ul className={classes.messageArea}>
                        {messages.map((item) => (
                                <Message key={item.id} author={item.author} message={item.message}/>
                        ))}
                    </ul>
                    <p>
                        Total messages: {messages.length}
                    </p>
                    <FormMessage addMessage={this.addMessage}/>
                    <br/>
                    <button onClick={this.clearMessages}>Clear messages</button>
                
                </div>
            );
    }
}

MessageField.propTypes = {
    addMessage: PropTypes.func,
    clearMessages: PropTypes.func
}

export default withStyles(styles)(MessageField);

