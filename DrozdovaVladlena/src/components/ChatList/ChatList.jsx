import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllChats } from '../../store/selector/selector';
import { IconButton, TextField, Box, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { addChats, dellChats } from '../../store/reducers/chatsReducer';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  }
}))

const ChatList = () => {
  const {chatId} = useParams()
  const classes = useStyles();
  const [text, setText] = useState('')
  const chatsList = useSelector(getAllChats);
  const dispatch = useDispatch()

  const textChange = (event) => {
    setText(event.target.value)
  }

  const addChatsClick = () => {
    dispatch(addChats(text))
    setText('')
  }

  const deleteChat = () => {
    dispatch(dellChats(chatId))
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
              <IconButton onClick={deleteChat}>
                <DeleteIcon />
              </IconButton>
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
