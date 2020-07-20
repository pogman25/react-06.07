import React, { memo } from "react";
import PropTypes from "prop-types";
import { Container, Box } from "@material-ui/core";
import cx from "classnames"; //подключение своих стилей

const style = {
    // display: "flex",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
    padding: "10px"
}

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
        <Box style={style}>
            <Box display="flex" flexDirection="column">
                {messages.map(({ author, text, id }) => (
                    <Box
                        key={id}
                        alignSelf={author === "bot" ? "flex-end" : "flex-start"}
                    >
                        <p>{`Автор: ${author}`}</p>
                        <p>{`Текст: ${text}`}</p>
                    </Box>
                ))}
            </Box>
        </Box>
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
