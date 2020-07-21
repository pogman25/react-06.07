import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Home from '../Home/Home';
import About from '../About/About';
import EmptyPage from '../EmptyPage';

const RootRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={EmptyPage} />
      </Switch>
    </Layout>
  );
};

export default RootRouter;
