import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Router from './Router';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme();
const rootElement = document.getElementById("root");
 
ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router />
        </ThemeProvider>
    </BrowserRouter>, rootElement);
