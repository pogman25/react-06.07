import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Messages from '../Messages';
import FormMessage from '../FormMessage';
import Header from '../Header';
import ChatList from '../ChatsList';

const theme = createMuiTheme();

const styles = {
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    marginTop: theme.spacing(9),
  },
  root: {
    display: 'flex',
  },
};

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
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <Header />
          <ChatList />
          <main className={classes.content}>
            <Messages messages={messages} />
            <FormMessage addMessage={this.addMessage} />
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
