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
    this.searchTimer = null;
    this.filterResults = this.filterResults.bind(this);
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

    $( "#price-range" ).slider({
      range: true,
      min: 10,
      max: 500,
      values: [ 10, 500 ],
      slide: function( event, ui ) {
        console.log(ui.values[0],ui.values[1]);
        $("#max_price_0").html(ui.values[0]);
        $("#max_price_1").html(ui.values[1]);
      }
    });

    $(".ui-slider-handle").each((index,element)=>{
      console.log("idx: ",index," element: ",element);
      $(element).append(`<p id='max_price_${index}'></p>`);
    });
  }


  componentWillUnmount () {
    $(window).off("scroll");
  }

  handleClick (e) {
    const criteria = e.target.form[1].value;
    let success = (data) => {
      let location = data.results[0].geometry.location;
      let searchParams = {
        location: location,
        start_date: e.target.form[1].value,
        end_date: e.target.form[2].value,
      };
      this.props.onSearchClick(searchParams);
    };
    let query = {};
    query.address = this.props.searchParams.location;
    GoogleGeocoding(query,success);

  }

  handleChange (e) {
    // e.preventDefault();
    e.persist();
    let searchParams = {
      location: e.currentTarget.form[0].value,
      start_date: e.currentTarget.form[1].value,
      end_date: e.currentTarget.form[2].value,
      num_seats: e.currentTarget.form[3].value,

    };
    this.props.updateSearchParams(searchParams);
    if (this.searchTimer) {
      window.clearTimeout(this.searchTimer);
      this.searchTimer = window.setTimeout(()=>{
        this.handleClick(e);
        this.searchTimer = null;
        },1000);
    } else {
      this.searchTimer = window.setTimeout(()=>{
        this.handleClick(e);
        this.searchTimer = null;
      },1000);
    }
  }

  filterResults(e) {
    let searchParams = {
      location: e.currentTarget.form[0].value,
      start_date: e.currentTarget.form[1].value,
      end_date: e.currentTarget.form[2].value,
      num_seats: e.currentTarget.form[3].value,
    };
    this.props.updateSearchParams(searchParams);
  }

  render() {

    // <input className="results_filter_field" type="text"
    //   style={{"width":"400px"}}
    //   name="search[location]" placeholder="Where are you?"
    //   defaultValue={this.props.searchParams.location}
    //   onChange={this.handleChange}/>

    // <select className="dropdown_filter">
    //   <option value="2">2 seats</option>
    //   <option value="3">3 seats</option>
    //   <option value="4">4 seats</option>
    //   <option value="5">5 seats</option>
    //   <option value="6">6 seats</option>
    //   <option value="7">7 seats</option>
    //   <option value="8">8 seats</option>
    // </select>

    let listingsArray = objToArray(this.props.listings);
    return(
      <div className="results_container">
          <h2 style={{"backgroundColor":"#008AC9","paddingLeft":"10px","paddingTop":"10px"}}><span>Your Trip to: </span>
          <span style={{"color":"white"}}>{this.props.searchParams.location}</span></h2>
          <form className={"results_filter_form"}>

            <input
              className="results_filter_field date"
              type="text"
              onChange={this.handleChange}
              placeholder="Start Date"
              defaultValue={this.props.searchParams.start_date}/>
            <input
              className="results_filter_field date"
              type="text"
              onChange={this.handleChange}
              placeholder="End Date"
              defaultValue={this.props.searchParams.end_date}/>

            <select className="results_filter_field dropdown_filter">
              <option value="2">2 seats</option>
              <option value="3">3 seats</option>
              <option value="4">4 seats</option>
              <option value="5">5 seats</option>
              <option value="6">6 seats</option>
              <option value="7">7 seats</option>
              <option value="8">8 seats</option>
            </select>


          </form>
          <div className="slider_container">
            <div id="price-range" style={{"width":"80%"}}></div>
          </div>
          <div className="results_listings">
          {listingsArray.map((element) => {
            return(<ResultItem
              listing={element}
              highlightMarker={this.props.highlightMarker}
              key={element.id + "-listing"}/>);
          })
          }
          </div>
          <br></br>
          <div className="results_map">
            <ResultsMap highlightedMarker = {this.props.activeMarkerId}/>
          </div>



      </div>
    );
  }

}

export default withRouter(Results)
