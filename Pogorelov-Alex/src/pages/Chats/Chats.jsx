import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@material-ui/core';
import { Messages, FormMessage } from '../../components';
import { getChatsSuccess } from '../../actions/chats';
import { getChats } from '../../selectors/chats';
import mockChats from './mockChats';
import Layout from '../../components/Layout/Layout';

class Chats extends Component {
  componentDidMount() {
    const { getChats } = this.props;
    setTimeout(() => {
      getChats(mockChats);
    });
  }

  addMessage = ({ id, author, text }) => {
    const {
      match: { params },
    } = this.props;
  };

  render() {
    const { currentChat } = this.props;
    return (
      <Layout>
        <Box p={3} mt={2} flexGrow={1}>
          <Messages messages={currentChat.messageList} />
          <FormMessage addMessage={this.addMessage} />
        </Box>
      </Layout>
    );
  }
}

Chats.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      chatId: PropTypes.string,
    }),
  }).isRequired,
  getChats: PropTypes.func.isRequired,
};

const mapStateToProps = (store, ownProps) => {
  const {
    match: {
      params: { chatId },
    },
  } = ownProps;
  return {
    currentChat: getChats(store, chatId),
  };
};

const mapDispatchToProps = {
  getChats: getChatsSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
