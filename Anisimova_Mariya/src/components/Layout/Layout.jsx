import React from 'react';
import {Header, ChatList } from '../index'
import style from './Layout.module.css';

const Layout = ({children}) => {
  return (
    <div className={style.spa}>
      <Header />
      <ChatList /> 
      <main>{children}</main>
    </div>)
}

export default Layout;