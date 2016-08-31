import React from "react";
import SessionContainer from "../session_form/session_form_container";

class Header extends React.Component {
  render(){
    return(
    <nav className="header">
        <img className="logo" src={"http://res.cloudinary.com/drf8botsi/image/upload/v1472588478/1472354884_beetle_u25lae.png"}/>


        <SessionContainer/>


    </nav>
  );}
}

export default Header;
