import React from 'react';
import { Router, hashHistory, Route} from 'react-router';
import Header from './components/header/header';
import Search from './components/search_form/search_form_container';
import Results from './components/results/results_container';
import Show from './components/show/show_container';

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
          <Route path="/show/:id" component={Show}/>
        </Router>
      </div>

    );
  }
}

export default Base;
