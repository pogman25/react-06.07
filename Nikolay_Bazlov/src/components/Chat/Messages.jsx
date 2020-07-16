import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import clsx from "clsx";

const useStyles = makeStyles({
    message__container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    message_item_author: {
        border: "1px solid #E0E0E0",
        borderRadius: "5px",
        padding: "10px",
        listStyleType: "none"
    },
    message_item_bot: {
        border: "1px solid #E0E0E0",
        borderRadius: "5px",
        padding: "10px",
        listStyleType: "none",
        alignSelf: "flex-end",
    }
});

const Messages = ({ messages }, props) => {
    const classes = useStyles(props);
    console.log(classes);
    return (
        <ul className={classes.message__container}>
            {messages.map(({ id, author, text }) => (
                    <li
                        className={clsx(
                            author !== "bot" && classes.message_item_author,
                            author === "bot" && classes.message_item_bot
                        )}
                        key={id}
                    >
                        <p>{`Author: ${author}`}</p>
                        <p>{`message: ${text}`}</p>
                    </li>
            ))}
        </ul>
    );
};

Messages.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            author: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired,
};

export default Messages;
