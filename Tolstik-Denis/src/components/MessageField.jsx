import React, {Component} from 'react';
import { v4 as uuidv4 } from "uuid";
import Message from "./Message";
import PropTypes from "prop-types";
import FormMessage from "./FormMessage"
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { postChatMessage } from '../actions/chats';
import { getChatMessages } from '../selectors';

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
    //timer = null;

    addMessage=(autor, message) => {
        const { postChatMessage } = this.props;
        const { chatId } = this.props;

        postChatMessage({chatId: chatId, message: {author: autor, message: message, id: uuidv4()}});
    };
    
    /*
    componentDidUpdate() {
        const { messages } = this.props;
                
        if (messages && messages.length > 0) {
            clearTimeout(this.timer);
            if (messages[messages.length - 1].author !== "bot") {
              this.timer = setTimeout(() => {
                    this.addMessage("bot", "Hi there!!!");                  
                }, 1000);
            }
        }
    }
    */
    
    clearMessages = () => {
        const { messages } = this.props;
        this.setState(({messages}) => ({ messages: []}));        
    }

    render() {
        const { messages } = this.props; 
        const { classes } = this.props;
        return (
                <div className={classes.mainContainer}>
                    <ul className={classes.messageArea}>
                        {messages?.map((item) => (
                                <Message key={item.id} author={item.author} message={item.message} id={item.id}/>
                        ))}
                    </ul>
                    <p>
                        Total messages: {messages ? messages.length : 0}
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
    postChatMessage: PropTypes.func.isRequired
}


const mapStateToProps = (store, ownProps) => {
    const { chatId } = ownProps;
    return getChatMessages(store, chatId);
        
    /*
    let messages = store.chats[chatId]?.messages;
    return {
        messages: messages ? messages : []
    }
    */
};

const mapDispatchToProps = { postChatMessage };

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MessageField));

