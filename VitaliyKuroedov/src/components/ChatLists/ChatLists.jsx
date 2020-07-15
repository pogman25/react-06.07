import React, { Component } from 'react'
import { List, ListSubheader, Tooltip } from '@material-ui/core'
import ChatListItem from '../ChatListItem/ChatListItem'


export default class ChatLists extends Component{
    render(){
        return(
            <aside className="chats-list">
                <List>
                    <ListSubheader>
                        Последние Чаты
                    </ListSubheader>
                    {this.props.chats.map(  (item) => <ChatListItem key={item.id} {...item} newChatName={this.props.newChatName}/>)}
                </List>
            </aside>
        )
    }
}