import React from 'react';
import { connect } from 'react-redux';
import Show from './show';
import { requestListing,
  requestComments,
  postReservation } from '../../actions/show_actions';

const mapStateToProps = (state) => ({
  title: state.currentListing.listingInfo.title,
  description: state.currentListing.listingInfo.description,
  imageUrl: state.currentListing.listingInfo.image_url,
  pricePerDay: state.currentListing.listingInfo.price_per_day,
  lat: state.currentListing.listingInfo.lat,
  long: state.currentListing.listingInfo.long,
  hostname: state.currentListing.listingInfo.username

});

const mapDispatchToProps = (dispatch) => ({
requestListing: (data) => {dispatch(requestListing(data));},
requestComments: (data) => {dispatch(requestComments(data));}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
