import React, { Component, Fragment } from 'react'
import Header from '../Header/Header'
import { uuid } from 'uuidv4'
import Chat from '../Chat/Chat'
import '../../css/style.css'
import ChatLists from '../ChatLists/ChatLists'

export default class App extends Component{

    state = {
        text: 'GB React',
        title: "React GB",
        currentChatName: '',
        chats: [
            {id: uuid(), avatar: 'https://v0.material-ui.com/images/ok-128.jpg', userName: 'Сушист', messages:[]},
            {id: uuid(), avatar: 'https://v0.material-ui.com/images/kolage-128.jpg', userName: 'Визажист', messages:[
                {name: 'я', text: 'фывфыв', id: uuid()}
            ]},
            {id: uuid(), avatar: 'https://v0.material-ui.com/images/raquelromanp-128.jpg', userName: 'Бухгалтер', messages:[]},
            {id: uuid(), avatar: 'https://v0.material-ui.com/images/kerem-128.jpg', userName: 'Качок', messages:[]},
        ]
    }

    handleCurrentChatName = (newChatName) => {
        this.setState({currentChatName: newChatName})
    }

    handleAddMessage = (id, message) => {
        
        const newChats = this.state.chats
        const chat = newChats.find(item => item.id === id)
        chat.messages.push(message)

        this.setState({newChats})
    }

    render() {
        return (
            <Fragment>
                <Header title={this.state.title} currentChatName={this.state.currentChatName} />   
                <main className="main">
                    <Chat chats={this.state.chats} addMessage={this.handleAddMessage} currentActiveChat={this.state.chats[0].id}/>
                    <ChatLists chats={this.state.chats} newChatName={this.handleCurrentChatName}/>
                </main>
            </Fragment>
        )
    }
}