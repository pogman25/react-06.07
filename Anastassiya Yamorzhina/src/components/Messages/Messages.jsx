import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";


const Messages = ({ messages }) => {
  return (
    <div className="container">
      {messages.map(({ author, text }, index) => {
          const className = author === 'user' ? 'message-blue' : 'message-orange';
          return <div className={className} key={index}>
              <p className="message-content">{text}</p>
              <div className="message-timestamp-left">Author: {author}</div>
          </div>
      })}
    </div>
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
