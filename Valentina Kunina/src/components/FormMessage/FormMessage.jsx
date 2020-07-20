import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const styles = () => {
    return makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
};

class FormMessage extends Component {
    state = {
        author: "",
        text: "",
    };

    onSubmit = (event) => {
        const { addMessage } = this.props;
        event.preventDefault();
        addMessage(this.state);
        this.setState({ text: "" });
    };

    onChange = ({ target }) => {
        const { value, name } = target;
        this.setState({ [name]: value });
    };

    render() {
        const { author, text } = this.state;
        const { classes } = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    name="author"
                    placeholder="Add your name"
                    label="Author"
                    variant="outlined"
                    value={author}
                    onChange={this.onChange}
                />
                <TextField
                    name="text"
                    label="Message"
                    placeholder="Add your message"
                    multiline
                    variant="outlined"
                    value={text}
                    onChange={this.onChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<SendIcon />}
                >
                    Send
                </Button>
                {/* <button type="submit">Add Message</button> */}
            </form>
        );
    }
}

FormMessage.propTypes = {
    addMessage: PropTypes.func,
};

export default withStyles(styles)(FormMessage);
