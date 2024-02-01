import React from 'react';
import './Nav.css'
import { Navbar, Nav } from 'react-bootstrap';
import Logo from './logo.png'

const NavBar = () => {  
  return (
    <div className="navBar">
    <Navbar  expand="lg">
      <Navbar.Brand href="#"><img src={Logo} height={100} width={100} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto navLinks">
          <div className="items">
          <Nav.Item >
            <Nav.Link style={{color:"white"}}  href="#">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{color:"white"}}  href="#">Features</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{color:"white"}} href="#">Pricing</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          
          <Nav.Link style={{color:"white"}}  href="#">Pricing</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          
          <Nav.Link style={{color:"white"}}  href="#">Pricing</Nav.Link>
          </Nav.Item>
          </div>
          <div className="navIcons">
          <i class="ri-search-line"></i>
          <i class="ri-user-3-fill"></i>
          <i class="ri-shopping-cart-fill"></i>

          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default NavBar;
