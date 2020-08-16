import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import HomeIcon from "@material-ui/icons/Home";

const pageLinks = [
  {
    id: 1,
    to: "/",
    title: "Home",
    icon: HomeIcon,
  },
  {
    id: 2,
    to: "/settings",
    title: "Settings",
    icon: SettingsIcon,
  },
  {
    id: 3,
    to: "/contacts",
    title: "Contact Us",
    icon: MailOutlineIcon,
  },
];

export default pageLinks;

// export const chatsLinks = [
//   {
//     id: 4,
//     to: "/chats/1",
//     title: "Chat 1",
//   },
//   {
//     id: 5,
//     to: "/chats/2",
//     title: "Chat 2",
//   },
//   {
//     id: 6,
//     to: "/chats/3",
//     title: "Chat 3",
//   },
// ];
