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

  componentDidMount () {
    $(window).scroll( () => {
      let pos = $("body").scrollTop();
      if ( pos >= 55 ) {
        $(".results_map").css( {"position":"relative","top":pos-57});
      } else {
        $(".results_map").css({"position":"relative","top":""});
      }
    });
  }

  componentWillUnmount () {
    $(window).off("scroll");
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
      distance: e.currentTarget.form[1].value,
      start_date: e.currentTarget.form[2].value,
      end_date: e.currentTarget.form[3].value,
    };
    this.props.updateSearchParams(searchParams);
  }

  render() {
    let listingsArray = objToArray(this.props.listings);
    return(
      <div className="results_container">

          <form className={"results_search_form"}>
            <input className="results_search_field" type="text"
              name="search[location]" placeholder="Where are you?"
              defaultValue={this.props.searchParams.location}
              onChange={this.handleChange}/>
            <input className="results_search_field" type="text"
              name="search[distance]" placeholder="Search Distance?"
              defaultValue={this.props.searchParams.distance}
              onChange={this.handleChange}/>
              <input
                className="results_search_field date"
                type="text"
                onChange={this.handleChange}
                placeholder="Start Date"
                defaultValue={this.props.searchParams.start_date}/>

              <input
                className="results_search_field date"
                type="text"
                onChange={this.handleChange}
                placeholder="End Date"
                defaultValue={this.props.searchParams.end_date}/>
          </form>

          <div className="results_listings">
          {listingsArray.map((element) => {
            return(<ResultItem
              listing={element}
              key={element.id + "-listing"}/>);
          })
          }
          </div>

          <div className="results_map">
            <ResultsMap/>
          </div>



      </div>
    );
  }

}

export default withRouter(Results)
