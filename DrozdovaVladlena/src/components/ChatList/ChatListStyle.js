import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    gridArea: 'chatList',
    width: '100%',
    maxWidth: 360,
    marginTop: '5px',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default useStyles;
