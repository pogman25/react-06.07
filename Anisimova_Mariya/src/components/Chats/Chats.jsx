import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../Layout';
import Messages from './Messages';
import MessageField from './MessageField/MessageField';
import { getMessages } from '../../store/selector/selector';
import { addMessageChat } from '../../store/actions/chatsAction';

const Chats = () => {
  const {chatId} = useParams();
  const messageList = useSelector(store => getMessages(store, chatId))
  const dispatch = useDispatch()

  const addMessage = (message) => {
    dispatch(addMessageChat(message, chatId))
  };

  return (
    <Layout>
      <Messages messages={messageList} />
      <MessageField addMessage={addMessage}/>
    </Layout>
  );
};

export default Chats;