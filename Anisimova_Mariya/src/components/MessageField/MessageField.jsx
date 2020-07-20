import React, { useState, useEffect } from 'react'
import Messages from './Messages'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import useStyles from './MessageFieldStyle';

const MessageField = () => {
    const [messages, setMessages] = useState([])
    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')
    const [botTell, setBotTell] = useState(false)

    const classes = useStyles()

    useEffect(() => {
        if(!!messages.length){
            if(messages[messages.length - 1].author !== 'bot') {
                setTimeout(() => {setMessages([...messages, {author: 'bot', text: 'This is bot', id: uuid()}])
                setBotTell(false)}, 1000)
            }
        }
    }, [messages])

    const textChange = (event) => {
        setText(event.target.value)
    }

    const authorChange = (event) => {
        setAuthor(event.target.value)
    }

    const addMessage = () => {
        setMessages([...messages, {author: author, text: text, id: uuid()}])
        setText('')
        setAuthor('')
        setBotTell(true)
    }

    const addMessageEnter = (event) => {
        if (event.keyCode === 13){
            addMessage();
        }
    }
    
    return <div className={classes.chatMessage}>
        <form className={classes.form} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Author" value={author} onChange={authorChange} variant="outlined" />
            <TextField
                id="outlined-multiline-static"
                label="Text"
                value={text} onChange={textChange}
                onKeyDown={addMessageEnter}// много проверки
                variant="outlined"
                multiline
                rows={4}
            />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={addMessage}
                endIcon={<Icon>send</Icon>}
                disabled={botTell}
            >
                Send
            </Button>
        </form>
        <Messages messages={messages} />
    </div>
}
MessageField.propTypes = {
    message: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string,
        text: PropTypes.string,
        id: PropTypes.string})).isRequired
};

export default MessageField