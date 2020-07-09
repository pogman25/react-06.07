import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

class HelloMessage extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     count: [],
   };
   this.increment = this.increment.bind(this);
  }  
  
  increment() {
    const {count} = this.state;
    this.setState({ count: count +"Normalno" });
  }
  
  
  render() {

       const {count} = this.state;
       const {name} = this.props;

      return (
        <div>
         <Message name="World" />
         <p>Hello {name}</p>
         <p>{count}</p>
         <button onClick={this.increment}>add</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('root')
  );