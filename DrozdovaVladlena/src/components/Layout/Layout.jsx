import React from 'react'
import {Header, ChatList, MessageField} from '../index'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import style from './Layout.module.css'

const theme = createMuiTheme()

const Layout  = () => {
    return <ThemeProvider theme={theme}>
            <div className={style.spa}>
                <Header />
                <ChatList />
                <MessageField />   
            </div>
        </ThemeProvider >
}

export default Layout 