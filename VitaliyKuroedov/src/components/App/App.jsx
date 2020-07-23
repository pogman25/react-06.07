import React, { Component } from 'react'
import Header from '../Header/Header'
import { uuid } from 'uuidv4'
import Chat from '../Chat/Chat'
import '../../css/style.css'
import ChatLists from '../ChatLists/ChatLists'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store/store'
import Profie from '../Profie/Profile'

export default class App extends Component{
    state = {
        text: 'GB React',
        title: "React GB",
        currentChatName: '',
        currentActiveChat: null,
        drawerIsOpen: false,
        chats: {
            1: {id: 1, avatar: 'https://v0.material-ui.com/images/ok-128.jpg', userName: 'Сушист', messages:[]},
            2: {id: 2, avatar: 'https://v0.material-ui.com/images/kolage-128.jpg', userName: 'Визажист', messages:[
                {name: 'я', text: 'фывфыв', id_message: uuid()}
            ]},
            3: {id: 3, avatar: 'https://v0.material-ui.com/images/raquelromanp-128.jpg', userName: 'Бухгалтер', messages:[]},
            4: {id: 4, avatar: 'https://v0.material-ui.com/images/kerem-128.jpg', userName: 'Качок', messages:[]},
        }
    }

    handleCurrentChatName = (id, newChatName) => {
        this.setState({currentChatName: newChatName, currentActiveChat: id})
    }
    handleDrawerOpen = () => {
        this.setState({drawerIsOpen: !this.state.drawerIsOpen})
    }

    handleAddMessage = (id, message) => {
        console.log(id, 'id?')
        console.log(message, 'message?')
        this.setState(state => ({
            ...state,
            chats: {
                ...state.chats, 
                [id]: {
                    ...state.chats[id],
                    messages: [...this.state.chats[id].messages, message]
                    }
                }
        }))
    }

    handleAddChat = (chatName) => {
        let counter = 1
        for (let id in this.state.chats) {
            counter++
        }
        this.setState( state => ({
            ...state,
            chats: {...state.chats,
            [counter]: {
                id: counter,
                userName: chatName,
                messages: [],
                avatar: `https://randomuser.me/api/portraits/med/men/${counter}.jpg`
            }}
        }))
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Header 
                        title={this.state.title} 
                        currentChatName={this.state.currentChatName} 
                        addChat={this.handleAddChat} 
                        switchDrawer={this.handleDrawerOpen} />   

                    <main className="main">
                        <Switch>
                            <Route path='/'>
                                <Switch>
                                    <Route path='/' exact render={(props) => 
                                        <Chat 
                                            {...props}
                                            chats={this.state.chats} 
                                            addMessage={this.handleAddMessage} 
                                            currentActiveChat={this.state.currentActiveChat} />}
                                    /> 
                                    <Route path='/:id' exact render={(props) => 
                                        <Chat 
                                            {...props} 
                                            chats={this.state.chats}
                                            addMessage={this.handleAddMessage} 
                                            currentActiveChat={this.state.currentActiveChat} />}
                                    />
                                    <Route path='/:id'></Route>
                                </Switch>
                                <ChatLists 
                                    chats={this.state.chats} 
                                    newChatName={this.handleCurrentChatName} 
                                    switchDrawer={this.handleDrawerOpen} 
                                    drawerIsOpen={this.state.drawerIsOpen}/>
                            </Route>
                        </Switch>
                    </main>
            </BrowserRouter>
            </Provider>
        )
    }
}