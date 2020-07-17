  
import React, { useState, useEffect } from 'react'
import Messages from './Messages/Messages'
import style from './MessageField.module.css'
import PropTypes from 'prop-types';

const MessageField = () => {
    const [messages, setMessages] = useState([])
    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')

    useEffect(() => {
        if(!!messages.length){
            if(messages[messages.length - 1].author !== 'bot') {
                setTimeout(() => setMessages([...messages, {author: 'bot', text: 'This is bot'}]), 1000)
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
        setMessages([...messages, {author: author, text: text}])
        setText('')
        setAuthor('')
    }
    
    return <>
        <div className={style.form}>
            <input type='text' value={author} onChange={authorChange} placeholder='Author'/>
            <textarea value={text} onChange={textChange} placeholder='Text'/>
            <button onClick={addMessage}>Add</button>
        </div>
        <Messages messages={messages}/>
    </>
}
MessageField.propTypes = {
    message: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string,
        text: PropTypes.string})).isRequired
};
export default MessageField