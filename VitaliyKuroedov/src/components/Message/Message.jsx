import React, {Component, Fragment} from 'react'

export default class Message extends Component {
    constructor(props){
        super(props)
    }
    render(){
   
        let messageText
        if (this.props.message.length > 0) {
            messageText = <span className="message__text">{this.props.message}</span>
        } else {
            messageText = <span>{this.props.message}</span>
        }
        return(
            <div className="message">
                {messageText}
            </div>
        )
    }
}