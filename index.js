import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
            // importation de Store Redux   //
import  { store}   from './Redux/Store.js'
import { Provider } from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


