import React from 'react';
import { GoogleGeocoding } from '../../utils/search_ajax_util';
import { withRouter } from 'react-router';
import ResultsMap from "../map/map";
import {objToArray} from '../../reducers/selector';
import ResultItem from './result_item';

class Results extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
    // this.setShowCar = this.setShowCar.bind(this)
  }

  handleClick (e) {
    e.preventDefault();
  }

  // setShowCar (e) {
  //
  // }

  render() {
    let listingsArray = objToArray(this.props.listings)
    return(
      <div>
        <div className="results_search">
          <form className={"results_search_form"}>
                <input className="results_search_field" type="text" name="search[location]" placeholder="Where are you?"></input>
                <input className="results_search_field" type="text" name="search[distance]" placeholder="Search area?"></input>
            <span>
              <input className="results_search_submit" type="submit" value="Find Your Car"></input>
            </span>
          </form>
        </div>
        <div className="results-map">
          <ResultsMap/>
        </div>
        {listingsArray.map((element) => {
          return(<ResultItem listing={element} key={element.id + "-listing"}/>);
        })
        }
      </div>
    );
  }

}

export default withRouter(Results)
