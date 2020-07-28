import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
import MenuIcon from '@material-ui/icons/Menu';
import { DRAWER_WIDTH } from '../../utils/constants';
import { pageList, chatList } from './pageList';

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
}));

const ChatsList = () => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      open
    >
      <div className={classes.toolbarIcon}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <Typography variant="h5">Chats</Typography>
      <List>
        {chatList.map(({ id, title, slug }) => (
          <Link key={id} to={slug}>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List className={classes.bottomLinks}>
        {pageList.map(({ id, title, slug }) => (
          <Link key={id} to={slug}>
            <ListItem button>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default ChatsList;
