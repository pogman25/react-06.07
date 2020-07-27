import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink, useParams } from 'react-router-dom';
import useStyles from './HeaderStyle';
import { useSelector } from 'react-redux';
import { getPageChat } from '../../store/selector/selector';

const Header = () => {
  const classes = useStyles();
  const {chatId} = useParams();

  const {title} = useSelector(store => getPageChat(store, chatId))

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <NavLink to="/profile">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
             {`Chat ${title}`}
            </Typography>
          </Toolbar>
        </NavLink>
      </AppBar>
    </div>
  );
};

export default Header;