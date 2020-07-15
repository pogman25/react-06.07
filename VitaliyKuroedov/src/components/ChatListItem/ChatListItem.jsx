import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { ListItem, ListItemAvatar, Avatar, ListItemText, ListItemIcon, IconButton, Tooltip } from '@material-ui/core'
import ChatBubbleRounded from '@material-ui/icons/ChatBubbleRounded'


const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
})
class ChatListItem extends Component { 
    
    render(){
        const { classes } = this.props
        return(
            //<Link to={'/'+this.props.data.id} className='link' onClick={() => {this.props.handleCurrentChatName(this.props.data.name)}} >
            <Tooltip title={this.props.userName} arrow>
                <ListItem className={classes.root} onClick={() => {this.props.newChatName(this.props.userName)}}>
                    <ListItemAvatar>
                        <Avatar src={this.props.avatar}/>
                    </ListItemAvatar>
                    <ListItemText primary={this.props.userName}/>
                    <ListItemIcon>
                        <IconButton edge="end" aria-label="comments">
                          <ChatBubbleRounded />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
            </Tooltip>
           // </Link>
        )
    }
}
ChatListItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ChatListItem);