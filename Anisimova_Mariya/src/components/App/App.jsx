import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'
import RootRouter from '../../router/RootRouter'

const theme = createMuiTheme()

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <RootRouter />
                </CssBaseline>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App