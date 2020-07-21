import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  makeStyles,
} from "@material-ui/core";
// import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  link: {
    color: "rgba(0, 0, 0, 0.87)",
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
  icon: PropTypes.object,
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
