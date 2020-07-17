import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "sticky",
    bottom: "0",
    backgroundColor: "#fff"
  },
  textArea: {
    width: "80%",
  },
  btn: {
    margin: "20px 0 0 0"
  }
};

class FormMessage extends Component {
  state = {
    author: "",
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addMessage } = this.props;
    if(this.state.text == "") {
      return
    } else {
      addMessage(this.state);
      this.setState({ text: "" });
    }
  };

  onChange = ({ target }) => {
    const { value, name } = target;
    
    this.setState({ [name]: value });
  };

  handler = (event) => {
    if(event.keyCode === 13){
      const {addMessage} = this.props;
      addMessage(this.state);
      this.setState({text: ""})
    }
  }

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
          className={classes.author}
        />
        <TextField
          name="text"
          label="Message"
          multiline
          rowsMax={4}
          value={text}
          onChange={this.onChange}
          className={classes.textArea}
          onKeyUp={(event) => this.handler(event)}
        />
        <Button variant="contained" 
          color="primary" 
          type="submit" 
          className={classes.btn}>Add</Button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormMessage);
