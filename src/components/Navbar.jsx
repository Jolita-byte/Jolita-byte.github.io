// import React, { useState } from "react";
// import { useScrollPosition } from "../hooks/useScrollPosition";
// import useResizeObserver from "../hooks/useResizeObserver";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import { mainBody, repos, about, skills, experiences, educations, certifications } from "../editable-stuff/config.js";
// import { NavLink } from "./home/migration";

import React, { useState, useRef, useEffect } from "react";
import useResizeObserver from "../hooks/useResizeObserver";
import { useScrollPosition } from 'react-use';
import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, Nav, NavLink} from 'react-bootstrap';
import { mainBody, repos, about, skills, experiences, educations, certifications } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  // React.useEffect(() => {
  //   if (!navbarDimensions) return;
  //   navBottom - scrollPosition >= ref.current.offsetTop
  //     ? setIsTop(false)
  //     : setIsTop(true);
  // }, [navBottom, navbarDimensions, ref, scrollPosition]);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const closeMenuOnClickOutside = (event) => {
      if (!isMobileMenuOpen || ref.current.contains(event.target)) return;
      setIsMobileMenuOpen(false);
    };

    document.addEventListener('click', closeMenuOnClickOutside);

    return () => document.removeEventListener('click', closeMenuOnClickOutside);
  }, [isMobileMenuOpen, ref]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
          {repos.show && (

            <NavLink
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
          {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </NavLink>
          )}
          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </NavLink>
          )}
            {experiences.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#experience"}
            >
              Experiences
            </NavLink>
          )}
            {educations.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#education"}
            >
              Education
            </NavLink>
          )}
            {certifications.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#certification"}
            >
              Courses
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
