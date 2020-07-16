import React, { Component, Fragment } from 'react'
import Header from '../Header/Header'
import { uuid } from 'uuidv4'
import Chat from '../Chat/Chat'
import '../../css/style.css'
import ChatLists from '../ChatLists/ChatLists'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default class App extends Component{
    state = {
        text: 'GB React',
        title: "React GB",
        currentChatName: '',
        drawerIsOpen: false,
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
    handleDrawerOpen = () => {
        this.setState({drawerIsOpen: !this.state.drawerIsOpen})
    }

    handleAddMessage = (id, message) => {
        const newChats = this.state.chats
        const chat = newChats.find(item => item.id === id)
        chat.messages.push(message)
        this.setState({newChats})
    }

    handleAddChat = (chatName) => {
        const newChats = this.state.chats
        const avatarId = newChats.length
        const chat = {id: uuid(), userName: chatName, messages:[], avatar: `https://randomuser.me/api/portraits/med/men/${avatarId}.jpg`}
        newChats.push(chat)
        this.setState({newChats})
    }

    render() {
        return (
            <Fragment>
                <Header title={this.state.title} currentChatName={this.state.currentChatName} addChat={this.handleAddChat} switchDrawer={this.handleDrawerOpen} />   
                <main className="main">
                    <Chat chats={this.state.chats} addMessage={this.handleAddMessage} currentActiveChat={this.state.chats[0].id}/>
                    <ChatLists chats={this.state.chats} newChatName={this.handleCurrentChatName} switchDrawer={this.handleDrawerOpen} drawerIsOpen={this.state.drawerIsOpen}/>
                </main>
            </Fragment>
        )
    }
}