import "./nav.css";
import React, { useState } from "react";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navcomponent() {
  const [expanded, setExpanded] = useState(false);

  const handleMenuItemClick = () => {
    setExpanded(false);
  };

  return (
    <div className="header">
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Navbar.Brand style={{ fontWeight: "bold" }}>
              <Link
                to="/german"
                className="custom-navbar"
                onClick={handleMenuItemClick}
              >
                STARRTSEITE
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className=" bg-light"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/german/about"
                  className="custom-navbar"
                  onClick={handleMenuItemClick}
                >
                  ÜBERMICH
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/german/contact"
                  className="custom-navbar"
                  onClick={handleMenuItemClick}
                >
                  KONTAKT
                </Link>
              </Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://github.com/Diouani1/react-group-project"
                  target="_blank"
                >
                  Lebenslaufproject
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://github.com/Diouani1/Friseur-Project"
                  target="_blank"
                >
                  Friseur
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://github.com/Diouani1/react-project"
                  target="_blank"
                >
                  kassenprojekt
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="custom-navbar">
                <Link to="/">
                  <span className="fi fi-gb"></span>
                </Link>
              </Nav.Link>
              <Nav.Link className="custom-navbar">
                <Link to="/arabic">
                  <span class="fi fi-eh"></span>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navcomponent;
