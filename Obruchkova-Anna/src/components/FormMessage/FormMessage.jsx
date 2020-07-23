import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { MessageField } from '../MessageField/MessageField';
import Button from '@material-ui/core/Button';

export class FormMessage extends Component {
    state = {
        user: '',
        text: ''
    }
    handleSubmit = (e) => {
        const { user, text } = this.state;
        console.log(user, text)
        const { sendMessage } = this.props;
        e.preventDefault();
        sendMessage({ user, text });
    };
    onChange = ({target}) => {
        const {name, value} = target;
        this.setState({ [name]: value })
    }

    render() {
        const { user, text } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    className='textfieldName'
                    variant="outlined"
                    name="user"
                    placeholder="Type your name..."
                    value={user}
                    onChange={this.onChange} /> <br />
                <TextField
                    multiline
                    rows={4}
                    content="content"
                    placeholder="Type your message..."
                    variant="outlined"
                    name="text"
                    value={text}
                    onChange={this.onChange} /><br />
                <Button variant="contained" color="default" href="#contained-buttons"
                    type='submit' onClick={this.handleSubmit}>Send</Button>
            </form>
        )
    }
}

FormMessage.propTypes = {
    sendMessage: PropTypes.func.isRequired
}