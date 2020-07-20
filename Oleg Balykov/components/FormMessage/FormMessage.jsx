import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';



class FormMessage extends Component {
  state = {
    author: "",
    text: "",
  };

  onSubmit = (e) => {
    const { addMessage } = this.props;
    e.preventDefault();
    addMessage(this.state);
    this.setState({text: '' });
  };

  onChange = ({ target }) => {
    const { value, name } = target;
    this.setState({[name]: value});
  };

  render() {
    const { author, text } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <TextField label='Outlined' variant='outlined' type="text"
          name="author"
          onChange={this.onChange}
          value={author}/>
           <TextField
           name="text"
           label='Message'
           multiline
           rowsMax={4}
           onChange={this.onChange}
           value={text}
         />
        
        <button type="submit">add Message</button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default FormMessage;
