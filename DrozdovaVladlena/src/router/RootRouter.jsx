import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Chats } from '../components';
import { Profile } from '../components';
import { getChats } from '../store/reducers/chatsReducer';
import { getMessages } from '../store/reducers/messagesReducer';

const RootRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChats());
    dispatch(getMessages());
  }, []);

  return (
      <Switch>
        <Redirect exact from='/' to='/profile' />
        <Route path="/profile" component={Profile} />
        <Route path="/chats/:chatId" component={Chats} />
      </Switch>
  );
};

export default RootRouter;
