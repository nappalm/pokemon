import React from 'react';
import ReactDOM from 'react-dom';
import UserContext from './context/userContext';
import reportWebVitals from './reportWebVitals';
import GlobalStyled from './styles/GlobalStyled';
import Router from './router';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <UserContext>
      <Router />
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
