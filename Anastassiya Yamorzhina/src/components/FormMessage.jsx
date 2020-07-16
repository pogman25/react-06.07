import React, {Component} from "react";
import PropTypes from "prop-types";
import "../styles/FormMessage.css";

const initialState = {
  author: "",
  text: "",
  isTextError: false,
  isAuthorError: false,
};

class FormMessage extends Component {

  constructor(props) {
    super(props);
    this.state = {...initialState};
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {addMessage} = this.props;

    this.setState({isTextError: false});
    this.setState({isAuthorError: false});

    if(this.state.text.length > 0 && this.state.author.length > 2) {
      addMessage(this.state);
      this.setState({...initialState}); // короткий вариант очистки полей
    } else {
      if(this.state.text.length < 1) {
        this.setState({isTextError: true});
      }
      if(this.state.author.length < 2) {
        this.setState({isAuthorError: true});
      }

    }


    // this.state.text = '';
    // this.state.author = ''; // очищаем поля после клика на кнопку


  };

  onChange = ({target}) => {
    const {value, name} = target;
    this.setState({[name]: value});
  };

  render() {



    const {author, text, isTextError, isAuthorError} = this.state;

    let className = 'text';
    if (isTextError) {
      className += ' error';
    }

    let inputStyle = 'author';
    if (isAuthorError) {
      inputStyle += ' error';
    }


    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          className={inputStyle}
          type="text"
          name="author"
          onChange={this.onChange}
          value={author}
        />
        <textarea
          className={className}
          name="text"
          cols="30"
          rows="5"
          value={text}
          onChange={this.onChange}
        />
        <button type="submit" className="btn">Send</button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default FormMessage;
