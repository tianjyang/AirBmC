import React from 'react';
import { Router, hashHistory, Route} from 'react-router';
import Header from './components/header/header';
import Search from './components/search_form/search_form_container';

class base extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <Header/>
        <Router history={hashHistory}>
          <Route path="/" component={Search}/>
        </Router>
      </div>

    );
  }
}

export default base;
