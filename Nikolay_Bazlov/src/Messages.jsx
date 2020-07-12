import React, { memo } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

const Messages = ({ messages }) => {
  return (
    <ul>
      {messages.map(({ author, text }) => (
        <li key={uuidv4()}>
          <p>{`Author: ${author}`}</p>
          <p>{`message: ${text}`}</p>
        </li>
      ))}
    </ul>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default memo(Messages);
