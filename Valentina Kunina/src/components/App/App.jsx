import React, { PureComponent } from "react";
import shortid from "shortid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Messages from "../Messages";
import FormMessage from "../FormMessage";
import Menu from "../Menu";
import { Box, Container } from "@material-ui/core";

const theme = createMuiTheme();

const style = {
    display: "flex",
    flexDirection: "column",
    margin: "60px auto",
    padding: "20px",
}

class App extends PureComponent {
    state = {
        messages: [
            { author: "user", text: "привет", id: shortid.generate() },
            { author: "user", text: "как дела?", id: shortid.generate() },
        ],
    };

    timer = null;

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        clearTimeout(this.timer);

        if (messages[messages.length - 1].author !== "bot") {
            this.timer = setTimeout(() => {
                this.setState(({ messages }) => ({
                    messages: [
                        ...messages,
                        {
                            author: "bot",
                            text: "Привет от Бота",
                            id: shortid.generate(),
                        },
                    ],
                }));
            }, 1000);
        }
    }

    addMessage = ({ author, text, id = shortid.generate() }) => {
        this.setState(({ messages }) => ({
            messages: [...messages, { author, text, id }],
        }));
    };

    render() {
        const { messages } = this.state;
        // const { name } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box display="flex" height="100vh">
                    <Menu />
                    <Box style={style}>
                        <Messages messages={messages} />
                        <FormMessage addMessage={this.addMessage} />
                    </Box>
                </Box>
            </ThemeProvider>
        );
    }
}

// HelloMessage.propTypes = {
//     name: PropTypes.string,
// };

export default App;
