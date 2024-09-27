import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Header = ({ data }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="col-4">
          <img src={data.logo.fields.file.url} alt="Logo" style={{ width: '170px' }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {data.navigations.map((navItem, index) => {
              if (navItem.fields.menuItems) {
                return (
                  <NavDropdown title={navItem.fields.title} id={`nav-dropdown-${index}`} key={index}>
                    {navItem.fields.menuItems.products.map((product, productIndex) => (
                      <NavDropdown.Item href={product.url} key={productIndex}>
                        {product.title}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                );
              } else {
                return (
                  <Nav.Link href={`/${navItem.fields.title.toLowerCase()}`} key={index}>
                    {navItem.fields.title}
                  </Nav.Link>
                );
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
