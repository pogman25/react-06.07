import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useStyles from './useStyles';

const Messages = ({ messages }) => {
  const classes = useStyles();

  return (
    <ul className={classes.ul}>
      {messages.map(({ id, author, text }) => (
        <li key={id} className={cx(classes.message, author === 'bot' && classes.messageBot)}>
          <span className={classes.messageForm}>
            <p className={classes.author}>{`${author}`}</p>
            <p className={classes.textArea}>{`${text}`}</p>
          </span>
        </li>
      ))}
    </ul>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default memo(Messages);
