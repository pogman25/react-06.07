import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import { ListItemAvatar, Avatar, ListItem, ListItemText } from '@material-ui/core'

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
                <ListItem>
                    <ListItemText primary={this.props.name}/>
                    :
                    <ListItemText primary={this.props.text}/>               
                    <ListItemAvatar>
                        <Avatar src={this.props.name === 'я' ? '' : this.props.avatar}/>
                    </ListItemAvatar>
                </ListItem>
            </div>
        )
    }
}