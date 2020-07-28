import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Chats } from '../components';
import { Profile } from '../components';
import mockChats from '../mock/mockChats';
import { getChatsSuccess } from '../store/actions/chatsAction';
import { getMessagesSuccess } from '../store/actions/messageAction';

const RootRouter = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getChatsSuccess(mockChats));
  //   dispatch(getMessagesSuccess(mockChats));
  // }, [dispatch]);

  return (
      <Switch>
        <Redirect exact from='/' to='/profile' />
        <Route path="/profile" component={Profile} />
        <Route path="/chat/:chatId" component={Chats} />
      </Switch>
  );
};

export default RootRouter;
