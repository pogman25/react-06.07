import React, { memo } from 'react'
import style from './Messages.module.css'
import uuid from 'react-uuid'

const Messages = (props) => {
    return <div className={style.chat}>
                {props.messages.map((message, index) => 
                    <div className={`${style.message} ${message.author === 'bot' ? style.messageBot : style.messageAuthor}`} key={uuid()}>
                        <p>{message.author}</p>
                        <span>{message.text}</span>
                    </div>
                )}
        </div>
}


export default memo(Messages)