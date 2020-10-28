import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <>
        <header>
        <Navbar bg="cyanlight" className="shadow navbar-dark" expand="lg">
            <NavLink to="/">
            <Navbar.Brand>React-User</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavLink className="nav-link" exact to="/">Home</NavLink>  
                  <NavLink className="nav-link" exact to="/about">About</NavLink>  
                  <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>  
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </header>
         
        </>
    )
}
