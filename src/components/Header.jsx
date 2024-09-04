import React from "react";
import { NavLink } from "react-router-dom";

function Header() {

    return (
    <>

      <div id="smallContainer-1">
            <div id='box1'className='nav'> 
              <NavLink
                    to="/">
                    
                    Home
              </NavLink>
            </div>
            <div id='box2'className='nav'>CONTACT</div>
            <div id='box3'className='nav'>MENU</div>
            <div id='box4'className='nav'>FAVOURITES</div>
      </div>
    </>
    )

}

export default Header;