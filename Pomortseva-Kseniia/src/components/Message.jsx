import React/*, { useState }*/ from "react";
import PropTypes from "prop-types";

const Message = ({ messages }) => {
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

Message.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string
  })).isRequired,
};

export default Message;
