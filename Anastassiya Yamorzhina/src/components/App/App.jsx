import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Messages from "../Messages";
import FormMessage from "../FormMessage";
import Dashboard from "../Dashboard";
import Header from "../Header";


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

class App extends Component {

  state = {
    messages: [
      {author: null, text: null},
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
    const {messages} = this.state;

    return (

      <div>
        <Header/>
        <Dashboard/>
        <div className="content">
          <Messages messages={messages}/>

          <FormMessage addMessage={this.addMessage}/>
        </div>
      </div>
    )
  }
}

export default App;
