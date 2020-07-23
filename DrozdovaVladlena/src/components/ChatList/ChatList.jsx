import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';
import useStyles from './ChatListStyle';
import { useSelector } from 'react-redux';
import { getAllChats } from '../../store/selector/selector';

const ChatList = () => {
  const classes = useStyles();
  const chatsList = useSelector(getAllChats);

  return (
    <List dense className={classes.root}>
      {chatsList.map(value => {
        return (
          <NavLink to={value.slug} key={value.id}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar alt={`Avatar n°${value.id}`} />
              </ListItemAvatar>
              <ListItemText primary={value.title} />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
};

export default ChatList;
