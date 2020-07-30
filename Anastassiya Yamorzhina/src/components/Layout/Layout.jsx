import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Header from '../Header';
import ChatList from '../ChatsList';

const useStyle = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        paddingTop: theme.spacing(9),
    },
    root: {
        display: 'flex',
    },
}));

const Layout = ({ children }) => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Header />
            <ChatList />
            <main className={classes.content}>{children}</main>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
        .isRequired,
};

export default Layout;
