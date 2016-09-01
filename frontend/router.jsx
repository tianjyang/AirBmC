import React from 'react';
import { Router, hashHistory, Route} from 'react-router';
import Header from './components/header/header';
import Search from './components/search_form/search_form_container';
import Results from './components/results/results_container';

class Base extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <Header/>
        <Router history={hashHistory}>
          <Route path="/" component={Search}/>
          <Route path="/results" component={Results}/>
        </Router>
      </div>

    );
  }
}

export default Base;
