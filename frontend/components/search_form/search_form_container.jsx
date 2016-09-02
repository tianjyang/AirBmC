import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './search_form';
import { findListings, updateSearchParams } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  searchParams: state.searchParams
});

const mapDispatchToProps = (dispatch) => ({
  onSearchClick: (searchParams) => dispatch(findListings(searchParams)),
  updateSearchParams: (searchParams) => dispatch(updateSearchParams(searchParams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
