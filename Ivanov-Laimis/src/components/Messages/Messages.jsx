import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Container, Box } from '@material-ui/core';

const Messages = ({ messages }) => {
  return (
    <Container maxWidth="md" >
      <Box display="flex" flexDirection="column" color="black" >
        {messages.map(({ id, author, text }) => (
          <Box style={ { backgroundColor: 'lightblue', borderRadius: 15, marginTop: 5, padding: 5 } }  key={id} alignSelf={author === 'bot' ? 'flex-end' : 'flex-start'}>
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
