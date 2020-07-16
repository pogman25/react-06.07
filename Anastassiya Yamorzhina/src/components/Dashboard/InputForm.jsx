import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const handleChange = (event) => {
    const {onChange} = props;
    onChange(event);
  };

  return (

      <TextField name="author" label="Введите свое имя" variant="outlined" id="outlined-basic"  onChange={handleChange}/>

  );
}
