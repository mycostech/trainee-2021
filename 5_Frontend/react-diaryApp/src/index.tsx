import React from 'react';
import ReactDOM from 'react-dom';

import { 
  BrowserRouter, Route 
} from "react-router-dom";

import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import configeStore from './Reducer'
import { Provider } from 'react-redux'
import AddEventForm from './components/AddEventForm/AddEventForm';

const store = configeStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <BrowserRouter>
        <App/>
      </BrowserRouter>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
