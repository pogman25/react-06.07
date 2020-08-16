import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../Layout';
import Messages from './Messages';
import MessageField from './MessageField/MessageField';
import { getMessages } from '../../store/selector/selector';
import { addMessage, addMessageBot } from '../../store/reducers/messagesReducer';

const Chats = () => {
  const {chatId} = useParams();
  const messageList = useSelector(store => getMessages(store, chatId))
  const dispatch = useDispatch()

  const addMessageClick = (message) => {
    dispatch(addMessage({message, chatId}))
    setTimeout(() => {dispatch(addMessageBot(chatId))}, 1000)
  };

  return (
    <Layout>
      <Messages messages={messageList} />
      <MessageField addMessage={addMessageClick}/>
    </Layout>
  );
};

export default Chats;