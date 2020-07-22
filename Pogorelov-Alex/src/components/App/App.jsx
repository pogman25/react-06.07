import React from 'react';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from '../../pages/RootRouter/RootRouter';
import store from '../../store';

const theme = createMuiTheme();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RootRouter />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
