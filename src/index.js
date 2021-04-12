import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/store';
import Layout from './components/Layout';

ReactDOM.render(
  <Route>
    <React.StrictMode>
      <Provider store={store}>
        <Layout>
          <App />
        </Layout>
      </Provider>
    </React.StrictMode>
  </Route>,
  document.getElementById('root')
);

reportWebVitals();
