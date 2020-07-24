import React, {Component} from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Router from './Router';
import {Link} from 'react-router-dom';
import {List, ListItem} from '@material-ui/core';

const styles = {
    
};

class ChatList extends Component {
    render() {
        return (
            <List>
                <Link to="/chat/1/">
                    <ListItem>Chat 1</ListItem>
                </Link>
                <Link to="/chat/2/">
                    <ListItem>Chat 2</ListItem>
                </Link>
                <Link to="/chat/3/">
                    <ListItem>Chat 3</ListItem>
                </Link>
            </List>
        )
    }
}

ChatList.propTypes = {
    chatId: PropTypes.number.isRequired
}

ChatList.defaultProps = {
    chatId: 1
}

export default withStyles()(ChatList);