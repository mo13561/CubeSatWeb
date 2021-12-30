import React, { useState, useEffect } from 'react';
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavPageLinks 
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({toggle}) => {
    const [scrollDown, setScrollDown] = useState(false);
    const onScroll = () => {
        if (window.scrollY >= 80) {
            setScrollDown(true);
        } else {
            setScrollDown(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, [])

    return (
        <>
            <Nav scrollNav={onScroll}>
                <NavbarContainer>
                    <NavLogo to="/">Polaris</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About Polaris</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavPageLinks to="data">Data</NavPageLinks>
                        </NavItem>
                        <NavItem>
                            <NavPageLinks to="graphs">Graphs</NavPageLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contactus">Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                    <NavBtnLink to="/bookings">Bookings</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>  
        </>
    )
}

export default Navbar
