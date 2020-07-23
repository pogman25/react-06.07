import React, {Component} from 'react';
import { v4 as uuidv4 } from "uuid";
import Message from "./Message";
import PropTypes from "prop-types";
import FormMessage from "./FormMessage"
import { withStyles } from "@material-ui/core/styles";


const styles = {
    mainContainer: {
        flexGrow: 1,
    },
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
                    this.addMessage("bot", "Hi there!!!");                  
                }, 1000);
            }
        }
    }
    
    componentDidMount () {
        const {messages} = this.props;        
        this.setState({messages: messages});
        const {chatId} = this.props;
    }
    
    componentWillUnmount() {
        const {chatId} = this.props;
        const {messages} = this.state;
        const {messagesUpdater} = this.props; 

        messagesUpdater(chatId, messages);
    }

    clearMessages = () => {
        const {messages} = this.state;
        this.setState(({messages}) => ({ messages: []}));        
    }

    render() {
        const {messages} = this.state; 
        const {classes} = this.props;
        return (
                <div className={classes.mainContainer}>
                    <ul className={classes.messageArea}>
                        {messages.map((item) => (
                                <Message key={item.id} author={item.author} message={item.message} id={item.id}/>
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
    chatId: PropTypes.number.isRequired,
    messagesUpdater: PropTypes.func.isRequired
}

export default withStyles(styles)(MessageField);

