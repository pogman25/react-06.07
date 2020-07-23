import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@material-ui/core';
import { Messages, FormMessage } from '../../components';

class Chats extends Component {
  state = {
    chats: {
      1: {
        id: 1,
        messageList: [1, 2],
        title: 'Чат 1',
      },
      2: {
        id: 2,
        messageList: [3, 4],
        title: 'Чат 2',
      },
    },
    messages: {
      1: { author: 'user', text: 'привет 1', id: 1 },
      2: { author: 'user', text: 'привет 2', id: 2 },
      3: { author: 'user', text: 'привет 3', id: 3 },
      4: { author: 'user', text: 'привет 4', id: 4 },
    },
  };

  timer = null;

  componentDidUpdate(_, prevState) {
    const {
      match: { params },
    } = this.props;
    const { chatId } = params;
    const { chats } = this.state;
    const { messageList } = chats[chatId];
    if (prevState.chats[chatId].messageList.length !== messageList.length) {
      clearTimeout(this.timer);
      const messages = this.messages;
      if (messages[messages.length - 1].author !== 'bot') {
        this.timer = setTimeout(() => {
          this.addMessage({ id: uuidv4(), author: 'bot', text: 'Я бот' });
        }, 1000);
      }
    }
  }

  get messages() {
    const {
      match: { params },
    } = this.props;
    const { chats, messages } = this.state;

    return chats[params.chatId]?.messageList.map(mid => messages[mid]);
  }

  addMessage = ({ id, author, text }) => {
    const {
      match: { params },
    } = this.props;

    this.setState(({ chats, messages }) => ({
      chats: {
        ...chats,
        [params.chatId]: {
          ...chats[params.chatId],
          messageList: [...chats[params.chatId].messageList, id],
        },
      },
      messages: {
        ...messages,
        [id]: { id, author, text },
      },
    }));
  };

  render() {
    return (
      <Box p={3} mt={2} flexGrow={1}>
        <Messages messages={this.messages} />
        <FormMessage addMessage={this.addMessage} />
      </Box>
    );
  }
}

Chats.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      chatId: PropTypes.string,
    }),
  }).isRequired,
};

export default Chats;