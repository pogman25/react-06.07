import React, {Component} from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

class HelloMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "World!",
      message: "push me",
      value: [],
    };
    this.increment = this.increment.bind(this);
  }  
  
increment() {
  const { value } = this.state;
  this.setState({value: value.concat("it's ok!")});
}

  render() {
    const { value, name, message } = this.state;

      return (
        <div>
          <Message name/>
          <p>Hello {name}!</p>
          <p>{message}</p>
          <p>{value}</p>
          <button onClick={this.increment} >add word</button>
        </div>
      );
    }
  }
  const element = document.getElementById('root')
  
  ReactDOM.render(
    <HelloMessage/>, element);