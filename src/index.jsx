import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKQ33tcd7WtFMufSNDdzEMNo_aqslgA9k",
  authDomain: "padel-store-luna.firebaseapp.com",
  projectId: "padel-store-luna",
  storageBucket: "padel-store-luna.appspot.com",
  messagingSenderId: "631170467703",
  appId: "1:631170467703:web:5871d7e68704d33a71c372"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

