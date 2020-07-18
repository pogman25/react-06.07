import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Message extends Component {

    render() {
        return (
            <ul>
                {this.props.messages.map(({ user, text }, index) =>
                    <li key={index}>
                        <strong><span>{user} : </span></strong><span>{text}</span>
                    </li>)} </ul>
        )
    }
}
Message.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired
}

