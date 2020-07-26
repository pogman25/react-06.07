import { createAction } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';
import { BOT_NAME } from '../utils/constants';
import { getFullName } from '../selectors/profile';
import { red } from '@material-ui/core/colors';

// simple actions

export const getChatsSuccess = createAction('chats/GET_CHATS_SUCCESS');
export const saveMessage = createAction('chats/ADD_MESSAGE');

// smart actions

export const addMessage = data => (dispatch, getState) => {
  const fullName = getFullName(getState());
  if (data.message.author !== BOT_NAME) {
    setTimeout(() => {
      dispatch(
        saveMessage({
          chatId: data.chatId,
          message: { author: BOT_NAME, text: 'привет, я Бот', id: uuidv4() },
          
        }),
      );
    }, 500);
    
    // повторить с интервалом 2 секунды
    const timerId = setInterval(() => console.log('red')    , 2000);

    // остановить вывод через 5 секунд
    setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);




  }
  dispatch(
    saveMessage({
      chatId: data.chatId,
      message: { author: fullName, ...data.message },

    }),
  );
};
