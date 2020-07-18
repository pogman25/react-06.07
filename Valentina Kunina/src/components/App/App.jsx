import React, { PureComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import shortid from "shortid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Messages from "../Messages";
import FormMessage from "../FormMessage";
import Layout from "../Layout";

const theme = createMuiTheme();

class App extends PureComponent {
  state = {
    messages: [
      { author: "user", text: "привет", id: shortid.generate() },
      { author: "user", text: "как дела?", id: shortid.generate() },
    ],
  };

  timer = null;

  componentDidUpdate() {
    const { messages } = this.state;
    clearTimeout(this.timer);

    if (messages[messages.length - 1].author !== "bot") {
      this.timer = setTimeout(() => {
        this.setState(({ messages: currentMessages }) => ({
          messages: [
            ...currentMessages,
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

    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Messages messages={messages} />
            <FormMessage addMessage={this.addMessage} />
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

// HelloMessage.propTypes = {
//     name: PropTypes.string,
// };

export default App;
