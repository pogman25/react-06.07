import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

class HelloMessage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        arr: [],
        message: ''
      };

      this.increment = this.increment.bind(this);
      this.changeMessage = this.changeMessage.bind(this);
    }


    increment() {
       const { arr, message } = this.state;
       this.setState({ arr: [...arr, message]});
    }

    changeMessage(e) {
      const { message } = this.state;
      this.setState({ message: event.target.value});
    }

    render() {
      const { arr, message } = this.state;    
      const { name } = this.props;

      return (
        <div>
          <Message name = 'GeekBrains' />
          <p>Hello { name }!!!</p>
          <input type="text" placeholder = "Введите сообщение" value = { message } onChange = { this.changeMessage } />
          <p>{ arr[arr.length-1] }</p>
          <button onClick={this.increment}>add</button>
        </div>
      );
    }
  }

  const element =  document.getElementById('root');
  
  ReactDOM.render(<HelloMessage name="Daniil" />, element);