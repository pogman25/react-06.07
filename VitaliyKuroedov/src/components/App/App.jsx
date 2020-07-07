import React, { Component, Fragment } from 'react'
import Header from '../Header/Header'
import Chat from '../Chat/Chat'
import '../../css/style.css'

export default class App extends Component{

    state = {
        text: 'GB React',
        title: "React GB"
    }

    render() {
        return (
            <Fragment>
                <Header title={this.state.title} />   
                <main>
                    <Chat></Chat>
                </main>
            </Fragment>
        )
    }
}