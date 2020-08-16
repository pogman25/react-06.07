import React, {Component} from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import cx from 'classnames';

const styles = {
    message: {
        listStyleType: 'none',
    },

    messageBot: {
        alignSelf: "flex-end"
    },
}

class Message extends Component {
    render() {
        const {message, author, id} = this.props;
        const {classes} = this.props;
    
        return <li className={cx(classes.message, author === "bot" && classes.messageBot)} key={id}><span>{author}:</span>{message}</li>;
    }
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default withStyles(styles)(Message);
