import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './search_form';
import { findListings } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onSearchClick: (searchParams) => dispatch(findListings(searchParams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
