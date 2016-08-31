import React from "react";
import SessionContainer from "../session_form/session_form_container";

class Header extends React.Component {
  render(){
    return(
    <nav className="header">
      <div className="logo container">
        <img src={"http://res.cloudinary.com/drf8botsi/image/upload/v1472588478/1472354884_beetle_u25lae.png"}/>
      </div>

      <div className="sessionForm">
        <SessionContainer/>
      </div>

    </nav>
  );}
}

export default Header;
