import React from 'react';
import { Router, withRouter } from 'react-router';
import {SHOW_CONSTANTS, requestListing} from '../../actions/show_actions';
import NewReservationForm from '../new_reservation_form/new_reservation_form_container'

class Show extends React.Component {
  constructor () {
    super();
  }

  componentWillMount() {
    this.props.requestListing(this.props.params.id);

  }

  handleClick (e) {
    e.preventDefault();
  }

  render() {
    let currentPostingBG = {
      backgroundImage: 'url('+ this.props.image_url + ')',
      height: 500,
    }

    return(
      <div>
        <div style={currentPostingBG} className="listing-container">
          <div className="listing-title">{this.props.title}</div>
          <NewReservationForm listingId={this.props.params.id}/>
        </div>


      </div>
    );
  }

}

export default Show;
// export default withRouter(Show);
