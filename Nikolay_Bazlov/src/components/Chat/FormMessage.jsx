import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  form: {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

class FormMessage extends Component {
  state = {
    author: "user",
    text: "",
  };

  onSubmit = (e) => {
    const { addMessage } = this.props;
    e.preventDefault();
    addMessage(this.state);
    this.setState({text: ""});
  };

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({[name]: value});
  };

  render() {
    const { author, text } = this.state;
    const {classes} = this.props;

    return (
        <form className={classes.form} onSubmit={this.onSubmit}>
          <TextField
              label="Author"
              variant="outlined"
              name="author"
              onChange={this.onChange}
              value={author}
          />
          <TextField
              label="Text"
              multiline
              rows={4}
              variant="outlined"
              name="text"
              value={text}
              onChange={this.onChange}
          />
          <Button
              variant="contained"
              color="primary"
              type="submit"
          >
            add message
          </Button>
        </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormMessage);
