import React, {Component} from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import {List, ListItem} from '@material-ui/core';

const styles = {
    
};

class ChatList extends Component {
    render() {
        const {chats} = this.props;
        return (
            <List>
                {Object.values(chats).map(({chatId, title, slug}) => (
                    <Link key={chatId} to={slug}>
                        <ListItem key={chatId}>{title}</ListItem>
                    </Link>
                ))}
            </List>
        )
    }
}

ChatList.propTypes = {
    chatId: PropTypes.number.isRequired,
}

ChatList.defaultProps = {
    chatId: 1
}

export default withStyles()(ChatList);