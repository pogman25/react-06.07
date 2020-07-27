import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import RootRouter from '../../router/RootRouter';
import { PersistGate } from 'redux-persist/integration/react';
import storeConfig from '../../store/store'
import { CssBaseline } from '@material-ui/core';

const { store, persistor } = storeConfig();

const theme = createMuiTheme();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
              <CssBaseline>
                <RootRouter />
              </CssBaseline>
            </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
