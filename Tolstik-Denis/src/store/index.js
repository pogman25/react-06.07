import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from "../reducers";
//import {saveState, loadState} from './localStorage';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'rootMessages',
    storage,
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const enhancers = compose( applyMiddleware(thunk, apiMiddleware) );

export default () => {
    const store = createStore(rootReducer, enhancers)
    //const persistor = persistStore(store)
    return { store } //, persistor }
  }
