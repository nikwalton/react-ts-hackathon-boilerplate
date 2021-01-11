import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'


function Navigation() {
  const NavStyle = {
    backgroundColor: '#222831'
  }

  const TextStyle = {
    color: 'white'
  }
  return (
    <>
      <Navbar className='fixed-top' expand='lg' style={NavStyle}>
        <Navbar.Brand href='#home' style={TextStyle}>TSHack</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='#about' style={TextStyle}>About</Nav.Link>
            <Nav.Link href='#schedule' style={TextStyle}>Schedule</Nav.Link>
            <Nav.Link href='#presenters' style={TextStyle}>Presenters</Nav.Link>
            <Nav.Link href='#sponsors' style={TextStyle}>Sponsors</Nav.Link>
            <Nav.Link href='#faq' style={TextStyle}>FAQ</Nav.Link>
            <Nav.Link href='#team' style={TextStyle}>Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>

  );
}
export default Navigation