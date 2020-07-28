import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import useStyles from './MessageFieldStyle';

const MessageField = ({addMessage}) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const classes = useStyles();

  const textChange = event => {
    setText(event.target.value);
  };

  const authorChange = event => {
    setAuthor(event.target.value);
  };

  const addMessageClick = () => {
    addMessage({author, text: text, id: uuid()});
    setText('');
    setAuthor('');
  };

  const addMessageEnter = event => {
    if (event.keyCode === 13) {
      addMessage();
    }
  };

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Author"
        value={author}
        onChange={authorChange}
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        label="Text"
        value={text}
        onChange={textChange}
        onKeyDown={addMessageEnter} // много проверки
        variant="outlined"
        multiline
        rows={4}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={addMessageClick}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
    </form>
  );
};

// MessageField.propTypes = {
//   message: PropTypes.arrayOf(
//     PropTypes.shape({
//       author: PropTypes.string,
//       text: PropTypes.string,
//       id: PropTypes.string,
//     }),
//   ).isRequired,
// };

export default MessageField;
