import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { addMessage } from "../../actions/chats";
import { withRouter } from "react-router-dom"
import {compose} from "redux";

const styles = {
    root: {
        flexGrow: 1,
    }
};

class FormMessage extends Component {
  state = {
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
        const { addMessage, match: { params } } = this.props;
        const { text } = this.state;

        addMessage( {chatId: params.chatId, message: { text, id: uuidv4() } } );
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
                <Grid item xs={9}>
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
    match: PropTypes.shape({
        params: PropTypes.shape({
            chatId: PropTypes.string
        })
    })
};

const mapDispatchToProps = {
    addMessage,
};

export default compose(
    connect(null, mapDispatchToProps),
    withStyles(styles),
    withRouter,
)(FormMessage);