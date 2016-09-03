import React from "react";
import SessionFormContainer from "../session_form/session_form_container";

class Header extends React.Component {
  render(){
    return(
    <nav className="header">
      <div className="header-span">


        <img className="logo" src={"http://res.cloudinary.com/drf8botsi/image/upload/v1472588478/logo.png"}/>

        <SessionFormContainer/>
      </div>

    </nav>
  );}
}

export default Header;
