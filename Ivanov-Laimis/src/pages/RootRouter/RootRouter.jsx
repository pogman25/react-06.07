import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';
import About from '../About/About';
import EmptyPage from '../EmptyPage';
import Chats from '../Chats/Chats';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

const RootRouter = () => {
  return (
    <Layout>
      <Switch>    

      
        <Route exact path="/" component={Home} />
        <Route path="/profile">
      <Profile />
      </Route>

      <Route path="/profileheader">
      <ProfileHeader />
      </Route>
        
          
        <Route path="/about">        
          <About />
        </Route>
        <Route path="/chats/:chatId" component={Chats} />
        <Route component={EmptyPage} />
      </Switch>
    </Layout>
  );
};

export default RootRouter;
