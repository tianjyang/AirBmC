import React from 'react';
import { connect } from 'react-redux';
import Results from './results';
import { findListings, updateSearchParams } from '../../actions/search_actions';
import { highlightMarker } from '../../actions/show_actions';


// import { findListings } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  listings: state.matchingCars,
  searchParams: state.searchParams,
  activeMarkerId: state.currentListing.potentialCarId,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchClick: (searchParams) => dispatch(findListings(searchParams)),
  updateSearchParams: (searchParams) => dispatch(updateSearchParams(searchParams)),
  highlightMarker: (id) => dispatch(highlightMarker(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
