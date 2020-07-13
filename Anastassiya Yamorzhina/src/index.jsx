import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import Messages from "./components/Messages";
import FormMessage from "./components/FormMessage";

import './styles/App.css';

const answers = [
  {author: "user", text: "Меня вообще-то сложно удивить... О! Синяя машина!"},
  {author: "user", text: "— Пожалуйста, помолчите!\n" +
      "— Но я и так молчу.\n" +
      "— Вы думаете — это раздражает."},
  {author: "user", text: "— Скажи мне что-нибудь искреннее.\n" +
      "— Я не люблю горох."},
  {author: "user", text: "Странно, тут заперто... Как будто нас уже ждали."},
  {author: "user", text: "Оставь меня, старушка, я в печали…"},
  {author: "user", text: "— Вы позволите — вашу руку?\n" +
      "— Руку, ногу... Я вся ваша."},
];

class HelloMessage extends Component {

  state = {
    messages: [
      {author: "user", text: "Привет!"},
      {author: "user", text: "Как дела?"},
    ],
    isVisible: false,
  };

  addMessage = ({author, text}) => {
    this.setState(({messages}) => ({
      messages: [...messages, {author, text}],
    }));

    let answer = answers[Math.floor(Math.random() * answers.length)];
    this.setState(({messages}) => ({
      messages: [...messages, answer],
    }));
  };

  render() {
    const {messages, isVisible} = this.state;
    const {name} = this.props;

    return (
      <div>
        <h1>Здравствуйте, {name} ! </h1>
        <p className="p">Обмен сообщений с User</p>

        <div className="content">
          <Messages messages={messages}/>

          <FormMessage addMessage={this.addMessage}/>
        </div>
      </div>
    )
  }
}

HelloMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

const element = document.getElementById("root");

ReactDOM.render(React.createElement(HelloMessage, {name: "Anastassiya Y"}), document.getElementById('root'));
