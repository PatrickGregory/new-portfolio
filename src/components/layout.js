import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <div className='fixed-top' style={{background:'#22222C'}}>
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto pe-5 me-5">
                    <Nav.Link href="#intro" className='text-white px-4'>Home</Nav.Link>
                    <Nav.Link href="#portfolio" className='text-white px-4'>Portfolio</Nav.Link>
                    <Nav.Link href="#experience" className='text-white px-4'>Experience</Nav.Link>
                    <Nav.Link href="#contact" className='text-white px-4'>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
    </div>
  );
}

export default Header;
