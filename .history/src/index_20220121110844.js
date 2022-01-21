import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
<Provider store={store}>
<Auth0Provider
    domain="dev-vsmi61io.us.auth0.com"
    clientId="Da5qawwo5IJU5rOFgpun7cPVVkv4j66S"
    redirectUri={"https://michalgornicki.github.io/cats"}
  >
    <App />
  </Auth0Provider>,
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
