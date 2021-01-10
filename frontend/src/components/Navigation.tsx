import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


function Navigation() {
  return (
    <div>
       <Navbar bg='light' expand='md'>
            <Navbar.Brand href='#home'>TSHack</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link href='#about'>About</Nav.Link>
                    <Nav.Link href='#schedule'>Schedule</Nav.Link>
                    <Nav.Link href='#presenters'>Presenters</Nav.Link>
                    <Nav.Link href='#sponsors'>Sponsors</Nav.Link>
                    <Nav.Link href='#faq'>FAQ</Nav.Link>
                    <Nav.Link href='#team'>Team</Nav.Link>
                </Nav>
            </Navbar.Collapse>
       </Navbar>
    </div>
  );
}
export default Navigation