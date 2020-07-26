import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  link: {
    color: "rgba(0, 0, 0, 0.87)",
    textDecoration: "none",
  },
}));

const ChatListItem = ({ title, icon: Icon, ...linkProps }) => {
  const classes = useStyles();

  return (
    <Link {...linkProps} className={classes.link} underline="none">
      <ListItem button>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </Link>
  );
};

ChatListItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ChatListItem;

// const mainListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Chat-1" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Chat-2" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Chat-3" />
//     </ListItem>
//   </div>
// );

// export default mainListItems;
