import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message'


class HelloMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: []
        };
        this.add = this.add.bind(this)
    }

    add(){
        const { arr } = this.state
        this.setState({arr: [...arr, 'Okay']})
    }

    render(){
    let { arr } = this.state

    return <div>
       <p>Hello, {this.props.name}</p>
        <Message name="Someone"/>
        <button onClick={this.add}>add</button>
        <p>{arr}</p>
        </div>;
    }
}

ReactDOM.render(
    <HelloMessage name="person" />,
    document.getElementById('root')
);