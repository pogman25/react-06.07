import React from 'react'
import { makeStyles } from '@material-ui/core';
import Header from '../Header';
import ChatsList from '../ChatsList';
import PropTypes, { element } from 'prop-types';

const useStyle = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        marginTop: theme.spacing(8)
    },
    root: {
        display: 'flex'
    }
}))

const Layout = ({ children }) => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Header />
            <ChatsList />
            <main className={classes.content}>{children}</main>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.arrayOf(element).isRequired,
}

export default Layout
