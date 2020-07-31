import React, {useEffect} from "react";
import { Switch, Route } from 'react-router-dom';
import Chats from "./Chats";
import Layout from "../components/Layout/Layout";
const RootRouter = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Layout/>
            </Route>
            <Route path="/chats/:chatId" component={Chats}/>
            <Route>
                <Layout>
                    <div>
                        <h1>Page not found 404</h1>
                    </div>
                </Layout>
            </Route>
        </Switch>
    )
};

export default RootRouter;