import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  //NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import "./../../App.css";
import { Link } from 'react-router-dom'

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer className='bg-black' id='navbbar'>
          <NavLogo to="/">
            <h1 className="logo-text">DMA Campaign</h1>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Link className='menulink' to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className='menulink' to="/drmusa">Meet Dr. Musa</Link>
            </NavItem>
            <NavItem>
              <Link className='menulink' to="/news">News</Link>
            </NavItem>
            <NavItem>
              <Link className='menulink' to="/projects">Projects</Link>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to={{ pathname: "https://www.airfunding.net/s/8c180e9b-148b-4e59-9b75-4a0867b2c49b" }} target="_blank">Donate</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
