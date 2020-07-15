import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'


export default class Header extends Component{
    constructor(props){
        super(props)
    }

    state = {
        open: false,
        input: '',
    }

    render() {
        let title = ''
        if (this.props.currentChatName.length > 0 || !this.props.currentChatName === undefined) {
            title = this.props.currentChatName 
        } else {
            title = this.props.title
        }
        return(
            <header className="header">
                <AppBar position="static">
                    <Toolbar variant="dense" className="header">
                        <Typography variant="h6" className="header__title">
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}