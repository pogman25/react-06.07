import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
};

class FormMessage extends Component {
  state = {
    author: '',
    text: '',
  };

  onSubmit = e => {
    e.preventDefault();
    const { addMessage } = this.props;
    addMessage({ ...this.state, id: uuidv4() });
    this.setState({ text: '' });
  };

  onChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { author, text } = this.state;
    const {
      classes,
      match: { params },
    } = this.props;

    return (
      <form className={classes.form} onSubmit={this.onSubmit}>
        <TextField
          label="Author"
          variant="outlined"
          name="author"
          value={author}
          onChange={this.onChange}
        />
        <TextField
          name="text"
          label="Message"
          multiline
          rowsMax={4}
          value={text}
          onChange={this.onChange}
        />
        <button type="submit">{`add Message to ${params?.chatId}`}</button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  classes: PropTypes.object,
  addMessage: PropTypes.func.isRequired,
};

export default withStyles(styles)(withRouter(FormMessage));
