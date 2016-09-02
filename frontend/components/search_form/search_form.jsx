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
        criteria: criteria
      };
      this.props.onSearchClick(searchParams);
    };
    let query = {};
    query.address = e.currentTarget.form[0].value;
    GoogleGeocoding(query,success);
  }

handleChange (e) {
  let searchParams = {
    location: e.currentTarget.form[0].value,
    criteira: e.currentTarget.form[1].value
  };
  this.props.updateSearchParams(searchParams);
  console.log("handling change!");
}

  render() {

    return(
    <div>
      <div className="landingPage">
        <div className="search_form_container">
        <form className={"search_form"}>
              <input className="search_field" type="text" name="search[location]" placeholder="Where are you?" onChange={this.handleChange}></input>
              <input className="search_field" type="text" name="search[distance]" placeholder="Search area?" onChange={this.handleChange}></input>
          <span>
            <input className="search_submit" type="submit" onClick={this.handleClick} value="Find Your Car"></input>
          </span>
        </form>
        </div>
      </div>
      <SearchMap/>
    </div>
    );
  }

}

export default withRouter(SearchForm);
