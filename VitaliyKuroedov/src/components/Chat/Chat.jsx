import React, {Component, Fragment} from 'react'
import Message from '../Message/Message'
import { uuid } from 'uuidv4'
import PropTypes from 'prop-types'
import { TextField, IconButton } from '@material-ui/core'
import SendRoundedIcon from '@material-ui/icons/SendRounded'

export default class Chat extends Component {
    constructor(props){
        super(props)
    }

    static PropTypes = {
        chats: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                userName: PropTypes.string.isRequired,
                avatar: PropTypes.string.isRequired,
                messages: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        name: PropTypes.string.isRequired,
                        text: PropTypes.string.isRequired
                    })
                )
            })
        )
    }

    state = {
        input: '',
        chats: this.props.chats,
        selectedChat: this.props.currentActiveChat,
        timeoutId: null
    }

    handleSyncChat = () => {
        this.state.chats = this.props.chats
    }

    handleBotMessage = (id) => {
        if (id === undefined) return

        const chat = this.props.chats.find(item => item.id === id)
        const lastMessage = chat.messages[chat.messages.length -1]
    
        if (lastMessage && lastMessage.name === 'я') {
            this.handleSendMessage(id, {
                id: uuid(),
                text: `Не приставай ко мне, я Бот-Компот`, 
                name: chat.userName, 
            })
        }
    }

    handleSendMessage = (id, value) => {

        if (id === undefined) return

        if (this.state.chats === undefined) {
            this.handleSyncChat()
        }

        if (this.state.input !== '') {
            this.props.addMessage(this.props.currentActiveChat, value)
            this.setState({input : ''}, 
                this.handleBotMessage(this.props.currentActiveChat)
            )
        }
    }

    handleClick = (value) => {
        this.handleSendMessage(this.props.currentActiveChat, {id: uuid(), name: 'я', text: value })
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.handleSendMessage(this.props.currentActiveChat, {id: uuid(), name: 'я', text: this.state.input} )
        }
    }
    
    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }
    
    render(){
        const id = this.props.chats.find(item => item.id === this.props.currentActiveChat)
        let messageElements = <span>выберите чат</span>
        if (id !== undefined) {
            messageElements = id.messages.map((item) => <Message {...item} avatar={id.avatar} key={item.id}/>) 
        } 
        return(
            <Fragment>
                <section className="container">
                    <div className="message-list">
                        {messageElements}
                    </div>
                    <div className="message__action">
                        <TextField
                            name="input"
                            color="secondary"
                            fullWidth={true}
                            label="Введите сообщение"
                            className="message-text__input"
                            onChange= {this.handleChange} 
                            value= {this.state.input} 
                            onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}/>
                        <IconButton  onClick={() => this.handleClick(this.state.input)}>
                            <SendRoundedIcon color="secondary"/>
                        </IconButton>
                    </div>
                </section>
            </Fragment>
        )
    }

}