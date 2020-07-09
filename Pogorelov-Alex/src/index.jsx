import React from 'react';
import ReactDOM from 'react-dom'
import Message from "./Message";

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            message: "пример",
            messageArr: [],
            newOneMessage: "нормально"
        };
        this.increment = this.increment.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

    increment() { this.setState( ({ count }) => ({ count: count + 1 })) }
    addMessage() { this.setState( ({ messageArr }) => messageArr.push(this.state.newOneMessage) ) }

    render() {
        const { count, message } = this.state;
        const { name } = this.props;

        return (
            <div>
                <p>Hello {name}!!!</p>
                <p>{message}</p>
                <p>{count}</p>
                <button onClick={this.increment}>add</button>
                <Message name="GeekBrains"
                         addMessage={this.addMessage}
                         messageArr={this.state.messageArr}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name ='Artem' />,
    document.getElementById('root')
);

