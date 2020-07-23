import React, { useState, useEffect } from 'react'
import Messages from './Messages'
import MessageField from './MessageField/MessageField'
import { useParams } from 'react-router-dom'
import uuid from 'react-uuid'

const Chats = () => {
    const [message, setMessage] = useState([])
    const [botTell, setBotTell] = useState(false);
    const [state, setState] = useState({
        chats: {
            1: {id: 1, messageList: [1, 2]},
            2: {id: 2, messageList: [3, 4]}
        },
        messages: {
            1: {id: 1, message: 'hello 1', author: 'user1'},
            2: {id: 2, message: 'hello 2', author: 'user2'},
            3: {id: 3, message: 'hello 3', author: 'user3'},
            4: {id: 4, message: 'hello 4', author: 'user4'}
        }
    })

    const param = useParams()

    useEffect(() => {
        if (!!param){
            const {chatId} = param
            const {chats, messages} = state
            setMessage(chats[chatId].messageList.map(id => messages[id]))
        }
    }, [param, state])

    useEffect(() => {
        if (botTell) {
                const id = uuid()
                setTimeout(() => {
                    setState(({ chats, messages }) => ({
                        chats: { ...chats, [param.chatId]: {...chats[param.chatId], messageList: [...chats[param.chatId].messageList, id ]}}, 
                        messages: {...messages, [id]: {id, message: 'This is bot', author: 'bot'}}  
                    }))
                setBotTell(false);
                }, 1000);
          }
      }, [botTell]);

    const addMessage = ({id, message, author}) => {
        setState(({ chats, messages }) => ({
            chats: { ...chats, [param.chatId]: {...chats[param.chatId], messageList: [...chats[param.chatId].messageList, id ]}}, 
            messages: {...messages, [id]: {id, message, author}}  
        }))
        setBotTell(true)
    }

    return (
        <>
            <Messages messages={message}/>
            <MessageField addMessage={addMessage} botTell={botTell}/>
        </>
    )
}
export default Chats