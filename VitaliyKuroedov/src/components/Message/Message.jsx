import React, {Component, Fragment} from 'react'

export default class Message extends Component {
    constructor(props){
        super(props)
    }
    render(){
   
        let messageText
        messageText = <span className="message__text">{this.props.message.name}: {this.props.message.text}</span>
        return(
            <div className="message">
                {messageText}
                
            </div>
        )
    }
}