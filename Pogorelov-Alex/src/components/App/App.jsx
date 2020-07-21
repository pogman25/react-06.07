import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Messages from '../Messages';
import FormMessage from '../FormMessage';
import Layout from '../Layout/Layout';
import RootRouter from '../../pages/RootRouter/RootRouter';

const theme = createMuiTheme();

class App extends Component {
  state = {
    messages: [
      { author: 'user', text: 'привет', id: uuidv4() },
      { author: 'user', text: 'как дела', id: uuidv4() },
    ],
  };

  timer = null;

  componentDidUpdate() {
    const { messages } = this.state;
    clearTimeout(this.timer);
    if (messages[messages.length - 1].author !== 'bot') {
      this.timer = setTimeout(() => {
        this.setState(({ messages }) => ({
          messages: [...messages, { author: 'bot', text: 'привет от бота', id: uuidv4() }],
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
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Layout>
            <Messages messages={messages} />
            <FormMessage addMessage={this.addMessage} />
          </Layout> */}
          <RootRouter />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
