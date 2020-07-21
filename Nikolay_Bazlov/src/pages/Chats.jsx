import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { createMuiTheme, withStyles} from '@material-ui/core/styles';
import Messages from "../components/Chat/Messages";
import FormMessage from "../components/Chat/FormMessage";
import Divider from "@material-ui/core/Divider";

const theme = createMuiTheme(); // Здесь кастомизация темы

const styles = {
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
};

class Chats extends Component {
    state = {
        chats: {
            1: {
                id: 1,
                messageList : [1, 2],
                title: "Чат 1"
            },
            2: {
                id: 2,
                messageList : [3, 4],
                title: "Чат 2"
            },
        },
        messages: {
            1: { author: "user", text: "привет", id: 1 },
            2: { author: "user", text: "как дела", id: 2 },
            3: { author: "user", text: "как дела 3", id: 3 },
            4: { author: "user", text: "как дела 4", id: 4 },
        },
    };
    timer = null;

    componentDidUpdate(_, prevState) {
        const {
            match: { params },
        } = this.props;
        const { chatId } = params;
        const { chats } = this.state;
        const { messageList } = chats[chatId];
        if (prevState.chats[chatId].messageList.length !== messageList.length) {
            clearTimeout(this.timer);
            const messages = this.messages;
            if (messages[messages.length - 1].author !== 'bot') {
                this.timer = setTimeout(() => {
                    this.addMessage({ id: uuidv4(), author: 'bot', text: 'Я бот' });
                }, 1000);
            }
        }
    }

    get messages () {
        const {
            match: { params }
        } = this.props;
        const { chats, messages } = this.state;

        return chats[params.chatId]?.messageList.map(mid => messages[mid]);
    }

    addMessage = ({ id, author, text }) => {
        const {
            match: { params },
        } = this.props;

        this.setState(({ chats, messages }) => ({
            chats: {
                ...chats,
                [params.chatId]: {
                    ...chats[params.chatId],
                    messageList: [...chats[params.chatId].messageList, id],
                },
            },
            messages: {
                ...messages,
                [id]: { id, author, text },
            },
        }));
    };

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <Messages messages={this.messages} />
                <Divider className={classes.divider}/>
                <FormMessage addMessage={this.addMessage} />
            </Fragment>
        );
    }
}

Chats.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            chatId: PropTypes.string,
        }),
    }).isRequired,
};

export default withStyles(styles)(Chats);