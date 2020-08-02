import React, { memo } from 'react';
import cn from 'classnames';
import { Box, IconButton } from '@material-ui/core';
import style from './Messages.module.css';
import { BOT_NAME } from '../../../utils/constants';
import ClearIcon from '@material-ui/icons/Clear';
import { useDispatch } from 'react-redux';
import { dellMessage } from '../../../store/reducers/messagesReducer';

const Messages = ({ messages }) => {
  const dispatch = useDispatch()
  const dellMessageClick = (id) => {
    return () => dispatch(dellMessage(id))
  }

  return (
    <Box display="flex" flexDirection="column" width="500px">
      {messages.map(message => (
        <div
          className={cn(style.message, {
            [style.messageBot]: message.author === BOT_NAME,
            [style.messageAuthor]: message.author !== BOT_NAME,
          })}
          key={message.id}>
          <IconButton onClick={dellMessageClick(message.id)}>
            <ClearIcon />
          </IconButton>
          <div className={style.boxMessage}>
            <span>{message.author}</span>
            <span>{message.text}</span>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default memo(Messages);