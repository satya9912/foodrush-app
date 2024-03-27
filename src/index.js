import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './App';
import { Provider } from 'react-redux';
import store from './utils/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} basename= "/">
    <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>
);



