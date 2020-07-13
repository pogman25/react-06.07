import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import Form from "./components/Form";
import Messages from "./components/Messages";

class App extends Component {
  state = {
    data : [
      {author: "user", text: 'Добро пожаловать в REACT!', id: uuidv4()},
      {author: "user", text: 'В чем разница между REACT и VUE?', id: uuidv4()}
    ]
   /*  botData: [
      {text: "У Вас очень интересное мнение!"},
      {text: "Всегда уважал умных людей!"},
      {text: "А не правда ли сегодня замечательная погода?"}
    ] */
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;
     if (data[data.length - 1].author !== "bot") {
      setTimeout(() => {
        this.addItem("bot", "Я робот!")
      }, 1000);
    } 
  }

  addItem =(author, text) => {
    this.setState(({data}) =>({data: [...data, {author, text, id: uuidv4()}]}));
    console.log(this.state.data)
  };

  render() {
    const {data} = this.state;
    const{name} = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <Form addItem={this.addItem} />
        <Messages data = {data}/>
      </div>
    );
  }
}
App.propTypes = {
  name: PropTypes.string.isRequired,
}

const element = document.getElementById("root");

ReactDOM.render(<App name = "Доброго времени суток! :)"/>, element);
