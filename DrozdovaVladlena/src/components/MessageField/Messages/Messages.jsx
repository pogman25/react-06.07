import React, { memo } from 'react'
import style from './Messages.module.css'
import cn from 'classnames'

const Messages = (props) => {
    return <div className={style.chat}>
                {props.messages.map(message => 
                    <div className={cn(style.message, {[style.messageBot]: message.author === 'bot', [style.messageAuthor]: message.author !== 'bot'})} key={message.id}>
                        <p>{message.author}</p>
                        <span>{message.text}</span>
                    </div>
                )}
        </div>
}


export default memo(Messages)