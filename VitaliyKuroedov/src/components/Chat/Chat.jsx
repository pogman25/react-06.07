import React, {Component, Fragment} from 'react'
import Message from '../Message/Message'

export default class Chat extends Component {

    state = {
        chats: [],
        input: ''
    }
    handleSendMessage = (value) => {
        let id = this.state.chats.length
        if (this.state.input != '') {
            this.setState({chats: [...this.state.chats,
                id = {name: "я", text: this.state.input}]})
            this.setState({input : ''})
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
                        {this.state.chats.map((message, index) => ( <Message message={message} key={index} /> ))}
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
                            onClick={this.handleSendMessage}>Жмак</button>
                    </div>
                </section>
            </Fragment>
        )
    }
}