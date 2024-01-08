import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../images/logo.png'
import Avatar from '../images/avatar.jpg'
import { LuBellDot } from "react-icons/lu";

function Header() {
    return (
        <>
            <Navbar expand="lg" className="m-0 p-0 header-bar" style={{ background: '#243263'}}>
                <Container fluid >
                    <Navbar.Brand className='ms-3 me-0' href="#"><img src={Logo} alt="" className='header-logo' /></Navbar.Brand>
                    <Navbar.Brand href="#" className='p-0 ms-0' style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem', border: '1px solid', fontFamily: "revert" }}>BID WINNER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '150px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" style={{ color: 'white' }} className='ms-4'>Dashboard</Nav.Link>
                            <Nav.Link href="#action1" style={{ color: 'white' }} className='ms-4'>Jobs</Nav.Link>
                            <Nav.Link href="#action1" style={{ color: 'white' }} className='ms-4'>Calendar</Nav.Link>
                            <Nav.Link href="#action1" style={{ color: 'white' }} className='ms-4'>Cast Catalog</Nav.Link>
                            <Nav.Link href="#action1" style={{ color: 'white' }} className='ms-4'>Database</Nav.Link>
                            <Nav.Link href="#action1" style={{ color: 'white' }} className='ms-4'>Tutorials</Nav.Link>
    
                        </Nav>
    
                        <div className='footer-bottom d-flex'>
                            <Dropdown className='me-3 d-flex flex-row p-1 m-0' style={{ border: '1px solid white', borderRadius: '5px', background: '#243263', width: 'fit-content' }} >
                                <div className='align-self-center text-light'>
                                    <h6 className='m-0 p-0'> Jhon David</h6>
                                    <small className='m-0 p-0'> johndavid@gmail.com</small>
                                </div>
                                <img
                                    className='align-self-center'
                                    style={{ borderRadius: "50%" }}
                                    width="40"
                                    src={Avatar} alt="" />
                                <Dropdown.Toggle style={{ background: '#243263' }}>
        
                                </Dropdown.Toggle>
        
                                <Dropdown.Menu style={{ zIndex: '1000' }}>
                                    <Dropdown.Item href="#/action-1">Add Account</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Add Guest</Dropdown.Item>
        
                                </Dropdown.Menu>
                            </Dropdown>
        
                            <Nav>
                                <LuBellDot className='mt-2' style={{ color: 'white', fontSize: '2rem', marginRight: '2rem' }} />
                            </Nav>
                        </div>
                    </Navbar.Collapse>
    
                </Container>
            </Navbar>
        </>
    )
}

export default Header