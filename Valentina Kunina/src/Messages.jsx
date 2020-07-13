import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

const Messages = ({ messages }) => {
    //исп-ся State, если необходимо CDUP
    // const [isFirstMount, setIsFirstMount] = useState(false);

    // useEffect(() => {
    //     setIsFirstMount(true);
    //     if (isFirstMount) {
    //         console.log("I'm did Update");
    //     } else {
    //         console.log("I'm did Mount");
    //     }

    //     //функция размонтирования
    //     return () => {
    //         console.log("I'm Will Unmount");
    //     };
    // }, [messages]);

    return (
        <ul>
            {messages.map(({ author, text, id }) => (
                <li key={id}>
                    <p>{`Автор: ${author}`}</p>
                    <p>{`Текст: ${text}`}</p>
                </li>
            ))}
        </ul>
    );
};

Messages.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired,
};

export default memo(Messages);
