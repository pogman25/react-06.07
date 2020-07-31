import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Container, Box, makeStyles } from '@material-ui/core';
import { BOT_NAME } from '../../utils/constants';

const useStyles = makeStyles(() => ({
  updated: {
    backgroundColor: '#abc',
  },
}));

const Message = ({ messages, updated }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column">
        {messages.map(({ id, author, text }) => (
          <Box
            key={id}
            alignSelf={author === BOT_NAME ? 'flex-end' : 'flex-start'}
            className={cx(updated.includes(id) && classes.updated)}
          >
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
