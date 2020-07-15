import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { ThemeProvider } from '@material-ui/core/styles'

ReactDOM.render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
    )