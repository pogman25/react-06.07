import React, { memo } from 'react';
import cn from 'classnames';
import { Box } from '@material-ui/core';
import style from './Messages.module.css';

const Messages = ({ messages }) => {
  return (
    <Box display="flex" flexDirection="column" width="500px">
      {messages.map(message => (
        <div
          className={cn(style.message, {
            [style.messageBot]: message.author === 'bot',
            [style.messageAuthor]: message.author !== 'bot',
          })}
          key={message.id}>
          <span>{message.author}</span>
          <span>{message.text}</span>
        </div>
      ))}
    </Box>
  );
};

export default memo(Messages);
