import React from "react";
import cx from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import { DRAWER_WIDTH } from "../../Utils/constants";
import PropTypes from 'prop-types';
import pageList from './pageList';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

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
        drawerPaper: {
            position: "relative",
            whiteSpace: "nowrap",
            width: DRAWER_WIDTH,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        },
        paper: {
            padding: theme.spacing(2),
            display: "flex",
            overflow: "auto",
            flexDirection: "column",
        },
        fixedHeight: {
            height: 240,
        },
        name: {
            margin: "0 0 0 20px"
        },
        //   list: {
        //     position: "",
        //     top: "0",
        //     height: "100px"
        //   }

    };
});

function ChatsList() {
    const classes = useStyles();
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: cx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open
        >
            <div className={classes.toolbarIcon}>
                {/* <IconButton>
                <ChevronLeftIcon />
            </IconButton> */}
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
            <Divider />
            {pageList.map(({ id, title, slug }) => (
                <Link key={id} to={slug}>
                    <ListItem button>
                        <Typography>{title}</Typography>
                    </ListItem>
                </Link>
            ))}
        </Drawer>
    )
}

ChatsList.propTypes = {
    open: PropTypes.bool
}

export default ChatsList
