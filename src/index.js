import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import pokemonReducer from 'redux/pokemon';

import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { PersistGate } from 'redux-persist/integration/react';
import UserContext from './context/userContext';
import reportWebVitals from './reportWebVitals';
import GlobalStyled from './styles/GlobalStyled';
import Router from './router';

const persistConfig = {
  key: 'root',
  storage,
};

const middleware = applyMiddleware(thunkMiddleware);

const reducer = persistReducer(persistConfig, pokemonReducer);
const store = createStore(reducer, middleware);
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyled />
        <UserContext>
          <Router />
        </UserContext>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
