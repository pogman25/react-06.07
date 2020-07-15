


import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    margin: 100,
    alignItems: "flex-start",
  },
};

class FormMessage extends Component {
  state = {
    author: "",
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addMessage } = this.props;
    addMessage(this.state);
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
        <button type="submit">add Message</button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormMessage);
