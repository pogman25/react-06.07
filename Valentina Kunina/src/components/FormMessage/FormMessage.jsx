import React, { memo, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import shortid from "shortid";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { addMessage } from "../../actions/chats";

const theme = createMuiTheme();

const styles = {
  button: {
    margin: theme.spacing(1),
  },
  form: {
    display: "flex",
    justifyContent: "center",
  },
};

class FormMessage extends Component {
  state = {
    author: "",
    text: "",
  };

  onSubmit = event => {
    const {
      addMessage: sendMessage,
      match: { params },
    } = this.props;
    event.preventDefault();
    sendMessage({
      chatId: params.chatId,
      message: { ...this.state, id: shortid.generate() },
    });
    this.setState({ text: "" });
  };

  onChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { author, text } = this.state;
    const { classes } = this.props;

    return (
      <form onSubmit={this.onSubmit} className={classes.form}>
        <TextField
          name="author"
          placeholder="Add your name"
          label="Author"
          variant="outlined"
          value={author}
          onChange={this.onChange}
        />
        <TextField
          name="text"
          label="Message"
          placeholder="Add your message"
          multiline
          variant="outlined"
          value={text}
          onChange={this.onChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
        {/* <button type="submit">Add Message</button> */}
      </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      chatId: PropTypes.string,
    }),
  }).isRequired,
};

const mapDispatchToProps = {
  addMessage,
};
// const mapStateToProps = {};

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
  withRouter,
  memo,
)(FormMessage);
