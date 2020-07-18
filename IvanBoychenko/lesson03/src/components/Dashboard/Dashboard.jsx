import React from "react";
import cx from "classnames";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import useStyles from "./useStyles";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
// import { mainListItems, secondaryListItems } from "./listItems";
// import Chart from "./Chart";
// import Deposits from "./Deposits";
// import Orders from "./Orders";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = cx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={cx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={cx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Chat
          </Typography>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: cx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.list}> 
          <ListItem button>
            <Avatar>J</Avatar>
            <Typography className={classes.name}>Jack</Typography>
          </ListItem>
          <ListItem button>
            <Avatar>A</Avatar>
            <Typography className={classes.name}>Ann</Typography>
          </ListItem>
          <ListItem button>
            <Avatar>M</Avatar>
            <Typography className={classes.name}>Mike</Typography>
          </ListItem>
          <ListItem button>
            <Avatar>E</Avatar>
            <Typography className={classes.name}>Elizabet</Typography>
          </ListItem>
          <ListItem button>
            <Avatar>B</Avatar>
            <Typography className={classes.name}>Bot</Typography>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
