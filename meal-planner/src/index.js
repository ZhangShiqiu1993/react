import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componments/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
