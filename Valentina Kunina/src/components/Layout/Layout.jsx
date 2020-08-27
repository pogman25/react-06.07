import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Divider,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import useStyles from "./useStyles";
import Header from "../Header";
import { ChatList, ChatListItem } from "../ChatsList";
import { getAllChats } from "../../selectors/chats";
import { mockLinks } from "../../mock";

export default function Layout({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  //   const fixedHeightPaper = (classes.paper, classes.fixedHeight);

  const history = useHistory();
  const logout = () => {
    history.push("/chats/1");
  };
  const allChats = useSelector(getAllChats);

  return (
    <Box className={classes.root}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <ChatList open={open} handleDrawerClose={handleDrawerClose}>
        <List>
          {allChats.map(({ id, title, to }) => (
            <ChatListItem
              key={id}
              to={to}
              title={title}
              icon={AssignmentIcon}
            />
          ))}
        </List>
        <Divider />
        <List>
          {mockLinks.map(({ id, title, to, icon }) => (
            <ChatListItem to={to} key={id} title={title} icon={icon} />
          ))}
          <ListItem to="/exit" key="exit" title="Exit" onClick={logout} button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Exit" />
          </ListItem>
        </List>
      </ChatList>
      <Box className={classes.content}>{children}</Box>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
