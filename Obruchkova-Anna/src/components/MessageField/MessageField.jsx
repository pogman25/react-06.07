import React, { Component } from 'react';
import { Message } from '../Message/Message';
import { FormMessage } from '../FormMessage/FormMessage';
import { v4 as uuidv4 } from 'uuid';

export class MessageField extends Component {

    state = {
        messages: [
            { user: 'User', text: 'Hello', id: uuidv4() },
            { user: 'User2', text: 'How are you', id: uuidv4() },
        ],
    };

    componentDidUpdate() {
        const { messages } = this.state;
        if (messages[messages.length - 1].user !== 'Robot') {
            setTimeout(() => {
                this.setState(({ messages }) => ({
                    messages: [...messages, { user: 'Robot', text: 'I am Robot', id: uuidv4()}]
                }));
            }, 1000)
        }
    }
    sendMessage = ({user, text}) => {
        const { messages } = this.state;
        this.setState(({ messages }) => ({
            messages: [...messages, {user, text, id: uuidv4()}],

        }));
    };
    render() {
        const { messages } = this.state;
        return <div>
            <Message messages={messages} />
            <FormMessage messages={messages} sendMessage={this.sendMessage} />
        </div>

    }
}
