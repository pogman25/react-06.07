import React from "react";
import cx from "classnames";
import Drawer from "@material-ui/core/Drawer";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import Grid from "@material-ui/core/Grid";

import Link from "@material-ui/core/Link";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useStyles from "./useStyles";
import Contacts from "./Contacts";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

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
            <Grid>
                <Drawer variant="permanent"
                    classes={{
                        paper: cx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}>
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>

                    <Contacts></Contacts>

                </Drawer>

            </Grid>
        </div>

    )
};
