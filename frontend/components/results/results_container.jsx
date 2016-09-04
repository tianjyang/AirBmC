import React from 'react';
import { connect } from 'react-redux';
import Results from './results';
import { findListings, updateSearchParams } from '../../actions/search_actions';

// import { findListings } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  listings: state.matchingCars,
  searchParams: state.searchParams
});

const mapDispatchToProps = (dispatch) => ({
  onSearchClick: (searchParams) => dispatch(findListings(searchParams)),
  updateSearchParams: (searchParams) => dispatch(updateSearchParams(searchParams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
