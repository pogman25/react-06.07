import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        };
        this.sendMessage = this.sendMessage.bind(this)
    }
    sendMessage() {
        const { messages } = this.state;
        this.setState({
            messages: [...messages, 'Hello']

        })
    }
    render() {
        const { messages } = this.state;

        return <div><button onClick={this.sendMessage}> Send Message</button>
            <ul>{messages.map(message => <li>{message}</li>)}</ul>

        </div>

    }
}
const element = document.getElementById('root');
ReactDOM.render(
    <Test />,
    element
)

