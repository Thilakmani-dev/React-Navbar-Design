import React from 'react'
import {Nav,NavLink,NavMenu,NavBtn,Bars,NavBtnLink} from './Navbar';
import logo from '../../images/programming.svg';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <img src={logo} alt="logo" width="35px" height="35px"/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>About</NavLink>
                <NavLink to="/services" activeStyle>Services</NavLink>
                <NavLink to="/contact-us" activeStyle>Contact Us</NavLink>
                <NavLink to="/sign-up" activeStyle>Sign Up</NavLink>
           </NavMenu>
            <NavBtn>
                <NavBtnLink to="/contact-us">Book</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar
