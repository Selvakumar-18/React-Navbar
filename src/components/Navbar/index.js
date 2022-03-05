import React from 'react'
import{Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink} from './NavbarElements';

const Navbar= () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars/>  
        <NavMenu>
          <NavLink to="/About" activeStyle>
          About
          </NavLink>

          <NavLink to="/Service" activeStyle>
          Service
          </NavLink>
        
          <NavLink to="/Contact" activeStyle>
          Contact Us
          </NavLink>

          <NavLink to="/Sign" activeStyle>
          Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign">Sign In</NavBtnLink>
        </NavBtn>
        
      </Nav>
    </>
  );
};
export default Navbar;
