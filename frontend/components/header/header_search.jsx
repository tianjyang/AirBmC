import React from 'react';
import { GoogleGeocoding } from '../../utils/search_ajax_util';

class HeaderSearch extends React.Component {
  constructor () {
    super();
    this.submitSearchLocation = this.submitSearchLocation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchTimer = null;
    this.preventDefault = this.preventDefault.bind(this);
  }

  preventDefault(event){
    event.preventDefault();
  }

  submitSearchLocation (e) {
    e.preventDefault();
    let success = (data) => {
          this.props.hashHistory.push("/results");
      let location = data.results[0].geometry.location;
      let formattedLocation = data.results[0].formatted_address;
      let searchParams = {
        location: location,
        distance: "",
        start_date: "",
        end_date: "",
      };
      this.props.onSearchClick(searchParams);
      let prettyLocation = {
        formatted_location: formattedLocation
      };
      this.props.updateSearchParams(prettyLocation);
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

    let spinnerStyle = {}

    if (this.searchTimer) {
      spinnerStyle["display"] = "inline-block"
    } else {
      spinnerStyle["display"] = "none"
    }

    return(
      <form style={formStyle}
        onSubmit={this.preventDefault}>
        <i className="material-icons" style={iconStyle}>search</i>
        <input type="text"
          onChange={this.handleChange}
          placeholder="Search Location"
          style={inputStyle}/>
        <div className="sk-three-bounce" style={spinnerStyle}>
          <div className="sk-child sk-bounce1"></div>
          <div className="sk-child sk-bounce2"></div>
          <div className="sk-child sk-bounce3"></div>
        </div>
      </form>
    );
  }

}

export default HeaderSearch;
