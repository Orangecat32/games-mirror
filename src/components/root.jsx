import React from 'react';
import { Provider } from "react-redux";
import App from './App/App';

const Root = ({store}) => (
  <Provider store={store}>
    <App {...store} />
  </Provider>
);

export default Root;
