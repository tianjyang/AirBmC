import React from 'react';
import { connect } from 'react-redux';
import Show from './show';
import { requestListing } from '../../actions/show_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
requestListing: (data) => {dispatch(requestListing(data));}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
