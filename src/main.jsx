import React from 'react'
import ReactDOM from 'react-dom/client'
import WrappedApp from './App'
import './App.css'

import { store } from './store/store';
import { Provider } from 'react-redux';
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </React.StrictMode>
);