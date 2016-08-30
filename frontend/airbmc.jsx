import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Router from './router';


const initiateReactRouter = () => {
  let node = document.getElementById("root");
  ReactDOM.render(<Provider store={store}><Router/></Provider>,node);
};

window.addEventListener("DOMContentLoaded",initiateReactRouter);
