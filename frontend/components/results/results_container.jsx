import React from 'react';
import { connect } from 'react-redux';
import Results from './results';

// import { findListings } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  listings: state.matchingCars
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
