import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import Firebase from "firebase";
import db from "../firebase.config.js";
import { createStore } from "redux";

  const reducer = (state = 0, action) => {
    if (action.type === "FETCH_STATE") {
      return (state = action.payload);
    }
  };

  const store = createStore(reducer);

  store.dispatch({
    type: "INCREMENT",
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const stateSnapshot = snapshot.val();
      store.dispatch({
        type: "FETCH_STATE",
        payload: stateSnapshot,
      });
    });
  };

  const writeUserData = () => {
    Firebase.database().ref("/").set(store.getState());
    console.log("DATA SAVED");
  };

ReactDOM.render(
  <React.StrictMode>
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
