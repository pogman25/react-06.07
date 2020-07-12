import React, {Component, Fragment} from 'react'
import Message from '../Message/Message'

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
        
        const currentMessage = this.props.chats
        const lastMessage = currentMessage[currentMessage.length -1]
        console.log(currentMessage, 'currentMessage?')
        console.log(lastMessage, 'lastmessage?')

        if (lastMessage && lastMessage.name == 'я') {
            clearTimeout(this.state.timeoutId)
            this.state.timeoutId = setTimeout(() => this.handleSendMessage({
                text: `Не приставай ко мне, я Бот-Компот`, 
                name: 'бот-компот', 
            }), 1000)
        }
    }

    handleSendMessage = ({value}) => {
        let content = {name: 'я', text: this.state.input}
        
        if (value) {
            content = value
        }

        let id = this.props.chats.length
        if (this.state.input != '') {
             this.props.addMessage(content)
            
            this.setState({input : ''})
            if(id > 0) {
                this.handleBotMessage()

            }
        }
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.handleSendMessage()
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
                            onClick={this.handleSendMessage}>
                            Жмак
                        </button>
                    </div>
                </section>
            </Fragment>
        )
    }
}