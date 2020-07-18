import React from "react";
import {
    ListSubheader,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Contact us" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
        </ListItem>
    </div>
);
