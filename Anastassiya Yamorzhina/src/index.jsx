import React, {Component} from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Message from "./Message";
import TextArea from "./Textarea";
import Styles from './styles/App.css';


ReactDOM.render(<App />, document.getElementById("root"));

class HelloMessage extends Component {
  render() {
    return (
      <div>
      <h1>Здравствуйте, {this.props.name} ! </h1>
        <p className="p">Отправьте сообщение себе в будущее</p>
      <TextArea/>
      </div>
    )
  }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "Александр" }), document.getElementById('root'));
