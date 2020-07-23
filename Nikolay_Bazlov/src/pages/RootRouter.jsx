import React from "react";
import { Switch, Route } from 'react-router-dom';
import Chats from "./Chats";
import Profile from "./Profile/Profile";

const RootRouter = () => {
    return (
        // Перестало работать Page not found
        <Switch>
            <Route exact path="/"/>
            <Route path="/profile" component={Profile}/>
            <Route path="/chats/:chatId" component={Chats}/>
            <Route>
                <div>
                    <h1>Page not found 404</h1>
                </div>
            </Route>
        </Switch>
    )
};

export default RootRouter;