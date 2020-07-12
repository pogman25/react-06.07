import React, { Component } from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

class HelloMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            messages: "hi",
        };
        this.increment = this.increment.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

    increment() {
        this.setState(({ count }) => ({ count: count + 1 }));
    }

    addMessage() {
        this.setState({ messages: [...this.state.messages, " Нормально"] });
    }

    render() {
        const { count, messages } = this.state;
        const { name } = this.props;

        return (
            <div>
                <Message name="World" />
                <p>Привет, {name}</p>
                <p>{messages}</p>
                <button onClick={this.addMessage}>Добавить сообщение</button>
                <p>{count}</p>
                <button onClick={this.increment}>Add</button>
            </div>
        );
    }
}

ReactDOM.render(<HelloMessage name="Саша" />, document.getElementById("root"));
