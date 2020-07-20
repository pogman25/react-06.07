import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  MenuItem,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import useStyles from "./useStyles";
import Header from "../Header";
import ChatList from "../ChatsList";
import ChatListItem from "../ChatsList/ChatListItem";
import pageLinks from "../ChatsList/pageLinks";

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

  return (
    <Box className={classes.root}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <ChatList open={open} handleDrawerClose={handleDrawerClose}>
        <List>
          <ChatListItem to="/" key="home" title="Home" icon={AssignmentIcon} />
          {pageLinks.map(({ id, title, to }) => (
            <ChatListItem
              key={id}
              to={to}
              title={title}
              icon={AssignmentIcon}
            />
          ))}
        </List>
        <List>
          <ChatListItem title="Settings" icon={SettingsIcon} />
          <ChatListItem title="Contact Us" icon={MailOutlineIcon} />
          <ListItem title="Exit" button>
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
