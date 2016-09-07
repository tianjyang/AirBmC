import React from 'react';
import { GoogleGeocoding } from '../../utils/search_ajax_util';
import { withRouter } from 'react-router';
import SearchMap from '../map/map';

class SearchForm extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    const criteria = e.currentTarget.form[1].value;
    let success = (data) => {
          this.props.router.push("/results");
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
      end_date: e.currentTarget.form[3].value
    };
    this.props.updateSearchParams(searchParams);
  }

  changeTextToDate (e) {
    e.preventDefault();
    e.currentTarget.setAttribute('type','date');
  }

  render() {

    return(
      <div className="landingPage">
        <span className="title-container">
          DRIVE THERE
        </span>
        <span className="subtitle-container">
          Find and rent local cars from your neighbors
        </span>
        <div className="search_form_container">
        <form className={"search_form"}>
              <input
                className="search_field"
                type="text"
                name="search[location]"
                onChange={this.handleChange}
                placeholder="Where are you?"/>

              <input
                className="search_field"
                type="text" name="search[distance]"
                onChange={this.handleChange}
                placeholder="Search distance?"/>

              <div className="date_container">
              <input
                className="search_field date"
                type="text"
                onFocus={this.changeTextToDate}
                onChange={this.handleChange}
                placeholder="Start Date"/>

              <input
                className="search_field date"
                type="text"
                onFocus={this.changeTextToDate}
                onChange={this.handleChange}
                placeholder="end date"/>
              </div>
          <span>
            <input className="search_submit" type="submit" onClick={this.handleClick} value="Find Your Car"></input>
          </span>
        </form>
        </div>
      </div>
    );
  }

}

export default withRouter(SearchForm);
