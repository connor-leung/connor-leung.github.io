import { useState, useEffect } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import "./NavBar.css"

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

  const handleResume = () => {
    window.open("https://drive.google.com/file/d/1GyXQaNuuA8Q71N557TXbyG9LZI4-DcsU/view?usp=sharing", '_blank')
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
          <Navbar.Brand href="/">
          <div className='img-container'>
            <img src={logo} alt="Logo" className="logo"/>
          </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/connorleung/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/connor-leung"><img src={navIcon2} alt="" /></a>
                <a href="mailto:connor.leung@queensu.ca"><img src={navIcon3} alt="" /></a>
              </div>
              <button className="vvd" onClick={handleResume}><span>Résumé</span></button> 
          </span>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}