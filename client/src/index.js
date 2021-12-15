import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Auth0ProviderWithHistory from './components/auth0/Auth0ProviderWithHistory';
import './styles/index.css'

ReactDOM.render(
  <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
