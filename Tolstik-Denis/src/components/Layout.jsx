import React, {Component} from 'react';
import { v4 as uuidv4 } from "uuid";
import Header from './Header';
import MessageField from './MessageField';
import { withStyles } from "@material-ui/core/styles";
import ChatList from './ChatList';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getChatsSuccess } from '../actions/chats';

const styles = {
    mainContainer: {
        width: '50%',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap'
    }
}

class Layout extends Component {
    componentDidMount() {
        const {getChats} = this.props;
        
        getChats({
            1 : { chatId: 1, slug: "/chat/1", title: 'Chat 1', messages: []},
            2 : { chatId: 2, slug: "/chat/2", title: 'Chat 2', messages: []},
            3 : { chatId: 3, slug: "/chat/3", title: 'Chat 3', messages: []}     
        });
    }
    
    render() {
        const {classes, chatId} = this.props;
        const {chats} = this.props;        
        
        return (
            <div className={classes.mainContainer}>
                <Header chatId={chatId}/>
                <ChatList chatId={chatId} chats={chats}/>
                <MessageField key={chatId} chatId= {chatId} messages={chats[chatId]?.messages} />
            </div>
        );
    }
}

Layout.propTypes = {
    chatId: PropTypes.number.isRequired,
    getChats: PropTypes.func.isRequired,
}

Layout.defaultProps = {
    chatId: 1
}

const mapStateToProps = (store) => ({
    chats: store.chats
});

const mapDispatchToProps = { getChats: getChatsSuccess };

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout));
