import React, { Component } from "react";
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from "../pages/RootRouter";

const theme = createMuiTheme(); // Здесь кастомизация темы

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <RootRouter />
                </ThemeProvider>
            </BrowserRouter>
        );
    }
}

export default (App);