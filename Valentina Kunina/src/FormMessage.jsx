import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

class FormMessage extends Component {
    state = {
        author: "",
        text: "",
    };

    onSubmit = (event) => {
        const { addMessage } = this.props;
        event.preventDefault();
        addMessage(this.state);
        this.setState({ text: "" });
    };

    onChange = ({ target }) => {
        const { value, name } = target;
        this.setState({ [name]: value });
    };

    render() {
        const { author, text } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={this.onChange}
                />
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    value={text}
                    onChange={this.onChange}
                />
                <button type="submit">Add Message</button>
            </form>
        );
    }
}

FormMessage.propTypes = {
    addMessage: PropTypes.func,
};

export default FormMessage;
