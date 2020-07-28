import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Messages, FormMessage } from "../../components";
import { getChatsSuccess } from "../../actions/chats";
import { getChats } from "../../selectors/chats";
import mockChats from "./mockChats";
import Layout from "../../components/Layout";

class Chats extends PureComponent {
  // timer = null;

  componentDidMount() {
    const { getChats } = this.props;
    setTimeout(() => {
      getChats(mockChats);
    }, 1000);
  }

  //   componentDidUpdate(prevProps, PrevState) {
  // const { messages } = this.state;
  // clearTimeout(this.timer);
  // if (messages[messages.length - 1].author !== "bot") {
  //   this.timer = setTimeout(() => {
  //     this.setState(({ messages: currentMessages }) => ({
  //       messages: [
  //         ...currentMessages,
  //         {
  //           author: "bot",
  //           text: "Привет от Бота",
  //           id: shortid.generate(),
  //         },
  //       ],
  //     }));
  //   }, 1000);
  // }
  //   }

  // get messages() {
  //   // const {
  //   //   match: { params },
  //   // } = this.props;
  //   const { chats } = this.props;
  //   return chats.messageList;

  //   // return chats[params.chatId]?.messageList.map(
  //   //   messageId => messages[messageId],
  //   // );
  // }

  addMessage = ({ author, text, id }) => {
    const {
      match: { params },
    } = this.props;
    // this.setState(({ chats, messages }) => ({
    //   chats: {
    //     ...chats,
    //     [params.chatId]: {
    //       ...chats[params.chatId],
    //       messageList: [...chats[params.chatId].messageList, id],
    //     },
    //   },
    //   messages: { ...messages, [id]: { id, author, text } },
    // }));
  };

  render() {
    const { currentChat } = this.props;

    return (
      <Layout>
        <Messages messages={currentChat.messageList} />
        <FormMessage addMessage={this.addMessage} />
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
