import React, {Component, Fragment} from 'react'
import Message from '../Message/Message'

export default class Chat extends Component {

    state = {
        chats: [],
        input: ''
    }
    handleSendMessage = (value) => {
        this.setState({chats: [this.state.input]})
        this.setState({input : ''})
    }

    
    
    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }
    
    render(){
        return(
            <Fragment>
                <Message message={this.state.chats}/>
                <input 
                    value = {this.state.input} 
                    onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                    onChange= {this.handleChange} 
                    />
                <button onClick={this.handleSendMessage}>sdsd</button>
            </Fragment>
        )
    }
}