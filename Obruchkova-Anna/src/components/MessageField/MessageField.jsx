import React, { Component } from 'react';
import { Message } from '../Message/Message';
import { FormMessage } from '../FormMessage/FormMessage'
import './MessageField.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from '../Dashboard/DashBoard';
import ChatList from '../ChatList/ChatList'

const theme = createMuiTheme();

export class MessageField extends Component {

    state = {
        messages: [
            { user: 'User', text: 'Hello' },
            { user: 'User2', text: 'How are you' },
        ],
    };
    timer = null;

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        clearTimeout(this.timer);
        if (messages[messages.length - 1].user !== 'Robot') {
            this.timer = setTimeout(() => {
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
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Dashboard />
                <div className="MessageFieldContainer">
                  
                    <div className="Chatlist">
                    <ChatList/>
                    </div>
                    <div className='MessageField'>
                        <div className="message">
                        <Message messages={messages} />
                        </div>
                        <div className="FormMessage"><FormMessage messages={messages} sendMessage={this.sendMessage} />
                        </div>
                        
                    </div>
                
                </div>

            </ThemeProvider>)
    }
}
