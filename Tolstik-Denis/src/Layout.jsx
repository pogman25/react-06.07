import React, {Component} from 'react';
import Header from './Header';
import MessageField from './MessageField';
import { withStyles } from "@material-ui/core/styles";
import ChatList from './ChatList';
import PropTypes from "prop-types";


const styles = {
    mainContainer: {
        width: '50%',
        margin: '0 auto',
    }
}

class Layout extends Component {    
    state = {
        1 : { chatId: 1, messages: []},
        2 : { chatId: 2, messages: []},
        3 : { chatId: 3, messages: []}
    };

    
    
    render() {
        const {classes} = this.props;
        const {chatId} = this.props;
        return (
            <div className={classes.mainContainer}>
                <Header chatId={chatId}/>
                <ChatList chatId={chatId}/>
                <MessageField chatId= {chatId}/>
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
