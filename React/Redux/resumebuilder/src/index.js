import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/reducers/rootReducer'
import {Provider} from 'react-redux'
const reduxStore = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(

  <BrowserRouter>
    <Provider store={reduxStore}>
      <App />
  </Provider>
    </BrowserRouter>
,
  document.getElementById('root')
);