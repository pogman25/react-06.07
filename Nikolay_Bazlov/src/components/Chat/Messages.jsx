import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    message_item_bot: {
        alignSelf: "flex-end",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const Messages = ({ messages }, props) => {
    const classes = useStyles(props);
    return (
        <Grid container spacing={3} direction="column" className={classes.root}>
            {messages.map(({ id, author, text }) => (
                // Пока не понятно, как сделать так, чтобы размер сообщения бота был как и user'а.
                // Не получается сделать так, чтобы с увеличением текста, он не выходил за рамки блока.
                <Grid
                    key={id}
                    zeroMinWidth
                    className={clsx(
                        author === "bot" && classes.message_item_bot
                    )}
                    item xs={6}
                >
                    <Paper className={classes.paper}>
                        <Typography color="primary">{author}</Typography>
                        <Typography>{text}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

Messages.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            author: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired,
};

export default Messages;
