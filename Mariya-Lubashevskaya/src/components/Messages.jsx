import React, { memo} from "react";
import PropTypes from "prop-types";
import Message from "./Message";

const Messages = ({ data }) => {
  return (
    <ul>
      {data.map(({author, text, id}) => (
        <Message key= {id} author = {author} text = {text}/>
      ))}
    </ul>
  );
};

Messages.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      text: PropTypes.string,
      id: PropTypes.string
    })
  ).isRequired,
};

export default memo(Messages);