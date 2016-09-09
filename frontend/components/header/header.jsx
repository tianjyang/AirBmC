import React from "react";
import SessionFormContainer from "../session_form/session_form_container";
import UserProfileContainer from "../user_profile/user_profile_container";

class Header extends React.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/");
  }


  render(){
    return(
    <nav className="header">
      <div className="header-span">
        <img className="logo" onClick={this.handleClick.bind(this)} src={"http://res.cloudinary.com/drf8botsi/image/upload/v1472588478/logo.png"}/>
        <UserProfileContainer history={this.props.history}/>
        <SessionFormContainer/>
      </div>

      <div id="new_listing_modal">
        <div className="new_listing_form_container">
          <form>
            <label className="listing_form_input">
              Listing Title<br/>
            <input
              type="text">
            </input>
            </label>

            <label className="listing_form_input">
              Description<br/>
            <textarea
              rows="4"
              cols="40"></textarea>
            </label>

            <label className="listing_form_input">
              Make and Model<br/>
            <input
              type="text">
            </input>
            </label>

            <label className="listing_form_input">
              Price Per Day<br/>
            <input
              type="text">
            </input>
            </label>

            <label className="listing_form_input">
              Address<br/>
            <input
              type="text">
            </input>
            </label>

            <label className="listing_form_input">
              Number of Seats<br/>
            <input
              type="text">
            </input>
            </label>

            <label className="listing_form_input">
              MPG<br/>
            <input
              type="text">
            </input>
            <br/>
            <a href="#">Attach Image</a>
            </label>

            <input type="submit" className="listing_form_input" onClick={this.handleClick}/>
          </form>
        </div>
      </div>
    </nav>
  );}
}

export default Header;
