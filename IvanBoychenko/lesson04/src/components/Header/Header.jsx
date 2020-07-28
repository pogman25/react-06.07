import React from "react";
import cx from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { DRAWER_WIDTH } from '../../Utils/constants';
import { useParams } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    toolbar: {
      paddingRight: theme.spacing(3),
    },
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: "none",
    },
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    fixedHeight: {
      height: 240,
    },
    name: {
      margin: "0 0 0 20px"
    },
    list: {
      position: "absolute",
      top: "0",
      height: "100px"
    },
    profile: {
      color: "#fff",
      textDecoration: 'underline',
      fontWeight: 'bold'
    }

  };
});


const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="absolute"
      className={cx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          className={cx(classes.menuButton, open && classes.menuButtonHidden)}>
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}>
          {`Chat`}
        </Typography>
        <Link to={'/profile'}>
          <Typography className={classes.profile}>
            User
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
