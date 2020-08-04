import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendChatsRequest } from '../../actions/chats';
import Home from '../Home/Home';
import About from '../About/About';
import EmptyPage from '../EmptyPage';
import Chats from '../Chats/Chats';

const RootRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch('https://swapi.dev/api/people/1')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //     dispatch({ type: 'EXAMPLE', payload: res });
    //   })
    //   .catch(e => {})
    //   .finally(() => {});

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
