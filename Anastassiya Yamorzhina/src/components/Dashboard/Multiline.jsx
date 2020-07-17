import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: 'normal',
      width: '100ch',
    },
  },

}));

export default function MultilineTextFields(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    const {onChange} = props;

    console.log(event.key);

    if(event.keyCode == 13){
      console.log('value', e.target.value);
      // put the login here
    }

    onChange(event);
  };


  return (
    <TextField

      id="outlined-full-width"
      label="Ваше сообщение"
      multiline
      fullWidth
      rows={2}
      name="text"
      placeholder="Введите текст"
      variant="outlined"
      onChange={handleChange}
    />
  );
}
