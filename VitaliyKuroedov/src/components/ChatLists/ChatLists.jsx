import React, { Component } from 'react'
import { List, ListSubheader, Drawer } from '@material-ui/core'
import ChatListItem from '../ChatListItem/ChatListItem'
export default class ChatLists extends Component{
    
    render(){
        const chatsElements = []
        for (let [key, value] of Object.entries(this.props.chats)) {
            chatsElements.push(value)
        }

        return(
            <aside className="chats-list">
                <Drawer 
                    open={this.props.drawerIsOpen} 
                    anchor="right"
                    onClose={this.props.switchDrawer}>
                    <List>
                        <ListSubheader>
                            Последние Чаты
                        </ListSubheader>
                        {chatsElements.map((item) => 
                            <ChatListItem 
                                key={item.id} 
                                switchDrawer={this.props.switchDrawer} 
                                {...item} 
                                newChatName={this.props.newChatName}/>
                            )}
                    </List>
                </Drawer>
            </aside>
        )
    }
}