import React from "react";
import SessionFormContainer from "../session_form/session_form_container";
import UserProfileContainer from "../user_profile/user_profile_container";
import { hashHistory } from 'react-router';
import HeaderSearchContainer from './header_search_container';

class Header extends React.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/")
  }


  render(){
    return(
    <nav className="header">
      <div className="header-span">
        <img className="logo" onClick={this.handleClick.bind(this)} src={"http://res.cloudinary.com/drf8botsi/image/upload/v1472588478/logo.png"}/>
        <HeaderSearchContainer hashHistory = { hashHistory }/>
        <SessionFormContainer hashHistory = { hashHistory }/>
      </div>
    </nav>
  );}
}

export default Header;
