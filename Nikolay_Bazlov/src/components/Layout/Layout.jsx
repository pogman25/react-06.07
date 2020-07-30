import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box"
import Paper from '@material-ui/core/Paper';
import ChatList from "./ChatList";
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import PersonIcon from '@material-ui/icons/Person';
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { getChats } from "../../selectors/chats";
import {getFullName} from "../../selectors/profile";
import {sendChatsRequest} from "../../actions/chats";

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    addchat: {
        marginTop: theme.spacing(4),
        margin: "auto",
    }
}));

export default function Layout({children}) {
    const classes = useStyles();
    const { chatId } = useParams();
    const { title } = useSelector(store => getChats(store, chatId));
    const fullName = useSelector(getFullName);

    return (
        // Тут я так и не допёр как сделать номер чата. + Высота "Header'a" неверная.
        <Container maxWidth="md" className={classes.container}>
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <TextField id="outlined-search" label="Search message..." type="search" variant="outlined" />
                </Grid>
                <Grid item md={9}>
                    <Paper  className={classes.paper}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography component="h2" variant="button" noWrap>
                                {`${fullName}'s ${title}`}
                            </Typography>
                            <Link to="/profile">
                                <PersonIcon color="primary"/>
                            </Link>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={3}>
                    <Paper  className={classes.paper}>
                        <ChatList/>
                    </Paper>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.addchat}
                            endIcon={<AddBoxIcon />}
                        >
                            Add chat
                        </Button>
                </Grid>
                <Grid item md={9}>
                    <Paper  className={classes.paper}>
                        {children}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}