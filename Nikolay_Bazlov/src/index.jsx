import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Messages from "./Messages";
import FormMessage from "./FormMessage";

class HelloMessage extends Component {
  state = {
    messages: [
      { author: "user", text: "привет" },
      { author: "user", text: "как дела" },
    ],
  };

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (messages[messages.length - 1].author !== "bot") {
      setTimeout(() => {
        this.setState(({ messages }) => ({
          messages: [...messages, { author: "bot", text: "привет от бота" }],
        }));
      }, 1000);
    }
  }

  addMessage = ({ author, text }) => {
    this.setState(({ messages }) => ({
      messages: [...messages, { author, text }],
    }));
  };

  render() {
    const { messages } = this.state;

    return (
      <div>
        <Messages messages={messages} />
        <FormMessage addMessage={this.addMessage} />
      </div>
    );
  }
}

const element = document.getElementById("root");

ReactDOM.render(<HelloMessage />, element);
