import React, {Component} from "react";
import PropTypes from "prop-types";
import Button from "../../components/Dashboard/Button";
import Multiline from "../Dashboard/Multiline";
import InputForm from "../Dashboard/InputForm";


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

    console.log(this.state);

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
  };

  onChange = ({target}) => {
    const {value, name} = target;
    this.setState({[name]: value});

    console.log('onChange');
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
        <InputForm onChange={this.onChange} ></InputForm>

        <Multiline onChange={this.onChange}></Multiline>

        <Button></Button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default FormMessage;
