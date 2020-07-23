import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import Message from '../Message/Message'
import { uuid } from 'uuidv4'
import PropTypes from 'prop-types'
import { TextField, IconButton } from '@material-ui/core'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import { getChatsSuccess } from '../../actions/chats'

class Chat extends Component {
    constructor(props){
        super(props)
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

        if (id && this.props.chats[id]) {
            const currentMessage = this.props.chats[id].messages
            const lastMessage = currentMessage[currentMessage.length -1]

            if (lastMessage && lastMessage.name === 'я') {
                clearTimeout(this.timeoutId)
                this.timeoutId = setTimeout(() => this.handleSendMessage(id, {
                    id_message: uuid(),
                    name: this.props.chats[id].userName,
                    text: `Не приставай ко мне, я ${this.props.chats[id].userName}` 
                }), 1000)
            }
        }
    }

    handleSendMessage = (id, value) => {

        if (id === undefined) return

        if (this.state.chats === undefined) {
            this.handleSyncChat()
        }

        if (this.state.input !== '') {
            this.props.addMessage(id, value)
            this.setState({input : ''}, this.handleBotMessage(id))
        }
    }

    handleClick = (value) => {
        const { id } = this.props.match.params
        this.handleSendMessage(id , {id_message: uuid(), name: 'я', text: value })
    }

    handleKeyUp = (event) => {
        const { id } = this.props.match.params
        if (event.keyCode === 13) { // Enter
            this.handleSendMessage(id, {id_message: uuid(), name: 'я', text: this.state.input} )
        }
    }
    
    handleChange = (event) => {
        const { id } = this.props.match.params
        if (id === undefined) return
        this.setState({ input: event.target.value })
    }
    
    render(){
        const { id } = this.props.match.params
        const messageElements = id && this.props.chats[id] ? 
            this.props.chats[id].messages.map((item) => 
            <Message {...item} key={item.id_message}/>) :
            <span>выберите чат</span>
       
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

Chat.PropTypes = {
    getChats: PropTypes.func.isRequired,
    chats: PropTypes.arrayOf(
        PropTypes.shape({
            id_chat: PropTypes.string.isRequired,
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

const mapStateProps = store => ({})
const mapDispatchToProps = {
    getChats: getChatsSuccess,
}
export default connect(mapStateProps, mapDispatchToProps)(Chat)