import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Router from './router';
import { merge } from 'lodash';
window.merge = merge;

const initiateReactRouter = () => {
  let node = document.getElementById("root");
  let storeHolder = store();
  window.store = storeHolder;
  ReactDOM.render(<Provider store={storeHolder}><Router store={storeHolder}/></Provider>,node);
};

window.addEventListener("DOMContentLoaded",initiateReactRouter);
