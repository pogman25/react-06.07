import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Message from "./components/Message";
import FormMessage from "./components/FormMessage";

class HelloMessage extends Component {
  state = {
      messages: [
        {author: "user", text: "привет"},
        {author: "user", text: "как дела"},
      ],
    };

  componentDidUpdate(prevProps, prevState) {
    const {messages} = this.state;
    if (messages[messages.length -1].author !== "bot") {
      setTimeout(() => {
        console.log("Я робот");
        this.setState(({messages}) => ({messages: [...messages, {author: "bot", text: "Не приставай ко мне, я - бот"}]}));
      }, 1000);
    }
  }

  addMessage = () => {
    this.setState(({messages}) => ({messages: [...messages, {author, text}]}));
  }

  render() {
    const {messages} = this.state;
    const {name} = this.props;
    console.log("I'm render");

    return(
      <div>
        <p>Hello {name}!!!</p>
        <Message messages={messages} />
        <FormMessage addMessage={this.addMessage} />
      </div>
    );
  }
}

const element = document.getElementById('root');

ReactDOM.render(<HelloMessage name="Kseniia" />, element);
