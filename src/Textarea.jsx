import React, {Component} from "react";
import ReactDOM from "react-dom";
import Styles from './styles/App.css';

class Textarea extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: "Введите свой текст ",
      letters: [],
    };

    this.addToArray = this.addToArray.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  addToArray() {
    this.setState(state => {
      const letters = [...state.letters, state.value];

      return {
        letters
      };
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const {value, letters } = this.state;
    return (
      <div>
      <textarea className="textarea-style" value={value} onChange={this.handleChange}>
      </textarea>

        <button onClick={this.addToArray} className="button-primary">Отправить</button>
        {letters.map((letter, index) =>
          <div className="future-message" key={index}>{letter}</div>
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <Textarea />,
  document.getElementById("root")
);

export default Textarea;
