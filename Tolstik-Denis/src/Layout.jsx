import React, {Component} from 'react';
import Header from './Header';
import ChatList from './ChatList';
import MessageField from './MessageField';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    mainContainer: {
        width: '50%',
        margin: '0 auto',
    }
}

class Layout extends Component {    
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.mainContainer}>
                <Header header="Funny Chats"/>
                <MessageField />
            </div>
        );
    }
}

export default withStyles(styles)(Layout);



