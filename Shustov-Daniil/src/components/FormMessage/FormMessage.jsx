import React, { memo, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { TextField, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
import { addMessage } from '../../actions/chats';

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
    const {
      addMessage,
      match: { params },
    } = this.props;
    const { text } = this.state;

    addMessage({ chatId: params.chatId, message: { text, id: uuidv4() } });
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
    const { text } = this.state;
    const { classes } = this.props;

    return (
      <form className={classes.form} onSubmit={this.onSubmit}>
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
        <IconButton type="submit" color="primary">
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      chatId: PropTypes.string,
    }),
  }).isRequired,
};

const mapDispatchToProps = {
  addMessage,
};

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
  withRouter,
  memo,
)(FormMessage);
