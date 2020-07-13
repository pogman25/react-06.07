import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import Message from "./Message";
import Messages from "./Messages";
import FormMessage from "./FormMessage";
import PropTypes from "prop-types";
import shortid from "shortid";

class HelloMessage extends PureComponent {
    state = {
        messages: [
            { author: "user", text: "привет", id: shortid.generate() },
            { author: "user", text: "как дела?", id: shortid.generate() },
        ],
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (messages[messages.length - 1].author !== "bot") {
            setTimeout(() => {
                this.setState(({ messages }) => ({
                    messages: [
                        ...messages,
                        {
                            author: "bot",
                            text: "Привет от Бота",
                            id: shortid.generate(),
                        },
                    ],
                }));
            }, 1000);
        }
    }

    addMessage = ({ author, text, id = shortid.generate() }) => {
        this.setState(({ messages }) => ({
            messages: [...messages, { author, text, id }],
        }));
    };

    render() {
        const { messages } = this.state;
        const { name } = this.props;

        return (
            <div>
                <Message name="World" />
                <p>Привет, {name}</p>
                <Messages messages={messages} />
                <FormMessage addMessage={this.addMessage} />
            </div>
        );
    }
}

HelloMessage.propTypes = {
    name: PropTypes.string,
};

ReactDOM.render(<HelloMessage name="Саша" />, document.getElementById("root"));
