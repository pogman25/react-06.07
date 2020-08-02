import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import RootRouter from '../../router/RootRouter';
import { CssBaseline } from '@material-ui/core';
import store from '../../store/store';

const theme = createMuiTheme();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <RootRouter />
            </CssBaseline>
          </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;