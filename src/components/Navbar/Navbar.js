import React, { useState } from 'react';
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink 
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="home">Polaris</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About Polaris</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="data">Data</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="graphs">Graphs</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contactus">Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtnLink to="/bookings">Bookings</NavBtnLink>
                </NavbarContainer>
            </Nav>  
        </>
    )
}

export default Navbar
