import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

export default class Message extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="message"
                style={ { alignSelf: this.props.message.name === "я" ? 
                'flex-start' : 'flex-end'}}>
                <span className="message__text">{this.props.message.name}: {this.props.message.text}</span>
            </div>
        )
    }
}