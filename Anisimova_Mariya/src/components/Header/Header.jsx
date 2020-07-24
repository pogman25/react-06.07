import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './HeaderStyle';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <NavLink to='/profile'>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Chat
            </Typography>
          </Toolbar>
        </NavLink>
      </AppBar>
    </div>
  );
};

export default Header;