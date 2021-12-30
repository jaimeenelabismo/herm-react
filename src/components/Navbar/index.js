import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, 
    MoblieIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll/modules';
const Navbar = ({ toggle }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        dolla
                    </NavLogo>
                    <MoblieIcon onClick={toggle}>
                        <FaBars />
                    </MoblieIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" 
                                smooth={true} duration={500} spy={true} exact='true' offset={80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                                smooth={true} duration={500} spy={true} exact='true' offset={80}
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                                smooth={true} duration={500} spy={true} exact='true' offset={80}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="singup"
                                smooth={true} duration={500} spy={true} exact='true' offset={80}
                            >Sign UP</NavLinks>
                        </NavItem>

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
