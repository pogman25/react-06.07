import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    author: "",
    text: "",
  };

  onSubmit = (e) => {
    const { addItem } = this.props;
    e.preventDefault();
    addItem(this.state.author, this.state.text);
    this.state.author = '';
    this.state.text =''
  };

  onChange = ({ target }) => {
    const { value, name } = target;
    name ==="author"? this.setState({author: value}) : this.setState({text: value});
  /* if(name === "author")
    this.setState({author: value});
    if(name === "text")
    this.setState({text: value}); */
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

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Form;