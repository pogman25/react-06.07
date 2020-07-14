import React from "react";
import PropTypes from "prop-types";

const Message = ({ author, text }) => {
  return (
    <div>
          <p>{`Author: ${author}`}</p>
          <p>{`message: ${text}`}</p>
    </div>
  );
};

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Message;