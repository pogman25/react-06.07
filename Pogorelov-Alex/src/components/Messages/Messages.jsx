import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Container, Box } from '@material-ui/core';
import { BOT_NAME } from '../../utils/constants';

const Messages = ({ messages }) => {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column">
        {messages.map(({ id, author, text }) => (
          <Box key={id} alignSelf={author === BOT_NAME ? 'flex-end' : 'flex-start'}>
            <p>{`Author: ${author}`}</p>
            <p>{`message: ${text}`}</p>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      author: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default memo(Messages);
