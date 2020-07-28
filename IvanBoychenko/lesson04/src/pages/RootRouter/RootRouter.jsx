import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import Home from '../Home';
import About from '../About';
import EmptyPage from '../EmptyPage/EmptyPage';
import Chats from '../Chats';
import Profile from '../Profile';

const RootRouter = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/chat/:chatId" component={Chats} />
                <Route path="/profile" component={Profile} />
                <Route component={EmptyPage}/>
            </Switch>
        </Layout>
    )
}

export default RootRouter
