import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },


}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
    <Button
    variant="contained"
    color='primary'
    type='submit'
    className={classes.button}
  >
    отправить
  </Button>
    </div>
  );
}
