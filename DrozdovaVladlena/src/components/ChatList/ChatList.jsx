import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllChats, getNotification } from '../../store/selector/selector';
import { IconButton, TextField, Box, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {addChats} from '../../store/actions/chatsAction'
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  }
}))

const ChatList = () => {
  const classes = useStyles();
  const [text, setText] = useState('')
  const chatsList = useSelector(getAllChats);
  const dispatch = useDispatch()
  const notification = useSelector(store => getNotification(store))

  const textChange = (event) => {
    setText(event.target.value)
  }

  const addChatsClick = () => {
    dispatch(addChats(text))
    setText('')
  }

  return (
    <Box>
      <List dense>
        {chatsList.map(value => {
          return (
            <NavLink to={value.slug} key={value.id} className={classes.root}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt={`Avatar n°${value.id}`} />
                </ListItemAvatar>
                <ListItemText primary={value.title} />
              </ListItem>
              {(notification.state && (value.id === notification.id)) && <IconButton>
                <EmailIcon />
              </IconButton>}
            </NavLink>
          );
        })}
      </List>
      <Box dispatch='flex'>
        <IconButton onClick={addChatsClick}>
          <AddIcon />
        </IconButton>
        <TextField value={text} id="standard-basic" label="Add chats" onChange={textChange}/>
      </Box>
    </Box>
  );
};

export default ChatList;
