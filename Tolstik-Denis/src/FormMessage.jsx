import React, {Component} from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';

const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  };  

class FormMessage extends Component {
    state = {
        author: "",
        message: "",
    }
    
    onSubmit = (e) => {
        const {author, message} = this.state;
        const {addMessage} = this.props;
        e.preventDefault();
        addMessage(author, message);
        this.setState({author: "", message: ""});
    }

    onChange = ({target}) => {
        const {value, name} = target;                
        this.setState({[name]: value});
    }

    render() {
        const {author, message} = this.state; 
        const {classes} = this.props;
        
        return(<form className={classes.form} onSubmit={this.onSubmit}>
            <TextField
                label="Author"
                name="author"
                placeholder="Enter author name"
                value={author}
                onChange={this.onChange}/>
            
            <TextField
                label="Message"
                name="message"
                multiline
                rowMax={4}
                placeholder="Enter message..."
                onChange={this.onChange}
                value={message}/>
            <Button type="submit">
                <SendIcon/>
            </Button>
        </form>);
    }
}

FormMessage.propTypes = {
    addMessage: PropTypes.func.isRequired
}

export default withStyles(styles)(FormMessage);