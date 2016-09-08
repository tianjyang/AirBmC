import React from 'react';
import { connect } from 'react-redux';
import NewReservationForm from './new_reservation_form';
import { postReservation } from '../../actions/show_actions';

const mapStateToProps = (state) => ({
  errors: state.reservationErrors,
  reservations: state.reservations,
  searchParams: state.searchParams
});

const mapDispatchToProps = (dispatch) => ({
  newReservation: (listingId,reservationInfo) => {dispatch(postReservation(listingId,reservationInfo));},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewReservationForm);
