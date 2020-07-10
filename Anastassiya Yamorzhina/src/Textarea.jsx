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

    this.addToArray = this.addToArray.bind(this); //bind нужен, чтобы работал state (changeable data)

    this.handleChange = this.handleChange.bind(this);
  }

  addToArray() {
    this.setState(state => {
      const letters = [...state.letters, state.value]; // оператор spread ... копирует свойства объекта letters, value,
      // перезаписывает их, получая новые данные.

      return {
        letters
      };
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    //event - применяемое событие, в данном случае onChange, target - свойство события, кот возвращает контент от того к чем
    //применент event в данном случае textarea, a value это атрибут, кот. явл. ключом value от this.state
  }

  render() {
    const {value, letters } = this.state;
    //const value = this.state.value - подроб. записи выше
    //const letters = this.state.letters - - подроб. записи выше

    return (
      <div>
      <textarea className="textarea-style" value={value} onChange={this.handleChange}>
      {/* JavaScript allows us to listen to an input’s change in value by providing the attribute onchange*/}
      </textarea>

        <button onClick={this.addToArray} className="button-primary">Отправить</button>
        {letters.map((letter, index) =>
          //перебираем с помощью  map массив letters ( (элемент массива (типа car in cars -> letter in letters), index - это как i,
        //нужен для key ниже
          <div className="future-message" key={index}>
            {/*key - каждый элемент массива должен быть подписан уникальным ключом. нужен здесь -так требует
            framework. задаём значение key в данном случае index элемента массива*/}
            {letter}
            {/*//элемент массива*/}
          </div>

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
