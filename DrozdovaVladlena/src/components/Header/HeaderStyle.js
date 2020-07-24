import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    gridArea: 'header',
    width: '100%',
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
  },
}));

export default useStyles;
