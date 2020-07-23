import React, { Component } from "react";
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from "../pages/RootRouter";
import { Provider } from "react-redux";
import store from "../store";

const theme = createMuiTheme(); // Здесь кастомизация темы

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <RootRouter />
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default (App);