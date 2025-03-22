import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function PannelNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-secondary" style={{zIndex:100}}>
      <Container>
        <Navbar.Brand href="#home">نمایش خانگی</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="کاربر" className='text-center' id="basic-nav-dropdown">
            <NavDropdown.Item>ورود</NavDropdown.Item>
            <NavDropdown.Item>ثبت نام</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PannelNavbar;