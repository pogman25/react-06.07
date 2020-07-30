import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from '../../pages/RootRouter/RootRouter';
import storeConfig from '../../store';

const { store, persistor } = storeConfig();

const theme = createMuiTheme();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <RootRouter />
                    </ThemeProvider>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;
