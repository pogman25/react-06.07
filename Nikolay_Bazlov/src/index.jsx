import React, {Component} from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

class HelloMessage extends Component {
    constructor (props) {
        super(props);

        this.state = {
            arr: []
        };
        this.increment = this.increment.bind(this);
    }
    increment() {
        const { arr } = this.state;
        this.setState({arr: arr.concat(" нормально")}); // concat чтобы arr оставался (правильный_ответ ? массивом : объектом)
    }
    render() {
        const { arr } = this.state;

        return (
            <div>
                <Message name={"Александр Погорелов"}/>
                <p>Настроение планеты: { arr }</p>
                <button onClick={this.increment}>Добавить слово "нормально"</button>
            </div>
        )
    }
}
const element = document.getElementById("root");

ReactDOM.render(<HelloMessage/>, element);