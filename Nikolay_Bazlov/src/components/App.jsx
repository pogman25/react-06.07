import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Messages from "./Chat/Messages";
import FormMessage from "./Chat/FormMessage";
import Header from "./Layout/Header";
import Container from '@material-ui/core/Container';

const theme = createMuiTheme(); // Здесь кастомизация темы

class App extends Component {
    state = {
        messages: [
            { author: "user", text: "привет", id: uuidv4() },
            { author: "user", text: "как дела", id: uuidv4() },
        ],
    };
    timer = null;

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        clearTimeout(this.timer);
        if (messages[messages.length - 1].author !== "bot") {
            this.timer = setTimeout(() => {
                this.setState(({ messages }) => ({
                    messages: [...messages, { author: "bot", text: "привет от бота", id: uuidv4() }],
                }));
            }, 1000);
        }
    }

    addMessage = ({ author, text }) => {
        this.setState(({ messages }) => ({
            messages: [...messages, { author, text, id: uuidv4() }],
        }));
    };

    render() {
        const { messages } = this.state;

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Container maxWidth="sm">
                    <Messages messages={messages} />
                    <FormMessage addMessage={this.addMessage} />
                </Container>
            </ThemeProvider>
        );
    }
}

export default App;