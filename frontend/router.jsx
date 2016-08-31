import React from 'react';
import { Router, hashHistory, Route} from 'react-router';
import Header from './components/header/header';

class base extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
    <Router history={hashHistory}>
      <Route path="/" component={Header}/>
    </Router>
    );
  }
}

export default base;
