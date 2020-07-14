import React, {Component} from 'react';
import PropTypes from "prop-types";

class Message extends Component {
    render() {
        const {message} = this.props;
        return <li>{message}</li>;
    }
}

Message.propTypes = {
    message: PropTypes.string.isRequired
}

export default Message;
