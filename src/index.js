import React from 'react';
import ReactDOM from 'react-dom/client';
// import Main from './components/Main';
import './styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import App from './components/App';
import thunk from 'redux-thunk';
import { database } from './database/config';

const store = createStore(rootReducer,applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

