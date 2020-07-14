import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Messages = ({ messages }) => {
  return (
    <ul>
      {messages.map(({ id, author, text }) => (
        <li key={id}>
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
      id: PropTypes.string,
      author: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default memo(Messages);
