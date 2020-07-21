import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

const styles = {
    root: {
        flexGrow: 1,
    }
};

class FormMessage extends Component {
  state = {
    author: "user",
    text: "",
  };

    onSubmit = e => {
        e.preventDefault();
        this.sendMessage();
    };

    onChange = ({ target }) => {
        const { value, name } = target;

        this.setState({ [name]: value });
    };

    sendMessage = () => {
        const { addMessage } = this.props;
        const { text, author } = this.state;

        addMessage({ author, text, id: uuidv4() });
        this.setState({
            text: '',
        });
    };

    onKeyDown = e => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            this.sendMessage();
        }
    };

  render() {
        const { author, text } = this.state;
        const { classes } = this.props;

    return (
        <form onSubmit={this.onSubmit}>
            <Grid container justify="space-between" className={classes.root} >
                <Grid item xs={2}>
                    <TextField
                        label="Author"
                        variant="outlined"
                        name="author"
                        onChange={this.onChange}
                        value={author}
                    />
                </Grid>
                <Grid item xs={7}>
                    <TextField
                        label="Text"
                        fullWidth
                        variant="outlined"
                        name="text"
                        multiline
                        value={text}
                        onChange={this.onChange}
                        onKeyDown={this.onKeyDown}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        // Как подправить размер кнопки пока тоже не понимаю...
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                    send message
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
  }
}

FormMessage.propTypes = {
    classes: PropTypes.shape({
        form: PropTypes.string,
    }).isRequired,
    addMessage: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormMessage);
