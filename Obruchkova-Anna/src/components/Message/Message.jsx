import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';


export class Message extends Component {

    render() {
        return (
            <ul>
                {this.props.messages.map(({ id, user, text }) =>
                    <li key={id}>
                        <strong><span>{user} : </span></strong><span>{text}</span>
                    </li>)} 
            </ul>
        )
    }
}
Message.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            user: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired
}

