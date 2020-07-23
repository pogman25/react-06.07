import React from 'react';
import { Layout, Chats } from '../components';
import Profile from '../components/Profile';
import { Route,  Switch } from 'react-router-dom';

const RootRouter = () => {
  return (
    <Layout>
      <Switch>
          <Route exact path='/profile' component={Profile} />
          <Route path='/chat/:chatId' component={Chats} />
      </Switch>
    </Layout>
  );
};

export default RootRouter;