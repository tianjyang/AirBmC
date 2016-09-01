import React from 'react';
import { GoogleGeocoding } from '../../utils/search_ajax_util';


class SearchForm extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    const criteria = e.currentTarget.form[1].value;
    let success = (data) => {
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

  render() {

    return(
      <div className="landingPage">
        <div className="search_form_container">
        <form className={"search_form"}>
            <label>
              <input type="text" name="search[location]" placeholder="Where are you?"></input>
            </label>
            <label>
              <input type="text" name="search[distance]" placeholder="Distance in miles?"></input>
            </label>
          <span>
            <input type="submit" onClick={this.handleClick} value="Find Your Car"></input>
          </span>
        </form>
        </div>
      </div>

    );
  }

}

export default SearchForm
