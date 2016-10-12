import React from 'react';
import { GoogleGeocoding } from '../../utils/search_ajax_util';

class HeaderSearch extends React.Component {
  constructor () {
    super();
    this.submitSearchLocation = this.submitSearchLocation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchTimer = null;
  }

  submitSearchLocation (e) {
    e.preventDefault();
    let success = (data) => {
          this.props.hashHistory.push("/results");
      let location = data.results[0].geometry.location;
      let searchParams = {
        location: location,
        distance: "",
        start_date: "",
        end_date: "",
      };
      this.props.onSearchClick(searchParams);
    };

    let query = {
      address: this.props.searchParams.location || "San Francisco"
    };
    query.address = this.props.searchParams.location || "San Francisco";
    GoogleGeocoding(query,success);


  }

  handleChange (e) {
    e.preventDefault();
    e.persist();
    let searchParams = {
      location: e.currentTarget.form[0].value,
    };
    this.props.updateSearchParams(searchParams);

    if (this.searchTimer) {
      window.clearTimeout(this.searchTimer);
      this.searchTimer = window.setTimeout(()=>{
        this.submitSearchLocation(e);
        this.searchTimer = null;
        },1000);
    } else {
      this.searchTimer = window.setTimeout(()=>{
        this.submitSearchLocation(e);
        this.searchTimer = null;
        },1000);
    }

  }



  changeTextToDate (e) {
    e.preventDefault();
  }

  render() {
    let formStyle = {
      "display":"inline-block"
    };

    let inputStyle = {
      "marginLeft" : "10px",
      "fontSize" : "20px",
      "fontWeight":"400",
      "border":"none",
      "width":"250px",
      "color":"#2B115A",
      "padding":"5px"

    };

    let iconStyle = {
      "marginLeft" : "10px"
    };

    return(
      <form style={formStyle}>
        <i className="material-icons" style={iconStyle}>search</i>
        <input type="text"
          onChange={this.handleChange}
          placeholder="Search Location"
          style={inputStyle}/>
      </form>
    );
  }

}

export default HeaderSearch;
