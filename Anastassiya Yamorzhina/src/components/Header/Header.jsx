import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

import cx from 'classnames';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core";
import {DRAWER_WIDTH} from "../../utils/constants";
import { getChats } from '../../selectors/chats';
import { getFullName } from '../../selectors/profile';

const useStyles = makeStyles((theme) => {
    return {
        toolbar: {
            paddingRight: theme.spacing(3),
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
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        title: {
            flexGrow: 1,
        },
    };
});

const Header = () => {
    const classes = useStyles();
    const { chatId } = useParams();
    const { title } = useSelector(store => getChats(store, chatId));
    const fullName = useSelector(getFullName);

    return (
        <AppBar position="absolute" className={cx(classes.appBar, classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={classes.menuButton}>
                    <MenuIcon/>
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}>
                    Мессенджер {title}
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={1} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                {fullName}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
