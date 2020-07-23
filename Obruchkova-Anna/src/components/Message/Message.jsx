import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Message.css';
import classnames from 'classnames';


export class Message extends Component {

    render() {
        return (
            <ul className='messagesAll'>
                {this.props.messages.map(({ user, text }, index) =>
                    <li key={index} className={classnames (
                        'messagesItem',
                         user === 'Robot' && 'messagesItemRobot')}>
                        <strong><span className='userNameInMessage'>{user} : </span></strong><span className={classnames (
                        'contextInMesssage',
                        user === 'Robot' && 'contextInMesssageRobot' )}>{text}</span>
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

