import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Messages, FormMessage } from "../../components";
import { getChatsSuccess } from "../../actions/chats";
import { getChats } from "../../selectors/chats";
// import mockChats from "../../mock/mockChats";
import Layout from "../../components/Layout";

class Chats extends PureComponent {
  render() {
    const { currentChat } = this.props;

    return (
      <Layout>
        <Messages messages={currentChat.messageList} />
        <FormMessage />
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
  currentChat: PropTypes.shape({ messageList: PropTypes.arrayOf(Object) })
    .isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { chatId },
    },
  } = ownProps;
  return {
    currentChat: getChats(state, chatId),
  };
};

const mapDispatchToProps = {
  getChats: getChatsSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
