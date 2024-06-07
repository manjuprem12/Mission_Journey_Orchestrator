// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import missionsReducer from './state/missionsSlice';
import App from './App';

const store = configureStore({
  reducer: {
    missions: missionsReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
     <Router>
     <App />
     </Router>
 
  </Provider>,
  document.getElementById('root')
);