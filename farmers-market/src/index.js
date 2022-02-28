import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
import { createStore } from 'redux';
import reducer from './reducers/product-list-reducer';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import 'firebase/auth';

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
    </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

