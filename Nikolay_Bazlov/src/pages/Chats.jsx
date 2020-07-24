import React, {Component} from "react";
import PropTypes from "prop-types";
import { createMuiTheme, withStyles} from '@material-ui/core/styles';
import Messages from "../components/Chat/Messages";
import FormMessage from "../components/Chat/FormMessage";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { getChatsSuccess } from "../actions/chats";
import { getChats } from "../selectors/chats";
import mockChats from "../components/Chat/mockChats";
import Layout from "../components/Layout/Layout";

const theme = createMuiTheme(); // Здесь кастомизация темы

const styles = {
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
};

class Chats extends Component {

    componentDidMount () {
        const { getChats } = this.props;
        setTimeout(() => {
            getChats(mockChats);
        }, 1000)
    }

    addMessage = ({ id, author, text }) => {
        const {
            match: { params },
        } = this.props;
    };

    render() {
        const { classes, currentChat } = this.props;

        return (
            <Layout>
                <Messages messages={currentChat.messageList} />
                <Divider className={classes.divider}/>
                <FormMessage addMessage={this.addMessage} />
            </Layout>
        );
    }
}

Chats.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            chatId: PropTypes.string,
        }),
    }).isRequired,
    getChats: PropTypes.func.isRequired,
};

const mapStateToProps = (store, ownProps) => {
  const {
      match: {
          params: { chatId },
      },
  }  = ownProps;
  return {
    currentChat: getChats(store, chatId),
  };
};

const mapDispatchToProps = {
    getChats: getChatsSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Chats));