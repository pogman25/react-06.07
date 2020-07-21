import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../../components/Layout";

const RootRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={}/>
      </Switch>
    </Layout>
  );
};

export default RootRouter;
