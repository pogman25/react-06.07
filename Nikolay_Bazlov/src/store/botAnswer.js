import {addMessage} from "../actions/chats";
import { v4 as uuidv4} from "uuid";
import {BOT_NAME} from "../utils/constants";

const botAnswer = ({ dispatch }) => next => action => {
    if (action.type === addMessage.toString()) {
        if (action.payload.message.author !== BOT_NAME) {
            setTimeout(() => {
                dispatch(
                    addMessage({ chatId: action.payload.chatId, message: {author: BOT_NAME, text: "привет, я бот", id: uuidv4() } })
                );
            }, 500);
        }
    }
    return next(action);
};

export default botAnswer;