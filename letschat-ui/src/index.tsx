import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { ToastContainer } from 'react-toastify'

import { APP_STAGE, SAGA_ACTIONS, STORAGE } from './config'
import AppLoader from './components/loader/appLoader';

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.Fragment>
          <AppLoader/>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </React.Fragment>
      </PersistGate>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

let token = localStorage.getItem(STORAGE)
if (token) {
  store.dispatch({
    type: SAGA_ACTIONS.USER.DETAILS,
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (APP_STAGE === 'prod') {
  serviceWorker.register();
} else {
  serviceWorker.unregister();
}