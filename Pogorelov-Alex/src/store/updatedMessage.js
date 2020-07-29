import {
  saveMessage,
  addUpdatedMessage,
  deleteUpdatedMessage,
} from '../reducers/messagesReducer';

const updatedMessages = ({ dispatch }) => next => action => {
  if (action.type === saveMessage.type) {
    const { id } = action.payload.message;
    dispatch(addUpdatedMessage(id));

    setTimeout(() => {
      dispatch(deleteUpdatedMessage(id));
    }, 3000);
  }
  return next(action);
};

export default updatedMessages;
