import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { Messages, FormMessage } from '../../components';
import { getChats } from '../../selectors/chats';
import Layout from '../../components/Layout/Layout';

class Chats extends Component {
  componentDidMount() {}

  render() {
    const { currentChat, updated } = this.props;
    return (
      <Layout>
        <Box p={3} mt={2} flexGrow={1}>
          <Messages messages={currentChat.messageList} updated={updated} />
          <FormMessage />
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
};

const mapStateToProps = (store, ownProps) => {
  const {
    match: {
      params: { chatId },
    },
  } = ownProps;
  return {
    currentChat: getChats(store, chatId),
    updated: store.messages.updated,
  };
};

export default connect(mapStateToProps)(Chats);
