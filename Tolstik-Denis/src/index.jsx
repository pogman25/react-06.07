import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Layout from './Layout';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme();
const rootElement = document.getElementById("root");
 
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
    </ThemeProvider>, rootElement);
