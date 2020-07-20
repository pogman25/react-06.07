import React from "react";
import { Switch, Route } from 'react-router-dom';
import Chats from "./Chats";
import Layout from "../components/Layout/Layout";

const RootRouter = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/"/>
                <Route path="/profile">
                    <h3>Here is some information about your account</h3>
                </Route>
                <Route path="/chats/:chatId" component={Chats}/>
                <Route>
                    <div>
                        <h1>Page not found 404</h1>
                    </div>
                </Route>
            </Switch>
        </Layout>
    )
};

export default RootRouter;