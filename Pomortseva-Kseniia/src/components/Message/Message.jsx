import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Container, Box } from '@material-ui/core';

const Message = ({ messages }) => {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column">
        {messages.map(({ id, author, text }) => (
          <Box key={id} alignSelf={author === 'bot' ? 'flex-end' : 'flex-start'}>
            <p>{`Author: ${author}`}</p>
            <p>{`message: ${text}`}</p>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

Message.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      author: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default memo(Message);
