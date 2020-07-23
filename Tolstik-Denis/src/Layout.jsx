import React, {Component} from 'react';
import { v4 as uuidv4 } from "uuid";
import Header from './Header';
import MessageField from './MessageField';
import { withStyles } from "@material-ui/core/styles";
import ChatList from './ChatList';
import PropTypes from "prop-types";


const styles = {
    mainContainer: {
        width: '50%',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap'
    }
}

class Layout extends Component {    
    state = {
        chats: {
            1 : { chatId: 1, messages: []},
            2 : { chatId: 2, messages: []},
            3 : { chatId: 3, messages: []}    
        }
    };

    messagesUpdater = (chatId, messages) => {        
        this.setState(({chats}) => {
            chats[chatId].messages = messages;
            return {chats: chats};
        });
    }
    
    render() {
        const {classes, chatId} = this.props;
        const {chats} = this.state;        
        return (
            <div className={classes.mainContainer}>
                <Header chatId={chatId}/>
                <ChatList chatId={chatId}/>
                <MessageField key={chatId} chatId= {chatId} messages={chats[chatId].messages} messagesUpdater={this.messagesUpdater}/>
            </div>
        );
    }
}

Layout.propTypes = {
    chatId: PropTypes.number.isRequired
}

Layout.defaultProps = {
    chatId: 1
}

export default withStyles(styles)(Layout);
