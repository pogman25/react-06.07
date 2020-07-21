import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  chatMessage: {
    gridArea: 'messageField',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

export default useStyles;
