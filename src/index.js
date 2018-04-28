/** Packages */
import React from 'react';
import ReactDOM from 'react-dom';

/** Routers */
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/** Stores */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/getRequest';
import { Provider } from 'react-redux';

/** Styles */
import './shares/scss/index.scss';

/** Pages */
import Dashboard from './pages/DashBoard/DashBoard';

// Link store 
const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </Provider>
  
  , document.getElementById('root')
);