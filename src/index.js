import React from 'react';
import ReactDOM from 'react-dom';
//import { createBrowserHistory } from 'history'
import { BrowserRouter } from 'react-router-dom';

import { RedditApiTokenProvider } from 'hooks/useRedditApi';
import App from './App';

import './index.css';

//const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RedditApiTokenProvider>
        <App />
      </RedditApiTokenProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
