import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Chat-1" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Chat-2" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Chat-3" />
        </ListItem>
    </div>
);
