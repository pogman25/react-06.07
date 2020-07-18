import React, { Component } from 'react';
import { Message } from '../Message/Message';
import { FormMessage } from '../FormMessage/FormMessage'

export class MessageField extends Component {

    state = {
        messages: [
            { user: 'User', text: 'Hello' },
            { user: 'User2', text: 'How are you' },
        ],
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (messages[messages.length - 1].user !== 'Robot') {
            setTimeout(() => {
                this.setState(({ messages }) => ({
                    messages: [...messages, { user: 'Robot', text: 'I am Robot' }]
                }));
            }, 1000)
        }
    }
    sendMessage = (message) => {
        const { messages } = this.state;
        this.setState(({ messages }) => ({
            messages: [...messages, message],

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
