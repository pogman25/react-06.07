import React, {Component, Fragment} from 'react'
import Message from '../Message/Message'
import PropTypes from 'prop-types'

export default class Chat extends Component {
    constructor(props){
        super(props)
    }

    state = {
        input: '',
        timeoutId: null,
        chats: this.props.chats
    }

    handleSyncChat = () => {
        this.state.chats = this.props.chats
    }

    handleBotMessage = () => {
        
        const currentMessage = this.state.chats
        const lastMessage = currentMessage[currentMessage.length -1]
    
        if (lastMessage && lastMessage.name == 'я') {
            clearTimeout(this.state.timeoutId)
            this.state.timeoutId = setTimeout(() => this.handleSendMessage({
                text: `Не приставай ко мне, я Бот-Компот`, 
                name: 'бот-компот', 
            }), 100)
        }
    }

    handleSendMessage = (value) => {
        if (this.state.chats === undefined) {
            this.handleSyncChat()
        }
        if (this.state.input !== ''){
            this.setState( state => ({
                ...state,
                chats: [...state.chats, value]
            }), this.handleBotMessage())
    
            this.setState({input : ''})
            this.props.addMessage(value)
        }
    }

    handleClick = (value) => {
        this.handleSendMessage({name: 'я', text: value })
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.handleSendMessage({name: 'я', text: this.state.input} )
        }
    }
    
    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }
    
    render(){
        return(
            <Fragment>
                <section className="chat-container">
                    <div className="chat-list">
                        {this.props.chats.map((message, index) => ( <Message message={message} key={index} /> ))}
                    </div>
                    <div className="chat-actions">
                        <input 
                            className="input"
                            value = {this.state.input} 
                            onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                            onChange= {this.handleChange} 
                            />
                        <button 
                            className="chat-action__button"
                            onClick={() => this.handleClick(this.state.input)}>
                            Жмак
                        </button>
                    </div>
                </section>
            </Fragment>
        )
    }
}