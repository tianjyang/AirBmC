import React from 'react';
import { connect } from 'react-redux';
import Show from './show';
import { requestListing,
        postReservation } from '../../actions/show_actions';
import { requestComments } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  title: state.currentListing.listingInfo.title,
  description: state.currentListing.listingInfo.description,
  imageUrl: state.currentListing.listingInfo.image_url,
  pricePerDay: state.currentListing.listingInfo.price_per_day,
  lat: state.currentListing.listingInfo.lat,
  long: state.currentListing.listingInfo.long,
  hostname: state.currentListing.listingInfo.username,
  mpg : state.currentListing.listingInfo.mpg,
  seating: state.currentListing.listingInfo.num_seats,
  makeModel: state.currentListing.listingInfo.make_model,
  comments: state.comments

});

const mapDispatchToProps = (dispatch) => ({
requestListing: (data) => {dispatch(requestListing(data));},
requestComments: (listingId) => {dispatch(requestComments(listingId));}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
