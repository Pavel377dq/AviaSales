/* eslint-disable import/no-extraneous-dependencies */
import reduxThunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App/App';
import { reducer } from './reducers/reducer';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
          })
        : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    // </React.StrictMode>
);
