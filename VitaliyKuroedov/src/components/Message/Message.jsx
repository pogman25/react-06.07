import React, {Component, Fragment} from 'react'

export default class Message extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="message">{this.props.message}</div>
        )
    }
}