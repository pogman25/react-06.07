import React from 'react';
import List from '@material-ui/core/List';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { chatList } from "../Chat/pageList";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "inherit",
        color: "inherit"
    }
}));

const ChatList = (props) => {
    const classes = useStyles(props);

    return (
        <List>
            {chatList.map(({id, title, slug}) => {
                return (
                    <Link key={id} to={slug} className={classes.link}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                    </Link>
                )
            })}
        </List>
    );
};

export default ChatList;