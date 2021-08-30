import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import pokemon from 'redux/pokemon';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk';

import UserContext from './context/userContext';
import reportWebVitals from './reportWebVitals';
import GlobalStyled from './styles/GlobalStyled';
import Router from './router';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(pokemon, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyled />
      <UserContext>
        <Router />
      </UserContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
