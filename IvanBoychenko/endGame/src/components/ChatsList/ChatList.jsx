import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import MenuIcon from '@material-ui/icons/Menu';
import { DRAWER_WIDTH } from '../../utils/constants';
import { pageList, chatList } from './pageList';
import { useSelector } from 'react-redux';
import { getAllChats } from '../../selectors/chats';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  bottomLinks: {
    marginTop: 'auto',
  },
  title: {
    textAlign: 'center'
  },
  chats: {
    textDecorationColor: 'transparent',
    color: '#333'
  }
}));

const ChatList = () => {
  const classes = useStyles();
  const allChats = useSelector(getAllChats);

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      open
    >
      <div className={classes.toolbarIcon}>
      </div>
      <Divider />
      <Typography variant="h5" className={classes.title}>Chats</Typography>
      <List>
        {allChats.map(({ id, title, slug }) => (
          <Link key={id} to={slug} className={classes.chats}>
            <ListItem button>
              <ListItemIcon>
                <Avatar>{id}</Avatar>
              </ListItemIcon>
              <ListItemText primary={title} className={classes.chats} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default ChatList;
