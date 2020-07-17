import React, { Component } from "react";
import PropTypes from "prop-types";

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
        <input
          type="text"
          name="author"
          onChange={this.onChange}
          value={author}
        />
        <textarea
          name="text"
          cols="30"
          rows="5"
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

export default FormMessage;
