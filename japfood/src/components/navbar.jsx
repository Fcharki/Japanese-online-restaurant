import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {BrowserRouter as Router} from "react-router-dom";
import logo from '../assets/images/logo-tebemono.png';
import '../App.css';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="ms-auto  d-flex justify-content-end">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#menu" className={activeLink === 'menu' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('menu')}>Our Menu</Nav.Link>
              <Nav.Link href="#search" className={activeLink === 'search' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('search')}>Search Meal</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}