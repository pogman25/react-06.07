import React, { Component } from "react";
import PropTypes from "prop-types";
import Messages from "./Messages";

class FormMessage extends Component {
  state = {
    author: "",
    text: "",  
    
    
    
  };

   
  
  onSubmit = (e) => {    
    console.log(this.props);

    const { addMessage } = this.props;
 
    e.preventDefault();
    addMessage(this.state);
    
     this.refs.areaForText.value = ""; 


  };

  

  onChange = ({ target }) => {

    
    const { value, name } = target;

     
      if (name === "author") (
        this.state.author = value
       ) ;
  
       else if (value.match("^[A-Z ]*$")!=null) {
        this.state.text = value;
       }

       else if (value.match("^[A-Z ]*$") ===null)
       (this.state.text = "НАООРИ НА МЕНЯ ВВЕДИ СООБЩЕНИЕ КАПСОМ :-)");
       
      
     
     
      console.log(this.state);
    


     
  

  };

  render() {
    const { author, text } = this.state;

    return (
      <form onSubmit={this.onSubmit} >
        <input
          type="text"
          name="author"
          onChange={this.onChange}
          value={this.author}
        />
        <textarea
          name="text"
          ref="areaForText"
          cols="30"
          rows="5"
          value={this.text}
          onChange={this.onChange}
        />
        <button type="submit">add Message</button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default FormMessage;
