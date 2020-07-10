import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
class HelloMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            message: "пример",
        };
        this.increment = this.increment.bind(this);
    }
    increment(){
        this.setState(({ count }) => ({ count: count + 1 }));
    }
    validate() {};
    render() {
        const { count, message } = this.state;
        const { name } = this.props;
    
        return (
          <div>
            <Message name="GeekBrains" />
            <p>Hello {name}!!!</p>
            <p>{message}</p>
            <p>{count}</p>
            <button onClick={this.increment}>add</button>
          </div>
        );
      }

}
const element = document.getElementById('root')
ReactDOM.render(
<HelloMessage name='Alex' />, element);