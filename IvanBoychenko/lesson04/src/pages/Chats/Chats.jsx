import React, { Component } from "react";
import Messages from '../../components/Messages';
import FormMessage from '../../components/FormMessage';

class Chats extends Component {
    state = {
        chats: {
            1: {
                id: 1,
                messageList: [1, 2],
                title: 'Чат 1'
            },
            2: {
                id: 2,
                messageList: [3, 4],
                title: 'Чат 2'
            }
        },
        messages: {
            1: { author: "user", text: "привет 1", id: 1 },
            2: { author: "user", text: "привет 2", id: 2 },
            3: { author: "user", text: "привет 3", id: 3 },
            4: { author: "user", text: "привет 4", id: 4 },
        },
    };
    timer = null;

    componentDidUpdate() {
        // const { messages } = this.state;
        // clearTimeout(this.timer);
        // if (messages[messages.length - 1].author !== "bot") {
        //     this.timer = setTimeout(() => {
        //         this.setState(({ messages }) => ({
        //             messages: [
        //                 ...messages,
        //                 { author: "bot", text: "привет от бота", id: uuidv4() },
        //             ],
        //         }));
        //     }, 1000);
        // }
    }

    addMessage = ({ id, author, text }) => {
        const { chats, messages } = this.state;
        const { match: { params } } = this.props;
        this.setState(({ chats, messages }) => ({
            chats: {
                ...chats,
                [params.chatId]: {
                    ...chats[params.chatId],
                    messageList: [...chats[params.chatId].messageList, id]
                }
            },
            messages: {
                ...messages,
                [id]: { id, author, text }
            }
        }))
    };

    get messages() {
        const { chats, messages } = this.state;
        const { match: { params } } = this.props;

        return chats[params.chatId]?.messageList.map(mid => messages[mid]);
    }

    render() {
        return (
            <>
                <Messages messages={this.messages} />
                <FormMessage addMessage={this.addMessage} />
            </>
        );
    }
}

export default Chats;
