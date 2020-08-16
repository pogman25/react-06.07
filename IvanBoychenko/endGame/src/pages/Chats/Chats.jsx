import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Messages, FormMessage } from '../../components';
import { getChats } from '../../selectors/chats';
import Layout from '../../components/Layout/Layout';

class Chats extends Component {
  componentDidMount() {}

  render() {
    const { currentChat, updated, isFetching } = this.props;

    return (
      <Layout>
        <Backdrop open={isFetching}>
          <CircularProgress color="inherit" />
        </Backdrop>
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
    isFetching: store.chats.isFetching,
  };
};

export default connect(mapStateToProps)(Chats);
