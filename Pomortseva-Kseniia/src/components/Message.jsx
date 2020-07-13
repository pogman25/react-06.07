import React/*, { useState }*/ from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

const Message = ({ messages }) => {
    return (
      <ul>
        {messages.map(({ author, text }, index) => (
          <li key={index}>
            <p>{`Author: ${author}`}</p>
            <p>{`message: ${text}`}</p>
          </li>
        ))}
      </ul>
    );
  };

Message.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    text: PropTypes.string
  }))
}

export default Message;
