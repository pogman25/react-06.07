import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Router from './components/Router';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const theme = createMuiTheme();
const rootElement = document.getElementById("root");
 
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    rootElement);
