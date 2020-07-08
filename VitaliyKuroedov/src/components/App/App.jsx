import React, { Component, Fragment } from 'react'
import Header from '../Header/Header'
import Chat from '../Chat/Chat'
import '../../css/style.css'
import ChatLists from '../ChatLists/ChatLists'

export default class App extends Component{

    state = {
        text: 'GB React',
        title: "React GB"
    }

    render() {
        return (
            <Fragment>
                <Header title={this.state.title} />   
                <main className="main">
                    <Chat/>
                    <ChatLists/>
                </main>
                
            </Fragment>
        )
    }
}