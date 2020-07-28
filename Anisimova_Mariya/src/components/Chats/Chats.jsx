  
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import Layout from '../Layout';
import Messages from './Messages';
import MessageField from './MessageField/MessageField';
import { getMessages } from '../../store/selector/selector';
import { botAnswerSuccess, addMessageUser } from '../../store/actions/messageAction';

const Chats = () => {
  const [botTell, setBotTell] = useState(false)
  const {chatId} = useParams();
  const messageList = useSelector(store => getMessages(store, chatId))
  const dispatch = useDispatch()

  useEffect(() => {
    if (botTell) {
      const id = uuid();
      setTimeout(() => {
        dispatch(botAnswerSuccess(id, chatId))
        setBotTell(false);
      }, 1000);
    }
  }, [botTell]);

  const addMessage = (message) => {
    dispatch(addMessageUser(message, chatId))
    setBotTell(true);
  };

  return (
    <Layout>
      <Messages messages={messageList} />
      <MessageField addMessage={addMessage} botTell={botTell} />
    </Layout>
  );
};

export default Chats;