import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserAuthProvider } from './context/UserAuthContext';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <UserAuthProvider>
      <App />
    </UserAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
