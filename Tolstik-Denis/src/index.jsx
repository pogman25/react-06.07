import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Router from './components/Router';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import storeConfig from './store';

const theme = createMuiTheme();
const rootElement = document.getElementById("root");

const {store/*, persistor*/} = storeConfig();

/*
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router />
                </ThemeProvider>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    rootElement);
*/

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
