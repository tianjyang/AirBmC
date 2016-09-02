import React from 'react';
import { connect } from 'react-redux';
import Show from './show';
import { requestListing } from '../../actions/show_actions';

const mapStateToProps = (state) => ({
  title: state.currentListing.listingInfo.title,
  description: state.currentListing.listingInfo.description,
  image_url: state.currentListing.listingInfo.image_url
});

const mapDispatchToProps = (dispatch) => ({
requestListing: (data) => {dispatch(requestListing(data));}
requestComments:
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
