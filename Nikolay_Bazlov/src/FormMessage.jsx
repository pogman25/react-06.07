import React, { Component } from "react";
import PropTypes from "prop-types";

class FormMessage extends Component {
  state = {
    author: "user",
    text: "",
  };

  onSubmit = (e) => {
    const { addMessage } = this.props;
    const author = this.state.author;
    const text = this.state.text;

    e.preventDefault();
    addMessage({author, text});
    console.log(author, text);
    this.setState({author: "user", text: ""});
  };

  onChange = ({ target }) => {
    const { name, value } = target;
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
