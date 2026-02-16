import React from 'react';
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux" // providers gives react redux to the entire react app-otherwise react cant see redux store- useSelecto and dispatch wont work
import ReactDOM from "react-dom/client";
import { store } from "./app/store.js";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
// wrap the whole app with provider and giving it the redux store