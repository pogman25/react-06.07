import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Привет мир! :)",
      value: "",
      data : [
        {text: 'Welcome to REACT', id: 1}
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e){
    this.setState({value: e.target.value});
    console.log(this.state.value)
  }

  addItem(){
    const newItem = {
      text: this.state.value,
      id: Math.random()
    }
    this.setState(({data}) =>({data: [...data, newItem]}))
    console.log(this.state.data);
    this.state.value = '';
  }

  render() {
    const {name, value, data} = this.state;

    return (
      <div>
        <h1>{name}</h1>
        <input type = "text"
               placeholder = "Введите сообщение"
               value={value}
               onChange = {this.changeValue}
        />
        <button onClick={this.addItem}>add message</button>
        <ul>
            {data.map(item => (
             <li key={item.id}>{item.text}</li>
            ))}
        </ul>
      </div>
    );
  }
}

const element = document.getElementById("root");

ReactDOM.render(<App name="Alex" />, element);
