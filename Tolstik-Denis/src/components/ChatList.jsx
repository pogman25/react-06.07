import React, {Component} from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import {List, ListItem} from '@material-ui/core';

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
    chats: PropTypes.objectOf(PropTypes.shape({
        chatId: PropTypes.number, 
        slug: PropTypes.string,
        title: PropTypes.string, 
        messages: PropTypes.arrayOf(PropTypes.shape({
            author: PropTypes.string,
            message: PropTypes.string,
            id: PropTypes.string
        }))
    })).isRequired,
}

ChatList.defaultProps = {
    chatId: 1
}

export default withStyles()(ChatList);