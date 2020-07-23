import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { TextField, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  form: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
    
   

  },
});

class FormMessage extends Component {
  state = {
    author: '',
    text: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.sendMessage();
  };

  onChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  sendMessage = () => {
    const { addMessage } = this.props;
    const { text, author } = this.state;

    addMessage({ author, text, id: uuidv4() });
    this.setState({
      text: '',
    });
  };

  onKeyDown = e => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      this.sendMessage();
    }
  };

  render() {
    const { author, text } = this.state;
    const { classes } = this.props;

    return (
      <form className={classes.form} onSubmit={this.onSubmit}>
        <TextField
          label="Author"
          name="author"
          value={author}
          onChange={this.onChange}
          required
        />
        <TextField
          name="text"          
          label="Message"
          

          multiline
          rowsMax={4}
          value={text}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          required
        />
        <IconButton type="submit" color="secondary">
          
          <SendIcon />
          
        </IconButton>
      </form>
    );
  }
}

FormMessage.propTypes = {
  classes: PropTypes.shape({
    form: PropTypes.string,
  }).isRequired,
  addMessage: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormMessage);


//label="Message"