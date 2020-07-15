import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

export default class Message extends Component {
    constructor(props){
        super(props)
    }

    static PropTypes = {
        name : PropTypes.string.isRequired,
        text : PropTypes.string.isRequired
    }

    render(){
        return(
            <div className="message"
                style={ { alignSelf: this.props.name === "я" ? 
                'flex-start' : 'flex-end'}}>
                <div>
                    <span className="">{this.props.name} : </span>
                    <span className="">{this.props.text}</span>
                </div>
            </div>
        )
    }
}