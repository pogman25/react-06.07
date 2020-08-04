import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Container, Box, makeStyles } from '@material-ui/core';
import { BOT_NAME } from '../../utils/constants';

const useStyles = makeStyles(() => ({
  updated: {
    backgroundColor: '#abc',
  },
  message: {
    backgroundColor: "lightgreen",
    borderRadius: '40px',
    minWidth: '200px'
  },
  text: {
    padding: '5px 10px',
    textAlign: 'center',
    fontSize: '16px'
  },
  author: {
    padding: '0px 10px',
    textAlign: 'center',
    fontSize: '12px'
  }
}));

const Messages = ({ messages, updated }) => {
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
            <div className={classes.message}>
              <p className={classes.author}>{`${author}`}</p>
              <p className={classes.text}>{`${text}`}</p>
            </div>
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
