import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendChatsRequest } from '../../actions/chats';
import Home from '../Home/Home';
import About from '../About/About';
import EmptyPage from '../EmptyPage/EmptyPage';
import Chats from '../Chats/Chats';
// import { mockChats, mockMessages } from '../../mock/mockChats';

const RootRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendChatsRequest());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about">
        <About />
      </Route>
      <Route path="/chats/:chatId" component={Chats} />
      <Route component={EmptyPage} />
    </Switch>
  );
};
export default RootRouter;
