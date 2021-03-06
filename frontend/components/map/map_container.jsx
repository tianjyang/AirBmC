import React from 'react';
import { connect } from 'react-redux';
import Map from './map';
import { searchByBounds } from '../../actions/search_actions';


const mapStateToProps = (state) => ({
  listings: state.matchingCars,
  startDate: state.searchParams.start_date,
  enddate: state.searchParams.end_date
});

const mapDispatchToProps = (dispatch) => ({
  searchByBounds: (searchParams) => dispatch(searchByBounds(searchParams));
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
