import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import EmptyPage from "../EmptyPage";
import Home from "../Home";
import Chats from "../Chats";
import Settings from "../Settings";
import Contacts from "../Contacts";
import { getChatsSuccess } from "../../actions/chats";
import mockChats from "../../mock/mockChats";

const RootRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatsSuccess(mockChats));
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/chats/:chatId" component={Chats} />
      <Route path="/settings" component={Settings} />
      <Route path="/contacts" component={Contacts} />
      <Route component={EmptyPage} />
    </Switch>
  );
};

export default RootRouter;
