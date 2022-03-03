import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import App from './components/app';
import messagesReducer from './reducers/messages_reducer';

const chatContainer = document.getElementById('chat_app');

const initialState = {
  messages: [],
  channels: JSON.parse(chatContainer.dataset.channels).map(c => c.name)
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: (state = null, action) => state
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/channels/:channel" component={App} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  chatContainer
);
