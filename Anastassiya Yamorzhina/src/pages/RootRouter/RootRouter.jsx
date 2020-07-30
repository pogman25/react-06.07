import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getChatsSuccess } from '../../actions/chats';
import Home from '../Home/Home';
import About from '../About/About';
import Chats from '../Chats/Chats';
import mockChats from '../../mock/mockChats';

const RootRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getChatsSuccess(mockChats));
    }, [dispatch]);

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about">
                <About />
            </Route>
            <Route path="/chats/:chatId" component={Chats} />
            <Route component={Home} />
        </Switch>
    );
};

export default RootRouter;
