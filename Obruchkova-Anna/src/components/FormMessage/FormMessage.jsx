import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { MessageField } from '../MessageField/MessageField';
import Button from '@material-ui/core/Button';
import './FormMessage.css'

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
        this.setState({user: '', text: ''})
    };
    onChange = ({target}) => {
        const {value, name} = target;
        this.setState({ [name]: value })
    };
    handleKeyUp = (e, message) => {
        const { user, text } = this.state;
        const { sendMessage } = this.props;
        if (e.keyCode ===13) {
            sendMessage({ user, text });
            this.setState({user: '', text: ''})
        }
    }
    render() {
        const { user, text, input } = this.state;
        return (
            <form className='formContainer' onSubmit={this.handleSubmit}>
                <TextField
                    className='textfieldName'
                    variant="outlined"
                    name="user"
                    placeholder="Type your name..."
                    value={user}
                    onChange={this.onChange} 
                    onKeyUp={(e) => this.handleKeyUp (e, input) }/> <br />
                <TextField
                    multiline
                    rows={4}
                    content="content"
                    placeholder="Type your message..."
                    variant="outlined"
                    name="text"
                    value={text}
                    onChange={this.onChange} 
                    onKeyUp={(e) => this.handleKeyUp (e, input) }
                    className='MessageInput'/><br />
                <Button variant="contained" color="default" href="#contained-buttons"
                    type='submit' onClick={this.handleSubmit}>Send</Button>
            </form>
        )
    }
}

FormMessage.propTypes = {
    sendMessage: PropTypes.func.isRequired
}