import React, {Component} from 'react';
import Header from './Header';
import MessageField from './MessageField';
import { withStyles } from "@material-ui/core/styles";
import ChatList from './ChatList';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getChats } from '../actions/chats';
import { Backdrop, CircularProgress } from '@material-ui/core';

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
        const { getChatsAction } = this.props;
        
        getChatsAction();        
    }
    
    render() {
        const {classes, chatId, chats, isLoading} = this.props;

        return (
            <div className={classes.mainContainer}>
                <Backdrop open={isLoading}>
                    <CircularProgress color="inherit" />
                </Backdrop>                
                <Header chatId={chatId}/>
                <ChatList chatId={chatId} chats={chats}/>
                <MessageField key={chatId} chatId= {chatId} messages={chats[chatId]?.messages} />
            </div>
        );
    }
}

Layout.propTypes = {
    chatId: PropTypes.number.isRequired,
    getChatsAction: PropTypes.func.isRequired,
}

Layout.defaultProps = {
    chatId: 1,
    isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = (store) => ({
    chats: store.chats.list,
    isLoading: store.chats.isLoading,
});

const mapDispatchToProps = { getChatsAction : getChats };

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout));
