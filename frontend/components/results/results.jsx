import React from 'react';
import { GoogleGeocoding } from '../../utils/search_ajax_util';
import { withRouter } from 'react-router';
import ResultsMap from "../map/map_container";
import {objToArray} from '../../reducers/selector';
import ResultItem from './result_item';

class Results extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    const criteria = e.currentTarget.form[1].value;
    let success = (data) => {
      let location = data.results[0].geometry.location;
      let searchParams = {
        location: location,
        criteria: this.props.searchParams.distance
      };
      this.props.onSearchClick(searchParams);
    };
    let query = {};
    query.address = this.props.searchParams.location;
    GoogleGeocoding(query,success);

  }

  handleChange (e) {
    e.preventDefault();
    let searchParams = {
      location: e.currentTarget.form[0].value,
      distance: e.currentTarget.form[1].value
    };
    this.props.updateSearchParams(searchParams);
  }


  render() {
    let listingsArray = objToArray(this.props.listings);
    return(
      <div className="results_container">
        <div className="results_search">
          <form className={"results_search_form"}>
                <input className="results_search_field" type="text"
                  name="search[location]" placeholder="Where are you?"
                  defaultValue={this.props.searchParams.location}
                  onChange={this.handleChange}></input>
                <input className="results_search_field" type="text"
                  name="search[distance]" placeholder="Search area?"
                  onChange={this.handleChange}></input>
            <span>
              <input className="results_search_submit" type="submit" value="Find Your Car" onClick={this.handleClick}></input>
            </span>
          </form>
        </div>
        <div className="results_map">
          <ResultsMap/>
        </div>
        <div className="results_listings">
        {listingsArray.map((element) => {
          return(<ResultItem listing={element} key={element.id + "-listing"}/>);
        })
        }
        </div>
      </div>
    );
  }

}

export default withRouter(Results)
