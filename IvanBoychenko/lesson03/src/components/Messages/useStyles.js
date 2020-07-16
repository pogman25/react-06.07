import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {
        message: {
            display:'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            listStyle: 'none',
            margin: '0 0 7px 0'
        },
        messageBot: {
            alignItems: 'flex-start',
        },
        ul: {
            display: 'flex',
            flexDirection: 'column',
        },
        messageForm: {
            borderRadius: '20px',
            backgroundColor: '#4dc47f',
            boxShadow: '5px 3px 10px black',
            minWidth: '100px'
        },
        author: {
            fontSize: '12px',
            color: '#eee',
            margin: '0',
            padding: '0 0 0 15px'
        },
        textArea: {
            padding: '10px',
            margin: '0',
            color: '#000',
            textAlign: 'center',
        }
    }
});

export default useStyles;