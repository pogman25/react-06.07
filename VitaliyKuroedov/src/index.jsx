import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'


const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
       
        MuiPaper:{
            root:{
                width:'400px'
            },
        },
      },
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
    )